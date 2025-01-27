export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ['~/assets/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/',
    head: {
      title: 'Portfolio - Charles BROUILLIER',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Portfolio - Charles BROUILLIER"
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ?? `http://localhost:${process.env.API_PORT}/api`, 
    },
  },  
  colorMode: {
    preference: 'light'
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: "2024-11-27",
})