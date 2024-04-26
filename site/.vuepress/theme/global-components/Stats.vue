<template>
    <div class="pb">
        <div class="pbHeader">
            Général
        </div>
        <div class="pbBoxes">
            <div class="pbBox">
                <div @click="goto('/encours.html')" class="pbBoxImage">
                     {{ investigation }}
                </div>
                <div class="pbBoxText">
                    Schémas en investigation
                </div>
            </div>
            <div  @click="goto('/encours.html')" class="pbBox">
                <div class="pbBoxImage">
                     {{ construction }}
                </div>
                <div class="pbBoxText">
                     Schémas en construction
                </div>
            </div>
            <div  @click="goto('/schemas.html')" class="pbBox">
                <div class="pbBoxImage">
                     {{ references }}
                </div>
                <div class="pbBoxText">
                    Schémas référencés officiellement
                </div>
            </div>
        </div>
        <br /><br />
        <div class="pbBoxes">
            <div class="pbBox">
                <div  @click="goto('https://github.com/etalab/schema.data.gouv.fr/issues')" class="pbBoxImage">
                     {{ nb_issues }}
                </div>
                <div class="pbBoxText">
                    Tickets ouverts sur le repo Github
                </div>
            </div>
            <div  @click="goto('https://www.data.gouv.fr')" class="pbBox">
                <div class="pbBoxImage">
                     {{ nb_datasets }}
                </div>
                <div class="pbBoxText">
                    Jeux de données disponibles sur data.gouv.fr
                </div>
            </div>
            <div class="pbBox">
                <div class="pbBoxImage">
                     {{ nb_contributors }}
                </div>
                <div class="pbBoxText">
                    Contributeurs sur la construction de schémas
                </div>
            </div>
        </div>
        <br /><br />
        <div class="pbHeader">
            Par schéma
        </div>
            <div class="statsSchemas" v-for="(value, key) in jdd" v-bind:key="key">
                <div  @click="goto('https://www.data.gouv.fr/fr/datasets?schema='+key)" class="encartJDD" >{{ value['dgv_resources'] }} jeux de données</div>
                <div @click="goto('/'+key)" class="nameJDD" >{{ value['title']}}</div>
            </div>
    
    </div>
</template>

<script>

export default {
  name: "Stats",
  props: [
  ],
  data(){
    return{
        investigation: 0,
        construction: 0,
        references: 0,
        nb_contributors: 0,
        nb_issues: 0,
        nb_datasets: 0,
        jdd: null,
    };
  },
  mounted() {
      let datafile = require('../../public/stats.json')
      this.investigation = datafile['investigation'].length
      this.construction = datafile['construction'].length
      this.references = Object.keys(datafile['references']).length
      let nb_datasets = 0
      let nb_contributors = 0
      
      this.jdd = datafile['references']
      for (const [key, value] of Object.entries(datafile['references'])) {
        nb_contributors = nb_contributors + datafile['references'][key]['contributors']
        nb_datasets = nb_datasets + datafile['references'][key]['dgv_resources']
      }
      this.nb_contributors = nb_contributors
      this.nb_datasets = nb_datasets
      this.nb_issues = datafile['nb_issues']
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
}
.pbHeader{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
}
.pbBox{
    width: 180px;
    height: 150px;
    background-color: #ebebeb;
    margin: auto;
    border-bottom: 5px solid #3558A2;
    cursor: pointer;
}
.pbBoxImage{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 40px;
    color: #3558A2;
}
.pbBoxText{
    margin-bottom: 20px;
    text-align: center;
}

.encartJDD{
    width: 180px;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;
    background-color: #3558A2;
    border-radius: 5px;
    float: left;
    cursor: pointer;
}
.nameJDD{
    float: left;
    cursor: pointer;
    color: #3558A2;
}
.nameJDD:hover{
    text-decoration: underline;
}

.statsSchemas{
    width: 100%;
    padding-left: 200px;
    height: 20px;
    text-align: center;
    margin-bottom: 20px;
}
</style>