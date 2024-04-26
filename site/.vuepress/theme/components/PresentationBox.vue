<template>
    <div class="pb">
        <div class="pbHeader">
            Comment ça marche ?
        </div>
        <div class="pbBoxes">
            <div v-for="pbbox in $site.themeConfig.presentationBox" v-bind:key="pbbox.text" class="pbBox" @click="goto(pbbox.url)">
                <div class="pbBoxImage">
                     <img :src="pbbox.img" width="50" />
                </div>
                <div class="pbBoxText">
                    {{ pbbox.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "PresentationBox",
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

<style scoped>

.pbBoxes{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
}
.pbHeader{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
}
.pbBox{
    width: 320px;
    height: 220px;
    background-color: #ebebeb;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
    border-bottom: 5px solid #3558A2;
    cursor: pointer;
}
.pbBoxImage{
    width: 100%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 30px;
}
.pbBoxText{
    margin-bottom: 20px;
    margin-right: 20px;
    margin-left: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 10px

}
</style>