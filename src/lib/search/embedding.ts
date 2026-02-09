export const SEMANTIC_EMBEDDING_DIMENSION = 192;
export const SEMANTIC_MIN_QUERY_LENGTH = 3;

const ALPHANUMERIC_PATTERN = /[^a-z0-9\s]/g;

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "in",
  "into",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "with"
]);

const SYNONYM_MAP: Record<string, string[]> = {
  ai: ["artificial", "intelligence", "agent"],
  app: ["application", "software", "platform"],
  assistant: ["agent", "copilot", "helper"],
  backend: ["server", "api"],
  chat: ["conversation", "messaging"],
  ci: ["pipeline", "automation", "testing"],
  devops: ["deployment", "infrastructure", "operations"],
  frontend: ["ui", "interface", "client"],
  ml: ["machine", "learning", "model"],
  nlp: ["language", "text", "model"],
  realtime: ["live", "streaming", "instant"],
  search: ["discovery", "retrieval", "lookup"],
  semantically: ["conceptually", "meaningfully"],
  semantic: ["conceptual", "meaning"],
  testing: ["tests", "quality", "validation"],
  visualization: ["dataviz", "charts", "graph"],
  workflow: ["pipeline", "orchestration", "automation"]
};

function stemToken(token: string): string {
  if (token.length <= 4) {
    return token;
  }

  if (token.endsWith("ing") && token.length > 6) {
    return token.slice(0, -3);
  }

  if (token.endsWith("ed") && token.length > 5) {
    return token.slice(0, -2);
  }

  if (token.endsWith("es") && token.length > 5) {
    return token.slice(0, -2);
  }

  if (token.endsWith("s") && token.length > 4) {
    return token.slice(0, -1);
  }

  return token;
}

function fnv1aHash(value: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function generateCharacterNgrams(token: string): string[] {
  if (token.length <= 3) {
    return [token];
  }

  const ngrams: string[] = [];
  for (let i = 0; i <= token.length - 3; i += 1) {
    ngrams.push(token.slice(i, i + 3));
  }
  return ngrams;
}

export function normalizeSearchText(text: string): string {
  return text.toLowerCase().replace(ALPHANUMERIC_PATTERN, " ").replace(/\s+/g, " ").trim();
}

export function tokenize(text: string): string[] {
  if (!text) {
    return [];
  }

  const tokens = normalizeSearchText(text)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token))
    .map(stemToken);

  const expanded = new Set<string>();

  for (const token of tokens) {
    expanded.add(token);

    const synonyms = SYNONYM_MAP[token];
    if (synonyms) {
      for (const synonym of synonyms) {
        expanded.add(stemToken(synonym));
      }
    }
  }

  return [...expanded];
}

export function l2Normalize(values: number[]): number[] {
  const magnitude = Math.sqrt(values.reduce((acc, value) => acc + value * value, 0));
  if (magnitude === 0) {
    return values.map(() => 0);
  }
  return values.map((value) => value / magnitude);
}

export function createSemanticEmbedding(text: string, dimension = SEMANTIC_EMBEDDING_DIMENSION): number[] {
  const vector = new Array<number>(dimension).fill(0);
  const tokens = tokenize(text);

  for (const token of tokens) {
    const tokenHash = fnv1aHash(token);
    const indexPrimary = tokenHash % dimension;
    const indexSecondary = fnv1aHash(`secondary:${token}`) % dimension;
    const sign = fnv1aHash(`sign:${token}`) % 2 === 0 ? 1 : -1;

    vector[indexPrimary] = (vector[indexPrimary] ?? 0) + 1;
    vector[indexSecondary] = (vector[indexSecondary] ?? 0) + sign * 0.5;

    const ngrams = generateCharacterNgrams(token);
    for (const ngram of ngrams) {
      const ngramIndex = fnv1aHash(`ngram:${ngram}`) % dimension;
      vector[ngramIndex] = (vector[ngramIndex] ?? 0) + 0.2;
    }
  }

  return l2Normalize(vector);
}

export function cosineSimilarity(a: number[] | null, b: number[] | null): number {
  if (!a || !b || a.length !== b.length) {
    return 0;
  }

  let dotProduct = 0;
  for (let i = 0; i < a.length; i += 1) {
    dotProduct += (a[i] ?? 0) * (b[i] ?? 0);
  }
  return dotProduct;
}
