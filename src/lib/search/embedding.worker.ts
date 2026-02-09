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
  const { requestId, query } = event.data;

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
