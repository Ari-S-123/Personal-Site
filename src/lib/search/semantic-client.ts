import { createSemanticEmbedding, normalizeSearchText } from "./embedding";
import type { WorkerQueryMessage, WorkerResponseMessage } from "./embedding.worker";

type WorkerLike = Pick<Worker, "postMessage" | "terminate"> & {
  onmessage: ((event: MessageEvent<WorkerResponseMessage>) => void) | null;
};

type SemanticClientOptions = {
  workerFactory?: () => WorkerLike;
};

type PendingRequest = {
  resolve: (embedding: number[]) => void;
  reject: (error: Error) => void;
};

export type SemanticClient = {
  embedQuery: (query: string) => Promise<number[]>;
  destroy: () => void;
};

function createDefaultWorker(): WorkerLike | null {
  if (typeof Worker === "undefined") {
    return null;
  }

  return new Worker(new URL("./embedding.worker.ts", import.meta.url), { type: "module" });
}

export function createSemanticClient(options?: SemanticClientOptions): SemanticClient {
  const cache = new Map<string, number[]>();
  const pendingRequests = new Map<number, PendingRequest>();
  const worker = options?.workerFactory?.() ?? createDefaultWorker();
  let nextRequestId = 0;

  if (worker) {
    worker.onmessage = (event: MessageEvent<WorkerResponseMessage>) => {
      const message = event.data;
      const pendingRequest = pendingRequests.get(message.requestId);

      if (!pendingRequest) {
        return;
      }

      pendingRequests.delete(message.requestId);

      if ("error" in message) {
        pendingRequest.reject(new Error(message.error));
        return;
      }

      pendingRequest.resolve(message.embedding);
    };
  }

  async function embedQuery(query: string): Promise<number[]> {
    const normalizedQuery = normalizeSearchText(query);
    if (!normalizedQuery) {
      return [];
    }

    const cachedEmbedding = cache.get(normalizedQuery);
    if (cachedEmbedding) {
      return cachedEmbedding;
    }

    if (!worker) {
      const fallbackEmbedding = createSemanticEmbedding(normalizedQuery);
      cache.set(normalizedQuery, fallbackEmbedding);
      return fallbackEmbedding;
    }

    return new Promise<number[]>((resolve, reject) => {
      const requestId = nextRequestId;
      nextRequestId += 1;

      pendingRequests.set(requestId, { resolve, reject });

      const message: WorkerQueryMessage = {
        requestId,
        query: normalizedQuery
      };
      worker.postMessage(message);
    }).then((embedding) => {
      cache.set(normalizedQuery, embedding);
      return embedding;
    });
  }

  function destroy(): void {
    for (const request of pendingRequests.values()) {
      request.reject(new Error("Semantic client destroyed before request completion."));
    }
    pendingRequests.clear();
    worker?.terminate();
  }

  return {
    embedQuery,
    destroy
  };
}
