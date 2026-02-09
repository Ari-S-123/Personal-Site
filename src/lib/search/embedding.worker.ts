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

self.onmessage = (event: MessageEvent<WorkerQueryMessage>) => {
  // Validate origin when available to avoid processing messages from unexpected sources.
  // In many worker environments, `origin` may be "null" or an empty string; adjust as needed.
  if (typeof (event as MessageEvent).origin === "string") {
    const origin = (event as MessageEvent).origin;
    // Allow only expected origins; here we conservatively accept same-origin/opaque ("null").
    if (origin && origin !== "null") {
      return;
    }
  }

  // Validate the structure of the incoming data before using it.
  const data = event.data as unknown;
  if (
    typeof data !== "object" ||
    data === null ||
    typeof (data as any).requestId !== "number" ||
    typeof (data as any).query !== "string"
  ) {
    return;
  }

  const { requestId, query } = data as WorkerQueryMessage;

  try {
    const normalizedQuery = normalizeSearchText(query);
    const embedding = createSemanticEmbedding(normalizedQuery);
    const response: WorkerResponseMessage = {
      requestId,
      embedding
    };
    self.postMessage(response);
  } catch (error) {
    const response: WorkerResponseMessage = {
      requestId,
      error: error instanceof Error ? error.message : "Unable to generate semantic embedding."
    };
    self.postMessage(response);
  }
};

export type { WorkerQueryMessage, WorkerResponseMessage };
