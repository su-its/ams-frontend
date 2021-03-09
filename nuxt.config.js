require('dotenv').config();
export default {
  server: {
    port: process.env.APP_PORT
  },
  env: process.env.API_URL,
  // ssr: true ユニバーサルモード(サーバサイドレンダリングあり)
  // ssr: false シングルページアプリケーションモード
  ssr: false,

  // ページヘッダ
  head: {
    title: 'ITS-AMS コントロールパネル',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // CSS
  css: ["ress"],

  // ビルドする前にロードするプラグイン
  plugins: [
  ],

  // コンポーネントを自動で読み込むか
  components: true,

  // dev時、build時に読み込むモジュール
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build', '@nuxtjs/dotenv'
  ],

  // 一般的なモジュール
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy'
  ],

  // ビルドの設定
  build: {
  }
}
