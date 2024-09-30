<template>
  <div>
      <div>
        <h2>Contribuer au référentiel schema.data.gouv.fr</h2>

        <div>Tout acteur est libre de proposer un nouveau schémas de données. Cependant, pour être référéncé sur schema.data.gouv.fr, ce schéma doit décrire des données ouvertes.</div>
        <br />
        <div>Nous acceptons les schémas dont l'existence est justifiée par voie :</div>
        <ul>
          <li>réglementaire : le schéma a été introduit par une disposition réglementaire ;</li>
          <li>d'usage : la réutilisation des données décrites par le schéma bénéficie à un grand nombre ou de nombreux producteurs sont amenés à utiliser ce schéma.</li>
        </ul>
        <br />
        <div>Pour vous accompagner au mieux, commençons par faire connaissance :</div>
        <br />
      </div>
      <div class='form'>
        <div class='formTitle'>Qui êtes-vous ?</div>
        <div class='answers'>
          <div v-for='item in level1' v-bind:key='item.name' @click='selectLevel1(item.code)'>
            <span v-if='item.code === level1Selected'>
              <div class='answerSelected'>{{ item.name }}</div>
            </span>          
            <span v-if='item.code != level1Selected'>
              <div class='answer'>{{ item.name }}</div>
            </span>          
          </div>
        </div>
        <span v-if='level1Selected != 0'>
          <div class='formTitle'>Comment souhaitez-vous contribuer ?</div>
          <div class='answers'>
            <div v-for='item in level2' v-bind:key='item.name' @click='selectLevel2(item.code)'>
              <span v-if='item.code === level2Selected'>
                <div class='answerSelected'>{{ item.name }}</div>
              </span>          
              <span v-if='item.code != level2Selected'>
                <div class='answer'>{{ item.name }}</div>
              </span>          
            </div>
          </div>
        </span>
        <span v-if='skipLevel3 == 0 && level2Selected != 0'>
          <div class='formTitle'>Le schéma concerné fait-il référence à la thématique des transports / mobilité ?</div>
          <div class='answers'>
            <div v-for='item in level3' v-bind:key='item.name' @click='selectLevel3(item.code)'>
              <span v-if='item.code === level3Selected'>
                <div class='answerSelected'>{{ item.name }}</div>
              </span>          
              <span v-if='item.code != level3Selected'>
                <div class='answer'>{{ item.name }}</div>
              </span>          
            </div>
          </div>
        </span>
      </div>
    
  
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 1' class='formTitle'>Proposer un nouveau schéma</div>
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 1' class='answerSpace'>
        <p>Pour valider l'intérêt d'un nouveau schéma et informer la communauté d'une nouvelle initiative, nous vous proposons d'initier un message sur notre espace de discussion (l'espace de discussion est hébergé sur Github, il faudra en préalable vous créer un compte pour initier une discussion).<br />
        La communauté pourra alors réagir à votre proposition et nous pourrons également vous accompagner dans la conception</p>
        <div style="width: 100%;">
          <div class="btn-guide">
            <a href="https://github.com/etalab/schema.data.gouv.fr/issues/new?assignees=&labels=&template=referencer-un-schema.md&title=" title="Initier une discussion" class="fr-btn">
              <img src="../../public/assets/book.png" width="15" />&nbsp;
              Proposer un nouveau schéma dans une nouvelle discussion
            </a>
          </div>
        </div>
        <br />
        <p>En cas de difficulté, vous pouvez contacter {{ this.selectedOrganizationName }} à l'adresse suivante {{ this.selectedOrganizationMail }}</p>
      </div>
      
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 2' class='formTitle'>Créer un nouveau schéma</div>
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 2' class='answerSpace'>
        <p>Pour vous accompagner lors des phases nécessaires à la création d’un schéma de données et à son référencement sur schema.data.gouv.fr le cas échéant, les équipes <a href='https://www.etalab.gouv.fr/'>d'Etalab</a> et <a href='https://www.opendatafrance.net/'>OpenDataFrance</a> ont élaboré un guide vous proposant un processus à suivre, des bonnes pratiques et des outils.</p>
        <div style="width: 100%;">
          <div class="btn-guide">
            <a href="https://guides.data.gouv.fr/publier-des-donnees/guide-qualite/maitriser-les-schemas-de-donnees" title="Consulter le guide" class="fr-btn">
              <img src="../../public/assets/book.png" width="15" />&nbsp;
              Consulter le guide pour créer des schémas de données
            </a>
          </div>
        </div>
        <br />
        <p>Pour toute question complémentaire, vous pouvez contacter {{ this.selectedOrganizationName }} à l'adresse suivante {{ this.selectedOrganizationMail }}</p>
      </div>
      
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 3' class='formTitle'>Modifier un schéma</div>
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 3' class='answerSpace'>
        <p>Pour valider l'intérêt d'un modification sur un schéma existant et en informer la communauté, nous vous proposons d'initier un message sur notre espace de discussion (l'espace de discussion est hébergé sur Github, il faudra en préalable vous créer un compte pour initier une discussion).<br />
        Attention de vérifier qu'un fil de discussion n'est pas déjà créé sur le schéma en question (<a href="https://github.com/etalab/schema.data.gouv.fr/issues">voir la liste des discussions en cours</a>)</p>
        <div style="width: 100%;">
          <div class="btn-guide">
            <a href="https://github.com/etalab/schema.data.gouv.fr/issues/new?assignees=&labels=&template=referencer-un-schema.md&title=" title="Initier une discussion" class="fr-btn">
              <img src="../../public/assets/book.png" width="15" />&nbsp;
              Proposer une modification d'un schéma dans une nouvelle discussion
            </a>
          </div>
        </div>
        <br />
        <p>Si vous êtes un profil technique, vous pouvez également proposer la modification d'un schéma directement en modifiant le code source du schéma, accessible sur la fiche du schéma sur schema.data.gouv.fr (bouton "Git"). Vous pourrez alors forké le répertoire Git et proposer vos modifications dans une Pull Request.</p>
        <p>En cas de difficulté, vous pouvez contacter {{ this.selectedOrganizationName }} à l'adresse suivante {{ this.selectedOrganizationMail }}</p>
      </div>
          
      
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 4' class='formTitle'>Référencer un schéma</div>
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 4' class='answerSpace'>
        <div>Pour référencer un nouveau schéma, celui-ci doit au préalable vérifier plusieurs conditions :</div>
        <ul>
          <li>le schéma doit décrire des données publiques</li>
          <li>le schéma doit avoir été soumis à la communauté <a href="https://github.com/etalab/schema.data.gouv.fr/issues">via un message</a> sur notre espace de discussion</li>
          <li>le schéma doit avoir été co-conçu avec plusieurs acteurs du domaine auquel il fait référence</li>
          <li>le schéma doit avoir été conçu selon <a href="https://guides.etalab.gouv.fr/producteurs-schemas/integration-schema-datagouv/#quels-schemas-de-donnees-sont-acceptes-2">une spécification technique autorisée</a> et doit <a href="https://guides.etalab.gouv.fr/producteurs-schemas/integration-schema-datagouv/#quels-schemas-de-donnees-sont-acceptes-2">être valide</a></li>
          <li>si aucune donnée n'est encore produite à partir de ce schéma, la version de celui-ci doit être inférieure à la v1.0.0</li>
        </ul>
          
        <p>Une fois ces conditions remplies, vous pouvez nous contacter via la discussion ouverte préalablement ou en contactant {{ this.selectedOrganizationName }} à l'adresse suivante {{ this.selectedOrganizationMail }}</p>
      </div>
      
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 5' class='formTitle'>Publier des données</div>
      <div v-if='(level3Selected != 0 || skipLevel3 == 1) && level2Selected == 5' class='answerSpace'>
        <p>Pour publier des données respectant les spécifications d'un schéma de données, vous pouvez vous référez à la documentation des schémas sur ce site et adopté la structure indiquée par le schéma. Si vous avez besoin d'être accompagner en termes d'outillage pour la production de données respectant un schéma, Etalab propose un outil : publier.etalab.studio.</p>
        <p>publier.etalab.studio est un nouvel outil permettant aux producteurs de données de pouvoir saisir ou charger leur données en vue de leur publication sur la plateforme data.gouv.fr. L'outil propose un accompagnement des producteurs de données sous trois formats : chargement/upload des données déjà existantes, saisie via formulaires ou saisie via tableurs.</p>

        <p>En cas de difficulté, vous pouvez contacter Etalab à l'adresse suivante : schema [at] data.gouv.fr.</p>
      </div>
          
  </div>
