<MenuSchema />

## budget

Budget des collectivités et établissements publics locaux

Les données essentielles du budget permettent de décrire le contenu des étapes budgétaires des collectivités locales et des établissements publics. Il permet de préciser les catégories de montants financiers ainsi que le découpage de ces sommes en fonction du type de présentation utilisé (par nature ou par fonction). Ce schéma décrit le détail de chaque champ et le cas échéant les règles de validité associées.

- Schéma créé le : 07/11/2019
- Site web : https://git.opendatafrance.net/scdl/budget
- Version : 0.8.1

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [BGT_NATDEC](#etape-budgetaire-propriete-bgt-natdec) | chaîne de caractères  | Oui |
| [BGT_ANNEE](#annee-de-exercice-propriete-bgt-annee) | année  | Oui |
| [BGT_SIRET](#code-siret-propriete-bgt-siret) | chaîne de caractères  | Oui |
| [BGT_NOM](#nom-de-la-collectivite-ou-de-l-etablissement-concerne-propriete-bgt-nom) | chaîne de caractères  | Oui |
| [BGT_CONTNAT](#numero-du-compte-budgetaire-propriete-bgt-contnat) | chaîne de caractères  | Oui |
| [BGT_CONTNAT_LABEL](#libelle-du-compte-budgetaire-propriete-bgt-contnat-label) | chaîne de caractères  | Oui |
| [BGT_NATURE](#nature-de-la-depense-ou-de-la-recette-propriete-bgt-nature) | chaîne de caractères  | Oui |
| [BGT_NATURE_LABEL](#libelle-de-la-nature-de-la-depense-ou-de-la-recette-propriete-bgt-nature-label) | chaîne de caractères  | Oui |
| [BGT_FONCTION](#fonction-de-la-depense-ou-de-la-recette-propriete-bgt-fonction) | chaîne de caractères  | Non |
| [BGT_FONCTION_LABEL](#libelle-de-la-fonction-de-la-depense-ou-de-la-recette-propriete-bgt-fonction-label) | chaîne de caractères  | Non |
| [BGT_OPERATION](#code-ou-libelle-de-l-operation-budgetaire-votee-propriete-bgt-operation) | chaîne de caractères  | Non |
| [BGT_SECTION](#section-budgetaire-propriete-bgt-section) | chaîne de caractères  | Oui |
| [BGT_OPBUDG](#type-operation-budgetaire-propriete-bgt-opbudg) | chaîne de caractères  | Oui |
| [BGT_CODRD](#code-recette-depense-propriete-bgt-codrd) | chaîne de caractères  | Oui |
| [BGT_MTREAL](#montant-signe-des-realisations-budgetaires-propriete-bgt-mtreal) | nombre réel  | Non |
| [BGT_MTBUDGPREC](#montant-du-budget-precedent-propriete-bgt-mtbudgprec) | nombre réel  | Non |
| [BGT_MTRARPREC](#montant-restant-a-realiser-n-1-propriete-bgt-mtrarprec) | nombre réel  | Non |
| [BGT_MTPROPNOUV](#montant-"propositions-nouvelles"-propriete-bgt-mtpropnouv) | nombre réel  | Non |
| [BGT_MTPREV](#montant-budget-vote-propriete-bgt-mtprev) | nombre réel  | Non |
| [BGT_CREDOUV](#credits-ouverts-a-l-article-propriete-bgt-credouv) | nombre réel  | Non |
| [BGT_MTRAR3112](#montant-reste-a-realiser-exercice-propriete-bgt-mtrar3112) | nombre réel  | Non |
| [BGT_ARTSPE](#article-specialise-propriete-bgt-artspe) | chaîne de caractères  | Non |

#### étape budgétaire - Propriété `BGT_NATDEC`

> *Description : Ce champ permet de déterminer l'étape budgétaire concernée. Les valeurs possibles sont : "compte administratif", "budget prévisionnel", "budget supplémentaire", "décision modificative"*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `budget primitif`
    - `budget supplémentaire`
    - `décision modificative`
    - `compte administratif`

#### année de exercice - Propriété `BGT_ANNEE`

> *Description : Ce champ permet de renseigner l'année de l'exercice budgétaire concerné*
- Valeur obligatoire
- Type : année

#### code SIRET - Propriété `BGT_SIRET`

> *Description : Ce champ permet de renseigner le code SIRET de l'établissement concerné par le budget (http://xml.insee.fr/schema/siret.html#SIRET_stype).*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### nom de la collectivité ou de l'établissement concerné - Propriété `BGT_NOM`

> *Description : En complément du code SIRET, ce champ permet de faciliter l'identification de l'organisme public concerné*
- Valeur obligatoire
- Type : chaîne de caractères

#### numéro du compte budgétaire - Propriété `BGT_CONTNAT`

> *Description : Ce champ correspond au numéro de l'article ou compte budgétaire. Le référentiel des comptes budgétaires est fourni par le ministère de l'Economie. A partir de la nomemclature comptable de chaque type de collectivité ou établissement local, le plan de compte contient la liste des codes associés à chaque maquette budgetaire.*
- Valeur obligatoire
- Type : chaîne de caractères
- Entre 1 et 9 caractères

#### Libellé du compte budgétaire - Propriété `BGT_CONTNAT_LABEL`

> *Description : Ce champ correspond à la colonne LIBELLE de l'article ou compte budgétaire dans le tableau "Liste des comptes et utilisations" du plan de compte*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nature de la dépense ou de la recette - Propriété `BGT_NATURE`

> *Description : Ce champ correspond à la nature de la dépense ou de la recette, c'est-à-dire au "quoi". Classer les dépenses par nature signifie que les recettes et les dépenses sont regroupées selon leur identité financière. Le numéro est un numéro de chapitre. Exemples de chapitre : Charges à caractère général, Charges financières…(voir plan de compte)*
- Valeur obligatoire
- Type : chaîne de caractères
- Entre 1 et 9 caractères

#### Libellé de la nature de la dépense ou de la recette - Propriété `BGT_NATURE_LABEL`

> *Description : Ce champ correspond à la colonne LIBELLE de la liste des chapitres du plan de compte par nature*
- Valeur obligatoire
- Type : chaîne de caractères

#### Fonction de la dépense ou de la recette - Propriété `BGT_FONCTION`

> *Description : Ce champ correspond à la fonction de la dépense ou de la recette, c'est-à-dire le "pourquoi". Classer les dépenses et les recettes par fonction consiste à les regrouper à partir de leurs destinations ou encore de leurs finalités. Le numéro est un numéro de chapitre. Exemples de fonction : Action sociale, Aménagement et environnement...(voir plan de compte).*
- Valeur optionnelle
- Type : chaîne de caractères
- Entre 1 et 9 caractères

#### Libellé de la fonction de la dépense ou de la recette - Propriété `BGT_FONCTION_LABEL`

> *Description : Ce champ correspond à la colonne LIBELLE de la liste des chapitres du plan de compte par fonction*
- Valeur optionnelle
- Type : chaîne de caractères

#### Code ou libellé de l'opération budgétaire votée - Propriété `BGT_OPERATION`

> *Description : Ce champ correspond à une opération budgétaire (un projet particulier) sur lequel on souhaite attirer l'attention notamment lors du vote. Dans le cas d'une opération "Pour Vote", ce compte opération doit contenir uniquement des chiffres ; dans le cas d'une opération "Pour information", c'est libre.*
- Valeur optionnelle
- Type : chaîne de caractères

#### section budgétaire - Propriété `BGT_SECTION`

> *Description : Ce champ correspond au type de recette ou de dépense. A partir du Plan de Compte, dans le tableau "Liste des comptes et utilisations", utiliser le ContNat comme code et voir le chapitre correspondant dans la colonne RR ou DR pour une recette ou une dépense respectivement. Pour savoir s'il s'agit de Fonctionnement ou d'Investissement, regarder dans le tableau "Liste des chapitres" : utiliser le code de chapitre et regarder la colonne SECTION.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `investissement`
    - `fonctionnement`

#### type opération budgétaire - Propriété `BGT_OPBUDG`

> *Description : Ce champ permet de distinguer les opérations d'ordre budgétaire des opérations réelles. Opérations d'ordre : qui ne donnent pas lieu à encaissement ou décaissement ; à la différence des opérations réelles.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `réel`
    - `ordre`

#### Code recette / dépense - Propriété `BGT_CODRD`

> *Description : Ce champ permet de déterminer le sens (recette 0 - dépense 1) du crédit concerné.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `recette`
    - `dépense`

#### Montant signé des réalisations budgétaires - Propriété `BGT_MTREAL`

> *Description : Ce champ correspond au montant réalisé (en dépense ou en recette). Ce champ est à renseigner uniquement pour un compte administratif*
- Valeur optionnelle
- Type : nombre réel

#### Montant du budget précédent - Propriété `BGT_MTBUDGPREC`

> *Description : Ce champ correspond au montant prévu lors de l'exercice précédent. Ce champ permet de voir les évolutions des montants entre le budget prévisionnel (BP), les décisions modificatives et le compte administratif qui consacre la réalité des montants effectivement engagés (payés ou reçus).*
- Valeur optionnelle
- Type : nombre réel

#### Montant restant à réaliser N-1 - Propriété `BGT_MTRARPREC`

> *Description : Ce champ est correspond aux montant des reprises des résultats des exercices précédents. Ce champ est rempli uniquement au BP/BS/DM et au CA pour présenter les restes à réaliser des exercice précédents.*
- Valeur optionnelle
- Type : nombre réel

#### Montant "Propositions nouvelles" - Propriété `BGT_MTPROPNOUV`

> *Description : Ce champ correspond au montant des recettes ou dépenses nouvelles non prévues dans les étapes budgétaires précédentes.*
- Valeur optionnelle
- Type : nombre réel

#### montant budget voté - Propriété `BGT_MTPREV`

> *Description : Ce champ correspond au montant prévu lors des exercices BP/BS/DM pécédents. En présence d'une valeur dans ce champ, celui-ci doit obligatoirement être valorisée soit du montant prévu soit d'un montant égal à zéro*
- Valeur optionnelle
- Type : nombre réel

#### crédits ouverts à l'article - Propriété `BGT_CREDOUV`

> *Description : Ce champ correspond au montant des crédits de paiement disponibles pour effectuer des dépenses sur cet article*
- Valeur optionnelle
- Type : nombre réel

#### Montant reste à réaliser exercice - Propriété `BGT_MTRAR3112`

> *Description : Ce champ est utilisé pour le compte administratif. Il peut également être utilisé au BP/BS/DM pour présenter les informations du compte administratif des années précédentes*
- Valeur optionnelle
- Type : nombre réel

#### Article spécialisé - Propriété `BGT_ARTSPE`

> *Description : Ce champ permet d'isoler des articles au moment du vote du budget.*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `non spécialisé`
    - `spécialisé`
