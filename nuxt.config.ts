const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-schema-org',
  ],

  compatibilityDate: '2025-01-01',
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css', 'leaflet/dist/leaflet.css'],

  googleFonts: {
    families: {
      'Barlow': [400, 500, 600, 700],
      'Barlow Condensed': [600, 700, 800],
    },
    display: 'swap',
    preconnect: true,
  },

  sitemap: {
    hostname: SITE_URL,
    gzip: true,
    exclude: ['/404'],
  },

  robots: {
    disallow: ['/404'],
    sitemap: `${SITE_URL}/sitemap.xml`,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Layanan Otomotif Pangandaran — Bengkel Mobil & Bantuan Darurat',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0F2229' },
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'author', content: 'Layanan Otomotif Pangandaran' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'shortcut icon', href: '/favicon-32x32.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: SITE_URL }
      ],
    },
  },

  typescript: { strict: true, typeCheck: false },
  eslint: { config: { stylistic: true } },

  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
    },
  },
})
