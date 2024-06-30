import en from "./public/locales/en/translation.json" assert {type: "json"};
import es from "./public/locales/es/translation.json" assert {type: "json"};

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  i18nextServer: {
    debug: true,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
    resources: {
      en: {
        translation: {
          ...en,
        },
      },
      es: {
        translation: {
          ...es,
        },
      },
    },
    initImmediate: false,
    preload: true,
    backend: null,
  },
  i18nextClient: {
    debug: true,
  },
};
