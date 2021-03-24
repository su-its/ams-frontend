export default {
  server: {
    // ポート番号を指定
    port: process.env.APP_PORT
  },

  // APIのURLを指定
  env: {
    baseUrl: process.env.API_URL
  },

  // ssr: true ユニバーサルモード(サーバサイドレンダリングあり)
  // ssr: false シングルページアプリケーションモード
  ssr: false,

  // ページヘッダ
  head: {
    title: 'ITS-AMS コントロールパネル',
    titleTemplate: '%s - ITS-AMS コントロールパネル',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // データの入出力を全てJSONで行うように設定
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },

  // CSS
  css: ['~/assets/common.scss'],

  // ビルドする前にロードするプラグイン
  plugins: [
  ],

  // コンポーネントを自動で読み込むか
  components: true,

  // dev時、build時に読み込むモジュール
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/dotenv'
  ],

  // 一般的なモジュール
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy'
  ],
  moment: {
    // momentで日本である事を書く必要がなくなった
    locales: ['ja']
  },
  // ビルドの設定
  build: {
  },
  telemetry: false
}
