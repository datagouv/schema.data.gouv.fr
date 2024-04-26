<template>
  <div class="custom-notice custom-notice--info">
    <div class="custom-container">
      <div class="custom-notice__body">
        <p class="custom-notice__title">
          Donnez votre avis sur schema.data.gouv.fr en <a href="https://tally.so/r/woyYDO" rel="noopener external" title="intitulé - nouvelle fenêtre" target="_blank">répondant à cette enquête</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBanner'
}
</script>

<style scoped>
.custom-notice {
  background-color: #E6EEFE; /* Couleur de fond */
  color: #3558A2; /* Couleur du texte */
  padding: 1rem; /* Espace interne */
}

.custom-container {
  max-width: 1200px; /* Largeur maximale du conteneur */
  margin: 0 auto; /* Centrage */
  padding: 0 15px; /* Espace interne */
}

.custom-notice__body {
  display: flex;
  align-items: center;
}

.custom-notice__title {
  margin: 0;
  font-weight: bold;
  font-size: 1rem; /* Taille du texte */
}

.custom-notice__title a {
  color: #3558A2; /* Couleur du lien */
}
</style>
