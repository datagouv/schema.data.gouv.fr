<template>
  <div>
    <div class="boxes">
      <div
          class="box style-schema"
          v-for="schema in schemas"
          :key="schema.name"
          @click="goto(schema)"
      >
          <div style="color: black;" class="box-header">
              {{ truncateText(schema.title,75) }}
          </div>
          <div style="color: black;" class="box-content">{{ truncateText(schema.description,100) }}</div>
          <div style="float: right"><img src="../../public/assets/right-arrow.png" width="20" /></div>
      </div>
  </div>
  </div>
</template>

<script>



export default {
  name: "SchemaCards",
  props: [],
  data(){
    return{
      schemas: null
    };
  },
  mounted() {
    var dataSchemas = require('../../public/schemas.json')
    console.log(dataSchemas)
    this.schemas = dataSchemas.schemas
    console.log(this.schemas)
  },
  methods: {
    truncateText(desc,length){
      if (desc.length > length) {
          return desc.slice(0,length)+' [...]';
      } 
      return desc;
    },
    goto(schema) {
      this.$router.push(`schemas/${schema.name}`);
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
  width: 280px;
  padding-bottom: 30px;
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
</style>