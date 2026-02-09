import { describe, expect, it } from "vitest";
import { createSemanticClient } from "$lib/search/semantic-client";
import type { WorkerResponseMessage } from "$lib/search/embedding.worker";

class MockWorker {
  onmessage: ((event: MessageEvent<WorkerResponseMessage>) => void) | null = null;
  public postedMessages: Array<{ requestId: number; query: string }> = [];
  public terminated = false;

  postMessage(message: { requestId: number; query: string }): void {
    this.postedMessages.push(message);
  }

  terminate(): void {
    this.terminated = true;
  }

  emitResponse(response: WorkerResponseMessage): void {
    this.onmessage?.({ data: response } as MessageEvent<WorkerResponseMessage>);
  }
}

describe("createSemanticClient", () => {
  it("resolves embeddings from worker responses", async () => {
    const worker = new MockWorker();
    const client = createSemanticClient({
      workerFactory: () => worker
    });

    const embeddingPromise = client.embedQuery("semantic query");
    const firstMessage = worker.postedMessages[0];
    expect(firstMessage).toBeDefined();

    worker.emitResponse({
      requestId: firstMessage!.requestId,
      embedding: [0.2, 0.8]
    });

    await expect(embeddingPromise).resolves.toEqual([0.2, 0.8]);

    client.destroy();
    expect(worker.terminated).toBe(true);
  });

  it("reuses cached query embeddings and avoids duplicate worker calls", async () => {
    const worker = new MockWorker();
    const client = createSemanticClient({
      workerFactory: () => worker
    });

    const firstPromise = client.embedQuery("agent workflow");
    const firstMessage = worker.postedMessages[0];
    expect(firstMessage).toBeDefined();

    worker.emitResponse({
      requestId: firstMessage!.requestId,
      embedding: [1, 0]
    });

    await expect(firstPromise).resolves.toEqual([1, 0]);

    const second = await client.embedQuery("agent workflow");
    expect(second).toEqual([1, 0]);
    expect(worker.postedMessages).toHaveLength(1);
  });

  it("rejects when the worker reports an error", async () => {
    const worker = new MockWorker();
    const client = createSemanticClient({
      workerFactory: () => worker
    });

    const embeddingPromise = client.embedQuery("failing query");
    const firstMessage = worker.postedMessages[0];
    expect(firstMessage).toBeDefined();

    worker.emitResponse({
      requestId: firstMessage!.requestId,
      error: "worker failed"
    });

    await expect(embeddingPromise).rejects.toThrow("worker failed");
  });
});
