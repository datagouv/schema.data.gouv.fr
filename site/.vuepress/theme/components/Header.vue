<template>
  <header role="banner" class="fr-header-custom">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  République
                  <br />Française
                </p>
              </div>
            </div>
            <div class="fr-header__service">
              <a href="/">
                <p class="fr-header__service-title">{{ $site.title }}</p>
              </a>
              <p class="fr-header__service-tagline">{{ $site.description }}</p>
            </div>
          </div>
          <span @click="goToRSS()" class="rss-span" :title="hoverText">
            RSS
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hoverText: 'Cliquer pour copier',
    };
  },
  methods: {
    async goToRSS() {
      window.location.href = 'https://schema.data.gouv.fr/rss/global.xml';
    },
  },
};
</script>

<style scoped>
.fr-header-custom {
  border-bottom: 2px solid #EBEBEB;
  padding-bottom:0px;
  margin-bottom: 0px;
}

.fr-header__body-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.rss-span {
  color: #3558A2;
  font-weight: bold;
  font-size: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 100px;
}

</style>