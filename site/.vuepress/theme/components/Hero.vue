<template>
    <div class="hero">
        <div class="fr-container flexHero">
            <div class="heroText">
                <div class="heroTitle">
                    {{ $site.themeConfig.hero.title }}
                </div>
                <div class="heroSubtitle">
                    {{ $site.themeConfig.hero.subtitle }}
                </div>
                <br />
                <button @click="goto($site.themeConfig.hero.url1)" class="heroButton fr-btn fr-btn--secondary">
                    {{ $site.themeConfig.hero.button1 }}&nbsp;&nbsp;
                    <img src="../../public/assets/right-arrow.png" width="20" />
                </button>
                <br /><br />
                <button @click="goto($site.themeConfig.hero.url2)" class="heroButton fr-btn fr-btn--secondary">
                    {{ $site.themeConfig.hero.button2 }}&nbsp;&nbsp;
                    <img src="../../public/assets/right-arrow.png" width="20" />
                </button>
            </div>
            <div class="heroImage">
                <img src="../../public/assets/logo_schema.png" width="250" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "Hero",
  props: [
  ],
  data(){
    return{
    };
  },
  mounted() {
  },
  methods: {
    goto(url) {
        if(url.startsWith('/')){
            window.location.href = window.location.origin + url;
        } else {
            window.location.href = url;
        }
    },
  },
};
</script>

<style>
.flexHero{
    display: flex;
}
.hero{
    min-height: 430px;
    background-color: #E6EEFE;
    display: flex;
    color: #3558A2;
    padding-bottom: 30px;
}
.heroText{
    width: 50%;
    padding-top: 80px;
}
.heroImage{
    width: 50%;
    margin: auto;
    text-align: center;
}

.heroTitle{
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
}

.heroSubtitle{
    max-width: 420px;
    font-size: 20px;
    line-height: 35px;
    font-weight: Thin;
}

.heroButton{
    background-color: white;
    text-align: left;
}


@media screen and (max-width: 1150px) {
    .heroImage {
        display: none;
    }
    .heroText{
        width: 100%;
    }
}
</style>