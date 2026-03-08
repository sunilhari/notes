import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sunilhari.github.io",
  base: "/notes",
  image: {
    // No native image optimization — swap for 'astro/assets/services/sharp'
    // if you install the 'sharp' package and want optimized images
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [mdx(), sitemap()],
});
