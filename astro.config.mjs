import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
  site: "https://xxixiio.tokyo",
  integrations: [
    sitemap(),
    react({
      include: ["**/react/*"],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