</template>

<script>


export default {
  name: "Contribution",
  props: [
  ],
  data(){
    return{
      level1: [
        {
          code: 1,
          name: 'Une administration centrale'
        },
        {
          code: 2,
          name: 'Une collectivité territoriale'
        },
        {
          code: 3,
          name: 'Autre (particulier, entreprise, association...)'
        }
      ],
      level2:[
        {
          code: 1,
          name: 'Je souhaite proposer une nouvelle idée de schéma'
        },
        {
          code: 2,
          name: 'Je souhaite créer un nouveau schéma'
        },
        {
          code: 3,
          name: 'Je souhaite modifier un schéma existant'
        },
        {
          code: 4,
          name: 'Je souhaite référencer mon schéma'
        },
        {
          code: 5,
          name: 'Je souhaite publier de nouvelles données'
        }
      ],
      level3: [
        {
          code: 1,
          name: 'Oui'
        },
        {
          code: 2,
          name: 'Non'
        }
      ],
      level1Selected: 0,
      level2Selected: 0,
      level3Selected: 0,
      skipLevel3: 0,
      selectedOrganizationName: 'Etalab',
      selectedOrganizationMail: 'schema [at] data.gouv.fr'
    };
  },
  mounted() {
  },
  methods: {
    selectLevel1(code){
      this.level1Selected = code;
      if(code != 2){
        this.selectedOrganizationName = 'Etalab'
        this.selectedOrganizationMail = 'schema [at] data.gouv.fr'
      } else{
        this.selectedOrganizationName = 'OpenDataFrance'
        this.selectedOrganizationMail = 'scdl [at] opendatafrance.email'
      }
      this.level2Selected = 0;
      this.level3Selected = 0;
      this.skipLevel3 = 0;
    },
    selectLevel2(code){
      this.level2Selected = code;
      this.level3Selected = 0;
      if(code == 5){
        this.skipLevel3 = 1;
      } else{
        this.skipLevel3 = 0;
      }
    },
    selectLevel3(code){
      this.level3Selected = code;
      if(code === 1){
        this.selectedOrganizationName = 'transport.data.gouv.fr'
        this.selectedOrganizationMail = 'contact [at] transport.data.gouv.fr'
      } else {
        if(this.level1Selected != 2){
          this.selectedOrganizationName = 'Etalab'
          this.selectedOrganizationMail = 'schema [at] data.gouv.fr'
        } else{
          this.selectedOrganizationName = 'OpenDataFrance'
          this.selectedOrganizationMail = 'scdl [at] opendatafrance.email'
        }
      }
    }
  },
};
</script>

<style scoped>

.form{
  max-width: 1200px;
}

.formTitle{
  font-weight: bold;
  margin-bottom: 15px;
}
.answers{
  display: flex;        
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.answer{
  background-color: #ECEDFE;
  margin-right: 5px;
  border-radius: 5px;
  padding: 15px;
  color: #3558A2;
  margin-bottom: 5px;
}
.answerSelected{
  background-color: #CCCCFF;
  margin-right: 5px;
  border-radius: 5px;
  padding: 15px;
  color: #3558A2;
  margin-bottom: 5px;
}

.answer:hover{
  cursor: pointer;
  background-color: #CCCCFF;
}

.answerSpace{
  background-color: #F3F4F6;
  border-radius: 5px;
  width: 100%;
  padding: 30px;

}

.btn-guide{
  text-align: center;
}

</style>
