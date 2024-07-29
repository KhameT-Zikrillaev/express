// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxt/ui','@nuxtjs/tailwindcss', '@pinia/nuxt','nuxt-aos'],
  devtools: { enabled: true },
  css: ['~/components/assets/styles/tailwind.css', 'aos/dist/aos.css'],


})
