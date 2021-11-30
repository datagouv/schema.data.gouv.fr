<template>
  <div>
    <div id="search-bar" class="rf-container rf-pb-6w rf-pt-2w">
        <br />
        <div class="search-bar" id="header-search">
            <input
                v-model="searchText"
                v-on:input="filterSchema()"
                class="rf-input-search"
                placeholder="Rechercher un schéma de données"
                type="search" id="header-search-input"
                name="header-search-input"
            >
            <button
              class="rf-button-search"
            ><img src="../../public/assets/loupe.png" width="22" /><span class="searchLabel">&nbsp;&nbsp;Rechercher</span></button>
        </div>
    </div>
    <br />
    <div class="labels">
      <div @mouseleave="hoverLabel = false" @mouseover="hoverLabel= true" class="titleFilter">Filtrer par label :</div>
      <div v-for="item in listLabels" v-bind:key="item" @click='selectLabel(item)'>
        <span v-if='item === labelSelected'>
          <div class="labelSelected">{{ item }}</div>
        </span>
        <span v-if='item != labelSelected'>
          <div class="labelNotSelected">{{ item }}</div>
        </span>
      </div>
    </div>
    <div v-if="hoverLabel" class='onTitleHover'>
      Sélectionner un label pour filtrer les schémas disponibles selon une thématique spécifique
    </div>
    <br />
    <div class="labels">
      <div @mouseleave="hoverStatut = false" @mouseover="hoverStatut= true" class="titleFilter">Filtrer par statut :</div>
      <div v-for="item in listStatus" v-bind:key="item" @click='selectStatus(item)'>
        <span v-if='item === statusSelected'>
          <div class="labelSelected">{{ item }}</div>
        </span>
        <span v-if='item != statusSelected'>
          <div class="labelNotSelected">{{ item }}</div>
        </span>
      </div>
    </div>
    <div v-if="hoverStatut" class='onTitleHoverStatut'>
      Sélectionner un statut pour filtrer les schémas disponibles selon leur état :
      <ul>
        <li>Adopté : Le schéma est publié et adopté car au moins 3 jeux de données associés à ce schéma sont publiés sur data.gouv.fr.</li>
        <li>Publié : Le schéma est publié mais encore peu utilisé.</li>
        <li>En construction : Le schéma est en cours d'élaboration.</li>
        <li>En investigation : Une idée de schéma a été soumise à la communauté.</li>
      </ul>
    </div>
    <br />
    <div class="boxes">
      <div
          class="box style-schema"
          v-for="schema in schemasToShow"
          :key="schema.name"
          @click="goto(schema)"
      >
          <div style="color: black;" class="box-header">
              {{ truncateText(schema.title,75) }}
          </div>
          <div v-if="option == 'description'">
            <div class="box-content2">{{ truncateText(schema.description,100) }}</div>
            <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
            {{ messageSchema }}
          </div>
      </div>
      <div class="noSchemaDiv" v-if="showButtons & schemasToShow.length === 0">
        <div class="noSchemaMessage" >{{ messageSchema }}</div>
        <div @click="gotoInternal('/contribuer.html')" class="addSchemaDiv">+ Ajouter un schéma</div>
      </div>
  </div>
  </div>
</template>

<script>

import latinize from 'latinize';

