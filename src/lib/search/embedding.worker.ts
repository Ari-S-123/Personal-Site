/// <reference lib="webworker" />

import { createSemanticEmbedding, normalizeSearchText } from "./embedding";

type WorkerQueryMessage = {
  requestId: number;
  query: string;
};

type WorkerResponseMessage =
  | {
      requestId: number;
      embedding: number[];
    }
  | {
      requestId: number;
      error: string;
    };

function isWorkerQueryMessage(data: unknown): data is WorkerQueryMessage {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const candidate = data as Partial<WorkerQueryMessage>;
  return (
    typeof candidate.requestId === "number" &&
    Number.isFinite(candidate.requestId) &&
    Number.isInteger(candidate.requestId) &&
    candidate.requestId >= 0 &&
    typeof candidate.query === "string"
  );
}

function isTrustedMessageOrigin(origin: unknown, workerOrigin: unknown = self.location?.origin): boolean {
  if (typeof origin !== "string" || origin === "" || origin === "null") {
    return true;
  }

  if (typeof workerOrigin !== "string" || workerOrigin === "" || workerOrigin === "null") {
    return true;
  }

  return origin === workerOrigin;
}

type MessageEventLike = Pick<MessageEvent<unknown>, "data" | "origin">;

export function handleWorkerMessage(
  event: MessageEventLike,
  postMessage: (message: WorkerResponseMessage) => void = (message) => self.postMessage(message),
  workerOrigin: unknown = self.location?.origin
): void {
  const data = event.data;
  // For worker messaging, enforce same-origin (or opaque) sender plus strict payload validation.
  if (!isTrustedMessageOrigin(event.origin, workerOrigin) || !isWorkerQueryMessage(data)) {
    return;
  }

  const { requestId, query } = data;

  try {
    const normalizedQuery = normalizeSearchText(query);
    const embedding = createSemanticEmbedding(normalizedQuery);
    const response: WorkerResponseMessage = {
      requestId,
      embedding
    };
    postMessage(response);
  } catch (error) {
    const response: WorkerResponseMessage = {
      requestId,
      error: error instanceof Error ? error.message : "Unable to generate semantic embedding."
    };
    postMessage(response);
  }
}

export type { WorkerQueryMessage, WorkerResponseMessage };

self.onmessage = (event: MessageEvent<WorkerQueryMessage>) => {
  handleWorkerMessage(event);
};
