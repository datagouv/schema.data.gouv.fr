/* global MATOMO_SITE_ID, MATOMO_TRACKER_URL, MATOMO_ENABLE_LINK_TRACKING, MATOMO_REQUIRE_CONSENT, MATOMO_REMEMBER_CONSENT, MATOMO_TRACKER_JS_FILE, MATOMO_TRACKER_PHP_FILE */

// Matomo integration. This is mostly a generalized version of the basic matomo
// tracker code you'd insert in a JS page. However, since vuepress is SSR, it
// requires some special workarounds to make sure paq object storage happens
// correctly.
export default ({ router }) => {
  // Don't remove window typeof check, as this what makes sure the SSR parser
  // doesn't error out during builds.
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' &&
      MATOMO_SITE_ID && MATOMO_TRACKER_URL) {
    // We're in SSR space here, meaning that we have to explictly attach _paq to
    // the window in order to store it globally.
    if (window._paq == undefined) {
      window._paq = [];
    }
    // Create convenience variable here, but don't expect it to last. Use
    // window._paq elsewhere when needed, including closure scopes.
    let _paq = window._paq;
    // If user requests consent checking, do this before we actually track.
    // Note: this doesn't work at the moment because the user has no way to set
    // whether consent was given. Oops.
    if (MATOMO_REQUIRE_CONSENT) {
      _paq.push(['requireConsent']);
      if (MATOMO_REMEMBER_CONSENT) {
        _paq.push(['rememberConsentGiven']);
      }
    }
    // Tracker methods like "setCustomDimension" should be called before
    // "trackPageView".
    _paq.push(['trackPageView']);
    if (MATOMO_ENABLE_LINK_TRACKING) {
      _paq.push(['enableLinkTracking']);
    }
    (function() {
      var u=MATOMO_TRACKER_URL;
      // Make sure URLs end in a slash
      if (u.length > 0 && u[u.length - 1] != "/") {
        u = u.concat("/");
      }
      _paq.push(['setTrackerUrl', u+MATOMO_TRACKER_PHP_FILE]);
      _paq.push(['setSiteId', MATOMO_SITE_ID]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript';
      g.async=true;
      g.defer=true;
      g.src=u+MATOMO_TRACKER_JS_FILE;
      s.parentNode.insertBefore(g,s);
    })();
    router.afterEach((to) => {
      // router.afterEach seems to fire before the actual navigation (?), so run
      // our push in the next loop, after the new document has been set.
      setTimeout(() => {
        // Use window global here, the convenience variable doesn't stick around
        // for some reason.
        window._paq.push(['setDocumentTitle', document.title]);
        window._paq.push(['setCustomUrl', to.fullPath]);
        window._paq.push(['trackPageView']);
      }, 0);
    });
  }
}
