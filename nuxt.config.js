// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? { router: { base: "/nuxt-template/" } }
    : {};

module.exports = {
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt-template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A comprehensive template for nuxt-based projects."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Enable typescript in vue files
  */
  modules: [
    "nuxt-typescript",
    ["@nuxtjs/google-analytics", { id: "UA-124217907-3" }]
  ],
  /*
  ** Change the source directory
  */
  srcDir: "src/",
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue|ts)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
