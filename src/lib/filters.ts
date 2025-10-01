/**
 * Utility functions for filtering searchable items.
 * @module lib/filters
 */

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
  // Early exit optimization - empty filter matches everything
  if (!filterText) return true;

  // Check direct string fields
  const matchesDirectFields = searchableFields.some((field) => field.toLowerCase().includes(filterText));

  // Check tech stack if present
  const matchesTechStack = item.techStack?.some((tech) => tech.name.toLowerCase().includes(filterText)) ?? false;

  return matchesDirectFields || matchesTechStack;
}

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
