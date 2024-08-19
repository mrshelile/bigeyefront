import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components:true,
  devtools: { enabled: true },

  // modules: ['@nuxtjs/tailwindcss']
  css: ['~/assets/css/main.css'],

  // modules: ['@nuxtjs/axios'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@scalar/nuxt", "@nuxt/image"]
})