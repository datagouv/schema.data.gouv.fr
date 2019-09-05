---
permalink: /scdl/deliberations/2.1.2/documentation.html
redirect_from: null
title: Documentation de Délibérations
version: 2.1.2
---

## Délibérations

Spécification du modèle de données relatif aux délibérations adoptées par une collectivité locale

- Auteur : OpenDataFrance
- Schéma créé le : 23/05/2018
- Site web : https://git.opendatafrance.net/scdl/deliberations
- Version : 2.1.2

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|COLL_NOM (Nom de la collectivité)|chaîne de caractères|Nom officiel de la collectivité délibérante.|Ville de Poitiers|Valeur obligatoire|
|COLL_SIRET (Code SIRET de la collectivité)|chaîne de caractères|Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité qui a adopté la délibération, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.|21860194600013|Valeur obligatoire, Motif : `^\d{14}$`|
|DELIB_ID (Identifiant de la délibération)|chaîne de caractères|Identifiant interne de délibération respectant le formalisme propre à la collectivité. Sa composition dépend des pratiques en vigueur au sein de chaque collectivité.|1DL15494|Valeur obligatoire|
|DELIB_DATE (Date d'adoption de la délibération)|date|Date de décision de l'acte, celle à laquelle la délibération a été adopté par la collectivité au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|2017-10-15|Valeur obligatoire|
|DELIB_MATIERE_CODE (Code de matière issu de la nomenclature ACTES)|chaîne de caractères|Ce code correspond à celui de l'indexation de niveau 2 dans la structure arborescente de classement en matières et sous-matières (5 niveaux de profondeur) de la nomenclature ACTES (Aide au Contrôle de légaliTé dématErialiSé). Les codes de matière peuvent contenir les valeurs suivantes : '1.1' à '1.7',  '2.1' à '2.3', '3.1' à '3.6', '4.1' à '4.5', '5.1' à '5.8', '6.1' à '6.5', '7.1' à '7.10', '8.1' à 8.9', '9.1' à '9.4'. Si le champ est renseigné, sa valeur doit correspondre au nom de matière de `DELIB_MATIERE_NOM`.|8.4|Valeur obligatoire, Motif : `^\d\.\d{1,2}$`|
|DELIB_MATIERE_NOM (Nom de matière)|chaîne de caractères|Ce nom peut être issu de la nomenclature ACTES ou d'un référentiel propre à la collectivité. S'il est issu de la nomenclature ACTES, le champ `DELIB_MATIERE_CODE` doit être renseigné avec une valeur qui représente effectivement la matière définie. Le nom est alors composé de l'intitulé de matière de niveau 1 suivi de l'intitulé de sous-matière de niveau 2 présents dans la [structure arborescente de classement de la nomenclature ACTES](http://www.moselle.gouv.fr/content/download/1107/7994/file/nomenclature.pdf) (Aide au Contrôle de légaliTé dématErialiSé). Les deux intitulés sont exprimés en minuscules accentuées, sans virgule ni parenthèse, et séparés par une barre oblique. S'il est issu d'un référentiel de thèmes propre à la collectivité, le nom de matière est alors une chaîne de caractères libre et sans contrainte particulière.|'domaines de compétences par thèmes/aménagement du territoire' pour un nom de matière issu de ACTES ou 'URBANISME' pour un nom de matière issu d'un référentiel propre à la collectivité|Valeur obligatoire|
|DELIB_OBJET (Objet de la délibération)|chaîne de caractères|Description de l'objet de la délibération.|Lancement d'une démarche partenariale de définition d'une politique montagne et adhésion à l'association nationale des élus de la montagne|Valeur obligatoire|
|BUDGET_ANNEE (Année du budget)|chaîne de caractères|Année de l'exercice budgétaire sur lequel s'applique la décision si celle-ci a un impact budgétaire. Format AAAA pour une année ou AAAA/AAAA pour un intervalle entre deux années suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|'2017' pour une année ou '2017/2018' pour un intervalle|Motif : `^[0-9]{4}(\/[0-9]{4})?$`|
|BUDGET_NOM (Nom du budget)|chaîne de caractères|Ce champ ne peut être renseigné que si la délibération engendre une affection budgétaire.|Budget annexe déchets-collecte et traitement||
|PREF_ID (Identifiant de l'entité exerçant le contrôle de légalité)|chaîne de caractères|Cet identifiant dépend de l'entité concernée. Pour les préfectures, il est codé 'PREFNNN' sur 7 caractères. Pour les sous-préfectures, il est codé 'SPREFNNNM' sur 9 caractères. Pour les SGAR, il est codé 'SGARNNN' sur 7 caractères. 'NNN' correspond au numéro sur 3 caractères du département préfixé par '0' et inclant 'A' et 'B' pour les départements corses. 'M' correspond au numéro sur un chiffre de l'arrondissement.|PREF038||
|PREF_DATE (Date d'enregistrement de la délibération auprès du contrôle de légalité)|date|Date d'enregistrement de la délibération au contrôle de légalité au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601). Ce champ ne peut être renseigné que si la délibération a effectivement été transmise et que sa date d'enregistrement est connue.|2017-02-03||
|VOTE_EFFECTIF (Effectif théorique des votants)|nombre entier|Décompte de l'effectif total des représentants élus susceptibles de participer au vote.|43||
|VOTE_REEL (Effectif réel des votants)|nombre entier|Décompte de l’effectif total des élus ayant réellement participé au vote (exclusion des absents)|40||
|VOTE_POUR (Pour)|nombre entier|Décompte du nombre total de votes 'Pour'.|25||
|VOTE_CONTRE (Contre)|nombre entier|Décompte du nombre total de votes 'Contre'.|10||
|VOTE_ABSTENTION (Abstention)|nombre entier|Décompte du nombre total d'abstentions.|5||
|DELIB_URL (Lien vers le document de la délibération)|chaîne de caractères (format `uri`)|Si la collectivité dispose d'une version électronique de la délibération et la publie en ligne, ce lien correspond à l'adresse permettant de consulter ou de télécharger le document.|https://data.maville.fr/deliberations/files/200417_1.pdf||