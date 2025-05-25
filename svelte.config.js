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
      regions: ["sfo1", "pdx1", "iad1", "cle1", "dub1", "lhr1", "bom1", "sin1", "hkg1", "syd1", "cpt1"],
      images: {
        sizes: [640, 828, 1200, 1920, 3840],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 300,
        domains: ["ari-s.vercel.app"]
      }
    })
  }
};

export default config;
