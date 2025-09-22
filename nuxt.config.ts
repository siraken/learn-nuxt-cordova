import type { NuxtConfig } from '@nuxt/types';

// const JavaScriptObfuscator = require('webpack-obfuscator')
// <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">

const nuxtConfig: NuxtConfig = {
  ssr: false,
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
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'cordova.js', body: true }],
  },
  css: ['@/assets/css/app.css'],
  plugins: [
    // new JavaScriptObfuscator({
    //   stringArrayEncoding: true,
    //   stringArrayThreshold: 1,
    //   deadCodeInjection: true,
    //   deadCodeInjectionThreshold: 0.2
    // })
  ],
  components: true,
  buildModules: ['@nuxt/postcss8', '@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios'],
  build: {
    publicPath: '/nuxt/',
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  router: {
    mode: 'hash',
  },
  server: {
    host: '0.0.0.0',
  },
  axios: {},
};

export default nuxtConfig;
