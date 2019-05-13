---
layout: page
title: "Ajouter un schéma"
order: 1
---
# Ajouter un schéma

## Qui peut ajouter des schémas ?
TODO

## Quels schémas sont acceptés ?
TODO

## Référencer son schéma
Afin d'ajouter un schéma sur le site `schema.data.gouv.fr`, il faut référencer votre dépôt Git contenant ce schéma.

Vous devez ajouter votre dépôt Git en modifiant le fichier `repertoires.yml` à la racine du dépôt en y faisant figurer les informations suivantes :

- `url` : un lien HTTPS vers le dépôt Git contenant le schéma que vous souhaitez ajouter. Ce dépôt doit pouvoir être clôné depuis Internet sans authentification préalable ;
- `type` : le type de schéma que vous ajoutez. Les types supportés sont pour le moment :
    + `tableschema`, pour un schéma au format [Table Schema](https://frictionlessdata.io/specs/table-schema/)
- `email` : une adresse de courriel qui sera utilisée en cas d'erreurs lors de la validation et de l'intégration de votre schéma.

Voici un exemple complet pour ajouter le schéma decp-dpa, au format Table Schema, maintenu par l'équipe de data.gouv.fr.
```yml
decp-dpa:
  url: https://github.com/etalab/schema-decp-dpa.git
  type: tableschema
  email: info@data.gouv.fr
```
