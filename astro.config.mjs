import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always"
  },
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"]
    }
  },
  site: "https://xxixiio.tokyo",
  integrations: [sitemap()]
});