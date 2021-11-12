<br /> 

<Contribution />

<br />

## Créer un nouveau schéma de données

Tout acteur est libre de proposer le référencement de schémas. Si vous envisagez de partager des données avec des partenaires ou à tout le monde en open data, nous avons rédigé un guide qui s’adresse aux **personnes susceptibles de créer des schémas de données**.


### Guide
Ce guide propose de vous accompagner lors des phases nécessaires à la création d’un schéma de données et à son référencement sur schema.data.gouv.fr le cas échéant.

1. **Phase d’investigation** : envisager de créer un schéma de données ;
1. **Phase de concertation** : rassembler plusieurs parties prenantes pour créer un schéma de données ;
1. **Phase de construction** : implémenter le schéma de données obtenu après la phase de concertation.

Il propose un processus à suivre, des bonnes pratiques et des outils.


<a style="margin-bottom: 40px" href="https://guides.etalab.gouv.fr/producteurs-schemas/" title="Consulter le guide" class="fr-btn">
  <img src="./.vuepress/public/assets/book.png" width="15" />&nbsp;
  Consulter le guide pour créer des schémas de données
</a>

### Quels schémas sont acceptés ?
`schema.data.gouv.fr` accepte des schémas décrivant des données publiques.

Actuellement, nous acceptons les schémas dont l'existence est justifiée par voie :
- réglementaire : le schéma a été introduit par une disposition réglementaire ;
- d'usage : la réutilisation des données décrites par le schéma bénéficie à un grand nombre ou de nombreux producteurs sont amenés à utiliser ce schéma.

Etalab se réserve le droit de refuser l'ajout de schémas en motivant son refus. Nous vous encourageons à [initier une discussion](https://github.com/etalab/schema.data.gouv.fr/issues) avec l'équipe d'Etalab préalablement à l'ouverture d'une _pull request_.

### Valider son schéma

Pour vous assurer de la conformité de votre schéma par rapport aux spécifications attendus, rendez-vous sur la page [Validation des schémas](validation.md)

### Référencer son schéma
Afin d'ajouter un schéma sur le site `schema.data.gouv.fr`, il faut référencer votre dépôt Git contenant ce schéma.

Vous devez ajouter votre dépôt Git en modifiant le fichier [`repertoires.yml`](https://github.com/etalab/schema.data.gouv.fr/blob/master/aggregateur/repertoires.yml) du [dépôt Git disponible sur GitHub](https://github.com/etalab/schema.data.gouv.fr) en y faisant figurer les informations suivantes :

- `url` : un lien HTTPS vers le dépôt Git contenant le schéma que vous souhaitez ajouter. Ce dépôt doit pouvoir être cloné depuis Internet sans authentification préalable ;
- `type` : le type de schéma que vous ajoutez. Les types supportés sont pour le moment :
    + `tableschema`, pour un schéma au format [Table Schema](https://frictionlessdata.io/specs/table-schema/)
    + `xsd`, pour un schéma au format [XML Schema Definition](https://www.w3.org/TR/xmlschema11-1/) (XSD)
    + `jsonschema`, pour un schéma au format [JSON Schema](https://json-schema.org/)
    + `generic`, pour un schéma qui ne correspond à aucun autre type supporté — aucune validation du schéma ne sera alors effectuée, seule la documentation sera affichée sur le site
- `email` : une adresse de courriel qui sera utilisée en cas d'erreurs lors de la validation et de l'intégration de votre schéma.

Voici un exemple complet pour ajouter le schéma decp-dpa, au format Table Schema, maintenu par l'équipe de data.gouv.fr.
```yml
decp-dpa:
  url: https://github.com/etalab/schema-decp-dpa.git
  type: tableschema
  email: schema@data.gouv.fr
```