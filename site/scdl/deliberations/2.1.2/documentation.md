<MenuSchema />

<MenuSchema />

## Délibérations

Spécification du modèle de données relatif aux délibérations adoptées par une collectivité locale

- Auteur : OpenDataFrance
- Schéma créé le : 23/05/2018
- Site web : https://git.opendatafrance.net/scdl/deliberations
- Version : 2.1.2

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [COLL_NOM](#nom-de-la-collectivite-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivite-propriete-coll-siret) | chaîne de caractères  | Oui |
| [DELIB_ID](#identifiant-de-la-deliberation-propriete-delib-id) | chaîne de caractères  | Oui |
| [DELIB_DATE](#date-d-adoption-de-la-deliberation-propriete-delib-date) | date  | Oui |
| [DELIB_MATIERE_CODE](#code-de-matiere-issu-de-la-nomenclature-actes-propriete-delib-matiere-code) | chaîne de caractères  | Oui |
| [DELIB_MATIERE_NOM](#nom-de-matiere-propriete-delib-matiere-nom) | chaîne de caractères  | Oui |
| [DELIB_OBJET](#objet-de-la-deliberation-propriete-delib-objet) | chaîne de caractères  | Oui |
| [BUDGET_ANNEE](#annee-du-budget-propriete-budget-annee) | chaîne de caractères  | Non |
| [BUDGET_NOM](#nom-du-budget-propriete-budget-nom) | chaîne de caractères  | Non |
| [PREF_ID](#identifiant-de-l-entite-exercant-le-controle-de-legalite-propriete-pref-id) | chaîne de caractères  | Non |
| [PREF_DATE](#date-d-enregistrement-de-la-deliberation-aupres-du-controle-de-legalite-propriete-pref-date) | date  | Non |
| [VOTE_EFFECTIF](#effectif-theorique-des-votants-propriete-vote-effectif) | nombre entier  | Non |
| [VOTE_REEL](#effectif-reel-des-votants-propriete-vote-reel) | nombre entier  | Non |
| [VOTE_POUR](#pour-propriete-vote-pour) | nombre entier  | Non |
| [VOTE_CONTRE](#contre-propriete-vote-contre) | nombre entier  | Non |
| [VOTE_ABSTENTION](#abstention-propriete-vote-abstention) | nombre entier  | Non |
| [DELIB_URL](#lien-vers-le-document-de-la-deliberation-propriete-delib-url) | chaîne de caractères (format `uri`) | Non |

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom officiel de la collectivité délibérante.*<br/>*Exemple : Ville de Poitiers*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité qui a adopté la délibération, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*<br/>*Exemple : 21860194600013*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Identifiant de la délibération - Propriété `DELIB_ID`

> *Description : Identifiant interne de délibération respectant le formalisme propre à la collectivité. Sa composition dépend des pratiques en vigueur au sein de chaque collectivité.*<br/>*Exemple : 1DL15494*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date d'adoption de la délibération - Propriété `DELIB_DATE`

> *Description : Date de décision de l'acte, celle à laquelle la délibération a été adopté par la collectivité au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2017-10-15*
- Valeur obligatoire
- Type : date

#### Code de matière issu de la nomenclature ACTES - Propriété `DELIB_MATIERE_CODE`

> *Description : Ce code correspond à celui de l'indexation de niveau 2 dans la structure arborescente de classement en matières et sous-matières (5 niveaux de profondeur) de la nomenclature ACTES (Aide au Contrôle de légaliTé dématErialiSé). Les codes de matière peuvent contenir les valeurs suivantes : '1.1' à '1.7',  '2.1' à '2.3', '3.1' à '3.6', '4.1' à '4.5', '5.1' à '5.8', '6.1' à '6.5', '7.1' à '7.10', '8.1' à 8.9', '9.1' à '9.4'. Si le champ est renseigné, sa valeur doit correspondre au nom de matière de `DELIB_MATIERE_NOM`.*<br/>*Exemple : 8.4*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d\.\d{1,2}$`

#### Nom de matière - Propriété `DELIB_MATIERE_NOM`

> *Description : Ce nom peut être issu de la nomenclature ACTES ou d'un référentiel propre à la collectivité. S'il est issu de la nomenclature ACTES, le champ `DELIB_MATIERE_CODE` doit être renseigné avec une valeur qui représente effectivement la matière définie. Le nom est alors composé de l'intitulé de matière de niveau 1 suivi de l'intitulé de sous-matière de niveau 2 présents dans la [structure arborescente de classement de la nomenclature ACTES](http://www.moselle.gouv.fr/content/download/1107/7994/file/nomenclature.pdf) (Aide au Contrôle de légaliTé dématErialiSé). Les deux intitulés sont exprimés en minuscules accentuées, sans virgule ni parenthèse, et séparés par une barre oblique. S'il est issu d'un référentiel de thèmes propre à la collectivité, le nom de matière est alors une chaîne de caractères libre et sans contrainte particulière.*<br/>*Exemple : 'domaines de compétences par thèmes/aménagement du territoire' pour un nom de matière issu de ACTES ou 'URBANISME' pour un nom de matière issu d'un référentiel propre à la collectivité*
- Valeur obligatoire
- Type : chaîne de caractères

#### Objet de la délibération - Propriété `DELIB_OBJET`

> *Description : Description de l'objet de la délibération.*<br/>*Exemple : Lancement d'une démarche partenariale de définition d'une politique montagne et adhésion à l'association nationale des élus de la montagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Année du budget - Propriété `BUDGET_ANNEE`

> *Description : Année de l'exercice budgétaire sur lequel s'applique la décision si celle-ci a un impact budgétaire. Format AAAA pour une année ou AAAA/AAAA pour un intervalle entre deux années suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : '2017' pour une année ou '2017/2018' pour un intervalle*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[0-9]{4}(\/[0-9]{4})?$`

#### Nom du budget - Propriété `BUDGET_NOM`

> *Description : Ce champ ne peut être renseigné que si la délibération engendre une affection budgétaire.*<br/>*Exemple : Budget annexe déchets-collecte et traitement*
- Valeur optionnelle
- Type : chaîne de caractères

#### Identifiant de l'entité exerçant le contrôle de légalité - Propriété `PREF_ID`

> *Description : Cet identifiant dépend de l'entité concernée. Pour les préfectures, il est codé 'PREFNNN' sur 7 caractères. Pour les sous-préfectures, il est codé 'SPREFNNNM' sur 9 caractères. Pour les SGAR, il est codé 'SGARNNN' sur 7 caractères. 'NNN' correspond au numéro sur 3 caractères du département préfixé par '0' et inclant 'A' et 'B' pour les départements corses. 'M' correspond au numéro sur un chiffre de l'arrondissement.*<br/>*Exemple : PREF038*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date d'enregistrement de la délibération auprès du contrôle de légalité - Propriété `PREF_DATE`

> *Description : Date d'enregistrement de la délibération au contrôle de légalité au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601). Ce champ ne peut être renseigné que si la délibération a effectivement été transmise et que sa date d'enregistrement est connue.*<br/>*Exemple : 2017-02-03*
- Valeur optionnelle
- Type : date

#### Effectif théorique des votants - Propriété `VOTE_EFFECTIF`

> *Description : Décompte de l'effectif total des représentants élus susceptibles de participer au vote.*<br/>*Exemple : 43*
- Valeur optionnelle
- Type : nombre entier

#### Effectif réel des votants - Propriété `VOTE_REEL`

> *Description : Décompte de l’effectif total des élus ayant réellement participé au vote (exclusion des absents)*<br/>*Exemple : 40*
- Valeur optionnelle
- Type : nombre entier

#### Pour - Propriété `VOTE_POUR`

> *Description : Décompte du nombre total de votes 'Pour'.*<br/>*Exemple : 25*
- Valeur optionnelle
- Type : nombre entier

#### Contre - Propriété `VOTE_CONTRE`

> *Description : Décompte du nombre total de votes 'Contre'.*<br/>*Exemple : 10*
- Valeur optionnelle
- Type : nombre entier

#### Abstention - Propriété `VOTE_ABSTENTION`

> *Description : Décompte du nombre total d'abstentions.*<br/>*Exemple : 5*
- Valeur optionnelle
- Type : nombre entier

#### Lien vers le document de la délibération - Propriété `DELIB_URL`

> *Description : Si la collectivité dispose d'une version électronique de la délibération et la publie en ligne, ce lien correspond à l'adresse permettant de consulter ou de télécharger le document.*<br/>*Exemple : https://data.maville.fr/deliberations/files/200417_1.pdf*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
