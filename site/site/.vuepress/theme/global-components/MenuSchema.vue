<template>
  <div>
      <div v-if="schema_infos && version">
        <div class="boxes">
            <div class="box-left">
                Version du schéma :
                <select class="fr-select-custom" @change="changeVersion()" v-model="optionSelect" >
                    <option :selected="version == key" v-for="(value, key) in schema_infos.versions" v-bind:key="key" :value="key">{{ key }}</option>
                </select>
            </div>
            <div class="box-right">
                <button 
                    @click="gotoInternal('')" 
                    class="fr-btn fr-btn--secondary"
                >
                    <img src="../../public/assets/info.png" width="15" />&nbsp;
                    Infos
                </button>
                <button 
                    @click="gotoSchema()" 
                    class="fr-btn fr-btn--secondary"
                >
                    <img src="../../public/assets/structure-moleculaire.png" width="15" />&nbsp;
                    Schéma
                </button>
                <button 
                    @click="gotoExternalLink(schema_infos['homepage'])" 
                    class="fr-btn fr-btn--secondary"
                >
                    <img src="../../public/assets/valider-git.png" width="15" />&nbsp;
                    Git
                </button>
                <span v-if="schema_infos['versions'][version]['pages'].includes('CHANGELOG.md')">
                    <button 
                        @click="gotoInternal('CHANGELOG.html')"
                        class="fr-btn fr-btn--secondary"
                    >
                        <img src="../../public/assets/couple-de-fleches-changeant-de-place.png" width="15" />&nbsp;
                        Changements
                    </button>
                </span>
            </div>
        </div>
        <br /><br />
        <span v-if="schema_infos['versions'][version]['pages'].includes('documentation.md')">
            <button 
                class="fr-btn"
                @click="gotoInternal('documentation.html')"
            >
                <img src="../../public/assets/file.png" width="15" />&nbsp;
                Lire la documentation
            </button>
        </span>
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
                Saisir des données
            </button>
        </span>
        <span v-if="schema && schema_infos['type'] == 'tableschema'">
            <button 
                class="fr-btn"
                @click="gotoExternalLink('https://publier.etalab.studio/upload?schema='+schema)"
            >
                <img src="../../public/assets/checked-box.png" width="15" />&nbsp;
                Valider mes données
            </button>
        </span>
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
    };
  },
  computed: {
  },
  mounted() {
      const si = require('../../public/schema-infos.json');
      this.schema = this.$router.currentRoute.path.split('/')[2]+"/"+this.$router.currentRoute.path.split('/')[3]
      for (const [key, value] of Object.entries(si)) {
        if(key == this.schema) {
            this.schema_infos = value;
        }
      }
      if (this.$router.currentRoute.path.split('/').length > 5) {
          this.version = this.$router.currentRoute.path.split('/')[4]
      } else {
          this.version = this.schema_infos['latest']
      }
      this.optionSelect = this.version
  },
  methods: {
      gotoInternal(page){
          let link = '/schemas/'+this.schema+'/'+this.version+'/'+page
          if (this.$router.currentRoute.path !== link) this.$router.push(link)
      },
      gotoSchema(){
        window.location.href = window.location.origin + this.schema_infos['versions'][this.version]['schema_url']
      },
      gotoExternalLink(link){
        window.location.href = link
      },
      changeVersion(){
          let link = '/schemas/'+this.schema+'/'+this.optionSelect+'/'
          if (this.$router.currentRoute.path !== link) this.$router.push(link)
      }
  },
};
</script>

<style>

.boxes{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.box-left{
  width: 50%;
  font-size: 20px;
  text-align: left;
  line-height: 40px;
}
.box-right{
  width: 50%;
  text-align: right;
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

</style>
