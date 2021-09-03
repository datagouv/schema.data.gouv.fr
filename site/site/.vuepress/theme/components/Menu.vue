<template>
    <div>
        <div class="fr-container">
            <div class="menuBar">
                <span  v-for="menu in $site.themeConfig.menu" v-bind:key="menu.title">
                    <div v-if="menu.url === $router.currentRoute.path"
                        class="menuItemSelect"
                    >
                        <span class="menuButton" @click="goto(menu.url)">{{ menu.title }}</span>
                    </div>
                    <div v-if="menu.url != $router.currentRoute.path"
                        class="menuItem"
                    >
                        <span class="menuButton" @click="goto(menu.url)">{{ menu.title }}</span>
                    </div>
                </span>
            </div>
        </div>
        <div class="subline"></div>
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
        window.location.href = window.location.origin + url;
    },
  },
};
</script>


<style lang="stylus" scoped>
.menuItem{
    font-size: 15px;
    padding: 20px;
    line-height: 100%;
}
.menuItemSelect{
    font-size: 15px;
    padding: 19px;
    line-height: 100%;
    color: #000091;
    border-bottom: 2px solid #000091;
}
.menuItem:hover{
    background-color: #ebebeb;
}
.menuBar{
    display: flex;
}
.menuButton{
    cursor: pointer;
}
.subline{
    border-bottom: 2px solid #ebebeb;
}
</style>