<template>
  <div>
      <div v-if="schema_infos_metier && schema_infos_metier['datapackage_name']">
        <br />
         <button
            class="fr-btn--secondary"
            @click="gotoPage(schema_infos_metier['datapackage_name'])"
         >
            <img src="../../public/assets/arrow-left.png" width="12" />&nbsp;&nbsp;Retour à la page principale
         </button>
      </div>
      <div v-if="schema_infos && schema_infos['schemas'] && schema_infos['schemas'].length > 0">
        <br />
        <h1>{{ schema_infos_metier['title'] }}</h1>
        {{ schema_infos_metier['description'] }}
        <br />
        Liste des schémas contenus dans ce data package :
        <div class="boxes">
            <div v-for="schema in all_schemas['schemas']" :key="schema.name">
                <span v-if="schema_infos['schemas'].includes(schema.name)">
                    <div
                        class="box style-schema"
                        @click="gotoPage(schema.name)"
                    >
                        
                        <div style="color: black;" class="box-header">
                            {{ truncateText(schema.title,75) }}
                        </div>
                        <div>
                            <div class="box-content2">{{ truncateText(schema.description,100) }}</div>
                            <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
      </div>
      <div v-if="schema_infos && version">
        <br />
        <div class="externalActions">
                <span v-if="!schema_infos['schemas']">
                    <span v-if="schema_infos['external_doc']">
                        <button
                            class="fr-btn"
                            @click="gotoExternalLink(schema_infos['external_doc'])"
                        >
                            <img src="../../public/assets/file.png" width="15" />&nbsp;
                            Documentation externe
                        </button>
                    </span>           
                    <span v-if="schema_infos['external_tool']">
                        <button 
                            class="fr-btn"
                            @click="gotoExternalLink(schema_infos['external_tool'])"
                        >
                            <img src="../../public/assets/pencil.png" width="15" />&nbsp;
                            Saisir des données
                        </button>
                    </span>     
                    <span v-if="schema && schema_infos['type'] == 'tableschema'">
                        <button
                            class="fr-btn"
                            @click="gotoExternalLink('https://publier.etalab.studio/fr/select?schema='+schema)"
                        >
                            <img src="../../public/assets/pencil.png" width="15" />&nbsp;
                            Saisir ou valider mes données
                        </button>
                    </span>     
                    <button 
                        @click="gotoSchema()" 
                        class="fr-btn"
                    >
                        <img src="../../public/assets/gear.png" width="15" />&nbsp;
                        Schéma
                    </button>
                    <button 
                        @click="gotoExternalLink('https://www.data.gouv.fr/datasets/search?schema='+schema)" 
                        class="fr-btn"
                    >
                        <img src="../../public/assets/database.png" width="15" />&nbsp;
                        Données
                    </button>
                    <button 
                        @click="gotoRSS()" 
                        class="fr-btn"
                        :title="hoverText"
                    >
                        <img src="../../public/assets/info-white.png" width="15" />&nbsp;
                        RSS
                    </button>
                </span>
                <button 
                    @click="gotoExternalLink(schema_infos['homepage'])" 
                    class="fr-btn"
                >
                    <img src="../../public/assets/commit-git.png" width="15" />&nbsp;
                    Git
                </button>
        </div>
        <br />
        
        <div class="boxes">
            <div class="box-left">
                
                <button 
                    @click="gotoInternal('')" 
                    class="ongletItem"
                    :style="this.pageInfo ? 'background-color: var(--bf200-bf300); border-top: 1px solid #3558A2; border-left: 1px solid #3558A2; border-right: 1px solid #3558A2;' : ''"
                >
                    <img src="../../public/assets/info.png" width="15" />&nbsp;
                    Informations
                </button>
                <span v-if="schema_infos['versions'][version]['pages'].includes('documentation.md')">
                    <button 
                        class="ongletItem"
                        :style="this.pageDoc ? 'background-color: var(--bf200-bf300); border-top: 1px solid #3558A2; border-left: 1px solid #3558A2; border-right: 1px solid #3558A2;' : ''"
                        @click="gotoInternal('documentation.html')"
                    >
                        <img src="../../public/assets/file-blue.png" width="15" />&nbsp;
                        Documentation
                    </button>
                </span>
                <span v-if="schema_infos['versions'][version]['pages'].includes('CHANGELOG.md')">
                    <button 
                        @click="gotoInternal('CHANGELOG.html')"
                        class="ongletItem"
                        :style="this.pageChange ? 'background-color: var(--bf200-bf300); border-top: 1px solid #3558A2; border-left: 1px solid #3558A2; border-right: 1px solid #3558A2;' : ''"
                    >
                        <img src="../../public/assets/couple-de-fleches-changeant-de-place.png" width="15" />&nbsp;
                        Changements
                    </button>
                </span>
                <span v-if="schema_infos['versions'][version]['pages'].includes('sources.md')">
                    <button 
                        class="ongletItem"
                        :style="this.pageSources ? 'background-color: var(--bf200-bf300); border-top: 1px solid #3558A2; border-left: 1px solid #3558A2; border-right: 1px solid #3558A2;' : ''"
                        @click="gotoInternal('sources.html')"
                    >
                        <img src="../../public/assets/book-marked-line.png" width="15" />&nbsp;
                        Réglementation
                    </button>
                </span>
            </div>
            <div class="box-right">
                Version du schéma :
                <select class="fr-select-custom" @change="changeVersion()" v-model="optionSelect" >
                    <option :selected="version == key" v-for="(value, key) in schema_infos.versions" v-bind:key="key" :value="key">{{ key }}</option>
                </select>
            </div>
        </div>
      </div>
      <br />
      <br />
  </div>
