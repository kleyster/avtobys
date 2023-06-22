// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper"],
  components: {
    global: true,
    dirs: ["@/components"],
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/normalize.scss",
    "@/assets/scss/index.scss",
  ],
  build: {
    transpile: ["gsap"],
  },
});
