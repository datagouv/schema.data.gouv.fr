<template>
    <div class="menuBar">
        <div class="fr-container">
            <span 
                v-for="menu in $site.themeConfig.menu" v-bind:key="menu.title"
                class="menuItem"
            >
                <span class="menuButton" @click="goto(menu.url)">{{ menu.title }}</span>
            </span>
        </div>
    </div>
</template>


<script>

export default {
  name: "Menu",
  props: [],
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    goto(url) {
        this.$router.push(url);
    },
  },
};
</script>


<style lang="stylus" scoped>
.menuItem{
    font-size: 18px;
    padding-right: 30px;
}
.menuBar{
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #ebebeb;
    margin-bottom: 15px;
}
.menuButton{
    cursor: pointer;
}
</style>