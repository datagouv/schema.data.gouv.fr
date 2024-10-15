<template>
    <div>
        <div class="fr-container">
            <div @click="displayMenuFunction()" class="menuIcon">
                <br />
                <img src="../../public/assets/list.png" width="25" />
                <br /><br />
            </div>
            <div v-if="displayMenu" class="menuList">
                <span  @click="goto(menu.url)" v-for="menu in $site.themeConfig.menu" v-bind:key="menu.title">
                    <div v-if="menu.url === $router.currentRoute.path"
                        class="menuItemListSelect"
                    >
                        <span class="menuButton">{{ menu.title }}</span>
                    </div>
                    <div v-if="menu.url != $router.currentRoute.path"
                        class="menuItemList"
                    >
                        <span class="menuButton">{{ menu.title }}</span>
                    </div>
                </span>
            </div>
            <div class="menuBar">
                <span  @click="goto(menu.url)" class="menuBarItem" v-for="menu in $site.themeConfig.menu" v-bind:key="menu.title">
                    <div v-if="menu.url === $router.currentRoute.path"
                        class="menuItemSelect"
                    >
                        <span class="menuButton">{{ menu.title }}</span>
                    </div>
                    <div v-if="menu.url != $router.currentRoute.path"
                        class="menuItem"
                    >
                        <span class="menuButton">{{ menu.title }}</span>
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
        displayMenu: false,
    };
  },
  mounted() {
  },
  methods: {
    goto(url) {
        window.location.href = window.location.origin + url;
    },
    displayMenuFunction(){
        this.displayMenu = !this.displayMenu;
    }
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
    color: #3558A2;
    border-bottom: 2px solid #3558A2;
}
.menuItem:hover{
    background-color: #ebebeb;
}




.menuItemList{
    cursor: pointer;
    font-size: 18px;
    padding: 20px;
    line-height: 100%;
    font-weight: bold;
    border-bottom: 1px solid #ebebeb;
}


.menuItemListSelect{
    cursor: pointer;
    font-size: 18px;
    padding: 19px;
    line-height: 100%;
    color: #3558A2;
    border-bottom: 2px solid #3558A2;
    font-weight: bold;
}
.menuItemList:hover{
    cursor: pointer;
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
.menuBarItem{
    cursor: pointer;
}

.menuIcon{
    display: none;
}
.menuList{
    display: none;
}

@media screen and (max-width: 1150px) {
    .menuIcon {
        display: initial;
        cursor: pointer;
    }
    .menuList{
        display: initial;
    }
    .menuBar{
        display: none;
    }
}
</style>