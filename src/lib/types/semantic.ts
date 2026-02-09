export type SemanticIndexKind = "experience" | "project";

export type SemanticIndexEntry = {
  id: string;
  kind: SemanticIndexKind;
  title: string;
  searchText: string;
  keywords: string[];
  embedding: number[];
};
