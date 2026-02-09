# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with SvelteKit 2, Svelte 5 (Runes), TypeScript, and Tailwind CSS 4. Deployed as a static site.

## Commands

```bash
bun dev          # Start development server
bun build        # Production build (outputs to /build)
bun preview      # Preview production build
bun check        # Type checking with svelte-check
bun lint         # ESLint + Prettier format check
bun format       # Format code with Prettier
bun test         # Run tests (single run)
bun test:ui      # Run tests with Vitest UI
bun test:watch   # Watch mode for tests
bun gen:semantic-index  # Regenerate semantic embeddings after content changes
```

## Architecture

### Data-Driven Design

- All portfolio content lives in `src/lib/data/` - projects, experiences, tools, and links are typed objects
- Adding new content: modify the appropriate data file, no component changes needed
- Projects are displayed in a single unified list

### Component Structure

- `src/lib/components/ui/` - shadcn-svelte components (avatar, badge, button, card, hover-card, input, separator)
- `src/lib/components/` - domain components (project.svelte, experience.svelte)
- Uses Svelte 5 Runes syntax (`$state`, `$derived`) for reactivity
- Uses `<strong>` for semantic emphasis (not `<b>`) in domain components

### Search & Filtering System

- `src/lib/filters.ts` - `matchesFilter()` for boolean filtering, `getLexicalScore()` for scored lexical relevance, plus field extractors (`getExperienceSearchFields`, `getProjectSearchFields`)
- `src/lib/search/` - Hybrid search module (lexical 70% + semantic 30%):
  - `embedding.ts` - text normalization, tokenization, stemming, synonym expansion, deterministic hash-based embeddings (192-dim)
  - `rank.ts` - `rankItems()` combines lexical and semantic scores; `createSearchId()` for index lookups
  - `semantic-client.ts` - client-side embedding generation with Web Worker, caching, and cancellation
  - `embedding.worker.ts` - Web Worker for non-blocking embedding computation
- `src/lib/data/semantic-index.json` - precomputed embeddings for all projects/experiences (regenerate with `bun gen:semantic-index`)
- `scripts/generate-semantic-index.ts` - build-time script to regenerate the semantic index
- `src/lib/types/semantic.ts` - `SemanticIndexEntry` type for the search index
- Main page uses 250ms debounced semantic search with graceful fallback to lexical-only
- Feature flag: `VITE_ENABLE_SEMANTIC_SEARCH` env var (defaults to enabled)

### Key Utilities

- `src/lib/utils.ts` - `cn()` function for Tailwind class merging (clsx + tailwind-merge)

## Tech Stack Details

- **UI**: shadcn-svelte with Bits-UI, zinc color scheme
- **Icons**: Lucide Svelte
- **Testing**: Vitest + @testing-library/svelte with jsdom
- **Static Generation**: SvelteKit static adapter with precompression
- **Analytics**: Vercel Analytics and Speed Insights

## CI/CD

GitHub Actions runs on all branches: `lint → check → test`
