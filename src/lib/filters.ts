/**
 * Utility functions for filtering searchable items.
 * @module lib/filters
 */

import { normalizeSearchText, tokenize } from "./search/embedding";

/**
 * Type representing an experience item with searchable fields.
 */
export type Experience = {
  title: string;
  organization: string;
  description: string[];
  techStack?: Array<{ name: string }>;
};

/**
 * Type representing a project item with searchable fields.
 */
export type Project = {
  name: string;
  description: string;
  techStack?: Array<{ name: string }>;
};

/**
 * Generic lexical relevance scoring function for searchable items.
 *
 * @template T - Type that may contain a techStack array
 * @param {T} item - The item to score
 * @param {string[]} searchableFields - Array of string fields to search through
 * @param {string} filterText - The normalized (lowercase) filter text to match against
 * @returns {number} Score in the range [0, 1]
 */
export function getLexicalScore<T extends { techStack?: Array<{ name: string }> }>(
  item: T,
  searchableFields: string[],
  filterText: string
): number {
  const normalizedQuery = normalizeSearchText(filterText);

  // Early exit optimization - empty filter matches everything
  if (!normalizedQuery) return 1;

  const normalizedFields = searchableFields.map((field) => normalizeSearchText(field));
  const combinedFields = normalizedFields.join(" ");
  const techStackTerms = item.techStack?.map((tech) => normalizeSearchText(tech.name)) ?? [];
  const queryTokens = tokenize(normalizedQuery);

  let score = 0;

  if (combinedFields.includes(normalizedQuery)) {
    score += 0.6;
  }

  for (const token of queryTokens) {
    if (combinedFields.includes(token)) {
      score += 0.15;
    }

    if (techStackTerms.some((tech) => tech === token)) {
      score += 0.2;
      continue;
    }

    if (techStackTerms.some((tech) => tech.includes(token))) {
      score += 0.1;
    }
  }

  return Math.min(score, 1);
}

/**
 * Generic filter function that determines if an item matches the search criteria.
 * Works with any searchable item type that may have a techStack property.
 *
 * @template T - Type that may contain a techStack array
 * @param {T} item - The item to check for matches
 * @param {string[]} searchableFields - Array of string fields to search through
 * @param {string} filterText - The normalized (lowercase) filter text to match against
 * @returns {boolean} True if the item matches the filter criteria, false otherwise
 */
export function matchesFilter<T extends { techStack?: Array<{ name: string }> }>(
  item: T,
  searchableFields: string[],
  filterText: string
): boolean {
  return getLexicalScore(item, searchableFields, filterText) > 0;
}

/**
 * Builds an array of searchable text fields for an experience item.
 *
 * @param {Experience} exp - The experience object to extract searchable fields from
 * @returns {string[]} Array of strings to search through
 */
export function getExperienceSearchFields(exp: Experience): string[] {
  return [exp.title, exp.organization, ...exp.description];
}

/**
 * Builds an array of searchable text fields for a project item.
 *
 * @param {Project} proj - The project object to extract searchable fields from
 * @returns {string[]} Array of strings to search through
 */
export function getProjectSearchFields(proj: Project): string[] {
  return [proj.name, proj.description];
}
