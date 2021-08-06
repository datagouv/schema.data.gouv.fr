<template>
  <div>
      <ul v-if="ongoingSchemas">
        <li v-for="schema in ongoingSchemas[keyType]" v-bind:key="schema.title">
            <a :href="schema.url">{{ schema.title }}</a> - 
            <span v-if="schema.nb_comments != 0">{{ schema.nb_comments }} commentaires -</span>
            créé le {{ schema.dateFr }}
        </li>
      </ul>
  </div>
</template>

<script>
//{{ moment(String(schema.created_at)).format('DD/MM/YYYY') }}
import moment from 'moment'

export default {
  name: "OngoingSchema",
  props: [
      'keyType'
  ],
  data(){
    return{
      ongoingSchemas: null
    };
  },
  mounted() {
      let datafile = require('../../public/issues.json')
      this.ongoingSchemas = datafile
      this.ongoingSchemas[this.keyType].forEach((el) => {
          el.dateFr = moment(String(el.created_at)).format('DD/MM/YYYY')
      });
  },
  methods: {
  },
};
</script>

<style scoped>

</style>