export default {
  name: "SchemaCards",
  props: [
    'option'
  ],
  data(){
    return{
      searchText: '',
      messageSchema: '',
      schemas: null,
      schemasToShow: [],
      stats: null,
      showButtons: false,
      schemasInfos: null,
      listLabels: ['Tous', 'Collectivités territoriales', 'Transport'],
      labelSelected: 'Tous',
      statusSelected: 'Tous',
      listStatus: ['Tous', 'Adopté', 'Publié', 'En construction', 'En investigation'],
      hoverLabel: false,
      hoverStatut: false,
    };
  },
  mounted() {
    
    var dataSchemas = require('../../public/schemas.json')
    var si = require('../../public/schema-infos.json')
    this.schemas = dataSchemas.schemas
    this.schemasInfos = si
    for(var key in si) {
      if(si[key]['labels'] != null){
        this.schemas.forEach((s) => {
          if(s.name == key){
            s.labels = si[key]['labels']
          }
        });
      }
    }
    let datafile = require('../../public/stats.json')

    this.schemas.forEach((s) => {
      s.schemaStatus = 'Publié'
      for(var key in datafile.references) {
        if(key == s.name){
          if(datafile.references[key]['dgv_resources'] >= 3){
            s.schemaStatus = 'Adopté'
          }
        }
      }
    });


    console.log(datafile.construction)
    datafile.construction.forEach((s) => {
      let schema_construction = {}
      schema_construction['title'] = s.title
      schema_construction['name'] = s.title
      schema_construction['url'] = s.url
      schema_construction['description'] = 'Schéma en construction'
      schema_construction['schemaStatus'] = 'En construction'
      this.schemas.push(schema_construction)
    });

    datafile.investigation.forEach((s) => {
      let schema_investigation = {}
      schema_investigation['title'] = s.title
      schema_investigation['name'] = s.title
      schema_investigation['url'] = s.url
      schema_investigation['description'] = 'Schéma en investigation'
      schema_investigation['schemaStatus'] = 'En investigation'
      this.schemas.push(schema_investigation)
    });


    this.schemasToShow = this.schemas.sort(function(a, b){
      var nameA=latinize(a.title), nameB=latinize(b.title);
      if (nameA < nameB) //sort string ascending
        if(a.schemaStatus != 'En construction' && a.schemaStatus != 'En investigation'){
          return -1;
        } else {
          return 1;
        }
      if (nameA > nameB)
        return 1;
      return 0; //default return value (no sorting)
    });
    var statsSchemas = require('../../public/stats.json')
    this.stats = statsSchemas



    if(this.$route.query.q){
      this.searchText = this.$route.query.q;
      this.filterSchema();
    }

    if(this.$route.query.label){
      this.labelSelected = this.$route.query.label
      this.selectLabel(this.labelSelected)
    }

    if(this.$route.query.statut){
      this.statusSelected = this.$route.query.statut
      this.selectStatus(this.statusSelected)
    }
    

  },
  methods: {
    reshapeUrl(){
      var newurl = window.location.origin + '/schemas.html?q=' +this.searchText

      if(this.labelSelected != 'Tous'){
        newurl = newurl + '&label=' + this.labelSelected
      }
      if(this.statusSelected != 'Tous'){
        newurl = newurl + '&statut=' + this.statusSelected
      }

      window.history.pushState({path:newurl},'',newurl);
    },
    selectStatus(item){
      this.statusSelected = item;
      let sts = []
      if(item != 'Tous'){
        console.log('ici')
        this.schemas.forEach((s) => {
          if(this.labelSelected == 'Tous'){
            if(s.schemaStatus == item){
              sts.push(s)
            }
          } else {
            if(s.schemaStatus == item && s.labels && s.labels.includes(this.labelSelected)){
              sts.push(s)
            }
          }
        });
      } else {
        if(this.labelSelected == 'Tous'){
          sts = this.schemas
        } else{
          this.schemas.forEach((s) => {
            if(s.labels && s.labels.includes(this.labelSelected)){
              sts.push(s)
            }
          });
          
        }
      }

      this.schemasToShow = sts.sort(function(a, b){
        var nameA=latinize(a.title), nameB=latinize(b.title);
        if (nameA < nameB) //sort string ascending
          if(a.schemaStatus != 'En construction' && a.schemaStatus != 'En investigation'){
            return -1;
          } else {
            return 1;
          }
        if (nameA > nameB)
          return 1;
        return 0; //default return value (no sorting)
      });

      if(this.searchText != ''){
        this.filterSchema();
      }

      this.reshapeUrl()
    },
    selectLabel(item){
      this.labelSelected = item;
      let sts = []
      if(item != 'Tous'){
        this.schemas.forEach((s) => {
          if(this.statusSelected == 'Tous'){
            if(s.labels && s.labels.includes(item)){
              sts.push(s)
            }
          } else {
            if(s.schemaStatus == this.statusSelected && s.labels && s.labels.includes(item)){
              sts.push(s)
            }
          }
        });
      } else {
        if(this.statusSelected == 'Tous'){
          sts = this.schemas
        } else{
          console.log('nn')
          this.schemas.forEach((s) => {
            if(s.schemaStatus == this.statusSelected){
              sts.push(s)
            }
          });
        }
      }

      this.schemasToShow = sts.sort(function(a, b){
        var nameA=latinize(a.title), nameB=latinize(b.title);
        if (nameA < nameB) //sort string ascending
          if(a.schemaStatus != 'En construction' && a.schemaStatus != 'En investigation'){
            return -1;
          } else {
            return 1;
          }
        if (nameA > nameB)
          return 1;
        return 0; //default return value (no sorting)
      });

      if(this.searchText != ''){
        this.filterSchema();
      }

      this.reshapeUrl()
    },
    truncateText(desc,length){
      if (desc.length > length) {
          return desc.slice(0,length)+' [...]';
      } 
      return desc;
    },
    goto(schema) {
      if(schema.schemaStatus == 'En construction' || schema.schemaStatus == 'En investigation'){
        window.location.href = schema.url
      } else {
        if(this.option && this.option == 'description') {
          this.$router.push(`${schema.name}`);
        }
        if(this.option && this.option == 'kpis') {
          window.location.href = 'https://www.data.gouv.fr/fr/datasets/?schema='+schema.name
        }
      }
    },
    gotoInternal(url) {
      window.location.href = window.location.origin + url;
    },
    filterSchema() {
      if (this.searchText !== '') {
        const obj = [];
        this.schemas.forEach((schema) => {
          if((this.statusSelected == 'Tous' || schema.schemaStatus == this.statusSelected) && (this.labelSelected == 'Tous' || (schema.labels && schema.labels.includes(this.labelSelected)))){
            if (latinize(schema.title.toLowerCase()).includes(latinize(this.searchText.toLowerCase()))) {
              obj.push(schema);
            }
          }
        });
        this.schemasToShow = obj;
        if (this.schemasToShow.length === 0) {
          this.messageSchema = 'Aucun schéma trouvé';
          this.showButtons = true;
        } else {
          this.messageSchema = '';
        }
      } else {
        this.schemasToShow = this.schemas;
      }
    },
  },
};
</script>

