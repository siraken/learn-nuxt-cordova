import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'cordova',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'initial-scale=1, width=device-width, viewport-fit=cover',
        },
        { name: 'msapplication-tap-highlight', content: 'no' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      // script: [{ src: 'cordova.js', body: true }],
    },
  },
  css: ['@/assets/css/app.css'],
  components: true,
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    output: {
      publicDir: 'dist',
    },
  },
  devServer: {
    host: '0.0.0.0',
  },
  vite: {
    build: {
      target: 'es2015',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
