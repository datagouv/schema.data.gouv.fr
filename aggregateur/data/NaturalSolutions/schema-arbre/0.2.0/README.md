---
permalink: /NaturalSolutions/schema-arbre/0.2.0.html
redirect_from: null
title: Schéma des attributs des arbres urbains
version: 0.2.0
---

# Schéma des attributs des arbres urbains

Ce schéma permet de modéliser les différents attributs des arbres urbains afin de faciliter l'inventaire et la gestion du patrimoine arboré. Ces attributs peuvent être des caractéristiques liées à l'arbre ou au milieu dans lequel il se trouve. Il permet de géolocaliser les arbres afin de pouvoir les visualiser sur une carte. 

## Contexte

Les méthodes d'inventaire et de gestion des arbres en ville sont diverses. On peut le voir en regardant les modèles publiés en Open Data par certaines villes comme [Paris](https://opendata.paris.fr/explore/dataset/les-arbres/information/?disjunctive.typeemplacement&disjunctive.arrondissement&disjunctive.libellefrancais&disjunctive.genre&disjunctive.espece&disjunctive.varieteoucultivar&disjunctive.stadedeveloppement&disjunctive.remarquable) et [Monptellier](https://data.montpellier3m.fr/dataset/arbres-dalignement-de-montpellier).  
Afin de standardiser les données récoltées lors de l'inventaire, la co-construction d'une schéma de données pour l'arbre urbain a été lancée par [Natural Solutions](https://www.natural-solutions.eu/qui-sommes-nous). Ce schéma à pour but d'aller vers une uniformisation des données récoltées sur les arbres en ville afin de mieux les connaitre et les gérer.   

### Cadrage juridique

* L’[article 123-1-5 du Code de l’urbanisme](https://www.legifrance.gouv.fr/codes/id/LEGIARTI000031105321/2015-08-19/) permet de localiser, dans les PLU, des éléments de paysage à protéger et de définir des prescriptions de nature à assurer leurs préservations.

* Un accident sur une voie publique causé par la chute d'un arbre ou d'une branche peut engager la responsabilité d'une collectivité au titre d'un défaut d'entretien normal de l'ouvrage public.

## Finalité

Les données sur les arbres sont très importantes pour les collectivités afin d'améliorer la gestion du patrimoine arboré. Ainsi, il y a moins de risque d'accident dû à des problématiques d'entretien sur les arbres. 

La connaissance du patrimoine arboré a aussi une importance scientifique. La standardisation des données récoltées sur les arbres urbains pourrait permettre de mieux les étudier : par exemple en comparant la croissance des arbres en ville et les contraintes du milieu.  

## Transmission des données

Dans le but de constituer un répertoire national des arbres urbains, ouvert et accessible à tous, les collectivités peuvent transmettre systématiquement, sous forme de tableau mis à jour, les données relatives aux attributs de leurs arbres urbains.

Elles peuvent ajouter le mot-clef `arbre` lors de la publication du jeu de données sur leur espace de publication.

### Format des fichiers
Le fichier doit être encodé en UTF-8 et utiliser le point-virgule comme séparateur de colonnes. L'en-tête de colonne sur la première ligne est obligatoire. Tous les champs sont obligatoires ; si la donnée n'est pas disponible, la colonne doit être présente et vide.

Nom du fichier : `AAAAMMJJ_nom_Arbres_Urbains.csv` avec `nom` étant le nom de la collectivité productrice des données, par exemple pour la commune de Marseille `20201018_Marseille_Arbres_Urbains.csv`.

### Fichiers d'exemple
Nous mettons à disposition des fichiers d'exemple qui peuvent servir de base pour renseigner vos lieux de covoiturage.

- [Télécharger un fichier exemple au format CSV](https://github.com/NaturalSolutions/schema-arbre/blob/master/exemple-valide.csv)
- [Télécharger un fichier exemple au format Excel](https://github.com/NaturalSolutions/schema-arbre/blob/master/exemple-valide.xlsx)

### Mises à jour
Les mises à jour sont effectuées à partir du fichier communiqué précédemment et en reprennent, en les modifiant le cas échéant, les données qui y figurent déjà.

## Consolidation
Natural Solutions consolidera ce schéma avec d'autres ateliers de co-construction. Pour en savoir plus : https://www.natural-solutions.eu/blog/le-nouveau-schma-de-donnes-pour-larbre-urbain-se-co-construitnbsp