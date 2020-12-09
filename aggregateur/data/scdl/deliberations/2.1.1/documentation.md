---
permalink: /scdl/deliberations/2.1.1/documentation.html
redirect_from: null
title: Documentation de Délibérations
version: 2.1.1
---

## Délibérations

Spécification du modèle de données relatif aux délibérations adoptées par une collectivité locale

- Auteur : OpenDataFrance
- Schéma créé le : 23/05/2018
- Site web : https://git.opendatafrance.net/scdl/deliberations
- Version : 2.1.1

### Modèle de données


####  Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom officiel de la collectivité délibérante<br/>Ex : Ville de Poitiers*
- Valeur obligatoire
- Type : chaîne de caractères

####  Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)<br/>Ex : 23350001600040*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

####  Identifiant de la délibération - Propriété `DELIB_ID`

> *Description : Identifiant interne de délibération respectant le formalisme propre à la collectivité<br/>Ex : 1DL15494*
- Valeur obligatoire
- Type : chaîne de caractères

####  Date de la délibération - Propriété `DELIB_DATE`

> *Description : None<br/>Ex : 2017-10-15*
- Valeur obligatoire
- Type : date

####  Code de la matière de la délibération - Propriété `DELIB_MATIERE_CODE`

> *Description : Code de l'indexation de niveau 2 de la nomenclature Actes<br/>Ex : 1.1, 7.10*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d\.\d{1,2}$`

####  Nom de la matière de la délibération - Propriété `DELIB_MATIERE_NOM`

> *Description : Intitulé de matière niveau 1 suivi de l'intitulé de sous-matière niveau 2 séparés par « / »<br/>Ex : Finances locales/Divers*
- Valeur obligatoire
- Type : chaîne de caractères

####  Objet de la délibération - Propriété `DELIB_OBJET`

> *Description : None<br/>Ex : Lancement d'une démarche partenariale de définition d'une politique montagne et adhésion à l'association nationale des élus de la montagne*
- Valeur obligatoire
- Type : chaîne de caractères

####  Année du budget - Propriété `BUDGET_ANNEE`

> *Description : Année de l'exercice budgétaire sur lequel s'applique la décision si celle-ci a un impact budgétaire. Format AAAA pour une année ou AAAA/AAAA pour un intervalle entre deux années (ISO 8601).<br/>Ex : 2017, 2017/2018, 2016/2018*
- None
- Type : chaîne de caractères
- Motif : `^[0-9]{4}(\/[0-9]{4})?$`

####  Nom du budget - Propriété `BUDGET_NOM`

> *Description : Nom du budget si la délibération engendre une affection budgétaire<br/>Ex : Budget annexe déchets-collecte et traitement*
- None
- Type : chaîne de caractères

####  Identifiant de l'entité exerçant le contrôle de légalité - Propriété `PREF_ID`

> *Description : Pour les préfectures : PREFNNN (7 caractères)
Pour les sous-préfectures : SPREFNNNM (9 caractères)
Pour les SGAR : SGARNNN (7 caractères)
Où NNN : numéro sur 3 caractères du département et M : numéro sur un chiffre de l'arrondissement<br/>Ex : PREF038*
- None
- Type : chaîne de caractères

####  Date d'enregistrement de la délibération au contrôle de légalité - Propriété `PREF_DATE`

> *Description : None<br/>Ex : 2017-02-03*
- None
- Type : date

####  Décompte de l'effectif total des élus susceptibles de participer au vote (présents à la séance) - Propriété `VOTE_EFFECTIF`

> *Description : None<br/>Ex : 43*
- None
- Type : nombre entier

####  Décompte de l’effectif total des élus ayant réellement participé au vote (exclusion des absents) - Propriété `VOTE_REEL`

> *Description : None<br/>Ex : 40*
- None
- Type : nombre entier

####  Nombre de votes Pour - Propriété `VOTE_POUR`

> *Description : None<br/>Ex : 25*
- None
- Type : nombre entier

####  Nombre de votes Contre - Propriété `VOTE_CONTRE`

> *Description : None<br/>Ex : 10*
- None
- Type : nombre entier

####  Nombre de votes Abstention - Propriété `VOTE_ABSTENTION`

> *Description : None<br/>Ex : 5*
- None
- Type : nombre entier

####  Lien vers le document de la délibération - Propriété `DELIB_URL`

> *Description : None<br/>Ex : None*
- None
- Type : chaîne de caractères (format `uri`)