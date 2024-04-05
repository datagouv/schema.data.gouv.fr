<template>
  <main>
    <InfoBanner />
    <Header />
    <Menu />
    <span v-if="this.$router.currentRoute.path === '/'">
      <Hero
      />
    </span>
    <div class="fr-container">
      <span v-if="this.$router.currentRoute.path === '/'">
        <PresentationBox />
      </span>
      <Content />
    </div>
    <span v-if="this.$router.currentRoute.path === '/'">
        <SchemaCardsSample option="description" />
    </span>
    <Footer />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
}

main > div {
  flex-grow: 1;
}
</style>

<script>
import Header from "../components/Header";
import InfoBanner from "../components/InfoBanner";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import PresentationBox from "../components/PresentationBox";
import SchemaCardsSample from "../global-components/SchemaCardsSample";

export default {
  components: {
    InfoBanner,
    Header,
    Footer,
    Menu,
    Hero,
    PresentationBox,
    SchemaCardsSample,
  },
  data(){
    return{
      url: null
    };
  },
  mounted() {
    this.url = window.location.origin + "/schemas.html"
  },
};
</script>
