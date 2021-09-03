<template>
    <div class="pb">
        <div class="pbHeader">
            Comment ça marche ?
        </div>
        <div class="pbBoxes">
            <div v-for="pbbox in $site.themeConfig.presentationBox" v-bind:key="pbbox.text" class="pbBox" @click="goto(pbbox.url)">
                <div class="pbBoxImage">
                     <img :src="pbbox.img" width="45" />
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
.pb{
    height: 430px;
}
.pbBoxes{
    display: flex;
}
.pbHeader{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
}
.pbBox{
    width: 250px;
    height: 220px;
    background-color: #ebebeb;
    margin: auto;
    border-bottom: 5px solid #000091;
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
    text-align: center;
}
</style>