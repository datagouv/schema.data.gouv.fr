---
permalink: /scdl/budget/latest/documentation.html
redirect_from: /scdl/budget/0.2.1/documentation.html
title: Documentation de Budget
version: 0.2.1
---

## Budget

Budget

Les données essentielles du budget permettent de décrire le contenu des étapes budgétaires des collectivités locales et des établissements publics. Il contient les articles et fonctions des cadres budgétaires et les montants financiers associés. Ce schéma décrit le détail de chaque champ. Pour chacun, nous fournissons également la regexp qui permet de contrôler le contenu du champ.

- Schéma créé le : 07/11/2019
- Site web : https://git.opendatafrance.net/scdl/budget
- Version : 0.2.1

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|BGT_NATDEC (étape budgétaire)|chaîne de caractères|cette zone permet de déterminer l'étape budgétaire concernée. Les valeurs possibles sont : "compte administratif", "budget prévisionnel", "budget supplémentaire", "décision modificative"||Valeur obligatoire, Valeurs autorisées : budget primitif, budget supplémentaire, décision modificative, compte administratif|
|BGT_ANNEE (année de exercice)|nombre entier|année de l'exercice budgétaire concerné||Valeur obligatoire, Motif : `^[0-9]{4}$`|
|BGT_SIRET (code SIRET)|nombre entier|le code SIRET de la collectivité ou de l'établissement public concerné (http://xml.insee.fr/schema/siret.html#SIRET_stype).||Valeur obligatoire, Motif : `^[0-9]{14}$`|
|BGT_NOM (nom de la collectivité ou de l'établissement concerné)|chaîne de caractères|En complément du code SIRET, ce champ permet de faciliter l'identification de l'organisme public concerné||Valeur obligatoire, Motif : `^[A-Z]{255}$`|
|BGT_NATURE (Nature de la dépense ou de la recette)|nombre entier|cette zone permet de déterminer la nature de la dépense ou de la recette, c'est-à-dire au "quoi". Le numéro est un numéro d'article. Exemples de nature : carburant, dépenses de personnel…(voir plan de compte)||Valeur obligatoire, Motif : `^[0-9]{7}$`|
|BGT_NATURE_LABEL (Libellé de la nature de la dépense ou de la recette)|chaîne de caractères|cette zone permet de déterminer le libellé de la nature de la dépense ou de la recette. Ce libellé est issu du référentiel ODM relatif à chaque plan de compte (http://odm-budgetaire.org/composants/normes/)||Valeur obligatoire, Motif : `^[A-Z]{255}$`|
|BGT_FONCTION (Fonction de la dépense ou de la recette)|nombre entier|cette zone permet de déterminer la fonction de la dépense ou de la recette, le "pourquoi" qui correspond à la fonction de la recette/dépense. Le numéro est un numéro de fonction. Exemples de fonction : éducation, sécurité (voir plan de compte).||Valeur obligatoire, Motif : `^[0-9]{7}$`|
|BGT_FONCTION_LABEL (Libellé de la fonction de la dépense ou de la recette)|chaîne de caractères|cette zone permet de déterminer le libellé de la fonction de la dépense ou de la recette. Ce libellé est issu du référentiel ODM relatif à chaque plan de compte (http://odm-budgetaire.org/composants/normes/)||Valeur obligatoire, Motif : `^[Aa-Zz]{255}$`|
|BGT_CONTNAT (numéro du compte budgétaire)|chaîne de caractères|correspond au numéro de compte. A partir du Plan de Compte, dans le tableau "Liste des comptes et utilisations", utiliser le ContNat comme code et voir le chapitre correspondant dans la colonne RR ou DR pour une recette ou une dépense respectivement. Pour savoir s'il s'agit de Fonctionnement ou d'Investissement, regarder dans le tableau "Liste des chapitres" : utiliser le code de chapitre et regarder la colonne SECTION.||Valeur obligatoire, Motif : `^[0-9]{4}$`|
|BGT_SECTION (section budgétaire)|chaîne de caractères|correspond au type de recette ou de dépense. A partir du Plan de Compte, dans le tableau "Liste des comptes et utilisations", utiliser le ContNat comme code et voir le chapitre correspondant dans la colonne RR ou DR pour une recette ou une dépense respectivement. Pour savoir s'il s'agit de Fonctionnement ou d'Investissement, regarder dans le tableau "Liste des chapitres" : utiliser le code de chapitre et regarder la colonne SECTION.||Valeur obligatoire, Valeurs autorisées : investissement, fonctionnement|
|BGT_OPBUDG (type opération budgétaire)|chaîne de caractères|cette zone permet de distinguer les opérations d'ordre budgétaire des opérations réelles.||Valeur obligatoire, Valeurs autorisées : réel, ordre|
|BGT_CODRD (Code recette / dépense)|chaîne de caractères|cette zone permet de déterminer le sens (recette 0 - dépense 1) du crédit concerné.||Valeur obligatoire, Valeurs autorisées : recette, dépense|
|BGT_MTREAL (Montant signé des réalisations budgétaires)|nombre réel|montant réalisé (en dépense ou en recette). Ce champ est à renseigner uniquement pour un compte administratif||Valeur optionnelle|
|BGT_MTBUDGPREC (Montant du budget précédent)|nombre réel|montant prévu lors de l'exercice précédent. Ce champ permet de voir les évolutions des montants entre le budget prévisionnel (BP), les décisions modificatives et le compte administratif qui consacre la réalité des montants effectivement engagés (payés ou reçus).||Valeur optionnelle|
|BGT_MTRARPREC (Montant restant à réaliser N-1)|nombre réel|ce champ est uniquement rempli au BP/BS/DM en cas de reprise des résultats des exercices précédents. Ce champ est rempli au CA pour présenter les restes à réaliser des exercice précédents.||Valeur optionnelle|
|BGT_MTPROPNOUV (Montant "Propositions nouvelles")|nombre réel|montant des recettes ou dépenses nouvelles non prévues dans les étapes budgétaires précédentes.||Valeur optionnelle|
|BGT_MTPREV (montant budget voté)|nombre réel|en présence d'un champ MtPrev, celui-ci doit obligatoirement être valorisée soit du montant prévu soit d'un montant égal à zéro||Valeur optionnelle|
|BGT_CREDOUV (crédits ouverts à l'article)|nombre réel|montant des crédits de paiement disponibles pour effectuer des dépenses sur cet article||Valeur optionnelle|
|BGT_MTRAR3112 (Montant reste à réaliser exercice)|nombre réel|ce champ est utilisé pour le compte administratif. Il peut également être utilisé au BP/BS/DM pour présenter les informations du compte administratif des années précédentes||Valeur optionnelle|
|BGT_ARTSPE (Article spécialisé)|chaîne de caractères|permet de les isoler des articles au moment du vote du budget.||Valeur optionnelle, Valeurs autorisées : non spécialisé, spécialisé|