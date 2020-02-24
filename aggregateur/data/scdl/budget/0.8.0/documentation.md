---
permalink: /scdl/budget/latest/documentation.html
redirect_from: /scdl/budget/0.8.0/documentation.html
title: Documentation de Budget des collectivités et établissements publics locaux
version: 0.8.0
---

## budget

Budget des collectivités et établissements publics locaux

Les données essentielles du budget permettent de décrire le contenu des étapes budgétaires des collectivités locales et des établissements publics. Il permet de préciser les catégories de montants financiers ainsi que le découpage de ces sommes en fonction du type de présentation utilisé (par nature ou par fonction). Ce schéma décrit le détail de chaque champ et le cas échéant les règles de validité associées.

- Schéma créé le : 07/11/2019
- Site web : https://git.opendatafrance.net/scdl/budget
- Version : 0.8

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|BGT_NATDEC (étape budgétaire)|chaîne de caractères|Ce champ permet de déterminer l'étape budgétaire concernée. Les valeurs possibles sont : "compte administratif", "budget prévisionnel", "budget supplémentaire", "décision modificative"||Valeur obligatoire, Valeurs autorisées : budget primitif, budget supplémentaire, décision modificative, compte administratif|
|BGT_ANNEE (année de exercice)|année|Ce champ permet de renseigner l'année de l'exercice budgétaire concerné||Valeur obligatoire, Motif : `^[1-2]\d\d\d$`|
|BGT_SIRET (code SIRET)|chaîne de caractères|Ce champ permet de renseigner le code SIRET de la collectivité ou de l'établissement public concerné (http://xml.insee.fr/schema/siret.html#SIRET_stype).||Valeur obligatoire, Motif : `^\d{14}$`|
|BGT_NOM (nom de la collectivité ou de l'établissement concerné)|chaîne de caractères|En complément du code SIRET, ce champ permet de faciliter l'identification de l'organisme public concerné||Valeur obligatoire|
|BGT_CONTNAT (numéro du compte budgétaire)|chaîne de caractères|Ce champ correspond au numéro de l'article ou compte budgétaire. Le référentiel des comptes budgétaires est fourni par le ministère de l'Economie. A partir de la nomemclature comptable de chaque type de collectivité ou établissement local, le plan de compte contient la liste des codes associés à chaque maquette budgetaire.||Valeur obligatoire, Taille minimale : 1, Taille maximale : 9|
|BGT_CONTNAT_LABEL (Libellé du compte budgétaire)|chaîne de caractères|Ce champ correspond à la colonne LIBELLE de l'article ou compte budgétaire dans le tableau "Liste des comptes et utilisations" du plan de compte||Valeur obligatoire|
|BGT_NATURE (Nature de la dépense ou de la recette)|chaîne de caractères|Ce champ correspond à la nature de la dépense ou de la recette, c'est-à-dire au "quoi". Classer les dépenses par nature signifie que les recettes et les dépenses sont regroupées selon leur identité financière. Le numéro est un numéro de chapitre. Exemples de chapitre : Charges à caractère général, Charges financières…(voir plan de compte)||Valeur obligatoire, Taille minimale : 1, Taille maximale : 9|
|BGT_NATURE_LABEL (Libellé de la nature de la dépense ou de la recette)|chaîne de caractères|Ce champ correspond à la colonne LIBELLE de la liste des chapitres du plan de compte par nature||Valeur obligatoire|
|BGT_FONCTION (Fonction de la dépense ou de la recette)|chaîne de caractères|Ce champ correspond à la fonction de la dépense ou de la recette, c'est-à-dire le "pourquoi". Classer les dépenses et les recettes par fonction consiste à les regrouper à partir de leurs destinations ou encore de leurs finalités. Le numéro est un numéro de chapitre. Exemples de fonction : Action sociale, Aménagement et environnement...(voir plan de compte).||Valeur optionnelle, Taille minimale : 1, Taille maximale : 9|
|BGT_FONCTION_LABEL (Libellé de la fonction de la dépense ou de la recette)|chaîne de caractères|Ce champ correspond à la colonne LIBELLE de la liste des chapitres du plan de compte par fonction||Valeur optionnelle|
|BGT_OPERATION (Code ou libellé de l'opération budgétaire votée)|chaîne de caractères|Ce champ correspond à une opération budgétaire (un projet particulier) sur lequel on souhaite attirer l'attention notamment lors du vote. Dans le cas d'une opération "Pour Vote", ce compte opération doit contenir uniquement des chiffres ; dans le cas d'une opération "Pour information", c'est libre.||Valeur optionnelle|
|BGT_SECTION (section budgétaire)|chaîne de caractères|Ce champ correspond au type de recette ou de dépense. A partir du Plan de Compte, dans le tableau "Liste des comptes et utilisations", utiliser le ContNat comme code et voir le chapitre correspondant dans la colonne RR ou DR pour une recette ou une dépense respectivement. Pour savoir s'il s'agit de Fonctionnement ou d'Investissement, regarder dans le tableau "Liste des chapitres" : utiliser le code de chapitre et regarder la colonne SECTION.||Valeur obligatoire, Valeurs autorisées : investissement, fonctionnement|
|BGT_OPBUDG (type opération budgétaire)|chaîne de caractères|Ce champ permet de distinguer les opérations d'ordre budgétaire des opérations réelles. Opérations d'ordre : qui ne donnent pas lieu à encaissement ou décaissement ; à la différence des opérations réelles.||Valeur obligatoire, Valeurs autorisées : réel, ordre|
|BGT_CODRD (Code recette / dépense)|chaîne de caractères|Ce champ permet de déterminer le sens (recette 0 - dépense 1) du crédit concerné.||Valeur obligatoire, Valeurs autorisées : recette, dépense|
|BGT_MTREAL (Montant signé des réalisations budgétaires)|nombre réel|Ce champ correspond au montant réalisé (en dépense ou en recette). Ce champ est à renseigner uniquement pour un compte administratif||Valeur optionnelle|
|BGT_MTBUDGPREC (Montant du budget précédent)|nombre réel|Ce champ correspond au montant prévu lors de l'exercice précédent. Ce champ permet de voir les évolutions des montants entre le budget prévisionnel (BP), les décisions modificatives et le compte administratif qui consacre la réalité des montants effectivement engagés (payés ou reçus).||Valeur optionnelle|
|BGT_MTRARPREC (Montant restant à réaliser N-1)|nombre réel|Ce champ est correspond aux montant des reprises des résultats des exercices précédents. Ce champ est rempli uniquement au BP/BS/DM et au CA pour présenter les restes à réaliser des exercice précédents.||Valeur optionnelle|
|BGT_MTPROPNOUV (Montant "Propositions nouvelles")|nombre réel|Ce champ correspond au montant des recettes ou dépenses nouvelles non prévues dans les étapes budgétaires précédentes.||Valeur optionnelle|
|BGT_MTPREV (montant budget voté)|nombre réel|Ce champ correspond au montant prévu lors des exercices BP/BS/DM pécédents. En présence d'une valeur dans ce champ, celui-ci doit obligatoirement être valorisée soit du montant prévu soit d'un montant égal à zéro||Valeur optionnelle|
|BGT_CREDOUV (crédits ouverts à l'article)|nombre réel|Ce champ correspond au montant des crédits de paiement disponibles pour effectuer des dépenses sur cet article||Valeur optionnelle|
|BGT_MTRAR3112 (Montant reste à réaliser exercice)|nombre réel|Ce champ est utilisé pour le compte administratif. Il peut également être utilisé au BP/BS/DM pour présenter les informations du compte administratif des années précédentes||Valeur optionnelle|
|BGT_ARTSPE (Article spécialisé)|chaîne de caractères|Ce champ permet d'isoler des articles au moment du vote du budget.||Valeur optionnelle, Valeurs autorisées : non spécialisé, spécialisé|