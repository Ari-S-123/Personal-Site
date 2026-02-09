import { cosineSimilarity, normalizeSearchText, SEMANTIC_MIN_QUERY_LENGTH, tokenize } from "./embedding";
import type { SemanticIndexEntry } from "../types";

export type RankedSearchResult<T> = {
  item: T;
  score: number;
  lexicalScore: number;
  semanticScore: number;
};

type TechStackItem = {
  name: string;
};

type RankableItem = {
  techStack?: TechStackItem[];
};

type RankingOptions = {
  lexicalWeight?: number;
  semanticWeight?: number;
  semanticThreshold?: number;
};

const DEFAULT_OPTIONS: Required<RankingOptions> = {
  lexicalWeight: 0.7,
  semanticWeight: 0.3,
  semanticThreshold: 0.2
};

export function createSearchId(kind: "experience" | "project", value: string): string {
  const slug = normalizeSearchText(value).replace(/\s+/g, "-");
  return `${kind}:${slug}`;
}

function calculateLexicalScore<T extends RankableItem>(item: T, searchableFields: string[], query: string): number {
  if (!query) {
    return 1;
  }

  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    return 1;
  }

  const normalizedFields = searchableFields.map((field) => normalizeSearchText(field));
  const combinedFields = normalizedFields.join(" ");
  const techStackTerms = item.techStack?.map((tech) => normalizeSearchText(tech.name)) ?? [];
  const tokens = tokenize(normalizedQuery);

  let score = 0;

  if (combinedFields.includes(normalizedQuery)) {
    score += 0.45;
  }

  const title = normalizedFields[0] ?? "";
  if (title.includes(normalizedQuery)) {
    score += 0.2;
  }

  for (const token of tokens) {
    if (combinedFields.includes(token)) {
      score += 0.12;
    }

    if (techStackTerms.some((tech) => tech === token)) {
      score += 0.1;
      continue;
    }

    if (techStackTerms.some((tech) => tech.includes(token))) {
      score += 0.06;
    }
  }

  return Math.min(score, 1);
}

export function rankItems<T extends RankableItem>(
  items: T[],
  query: string,
  getSearchFields: (item: T) => string[],
  getId: (item: T) => string,
  semanticIndexById: ReadonlyMap<string, SemanticIndexEntry>,
  queryEmbedding: number[] | null,
  options?: RankingOptions
): RankedSearchResult<T>[] {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) {
    return items.map((item) => ({
      item,
      score: 1,
      lexicalScore: 1,
      semanticScore: 0
    }));
  }

  return items
    .map((item, index) => {
      const lexicalScore = calculateLexicalScore(item, getSearchFields(item), normalizedQuery);
      const indexEntry = semanticIndexById.get(getId(item));
      const semanticScore =
        normalizedQuery.length >= SEMANTIC_MIN_QUERY_LENGTH && queryEmbedding && indexEntry
          ? cosineSimilarity(indexEntry.embedding, queryEmbedding)
          : 0;

      if (lexicalScore <= 0 && semanticScore < mergedOptions.semanticThreshold) {
        return null;
      }

      const score = lexicalScore * mergedOptions.lexicalWeight + semanticScore * mergedOptions.semanticWeight;

      return {
        item,
        score,
        lexicalScore,
        semanticScore,
        index
      };
    })
    .filter(
      (result): result is { item: T; score: number; lexicalScore: number; semanticScore: number; index: number } =>
        Boolean(result)
    )
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      if (b.lexicalScore !== a.lexicalScore) {
        return b.lexicalScore - a.lexicalScore;
      }

      return a.index - b.index;
    })
    .map(({ item, score, lexicalScore, semanticScore }) => ({
      item,
      score,
      lexicalScore,
      semanticScore
    }));
}
