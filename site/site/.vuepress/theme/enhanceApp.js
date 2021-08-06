import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  Vue.use(Loading);
  // credit to @Bill Criswell for this filter
  Vue.filter("truncate", function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
  });
};
