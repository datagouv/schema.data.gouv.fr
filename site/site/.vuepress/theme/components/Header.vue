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
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fr-header-custom{
  border-bottom: 2px solid #EBEBEB;
}

</style>