</template>

<script>

export default {
  name: "MenuSchema",
  data() {
    return {
        schema_infos: null,
        schema_infos_metier: null,
        all_schemas: null,
        schema: null,
        version: null,
        optionSelect: null,
        pageInfo: false,
        pageDoc: false,
        pageChange: false,
        pageSources: false,
        hoverText: 'Cliquer pour copier',
    };
  },
  computed: {
  },
  mounted() {
      const si = require('../../public/schema-infos.json');
      const sch = require('../../public/schemas.json');
      //this.schema = this.$router.currentRoute.path.split('/')[1]+"/"+this.$router.currentRoute.path.split('/')[2]
      this.all_schemas = sch;
      const regex = '^(0|[1-9]d*).(0|[1-9]d*).(0|[1-9]d*)'
      for (const [key, value] of Object.entries(si)) {
        if(this.$router.currentRoute.path.includes(key)) {
            this.schema = key
            this.schema_infos = value;
            if(this.$router.currentRoute.path.split(key)[1].split('/')[1].match(regex)){
                this.version = this.$router.currentRoute.path.split(key)[1].split('/')[1].replace('.html','')
            } else {
                this.version = this.schema_infos['latest']
            }
        }
      }
      
      var last = this.$router.currentRoute.path.split('/')[this.$router.currentRoute.path.split('/').length - 1]
      if(last == 'documentation.html'){
        this.pageDoc = true
      } else if(last == 'CHANGELOG.html'){
        this.pageChange = true
      } else if(last == 'sources.html'){
        this.pageSources = true
      } else {
          this.pageInfo = true
      }
      this.optionSelect = this.version

      this.all_schemas['schemas'].forEach((s) => {
        if (s.name === this.schema){
            this.schema_infos_metier = s
        }
      });
      
  },
  methods: {
      gotoPage(schema){
         window.location.href = window.location.origin + '/' + schema + '/'
      },
      gotoInternal(page){
          let link = '/'+this.schema+'/'+this.version+'/'+page
          if (this.$router.currentRoute.path !== link) this.$router.push(link)
      },
      gotoSchema(){
        window.location.href = window.location.origin + '/schemas' + this.schema_infos['versions'][this.version]['schema_url']
      },
      gotoExternalLink(link){
        window.location.href = link
      },
      changeVersion(){
          let link = '/'+this.schema+'/'+this.optionSelect+'/'
          if (this.$router.currentRoute.path !== link) this.$router.push(link)
      },
      truncateText(desc,length){
        if (desc.length > length) {
            return desc.slice(0,length)+' [...]';
        } 
        return desc;
      },
      gotoRSS(){
         const _ = require('lodash')
          window.location.href = window.location.origin + '/rss/' + _.trim(this.$router.currentRoute.path, "/").split('/').slice(0, 2).join('/').replace(/\//, '_') + '.xml'
      },
  },
};
</script>

<style>

.ongletItem{
    padding: 15px;
    background-color: white;
    margin-right: 0px;
    border-top-left-radius: 5px;

}
.ongletItem:hover{
    background-color: var(--bf200-bf300); 
    border-top: 1px solid var(--bf200-bf300); 
    border-left: 1px solid var(--bf200-bf300); 
    border-right: 1px solid var(--bf200-bf300);
}

.externalActions{
    width: 100%;
    text-align: right;
}

.boxes{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.box-right{
  width: 25%;
  font-size: 16px;
  text-align: right;
  line-height: 40px;
}
.box-left{
  width: 75%;
  display: flex;
  border-bottom: 1px solid #3558A2;
}

.fr-select-custom{
    color: var(--g800);
    background-color: var(--g200);
    box-shadow: inset 0 -2px 0 0 var(--g600);
    border: 0px;
    width: 100px;
    height: 40px;
    font-size: 18px;
    margin-left: 20px;
}

.fr-btn{
    margin-bottom: 20px;
}

.fr-btn--secondary{
    padding: 10px;
    line-height: 20px;
    font-size: 16px;
}


@media screen and (max-width: 1200px) {
    .fr-btn{
        width: 100%;
    }
    .box-right{
        width: 100%;
    }
    .box-left{
        width: 100%;
        margin-bottom: 20px;
    }
}


.boxes{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.box{
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 20px;
  padding-bottom: 30px;
  vertical-align: middle;
  width: 350px;
  cursor: pointer;
  font-weight: bold;
}


.style-schema{
  background-color: #f9f8f6;
  color: #666666;
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
</style>
