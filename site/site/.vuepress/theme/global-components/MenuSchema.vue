<template>
  <div>
      <div v-if="schema_infos && version">
        <br />
        <div class="externalActions">
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
                        @click="gotoExternalLink('https://publier.etalab.studio/select?schema='+schema)"
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
                    @click="gotoExternalLink('https://www.data.gouv.fr/fr/datasets?schema='+schema)" 
                    class="fr-btn"
                >
                    <img src="../../public/assets/database.png" width="15" />&nbsp;
                    Données
                </button>
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
                    :style="this.pageInfo ? 'background-color: var(--bf200-bf300); border-top: 1px solid #000091; border-left: 1px solid #000091; border-right: 1px solid #000091;' : ''"
                >
                    <img src="../../public/assets/info.png" width="15" />&nbsp;
                    Informations
                </button>
                <span v-if="schema_infos['versions'][version]['pages'].includes('documentation.md')">
                    <button 
                        class="ongletItem"
                        :style="this.pageDoc ? 'background-color: var(--bf200-bf300); border-top: 1px solid #000091; border-left: 1px solid #000091; border-right: 1px solid #000091;' : ''"
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
                        :style="this.pageChange ? 'background-color: var(--bf200-bf300); border-top: 1px solid #000091; border-left: 1px solid #000091; border-right: 1px solid #000091;' : ''"
                    >
                        <img src="../../public/assets/couple-de-fleches-changeant-de-place.png" width="15" />&nbsp;
                        Changements
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
        schema: null,
        version: null,
        optionSelect: null,
        pageInfo: false,
        pageDoc: false,
        pageChange: false,
    };
  },
  computed: {
  },
  mounted() {
      const si = require('../../public/schema-infos.json');
      this.schema = this.$router.currentRoute.path.split('/')[1]+"/"+this.$router.currentRoute.path.split('/')[2]
      for (const [key, value] of Object.entries(si)) {
        if(key == this.schema) {
            this.schema_infos = value;
        }
      }
      if (this.$router.currentRoute.path.split('/').length > 4) {
          this.version = this.$router.currentRoute.path.split('/')[3]
      } else {
          this.version = this.schema_infos['latest']
      }
      
      var last = this.$router.currentRoute.path.split('/')[this.$router.currentRoute.path.split('/').length - 1]
      if((last == '') | (last == 'latest.html')){
        this.pageInfo = true
      } else if(last == 'documentation.html'){
        this.pageDoc = true
      } else if(last == 'CHANGELOG.html'){
        this.pageChange = true
      }
      this.optionSelect = this.version
      
  },
  methods: {
      gotoInternal(page){
          let link = '/'+this.schema+'/'+this.version+'/'+page
          if (this.$router.currentRoute.path !== link) this.$router.push(link)
      },
      gotoSchema(){
        window.location.href = window.location.origin + this.schema_infos['versions'][this.version]['schema_url']
      },
      gotoExternalLink(link){
        window.location.href = link
      },
      changeVersion(){
          let link = '/'+this.schema+'/'+this.optionSelect+'/'
          if (this.$router.currentRoute.path !== link) this.$router.push(link)
      }
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
  border-bottom: 1px solid #000091;
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

</style>
