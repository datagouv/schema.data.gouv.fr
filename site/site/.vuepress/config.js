module.exports = {
  dest: "../dist",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title:
    "schema.data.gouv.fr",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Référentiel de schémas de données publiques",

  markdown: {
    anchor: { permalink: false },
    externalLinks: { target: "" },
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/assets/favicons/favicon.ico" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [],
    sidebar: {},
    menu: [
      {
        "title": "Schémas référencés",
        "url": "/schemas.html",
      },
      {
        "title": "Contribuer",
        "url": "/contribuer.html",
      },
      {
        "title": "En cours",
        "url": "/encours.html",
      },
      {
        "title": "Indicateurs",
        "url": "/indicateurs.html",
      },
    ],
  
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
};
