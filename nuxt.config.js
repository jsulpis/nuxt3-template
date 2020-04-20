// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES" ? { router: { base: "/nuxt-template/" } } : {};

module.exports = {
  mode: "spa",
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
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/google-analytics", { id: "UA-124217907-3" }],
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "en", iso: "en-US", name: "English" },
          { code: "fr", iso: "fr-FR", name: "Français" }
        ],
        defaultLocale: "en",
        baseUrl: "https://jsulpis.github.io/nuxt-template/",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en: require("./src/locales/en.json"),
            fr: require("./src/locales/fr.json")
          }
        }
      }
    ]
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
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {}
  }
};
