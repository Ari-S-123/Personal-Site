import { describe, expect, it } from "vitest";
import { createSearchId, rankItems } from "$lib/search/rank";
import type { SemanticIndexEntry } from "$lib/types";

type ProjectLike = {
  name: string;
  description: string;
  techStack?: Array<{ name: string }>;
};

function createIndexEntry(id: string, title: string, embedding: number[]): SemanticIndexEntry {
  return {
    id,
    kind: "project",
    title,
    searchText: title.toLowerCase(),
    keywords: [],
    embedding
  };
}

describe("rankItems", () => {
  it("prioritizes lexical relevance over semantic-only relevance", () => {
    const items: ProjectLike[] = [
      {
        name: "Agent Copilot",
        description: "Streamlines coding workflows for teams."
      },
      {
        name: "Planning Board",
        description: "Tracks roadmap milestones."
      }
    ];

    const itemAId = createSearchId("project", items[0]!.name);
    const itemBId = createSearchId("project", items[1]!.name);

    const semanticIndexById = new Map<string, SemanticIndexEntry>([
      [itemAId, createIndexEntry(itemAId, items[0]!.name, [0, 1])],
      [itemBId, createIndexEntry(itemBId, items[1]!.name, [1, 0])]
    ]);

    const results = rankItems(
      items,
      "agent copilot",
      (item) => [item.name, item.description],
      (item) => createSearchId("project", item.name),
      semanticIndexById,
      [1, 0]
    );

    expect(results).toHaveLength(2);
    expect(results[0]?.item.name).toBe("Agent Copilot");
  });

  it("returns semantic matches when lexical matches are absent", () => {
    const items: ProjectLike[] = [
      {
        name: "Analytics Console",
        description: "Visual dashboards for operations."
      },
      {
        name: "Workflow Studio",
        description: "Build and orchestrate autonomous pipelines."
      }
    ];

    const itemAId = createSearchId("project", items[0]!.name);
    const itemBId = createSearchId("project", items[1]!.name);

    const semanticIndexById = new Map<string, SemanticIndexEntry>([
      [itemAId, createIndexEntry(itemAId, items[0]!.name, [0, 1])],
      [itemBId, createIndexEntry(itemBId, items[1]!.name, [1, 0])]
    ]);

    const results = rankItems(
      items,
      "agent collaboration",
      (item) => [item.name, item.description],
      (item) => createSearchId("project", item.name),
      semanticIndexById,
      [1, 0]
    );

    expect(results).toHaveLength(1);
    expect(results[0]?.item.name).toBe("Workflow Studio");
    expect(results[0]?.semanticScore).toBeGreaterThan(0.9);
  });

  it("uses lexical-only ranking for short queries", () => {
    const items: ProjectLike[] = [
      {
        name: "Platform Tools",
        description: "Team enablement utilities."
      }
    ];

    const itemId = createSearchId("project", items[0]!.name);
    const semanticIndexById = new Map<string, SemanticIndexEntry>([
      [itemId, createIndexEntry(itemId, items[0]!.name, [1, 0])]
    ]);

    const results = rankItems(
      items,
      "ai",
      (item) => [item.name, item.description],
      (item) => createSearchId("project", item.name),
      semanticIndexById,
      [1, 0]
    );

    expect(results).toHaveLength(0);
  });
});
