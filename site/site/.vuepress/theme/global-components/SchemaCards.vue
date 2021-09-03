<template>
  <div>
    <div id="search-bar" class="rf-container rf-pb-6w rf-pt-2w">
        <!--<br />
        <p>
            Les types de jeux de données ci-dessous sont issues du référentiel de schéma de
            la plateforme schema.data.gouv.fr.
        </p>-->
        <br />
        <div class="search-bar" id="header-search">
            <input
                v-model="searchText"
                v-on:input="filterSchema()"
                class="rf-input"
                placeholder="Rechercher un schéma de données"
                type="search" id="header-search-input"
                name="header-search-input"
            >
        </div>
    </div>
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
      <div class="noSchemaDiv" v-if="schemasToShow.length === 0">
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
    };
  },
  mounted() {
    var dataSchemas = require('../../public/schemas.json')
    this.schemas = dataSchemas.schemas
    this.schemasToShow = dataSchemas.schemas
    var statsSchemas = require('../../public/stats.json')
    this.stats = statsSchemas
  },
  methods: {
    truncateText(desc,length){
      if (desc.length > length) {
          return desc.slice(0,length)+' [...]';
      } 
      return desc;
    },
    goto(schema) {
      if(this.option && this.option == 'description') {
        this.$router.push(`${schema.name}`);
      }
      if(this.option && this.option == 'kpis') {
        window.location.href = 'https://www.data.gouv.fr/fr/datasets/?schema='+schema.name
      }
    },
    gotoInternal(url) {
      window.location.href = window.location.origin + url;
    },
    filterSchema() {
      if (this.searchText !== '') {
        const obj = [];
        this.schemas.forEach((schema) => {
          if (latinize(schema.title.toLowerCase()).includes(latinize(this.searchText.toLowerCase()))) {
            obj.push(schema);
          }
        });
        this.schemasToShow = obj;
        if (this.schemasToShow.length === 0) {
          this.messageSchema = 'Aucun schéma trouvé';
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
</style>