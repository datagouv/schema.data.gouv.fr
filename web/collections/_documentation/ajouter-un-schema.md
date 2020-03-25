---
layout: page
title: "Ajouter un schéma"
order: 3
---
# Ajouter un schéma

## Qui peut référencer des schémas ?
Tout acteur est libre de proposer le référencement de schémas.

## Quels schémas sont acceptés ?
`schema.data.gouv.fr` accepte des schémas décrivant des données publiques.

Actuellement, nous acceptons les schémas dont l'existence est justifiée par voie :
- réglementaire : le schéma a été introduit par une disposition réglementaire ;
- d'usage : la réutilisation des données décrites par le schéma bénéficie à un grand nombre ou de nombreux producteurs sont amenés à utiliser ce schéma.

Etalab se réserve le droit de refuser l'ajout de schémas en motivant son refus. Nous vous encourageons à [initier une discussion](https://github.com/etalab/schema.data.gouv.fr/issues) avec l'équipe d'Etalab préalablement à l'ouverture d'une _pull request_.

## Référencer son schéma
Afin d'ajouter un schéma sur le site `schema.data.gouv.fr`, il faut référencer votre dépôt Git contenant ce schéma.

Vous devez ajouter votre dépôt Git en modifiant le fichier [`repertoires.yml`](https://github.com/etalab/schema.data.gouv.fr/blob/master/aggregateur/repertoires.yml) en y faisant figurer les informations suivantes :

- `url` : un lien HTTPS vers le dépôt Git contenant le schéma que vous souhaitez ajouter. Ce dépôt doit pouvoir être cloné depuis Internet sans authentification préalable ;
- `type` : le type de schéma que vous ajoutez. Les types supportés sont pour le moment :
    + `tableschema`, pour un schéma au format [Table Schema](https://frictionlessdata.io/specs/table-schema/)
    + `xsd`, pour un schéma au format [XML Schema Definition](https://www.w3.org/TR/xmlschema11-1/) (XSD)
    + `jsonschema`, pour un schéma au format [JSON Schema](https://json-schema.org/)
- `email` : une adresse de courriel qui sera utilisée en cas d'erreurs lors de la validation et de l'intégration de votre schéma.

Voici un exemple complet pour ajouter le schéma decp-dpa, au format Table Schema, maintenu par l'équipe de data.gouv.fr.
```yml
decp-dpa:
  url: https://github.com/etalab/schema-decp-dpa.git
  type: tableschema
  email: info@data.gouv.fr
```
