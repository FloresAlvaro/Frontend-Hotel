// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { port: 3001 },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
      ]
    }
  },
  runtimeConfig: {
    public: { apiBase: 'http://localhost:3000/api' }
  },
  modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt', '@nuxt/eslint'],
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  ui: { colorMode: false },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
