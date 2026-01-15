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
```

## Architecture

### Data-Driven Design

- All portfolio content lives in `src/lib/data/` - projects, experiences, tools, and links are typed objects
- Adding new content: modify the appropriate data file, no component changes needed
- Projects are organized by category: `webDev`, `dataViz`, `hackathon`, `distributedSystems`, `ml`

### Component Structure

- `src/lib/components/ui/` - shadcn-svelte components (avatar, badge, button, card, hover-card, input, separator)
- `src/lib/components/` - domain components (project.svelte, experience.svelte)
- Uses Svelte 5 Runes syntax (`$state`, `$derived`) for reactivity

### Filtering System

- `src/lib/filters.ts` contains generic `matchesFilter()` for searching across projects and experiences
- Main page (`src/routes/+page.svelte`) uses derived state for real-time filtering

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
