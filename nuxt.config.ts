import * as packageJson from "./package.json";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  experimental: {
    payloadExtraction: true,
  },
  devServer: {
    port: (typeof process.env.APP_PORT === "number") ? process.env.APP_PORT : 3001,
  },
  // server: {
  //   // ポート番号を指定
  //   port: process.env.APP_PORT,
  // },
  // env: {
  //   // このソフトのバージョンを設定(画面に表示するため)
  //   PKG_VERSION: packageJson.version || "バージョン情報の取得に失敗しました",
  // },

  // proxy: {
  //   // バックエンドAPIをプロクシする
  //   "/api/": {
  //     target: process.env.API_URL,
  //     pathRewrite: {
  //       // 余計なパスを取り除く
  //       "^/api/": "",
  //     },
  //     xfwd: true, // x-forwarded-for を付ける
  //   },
  // },

  // ssr: true ユニバーサルモード(サーバサイドレンダリングあり)
  // ssr: false シングルページアプリケーションモード
  ssr: false,

  // ページヘッダ
  app: {
    head: {
      title: "ITS-AMS コントロールパネル",
      titleTemplate: "%s - ITS-AMS コントロールパネル",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // データの入出力を全てJSONで行うように設定
  // headers: {
  //   "Content-Type": "application/json",
  //   Accept: "application/json",
  // },
  vite: {
    build: {
      chunkSizeWarningLimit: 100000000,
    },
    define: {
      "process.env.DEBUG": false,
    },
    optimizeDeps: { exclude: ["fsevents"], include: ["vue-router"] },
    server: {
      fs: {
        strict: false,
      },
    },
  },

  // CSS
  css: ["@/assets/common.scss"],

  // ビルドする前にロードするプラグイン
  plugins: [],

  // 一般的なモジュール
  modules: [],

  // moment: {
  //   // momentで日本である事を書く必要がなくなった
  //   locales: ["ja"],
  // },

  // ビルドの設定
  // build: {
  //   cache: true,
  //   parallel: true,
  // },

  telemetry: false,

  // render: {
  //   // SSEと圧縮の相性が悪いのでオフにしておく
  //   compressor: false,
  // },
});
