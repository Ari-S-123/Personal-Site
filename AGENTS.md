# Repository Guidelines

## Project Structure & Module Organization

`src/routes/` holds SvelteKit route files like `+page.svelte` and `+layout.svelte`. `src/lib/` contains shared code, including `components/` (domain components such as `project.svelte`), `components/ui/` (shadcn-svelte primitives), `data/` for typed portfolio content, and `types/` for shared types. Tests live in `src/tests/` and mirror the app structure (example `src/tests/routes/+page.test.ts`). Static assets live in `static/`. Static builds output to `build/`, and `.svelte-kit/` is generated.

## Build, Test, and Development Commands

- `bun i`: install dependencies (use Node LTS; README notes v24.x).
- `bun dev`: start the Vite dev server.
- `bun build`: create a static build in `build/`.
- `bun preview`: serve the production build locally.
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

Vitest runs in jsdom with Testing Library. Test files follow `src/**/*.{test,spec}.{js,ts}` and are currently located under `src/tests/`. There is no explicit coverage threshold; add tests for new UI behavior or data transformations and run `bun test` before opening a PR.

## Commit & Pull Request Guidelines

Recent commits use short, sentence-case summaries like "Updated data and dependencies", "tweak", "fix", or "Add ...". Follow that compact style and keep each commit focused. For pull requests, include a clear description, note the commands you ran, link relevant issues, and add before/after screenshots for UI changes.

## Architecture Notes

The site is a static SvelteKit build (adapter-static) with data-driven content in `src/lib/data/`. Filtering logic lives in `src/lib/filters.ts`, and shared UI utilities (like class merging) live in `src/lib/utils.ts`. GitHub Actions runs `lint`, `check`, and `test` on all branches.
