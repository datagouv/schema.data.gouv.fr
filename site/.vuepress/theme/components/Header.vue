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
          <button @click="copyToClipboard" class="copy-button" :title="hoverText">
            Copier le lien du flux RSS global
          </button>
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
    async copyToClipboard() {
      const textToCopy = 'https://schema.data.gouv.fr/rss/global.xml';
      await navigator.clipboard.writeText(textToCopy);
      this.hoverText = 'Lien copié sur dans le presse-papier !';
      setTimeout(() => {
        this.hoverText = 'Cliquer pour copier';
      }, 3000);
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

.copy-button {
  background-color: #000091;
  color: white;
  font-size: 12px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 100px;
  transition: background-color 0.3s ease;
}

</style>