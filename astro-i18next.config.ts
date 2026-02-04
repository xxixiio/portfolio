import en from "./public/locales/en/translation.json";
import es from "./public/locales/es/translation.json";

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  i18nextServer: {
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
    //backend: null,
  },
};
