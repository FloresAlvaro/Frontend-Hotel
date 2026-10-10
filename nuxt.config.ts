// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt', '@nuxt/eslint'],
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  ui: { colorMode: false },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
