// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@unocss/nuxt'
  ],
  unocss: {
    preflight: false, // Disables UnoCSS's default preflight
  },
  css: [
    '@unocss/reset/tailwind-compat.css'
  ]
})