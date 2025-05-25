import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  compilerOptions: {
    runes: true
  },

  preprocess: vitePreprocess({
    script: true
  }),

  kit: {
    adapter: adapter({
      runtime: "nodejs22.x",
      regions: ["sfo1"]
    })
  }
};

export default config;
