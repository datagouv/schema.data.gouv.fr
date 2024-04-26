module.exports = {
  dest: "dist",
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
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "icon", href: "/assets/favicons/favicon.ico" }],
    // Code pour le suivi Matomo 
    [
      "script",
      {},
      `
      var _paq = window._paq = window._paq || [];
      _paq.push(["setExcludedQueryParams", ["simulationId","_csrf"]]);
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://stats.data.gouv.fr/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '90']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
      `
    ]
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
        "title": "Accueil",
        "url": "/"
      },
      {
        "title": "Schémas",
        "url": "/schemas.html",
      },
      {
        "title": "Actualités",
        "url": "/actualites.html",
      },
      {
        "title": "Contribuer",
        "url": "/contribuer.html",
      },
      {
        "title": "Initiatives similaires",
        "url": "/initiatives.html",
      },
      {
        "title": "Statistiques",
        "url": "/statistiques.html",
      },
      {
        "title": "À propos",
        "url": "/apropos.html",
      },
    ],
    hero: {
      title: "Schema.data.gouv.fr",
      subtitle: "Bienvenue sur l'initiative de data.gouv.fr de référencement des schémas de données publiques pour la France.",
      button1: "Découvrez tous les schémas de données",
      url1: "/schemas.html",
      button2: 'Saisissez des données structurées sur publier.etalab.studio',
      url2: 'https://publier.etalab.studio/fr'
    },
    presentationBox: [
      {
        img: '/assets/question.png',
        text: 'En savoir plus sur l\'initiative schema.data.gouv.fr',
        url: '/apropos.html'
      },
      {
        img: '/assets/magnifying-glass.png',
        text: 'Naviguez parmi tous les schémas référencés',
        url: '/schemas.html'
      },
      {
        img: '/assets/community.png',
        text: 'Contribuez en proposant votre propre schéma',
        url: '/contribuer.html'
      },
    ]
  
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
};
