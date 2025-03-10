import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import svgLoader from "vite-svg-loader";

import partytown from "@astrojs/partytown";

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
  site: "https://sebjf.dev",
  integrations: [
    sitemap(),
    astroI18next(),
    react({
      include: ["**/react/*"],
    }),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "rose-pine-moon",
      },
    }),
    partytown(),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    includeFiles: [
      "./public/locales/en/translation.json",
      "./public/locales/es/translation.json",
    ],
  }),
});
