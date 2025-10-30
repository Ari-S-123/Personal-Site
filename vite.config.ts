import { env } from "node:process";
import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import tailwindcss from "@tailwindcss/vite";

/**
 * Vite configuration for the personal site.
 *
 * This setup wires Tailwind CSS, SvelteKit, and the Testing Library integration so
 * development and test environments share the same pipeline. When Vitest triggers
 * the build (indicated via the `VITEST` environment flag exposed through
 * Node's process environment), we force module
 * resolution through browser-specific entry points. This mirrors the official
 * guidance from the Svelte testing documentation and keeps DOM-oriented modules
 * (particularly component libraries) aligned with the jsdom environment
 * underpinning Vitest 4.
 */
const isVitest = Boolean(env["VITEST"]);

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), svelteTesting()],
  resolve: isVitest
    ? {
        conditions: ["browser"]
      }
    : undefined,
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.ts"],
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true
  }
});
