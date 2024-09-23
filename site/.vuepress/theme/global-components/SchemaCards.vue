<template>
  <div>
    <div v-if="!this.datapackageSelected != ''">
      <div id="search-bar" class="rf-container rf-pb-6w rf-pt-2w">
          <br />
          <div class="search-bar" id="header-search">
              <input
                  v-model="searchText"
                  v-on:input="manageCardsToShow()"
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
        Les labels permettent de filtrer les schémas selon une classification particulière. Aujourd'hui, deux labels sont disponibles : 
        <ul>
          <li>
            <b>CNIG</b>, qui liste les schémas labellisés par le Conseil National de l'Information Labellisé (CNIG). A date, cette liste recense uniquement les schémas de données labellisés par le CNIG au format TableSchema. Pour visiter l'ensemble des schémas du CNIG, se rendre sur cnig.gouv.fr.
          </li>
          <li>
            <b>Socle Commun des Données Locales</b>, qui liste les schémas à destination des collectivités territoriales dont la publication des données est considérée comme prioritaire,
          </li>
          <li>
            <b>transport.data.gouv.fr</b>, qui liste les schémas mis en avant par transport.data.gouv.fr, relatifs à la mobilité et aux transports.
          </li>
          <li>
            <b>Documents dématérialisés d’urbanisme</b>, qui liste les schémas labellisés par le CNIG comme relevant des Ressources Dématérialisation Documents d’Urbanisme (cf. https://cnig.gouv.fr/ressources-dematerialisation-documents-d-urbanisme-a2732.html).
          </li>
        </ul>
        Les schémas labellisés garantissent une portée de mise en œuvre à l'échelle nationale et ce de façon durable, de schémas réalisés ou supervisés, et maintenables par des structures publiques de référence à l'échelle nationale.
      </div>
      <br />
      <div class="labels">
        <div @mouseleave="hoverStatut = false" @mouseover="hoverStatut= true" class="titleFilter">Filtrer par statut :</div>

        <div @click="selectStatus('Tous')" v-bind:class="statusSelected === 'Tous' ? 'statutSelected tousSelected' : 'statutNotSelected tousNotSelected'">Tous</div>
        <div  @click="selectStatus('Adopté')" v-bind:class="statusSelected === 'Adopté' ? 'statutSelected adopteSelected' : 'statutNotSelected adopteNotSelected'">Adopté</div>
        <div  @click="selectStatus('Publié')" v-bind:class="statusSelected === 'Publié' ? 'statutSelected publieSelected' : 'statutNotSelected publieNotSelected'">Publié</div>
        <div  @click="selectStatus('En construction')" v-bind:class="statusSelected === 'En construction' ? 'statutSelected constructionSelected' : 'statutNotSelected constructionNotSelected'">En construction</div>
        <div  @click="selectStatus('En investigation')" v-bind:class="statusSelected === 'En investigation' ? 'statutSelected  investigationSelected' : 'statutNotSelected investigationNotSelected'">En investigation</div>

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
      <div class="labels">
        <div @mouseleave="hoverType = false" @mouseover="hoverType= true" class="titleFilter">Filtrer par type de standard :</div>

        <div @click="selectType('Tous')" v-bind:class="typeSelected === 'Tous' ? 'statutSelected tousSelected' : 'statutNotSelected tousNotSelected'">Tous</div>
        <div  @click="selectType('tableschema')" v-bind:class="typeSelected === 'tableschema' ? 'statutSelected adopteSelected' : 'statutNotSelected tableschemaNotSelected'">TableSchema</div>
        <div  @click="selectType('datapackage')" v-bind:class="typeSelected === 'datapackage' ? 'statutSelected publieSelected' : 'statutNotSelected datapackageNotSelected'">Data Package</div>
        <div  @click="selectType('jsonschema')" v-bind:class="typeSelected === 'jsonschema' ? 'statutSelected constructionSelected' : 'statutNotSelected jsonschemaNotSelected'">JsonSchema</div>
        <div  @click="selectType('other')" v-bind:class="typeSelected === 'other' ? 'statutSelected  investigationSelected' : 'statutNotSelected otherSelected'">Autres</div>

      </div>
      <div v-if="hoverType" class='onTitleHoverStatut'>
        Sélectionner un standard pour filtrer les schémas disponibles selon leur état :
        <ul>
          <li>TableSchema : Standardisation de fichiers tabulaires (https://specs.frictionlessdata.io//table-schema/).</li>
          <li>Data Package : Groupement de plusieurs TableSchemas (modèle de données).</li>
          <li>JsonSchema : Standardisation d'un fichier en arborescence (https://json-schema.org/).</li>
          <li>Autres standards, ou standards non retranscrits techniquement.</li>
        </ul>
      </div>
      <br />
    </div>
    <div v-else>
      <span class="labelNotSelected" @click="resetDataPackage()">Revenir à l'ensemble des schémas</span>
      <br /><br />Vous avez sélectionné le data package <b><i>{{ this.schemasToShow[0]['datapackage_title'] }}</i></b>
    </div>
    <div class="boxes">
      <div
          v-for="schema in schemasToShow"
          v-bind:key="schema.name"
      >
        <div
           v-if="!schema.cardType"
           class="box style-schema"
          @click="goto(schema)"
        >
          <div style="color: black;" class="box-header">
              {{ truncateText(schema.title,75) }}
          </div>
          <div v-if="option == 'description'">
            <div class="box-content2">{{ truncateText(schema.description,100) }}</div>
            <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
            {{ messageSchema }}
            <span v-if="schema.schema_type === 'tableschema'" class="statutSelected adopteSelected">
              TableSchema
            </span>
            <span v-if="schema.schema_type === 'datapackage'" class="statutSelected publieSelected">
              Data Package
            </span>
            <span v-if="schema.schema_type === 'jsonschema'" class="statutSelected constructionSelected">
              JsonSchema
            </span>
            <span v-if="schema.schema_type === 'other'" class="statutSelected investigationSelected">
              Autre
            </span>
            <span v-if="schema.schemaStatus === 'Adopté'" class="statutSelected adopteSelected">
              {{ schema.schemaStatus }}
            </span>
            <span v-if="schema.schemaStatus === 'Publié'" class="statutSelected publieSelected">
              {{ schema.schemaStatus }}
            </span>
            <span v-if="schema.schemaStatus === 'En construction'" class="statutSelected constructionSelected">
              {{ schema.schemaStatus }}
            </span>
            <span v-if="schema.schemaStatus === 'En investigation'" class="statutSelected investigationSelected">
              {{ schema.schemaStatus }}
            </span>
          </div>
        </div>
        <div
          v-else
           class="box style-datapackage"
          @click="selectDatapackage(schema.name)"
        >
          <div style="color: black;" class="box-header">
              {{ truncateText(schema.title,75) }}
          </div>
          <div v-if="option == 'description'">
            <div class="box-content2">{{ truncateText(schema.description,100) }}</div>
            <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
            {{ messageSchema }}
            <span>
              &nbsp;
            </span>
          </div>
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
      schemas: 5,
      schemasToShow: [],
      stats: null,
      showButtons: false,
      schemasInfos: null,
      listLabels: ['Tous', 'CNIG', 'Socle Commun des Données Locales', 'transport.data.gouv.fr', 'Documents dématérialisés d’urbanisme'],
      labelSelected: 'Tous',
      statusSelected: 'Tous',
      typeSelected: 'Tous',
      listStatus: ['Tous', 'Adopté', 'Publié', 'En construction', 'En investigation'],
      hoverLabel: false,
      hoverStatut: false,
      hoverType: false,
      listDatapackages: [],
      datapackageSelected: '',
    };
  },
  mounted() {
    this.schemasToShow = []
    this.schemas = []
    this.schemasInfos = null
    var dataSchemas = null 
    dataSchemas = require('../../public/schemas.json')

    var si = require('../../public/schema-infos.json')
    this.schemasInfos = si

    for(var key in si) {
      if(si[key]['labels'] != null){
        dataSchemas.schemas.forEach((s) => {
          if(s.name == key){
            s.labels = si[key]['labels']
          }
        });
      }
    }

    for(var key in si) {
      if(si[key]['type'] != null){
        dataSchemas.schemas.forEach((s) => {
          if(s.name == key){
            s.schema_type = si[key]['type']
          }
        });
      }
    }
    let datafile = require('../../public/stats.json')
    

    dataSchemas.schemas.forEach((s) => {
      s.schemaStatus = 'Publié'
      for(var key in datafile.references) {
        if(key == s.name){
          if(datafile.references[key]['dgv_resources'] >= 3){
            s.schemaStatus = 'Adopté'
          }
        }
      }
    });

    dataSchemas.schemas.forEach((s) => {
      this.schemas.push(s)
    })

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


    if(this.$route.query.q){
      this.searchText = this.$route.query.q;
    }

    if(this.$route.query.label){
      this.labelSelected = this.$route.query.label
    }

    if(this.$route.query.statut){
      this.statusSelected = this.$route.query.statut
    }

    if(this.$route.query.type){
      this.typeSelected = this.$route.query.type
    }

    if(this.$route.query.datapackage){
      this.datapackageSelected = this.$route.query.datapackage
    }

    this.manageCardsToShow()

    var statsSchemas = require('../../public/stats.json')
    this.stats = statsSchemas
  },
  methods: {
    resetDataPackage(){
      this.datapackageSelected = '';
      this.manageCardsToShow();
    },
    manageCardsToShow(){
      this.schemasToShow = []
      this.listDatapackages = []

      var sts = []
      if (this.labelSelected != 'Tous'){
        this.schemas.forEach((s) => {
          if ((s['labels']) && (s['labels'].includes(this.labelSelected))){
            sts.push(s)
          }
        });
      } else {
        sts = this.schemas;
      }
      var sts2 = []
      if(this.statusSelected != 'Tous'){
        sts.forEach((s) => {
          if(s['schemaStatus'] == this.statusSelected){
            sts2.push(s)
          }
        });
      } else{
        sts2 = sts
      }
      
      var sts3 = []
      if(this.datapackageSelected != ''){
        sts2.forEach((s) => {
          if((s['datapackage_name']) && (s['datapackage_name'] == this.datapackageSelected)){
            sts3.push(s)
          }
        });
      } else{
        sts2.forEach((s) => {
          if(!s['datapackage_name']){
            sts3.push(s)
          } else{
            if(!this.listDatapackages.includes(s['datapackage_name'])){
              this.listDatapackages.push(s['datapackage_name'])
            }
          }
        });
      }

      var sts4 = []
      if(this.searchText != ''){
        sts3.forEach((s) => {
          if (
            latinize(s.title.toLowerCase()).includes(latinize(this.searchText.toLowerCase()))
            || latinize(s.description.toLowerCase()).includes(latinize(this.searchText.toLowerCase()))
          ) {
            sts4.push(s);
          }
        });
      } else{
        sts4 = sts3
      }
      var sts5 = []
      if(this.typeSelected != 'Tous'){
        sts4.forEach((s) => {
          if(s['schema_type'] == this.typeSelected){
            sts5.push(s)
          }
        });
      } else{
        sts5 = sts4
      }

      this.schemasToShow = sts5;

      this.schemasToShow = this.schemasToShow.sort(function(a, b){
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

      if (this.schemasToShow.length === 0) {
        this.messageSchema = 'Aucun schéma trouvé';
        this.showButtons = true;
      } else {
        this.messageSchema = '';
      }
    },
    reshapeUrl(reload){
      var newurl = window.location.origin + '/schemas.html?q=' +this.searchText
      if(this.labelSelected != 'Tous'){
        newurl = newurl + '&label=' + this.labelSelected
      }
      if(this.statusSelected != 'Tous'){
        newurl = newurl + '&statut=' + this.statusSelected
      }
      if(this.typeSelected != 'Tous'){
        newurl = newurl + '&type=' + this.typeSelected
      }
      if(this.datapackageSelected != ''){
        newurl = newurl + '&datapackage=' + this.datapackageSelected
      }

      if(reload){
        window.location.href = newurl
      }else{
        window.history.pushState({path:newurl},'',newurl);
      }
    },
    selectDatapackage(item){
      this.datapackageSelected = item;
      this.reshapeUrl(true);
    },
    selectStatus(item){
      this.statusSelected = item;
      this.manageCardsToShow();
      this.reshapeUrl(false);
    },
    selectType(item){
      this.typeSelected = item;
      this.manageCardsToShow();
      this.reshapeUrl(false);
    },
    selectLabel(item){
      this.labelSelected = item;
      this.manageCardsToShow();
      this.reshapeUrl(false);
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
          this.$router.push(`${schema.name}`).catch(() => {});
        }
        if(this.option && this.option == 'kpis') {
          window.location.href = 'https://www.data.gouv.fr/fr/datasets/?schema='+schema.name
        }
      }
    },
    gotoInternal(url) {
      window.location.href = window.location.origin + url;
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

.style-datapackage{
  background-color: #ECEDFE;
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
  border: 2px solid #3558A2;
  float: left;
  padding: 10px;
  border-radius: 15px;
  color: #3558A2;
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
  border-bottom: 2px solid #3558A2;
  font-size: 16px;
  border-top-left-radius: 5px;
  padding-left: 15px;
}
.rf-button-search{
  background-color: #3558A2;
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
  color: #3558A2;
  text-decoration: underline dotted;
}

.titleFilter{
  cursor: help;
}

.labelSelected{
  margin-right: 15px;
  padding: 7px;
  background-color: #3558A2;
  border-radius: 15px;
  color: white;
  font-size: 13px;
}
.labelNotSelected{
  margin-right: 15px;
  padding: 7px;
  background-color: #ECEDFE;
  border-radius: 15px;
  color: #3558A2;
  font-size: 13px;
}

.labelNotSelected:hover{
  background-color: #CCCCFF;
  cursor: pointer;
}

.statutSelected{
  margin-right: 15px;
  padding: 7px;
  border-radius: 15px;
  font-size: 13px;
}
.statutNotSelected{
  margin-right: 15px;
  padding: 7px;
  border-radius: 15px;
  font-size: 13px;
  background-color: #ECEDFE;
  color: #3558A2;
}

.statutNotSelected:hover{
  cursor: pointer;
}

.tousSelected{
  background-color: #3558A2;
  color: white;
}
.adopteSelected{
  background-color: #CCE2D8;
  color: #005B30;
  font-weight: bold;
}

.publieSelected{
  background-color: #DBD5E8;
  color: #3D2375;
  font-weight: bold;
}

.constructionSelected{
  background-color: #FFF7BF;
  color: #584D00;
  font-weight: bold;
}
.investigationSelected{
  background-color: #FCD6C3;
  color: #6E3619;
  font-weight: bold;
}





.onTitleHover{
  margin-top: 5px;
  width: 450px;
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
