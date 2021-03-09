import colors from "vuetify/es5/util/colors";

require("dotenv").config();
export default {
  server: {
    port: process.env.APP_PORT
  },
  env: process.env.API_URL,
  ssr: false,
  head: {
    title: "ITS-AMS コントロールパネル",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "description" }
    ]
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["ress"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: undefined }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build", "@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/moment", "nuxt-buefy", { css: false }],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/common.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
};
