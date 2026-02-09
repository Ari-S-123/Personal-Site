# Repository Guidelines

## Project Structure & Module Organization

`src/routes/` holds SvelteKit route files like `+page.svelte` and `+layout.svelte`. `src/lib/` contains shared code, including `components/` (domain components such as `project.svelte`), `components/ui/` (shadcn-svelte primitives), `data/` for typed portfolio content plus generated semantic index data (`semantic-index.json`), `search/` for lexical/semantic ranking and embedding utilities, and `types/` for shared types. `scripts/` contains maintenance utilities such as `generate-semantic-index.ts`. Tests live in `src/tests/` and mirror app features (example `src/tests/routes/+page.test.ts`, `src/tests/lib/search/rank.test.ts`). Static assets live in `static/`. Static builds output to `build/`, and `.svelte-kit/` is generated.

## Build, Test, and Development Commands

- `bun i`: install dependencies (use Node LTS; README notes v24.x).
- `bun dev`: start the Vite dev server.
- `bun build`: create a static build in `build/`.
- `bun preview`: serve the production build locally.
- `bun gen:semantic-index`: regenerate `src/lib/data/semantic-index.json` after editing projects/experiences content.
- `bun check`: run `svelte-check` with the repo TS config.
- `bun lint`: run ESLint and Prettier checks.
- `bun format`: auto-format with Prettier.
- `bun test`: run Vitest once.
- `bun test:watch`: run tests in watch mode.
- `bun test:ui`: open the Vitest UI.

## Coding Style & Naming Conventions

- Formatting is handled by Prettier (2-space indent, semicolons, double quotes, `printWidth` 120, LF line endings, no trailing commas). Use `bun format` or `bun lint`.
- ESLint is configured for Svelte and TypeScript, with `no-console` as a warning.
- Route files follow SvelteKit naming (`+page.svelte`, `+layout.svelte`). Component files in `src/lib/components` and `src/lib/components/ui` are lowercase/kebab-case (example `hover-card-content.svelte`).
- Prefer updating content via `src/lib/data/` rather than hardcoding in components.

## Testing Guidelines

Vitest runs in jsdom with Testing Library. Test files follow `src/**/*.{test,spec}.{js,ts}` and are currently located under `src/tests/` (including `src/tests/lib/search/` for ranking/client logic). There is no explicit coverage threshold; add tests for new UI behavior, search ranking behavior, or data transformations and run `bun test` before opening a PR.

## Commit & Pull Request Guidelines

Recent commits use short, sentence-case summaries like "Updated data and dependencies", "tweak", "fix", or "Add ...". Follow that compact style and keep each commit focused. For pull requests, include a clear description, note the commands you ran, link relevant issues, and add before/after screenshots for UI changes.

## Architecture Notes

The site is a static SvelteKit build (adapter-static) with data-driven content in `src/lib/data/`. Search is a hybrid lexical + semantic system: lexical helpers live in `src/lib/filters.ts`, ranking and IDs in `src/lib/search/rank.ts`, query embeddings in `src/lib/search/semantic-client.ts` and `src/lib/search/embedding.worker.ts`, and item embeddings are precomputed into `src/lib/data/semantic-index.json` by `scripts/generate-semantic-index.ts`. Set `VITE_ENABLE_SEMANTIC_SEARCH=false` to force lexical-only search. Shared UI utilities (like class merging) live in `src/lib/utils.ts`. GitHub Actions runs `lint`, `check`, and `test` on all branches.