<style scoped>

.boxes{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.box{
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px;
  vertical-align: middle;
  width: 350px;
  cursor: pointer;
  font-weight: bold;
}



.style-schema{
  background-color: #f9f8f6;
  color: #666666;
}

.style-schema:hover{
 background-color: #e0dbd0; 
}

.box-header{
  width: 100%;
  padding-bottom: 20px;
  float: left;
  text-align: left;
  font-size: 18px;
  min-height: 100px;
}

.box-content{
  width: 100%;
  min-height: 200px;
  text-align: left;
  padding-top: 10px;
  font-size: 14px;
  font-weight: normal;
}

.box-content2{
  width: 100%;
  min-height: 180px;
  text-align: left;
  padding-top: 10px;
  font-size: 16px;
  font-weight: normal;
}


.rf-input{
  width: 100%;
  height: 40px;
  background-color: #ebebeb;
  border: 0px;
  padding: 10px;
  font-size: 18px;
  border-bottom: 2px solid #0000B7;
}

.noSchemaDiv{
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
}

.noSchemaMessage{
  background-color: #ebebeb;
  padding: 10px;
  border-radius: 15px;
  float: left;
  margin-right: 30px;
  border: 2px solid #ebebeb;
}
.addSchemaDiv{
  border: 2px solid #000091;
  float: left;
  padding: 10px;
  border-radius: 15px;
  color: #000091;
  cursor: pointer;
}
.search-bar{
  display: flex;
}
.rf-input-search{
  background-color: #ebebeb;
  margin: 0px;
  width: 80%;
  border: 0px;
  border-bottom: 2px solid #000091;
  font-size: 16px;
  border-top-left-radius: 5px;
  padding-left: 15px;
}
.rf-button-search{
  background-color: #000091;
  color: white;
  padding: 15px;
  margin: 0px;
  width: 20%;
  font-size: 20px;
  border-top-right-radius: 5px;
}


@media screen and (max-width: 950px) {
    .searchLabel{
      display: none;
    }
}

.labels{
  display: flex;
}

.titleFilter{
  margin-right: 15px;
  padding: 7px;
  font-size: 13px;
  border-radius: 15px;
  color: #000091;
  text-decoration: underline dotted;
}

.titleFilter{
  cursor: help;
}

.labelSelected{
  margin-right: 15px;
  padding: 7px;
  background-color: #000091;
  border-radius: 15px;
  color: white;
  font-size: 13px;
}
.labelNotSelected{
  margin-right: 15px;
  padding: 7px;
  background-color: #ECEDFE;
  border-radius: 15px;
  color: #000091;
  font-size: 13px;
}

.labelNotSelected:hover{
  background-color: #CCCCFF;
  cursor: pointer;
}

.onTitleHover{
  margin-top: 5px;
  width: 250px;
  background-color: #444444;
  position: absolute;
  color: white;
  cursor: help;
  font-size: 11px;
  padding: 15px;
  border-radius: 10px;
}

.onTitleHoverStatut{
  margin-top: 5px;
  width: 450px;
  background-color: #444444;
  position: absolute;

  color: white;
  cursor: help;
  font-size: 11px;
  padding: 10px;
  border-radius: 10px;
}

</style>