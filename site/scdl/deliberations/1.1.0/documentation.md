<MenuSchema />

<MenuSchema />

## Schéma SCDL Délibérations

Schéma validant le format relatif aux délibérations du SCDL (Socle Commun des Données Locales).

- Auteur : OpenDataFrance
- Schéma créé le : 23/05/2018
- Site web : https://git.opendatafrance.net/scdl/deliberations
- Version : 2.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [COLL_NOM](#nom-de-la-collectivite-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivite-propriete-coll-siret) | chaîne de caractères  | Oui |
| [BUDGET_ANNEE](#annee-du-budget-propriete-budget-annee) | chaîne de caractères  | Non |
| [BUDGET_NOM](#nom-du-budget-propriete-budget-nom) | chaîne de caractères  | Non |
| [DELIB_ID](#identifiant-de-la-deliberation-propriete-delib-id) | chaîne de caractères  | Oui |
| [DELIB_DATE](#date-de-la-deliberation-propriete-delib-date) | date  | Oui |
| [DELIB_MATIERE_CODE](#code-de-la-matiere-de-la-deliberation-propriete-delib-matiere-code) | chaîne de caractères  | Oui |
| [DELIB_MATIERE_NOM](#nom-de-la-matiere-de-la-deliberation-propriete-delib-matiere-nom) | chaîne de caractères  | Oui |
| [DELIB_OBJET](#objet-de-la-deliberation-propriete-delib-objet) | chaîne de caractères  | Oui |
| [PREF_ID](#identifiant-de-l-entite-exercant-le-controle-de-legalite-propriete-pref-id) | chaîne de caractères  | Non |
| [PREF_DATE](#date-d-enregistrement-de-la-deliberation-au-controle-de-legalite-propriete-pref-date) | date  | Non |
| [VOTE_EFFECTIF](#decompte-de-l-effectif-total-des-elus-susceptibles-de-participer-au-vote-(presents-a-la-seance)-propriete-vote-effectif) | nombre entier  | Non |
| [VOTE_REEL](#decompte-de-l'effectif-total-des-elus-ayant-reellement-participe-au-vote-(exclusion-des-absents)-propriete-vote-reel) | nombre entier  | Non |
| [VOTE_POUR](#nombre-de-votes-pour-propriete-vote-pour) | nombre entier  | Non |
| [VOTE_CONTRE](#nombre-de-votes-contre-propriete-vote-contre) | nombre entier  | Non |
| [VOTE_ABSTENTION](#nombre-de-votes-abstention-propriete-vote-abstention) | nombre entier  | Non |
| [DELIB_URL](#lien-vers-le-document-de-la-deliberation-propriete-delib-url) | chaîne de caractères (format `uri`) | Non |

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom officiel de la collectivité délibérante*<br/>*Exemple : Ville de Poitiers*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du Système d'Identification du Répertoire des Etablissements (SIRET)*<br/>*Exemple : 23350001600040*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Année du budget - Propriété `BUDGET_ANNEE`

> *Description : Année de l'exercice budgétaire sur lequel s'applique la décision si celle-ci a un impact budgétaire. Format AAAA pour une année ou AAAA/AAAA pour un intervalle entre deux années (ISO 8601).*<br/>*Exemple : 2017, 2017/2018, 2016/2018*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[0-9]{4}(\/[0-9]{4})?$`

#### Nom du budget - Propriété `BUDGET_NOM`

> *Description : Nom du budget si la délibération engendre une affection budgétaire*<br/>*Exemple : Budget annexe déchets-collecte et traitement*
- Valeur optionnelle
- Type : chaîne de caractères

#### Identifiant de la délibération - Propriété `DELIB_ID`

> *Description : Identifiant interne de délibération respectant le formalisme propre à la collectivité*<br/>*Exemple : 1DL15494*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de la délibération - Propriété `DELIB_DATE`

> *Description : None*<br/>*Exemple : 2017-10-15*
- Valeur obligatoire
- Type : date

#### Code de la matière de la délibération - Propriété `DELIB_MATIERE_CODE`

> *Description : Code de l'indexation de niveau 2 de la nomenclature Actes*<br/>*Exemple : 1.1, 7.10*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d\.\d{1,2}$`

#### Nom de la matière de la délibération - Propriété `DELIB_MATIERE_NOM`

> *Description : Intitulé de matière niveau 1 suivi de l'intitulé de sous-matière niveau 2 séparés par « / »*<br/>*Exemple : Finances locales/Divers*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\w+\\\w+$`

#### Objet de la délibération - Propriété `DELIB_OBJET`

> *Description : None*<br/>*Exemple : Lancement d'une démarche partenariale de définition d'une politique montagne et adhésion à l'association nationale des élus de la montagne*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant de l'entité exerçant le contrôle de légalité - Propriété `PREF_ID`

> *Description : Pour les préfectures : PREFNNN (7 caractères)
Pour les sous-préfectures : SPREFNNNM (9 caractères)
Pour les SGAR : SGARNNN (7 caractères)
Où NNN : numéro sur 3 caractères du département et M : numéro sur un chiffre de l'arrondissement*<br/>*Exemple : PREF038*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date d'enregistrement de la délibération au contrôle de légalité - Propriété `PREF_DATE`

> *Description : None*<br/>*Exemple : 2017-02-03*
- Valeur optionnelle
- Type : date

#### Décompte de l'effectif total des élus susceptibles de participer au vote (présents à la séance) - Propriété `VOTE_EFFECTIF`

> *Description : None*<br/>*Exemple : 43*
- Valeur optionnelle
- Type : nombre entier

#### Décompte de l’effectif total des élus ayant réellement participé au vote (exclusion des absents) - Propriété `VOTE_REEL`

> *Description : None*<br/>*Exemple : 40*
- Valeur optionnelle
- Type : nombre entier

#### Nombre de votes Pour - Propriété `VOTE_POUR`

> *Description : None*<br/>*Exemple : 25*
- Valeur optionnelle
- Type : nombre entier

#### Nombre de votes Contre - Propriété `VOTE_CONTRE`

> *Description : None*<br/>*Exemple : 10*
- Valeur optionnelle
- Type : nombre entier

#### Nombre de votes Abstention - Propriété `VOTE_ABSTENTION`

> *Description : None*<br/>*Exemple : 5*
- Valeur optionnelle
- Type : nombre entier

#### Lien vers le document de la délibération - Propriété `DELIB_URL`

> *Description : None*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)
