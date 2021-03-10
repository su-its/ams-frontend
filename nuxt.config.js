import webpack from 'webpack'

require('dotenv').config()
export default {
  server: {
    // ポート番号を指定
    port: process.env.APP_PORT
  },

  // APIのURLを指定
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
  css: [],

  // ビルドする前にロードするプラグイン
  plugins: [
    '~/plugins/vee-validate.ts'
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
  // lodashを組み込んでどこからでも呼び出せるようにした
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
