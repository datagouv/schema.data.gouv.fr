[![goodtables.io](https://goodtables.io/badge/github/etalab/schema.data.gouv.fr.svg)](https://goodtables.io/github/etalab/schema.data.gouv.fr)

# schema.data.gouv.fr

## Objectif

Ce dépôt a pour but de rassembler les différents schémas de données produits par Etalab et la communauté. Ces schémas peuvent concerner des formats réglementaires (dont le schéma est fixé par arrêté) ou d'autres formats dont les schémas sont mis à disposition à titre de bonne pratique.

## Formats réglementaires

### Sur ce dépôt

- [Infrastructures de recharge pour véhicules électriques](/irve) - en cours

### Sur d'autres dépôts

- [Données des subventions publiques](https://github.com/etalab/format-subventions)
- [Commande publique : Données essentielles](https://github.com/etalab/format-commande-publique)

## Autres formats

### Sur ce dépôt

- [Données du Projet de Loi de Finances (PLF)](/plf) - en cours

### Sur d'autres dépôts

- [Liste des prénoms des nouveaux-nés](https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes) - utilisé par le Socle commun des données locale produit par OpenDataFrance

## A venir

- [Commande publique : Recensement des profils d'acheteurs](https://doc.data.gouv.fr/faq/comment-remplir-les-obligations-légales-de-déclaration-des-profils-d-acheteur.html)
- Défibrilateurs cardiaques

## Comment valider un fichier

### Table Schema

Lorsque le schéma d'un fichier tabulaire est fourni au format [Table Schema](https://frictionlessdata.io/specs/table-schema/), il est possible d'utiliser l'outil Python [goodtables](https://github.com/frictionlessdata/goodtables-py) pour valider un fichier par rapport à un schéma de la manière suivante :

```
pip install goodtables
goodtables --schema schema.json fichier.csv
```

Il est également possible d'utiliser le service en ligne http://goodtables.io pour valider des fichiers présents sur un dépôt Github. Un [exemple d'intégration](goodtables.yml) est présent sur dépôt.

## Conventions

Lors de vos contributions à ce dépôt, merci de respecter les conventions suivantes :
- préfixer vos commits par `[<schema>]` avec `<schema>` le nom du schéma concerné, par exemple `irve` ou `meta` dans le cas de ce fichier README ;
- lors du merge de PR, utiliser autant que possible la fonction "Squash and merge" afin de garder un historique propre et respecter la convention ci-dessus dans le message de merge.
