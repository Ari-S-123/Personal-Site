import { describe, expect, it, vi } from "vitest";
import { SEMANTIC_EMBEDDING_DIMENSION } from "$lib/search/embedding";
import { handleWorkerMessage } from "$lib/search/embedding.worker";
import type { WorkerResponseMessage } from "$lib/search/embedding.worker";

function getPostedMessage(mock: ReturnType<typeof vi.fn>): WorkerResponseMessage {
  const firstCall = mock.mock.calls[0];
  if (!firstCall || !firstCall[0]) {
    throw new Error("Expected worker response to be posted.");
  }
  return firstCall[0] as WorkerResponseMessage;
}

describe("handleWorkerMessage", () => {
  it("processes valid payloads from trusted origins", () => {
    const postMessage = vi.fn<(message: WorkerResponseMessage) => void>();
    const trustedOrigin = globalThis.location?.origin ?? "null";

    handleWorkerMessage(
      {
        data: {
          requestId: 7,
          query: "Semantic Query"
        },
        origin: trustedOrigin
      } as MessageEvent<unknown>,
      postMessage
    );

    expect(postMessage).toHaveBeenCalledTimes(1);
    const response = getPostedMessage(postMessage);
    expect(response).toMatchObject({ requestId: 7 });
    expect("error" in response).toBe(false);
    if (!("embedding" in response)) {
      throw new Error("Expected embedding response");
    }

    expect(Array.isArray(response.embedding)).toBe(true);
    expect(response.embedding).toHaveLength(SEMANTIC_EMBEDDING_DIMENSION);
    expect(response.embedding.every((value) => typeof value === "number" && Number.isFinite(value))).toBe(true);
  });

  it("ignores payloads from untrusted origins", () => {
    const postMessage = vi.fn<(message: WorkerResponseMessage) => void>();

    handleWorkerMessage(
      {
        data: {
          requestId: 1,
          query: "valid query"
        },
        origin: "https://attacker.example"
      } as MessageEvent<unknown>,
      postMessage
    );

    expect(postMessage).not.toHaveBeenCalled();
  });

  it("ignores malformed payloads", () => {
    const postMessage = vi.fn<(message: WorkerResponseMessage) => void>();
    const invalidPayloads: unknown[] = [
      null,
      undefined,
      "message",
      123,
      {},
      { requestId: "1", query: "test" },
      { requestId: NaN, query: "test" },
      { requestId: 1.5, query: "test" },
      { requestId: -1, query: "test" },
      { requestId: 1, query: 100 },
      { requestId: 1, query: null }
    ];

    for (const payload of invalidPayloads) {
      handleWorkerMessage({ data: payload } as MessageEvent<unknown>, postMessage);
    }

    expect(postMessage).not.toHaveBeenCalled();
  });
});
