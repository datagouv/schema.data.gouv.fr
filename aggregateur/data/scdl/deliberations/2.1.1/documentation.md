---
permalink: /scdl/deliberations/2.1.1/documentation.html
redirect_from: null
title: Documentation de Délibérations
version: 2.1.1
---

## Délibérations

Spécification du modèle de données relatif aux délibérations adoptées par une collectivité locale

- Auteur : OpenDataFrance
- Schéma créé le : 05/23/18
- Site web : https://git.opendatafrance.net/scdl/deliberations
- Version : 2.1.1

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|COLL_NOM (Nom de la collectivité)|chaîne de caractères|Nom officiel de la collectivité délibérante|Ville de Poitiers|Valeur obligatoire|
|COLL_SIRET (Code SIRET de la collectivité)|chaîne de caractères|Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)|23350001600040|Valeur obligatoire, Motif : `^\d{14}$`|
|DELIB_ID (Identifiant de la délibération)|chaîne de caractères|Identifiant interne de délibération respectant le formalisme propre à la collectivité|1DL15494|Valeur obligatoire|
|DELIB_DATE (Date de la délibération)|date|2017-10-15|Valeur obligatoire|
|DELIB_MATIERE_CODE (Code de la matière de la délibération)|chaîne de caractères|Code de l'indexation de niveau 2 de la nomenclature Actes|1.1, 7.10|Valeur obligatoire, Motif : `^\d\.\d{1,2}$`|
|DELIB_MATIERE_NOM (Nom de la matière de la délibération)|chaîne de caractères|Intitulé de matière niveau 1 suivi de l'intitulé de sous-matière niveau 2 séparés par « / »|Finances locales/Divers|Valeur obligatoire|
|DELIB_OBJET (Objet de la délibération)|chaîne de caractères|Lancement d'une démarche partenariale de définition d'une politique montagne et adhésion à l'association nationale des élus de la montagne|Valeur obligatoire|
|BUDGET_ANNEE (Année du budget)|chaîne de caractères|Année de l'exercice budgétaire sur lequel s'applique la décision si celle-ci a un impact budgétaire. Format AAAA pour une année ou AAAA/AAAA pour un intervalle entre deux années (ISO 8601).|2017, 2017/2018, 2016/2018|Motif : `^[0-9]{4}(\/[0-9]{4})?$`|
|BUDGET_NOM (Nom du budget)|chaîne de caractères|Nom du budget si la délibération engendre une affection budgétaire|Budget annexe déchets-collecte et traitement||
|PREF_ID (Identifiant de l'entité exerçant le contrôle de légalité)|chaîne de caractères|Pour les préfectures : PREFNNN (7 caractères)
Pour les sous-préfectures : SPREFNNNM (9 caractères)
Pour les SGAR : SGARNNN (7 caractères)
Où NNN : numéro sur 3 caractères du département et M : numéro sur un chiffre de l'arrondissement|PREF038||
|PREF_DATE (Date d'enregistrement de la délibération au contrôle de légalité)|date|2017-02-03||
|VOTE_EFFECTIF (Décompte de l'effectif total des élus susceptibles de participer au vote (présents à la séance))|nombre entier|43||
|VOTE_REEL (Décompte de l’effectif total des élus ayant réellement participé au vote (exclusion des absents))|nombre entier|40||
|VOTE_POUR (Nombre de votes Pour)|nombre entier|25||
|VOTE_CONTRE (Nombre de votes Contre)|nombre entier|10||
|VOTE_ABSTENTION (Nombre de votes Abstention)|nombre entier|5||
|DELIB_URL (Lien vers le document de la délibération)|chaîne de caractères (format `uri`)|||