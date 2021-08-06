<template>
  <main>
    <Header />
    <Menu />
    <div class="fr-container">
      <Content />
    </div>
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
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default {
  components: {
    Header,
    Footer,
    Menu,
  },
};
</script>
