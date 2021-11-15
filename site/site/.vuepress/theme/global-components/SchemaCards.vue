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
    <div class="badges">
      <div @mouseleave="hoverBadge = false" @mouseover="hoverBadge= true" class="titleFilter">Filtrer par badge :</div>
      <div v-for="item in listBadges" v-bind:key="item" @click='selectBadge(item)'>
        <span v-if='item === badgeSelected'>
          <div class="badgeSelected">{{ item }}</div>
        </span>
        <span v-if='item != badgeSelected'>
          <div class="badgeNotSelected">{{ item }}</div>
        </span>
      </div>
    </div>
    <div v-if="hoverBadge" class='onTitleHover'>
      Sélectionner un badge pour filtrer les schémas disponibles selon une thématique spécifique
    </div>
    <br />
    <div class="badges">
      <div @mouseleave="hoverStatut = false" @mouseover="hoverStatut= true" class="titleFilter">Filtrer par statut :</div>
      <div v-for="item in listStatus" v-bind:key="item" @click='selectStatus(item)'>
        <span v-if='item === statusSelected'>
          <div class="badgeSelected">{{ item }}</div>
        </span>
        <span v-if='item != statusSelected'>
          <div class="badgeNotSelected">{{ item }}</div>
        </span>
      </div>
    </div>
    <div v-if="hoverStatut" class='onTitleHoverStatut'>
      Sélectionner un statut pour filtrer les schémas disponibles selon leur état :
      <ul>
        <li>Publié et utilisé : Le schéma est publié et au moins 3 jeux de données associés à ce schéma sont publiés sur data.gouv.fr.</li>
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
      listBadges: ['Tous'],
      badgeSelected: 'Tous',
      statusSelected: 'Tous',
      listStatus: ['Tous', 'Publié et Utilisé', 'Publié', 'En construction', 'En investigation'],
      hoverBadge: false,
      hoverStatut: false,
    };
  },
  mounted() {
    var dataSchemas = require('../../public/schemas.json')
    var si = require('../../public/schema-infos.json')
    this.schemas = dataSchemas.schemas
    this.schemasInfos = si
    for(var key in si) {
      if(si[key]['badges'] != null){
        si[key]['badges'].forEach((b) => {
          if(!this.listBadges.includes(b)){
            this.listBadges.push(b);
          }
        });
        this.schemas.forEach((s) => {
          if(s.name == key){
            s.badges = si[key]['badges']
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
            s.schemaStatus = 'Publié et Utilisé'
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
  },
  methods: {
    selectStatus(item){
      this.statusSelected = item;
      let sts = []
      if(item != 'Tous'){
        console.log('ici')
        this.schemas.forEach((s) => {
          if(this.badgeSelected == 'Tous'){
            if(s.schemaStatus == item){
              sts.push(s)
            }
          } else {
            if(s.schemaStatus == item && s.badges && s.badges.includes(this.badgeSelected)){
              sts.push(s)
            }
          }
        });
      } else {
        if(this.badgeSelected == 'Tous'){
          sts = this.schemas
        } else{
          this.schemas.forEach((s) => {
            if(s.badges && s.badges.includes(this.badgeSelected)){
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

    },
    selectBadge(item){
      this.badgeSelected = item;
      let sts = []
      if(item != 'Tous'){
        this.schemas.forEach((s) => {
          if(this.statusSelected == 'Tous'){
            if(s.badges && s.badges.includes(item)){
              sts.push(s)
            }
          } else {
            if(s.schemaStatus == this.statusSelected && s.badges && s.badges.includes(item)){
              sts.push(s)
            }
          }
        });
      } else {
        console.log('toto')
        if(this.statusSelected == 'Tous'){
          console.log('totdo')
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
          if((this.statusSelected == 'Tous' || schema.schemaStatus == this.statusSelected) && (this.badgeSelected == 'Tous' || (schema.badges && schema.badges.includes(this.badgeSelected)))){
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

.badges{
  display: flex;
}

.titleFilter{
  margin-right: 15px;
  padding: 7px;
  font-size: 13px;
  background-color: #F2F2F9;
  border-radius: 15px;
  color: #000091;
}

.titleFilter{
  cursor: help;
}

.badgeSelected{
  margin-right: 15px;
  padding: 7px;
  background-color: #000091;
  border-radius: 15px;
  color: white;
  font-size: 13px;
}
.badgeNotSelected{
  margin-right: 15px;
  padding: 7px;
  background-color: #ECEDFE;
  border-radius: 15px;
  color: #000091;
  font-size: 13px;
}

.badgeNotSelected:hover{
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