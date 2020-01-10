---
permalink: /scdl/budget/latest.html
redirect_from: /scdl/budget/0.5.0.html
title: Budget des collectivités et établissements publics locaux
version: 0.5.0
---

# Schéma Budget

Spécifications des données essentielles du budget des collectivités et établissements publics locaux

## Contexte

Les fichiers <DocumentBudgetaire> sont produits par les collectivités territoriales et autres établissements publics dans le cadre du projet Actes Budgétaires qui se repose sur la plateforme @ctes (Présentation technique).
Afin d'en simplifier la publication, nous proposons une version simplifiée du format XML proposé par le ministère de l’Économie et du budget en lien avec la Direction Générale des Collectivités Locales (DGCL) En complément, un outil de transformation des fichiers XML "TOTEM" en fichiers csv pourra être proposé afin de faciliter la génération de ces fichiers de publication simplifiés.
Ce schéma reprend les données de la section LigneBudget du schéma Totem. Il permet de rattacher un montant de recette ou de dépense à une nature (quoi?) et une fonction (pourquoi ?) comptable.

## Documents de cadrage juridique

* [​article 74 de la loi MAPTAM](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000028526298#LEGIARTI000028527814)
* [article 107 III de la loi du 7 août 2015 portant Nouvelle Organisation Territoriale de la République](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000030985460&categorieLien=id#JORFARTI000030987060)  


## Document de cadrage technique

​Format réglementaire pour la publication des données essentielles des budgets. Ce schéma vise à simplifier la mise à disposition des données budgétaires des collectivités locales. Pour celles en capacité de produire des fichiers au format XML TOTEM, un convertisseur XML -> csv sera proposé. 

## Outils

* [![](https://scdl.opendatafrance.net/docs/assets/validata-logo-horizontal.png)](https://go.validata.fr/table-schema?schema_name=scdl.budget) [Valider un fichier avec Validata](http://go.validata.fr/table-schema?schema_name=scdl.Budget&schema_ref=v0.2.1)
* [Créer un fichier avec CSV Good Generator](https://csv-gg.etalab.studio/?schema=scdl%2Fbudget)
* [Télécharger un fichier gabarit au format XLSX](https://scdl.opendatafrance.net/docs/templates/budget.xlsx)


## Voir aussi

* adresser un message à [scdl@opendatafrance.email](mailto:scdl@opendatafrance.email?subject=budget)
* ouvrir un ticket sur le [dépôt GitLab d’OpenDataFrance](https://git.opendatafrance.net/scdl/budget/issues)