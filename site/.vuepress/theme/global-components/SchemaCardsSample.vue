<template>
  <div class="schemaCardsSample">
    <div class="fr-container schemaCardsTitle">
      <b>Découvrez les schémas référencés</b>
    </div>
    <div class="fr-container boxes">
      <div
          class="box style-schema"
          v-for="schema in schemasToShow.slice(0,3)"
          :key="schema.name"
          @click="goto(schema)"
      >
          <div style="color: black;" class="box-header">
              {{ truncateText(schema.title,75) }}
          </div>
          <div v-if="option == 'description'">
            <div style="color: black;" class="box-content2">{{ truncateText(schema.description,100) }}</div>
            <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
            {{ messageSchema }}
          </div>
          <div v-if="stats && option == 'kpis'">
             <br />
             <div style="color: black;" class="box-content">{{ stats[schema.name] }} ressources sur data.gouv.fr</div>
              <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
          </div>
      </div>
    </div>
    <div class="schemaCardsSampleButtonDiv">
      <button @click="maingoto()" class="schemaCardsSampleButton fr-btn fr-btn--secondary">
          Découvrez tous les schémas référencés&nbsp;&nbsp;
          <img src="../../public/assets/right-arrow.png" width="20" />
      </button>
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
    maingoto() {
      window.location.href = window.location.origin + '/schemas.html'
    },
    goto(schema) {
      if(this.option && this.option == 'description') {
        window.location.href = window.location.origin + '/' + schema.name;
      }
      if(this.option && this.option == 'kpis') {
        window.location.href = 'https://www.data.gouv.fr/fr/datasets/?schema='+schema.name
      }
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
        }
      } else {
        this.schemasToShow = this.schemas;
      }
    },
  },
};
</script>

<style scoped>

.schemaCardsSample{
  background-color: #E6EEFE;
  padding-top: 50px;
  padding-bottom: 50px;

}
.schemaCardsTitle{
  color: #3558A2;
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
}

.schemaCardsSampleButtonDiv{
  margin-top: 30px;
  text-align: center;
}

.schemaCardsSampleButton{
    background-color: white;
}

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
</style>