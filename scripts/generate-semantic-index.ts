import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { experiences, projects } from "../src/lib/data";
import { getExperienceSearchFields, getProjectSearchFields } from "../src/lib/filters";
import { createSemanticEmbedding, normalizeSearchText, tokenize } from "../src/lib/search/embedding";
import { createSearchId } from "../src/lib/search/rank";
import type { SemanticIndexEntry } from "../src/lib/types";

function buildEntry(
  kind: "experience" | "project",
  title: string,
  searchableFields: string[],
  techStackNames: string[]
): SemanticIndexEntry {
  const searchText = normalizeSearchText([...searchableFields, ...techStackNames].join(" "));

  return {
    id: createSearchId(kind, title),
    kind,
    title,
    searchText,
    keywords: tokenize(searchText),
    embedding: createSemanticEmbedding(searchText)
  };
}

async function main(): Promise<void> {
  const entries: SemanticIndexEntry[] = [
    ...experiences.map((experience) =>
      buildEntry(
        "experience",
        experience.title,
        getExperienceSearchFields(experience),
        experience.techStack.map((tech) => tech.name)
      )
    ),
    ...projects.map((project) =>
      buildEntry(
        "project",
        project.name,
        getProjectSearchFields(project),
        project.techStack.map((tech) => tech.name)
      )
    )
  ].sort((a, b) => a.id.localeCompare(b.id));

  const outputPath = resolve(process.cwd(), "src/lib/data/semantic-index.json");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(entries, null, 2)}\n`, "utf-8");

  // eslint-disable-next-line no-console
  console.log(`Generated ${entries.length} semantic index entries at ${outputPath}.`);
}

void main();
