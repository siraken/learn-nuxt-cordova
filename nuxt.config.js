export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  /*
  <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;"> -->
  */
  head: {
    title: 'cordova',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'initial-scale=1, width=device-width, viewport-fit=cover'
      },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'color-scheme', content: 'light dark' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'cordova.js', body: true }]
  },
  css: ['@/assets/scss/app.scss'],
  plugins: [],
  components: true,
  transition: 'page',
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {
    publicPath: '/nuxt/',
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  // Router
  router: {
    mode: 'hash'
  },

  // Server: Debug
  server: {
    host: '0.0.0.0'
  }
}
