import { createI18n } from "vue-i18n";
import ru from "../locale/ru";
import kz from "../locale/kz";
import en from "../locale/en";
import tr from "../locale/tr";

export default defineNuxtPlugin(async (nuxt) => {
  // const { vueApp: app } = nuxt;
  let storage;
  if (process.client) {
    storage = localStorage.myLocale;
  }
  let locale = storage || "ru";

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    warnHtmlMessage: false,
    locale: locale,

    fallbackWarn: false,
    missingWarn: false,

    messages: {
      ru,
      kz,
      en,
      tr,
    },
  });
  nuxt.vueApp.use(i18n);
  // app.use(i18n);
});
