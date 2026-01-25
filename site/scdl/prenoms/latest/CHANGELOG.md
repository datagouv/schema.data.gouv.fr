<MenuSchema />

<MenuSchema />

# Changelog

## 1.1.6

* Migration de l'instance gitlab d'hébergement du schéma Catalogue vers l'instance publique https://gitlab.com/opendatafrance/scdl/prenoms

## 1.1.5

* Suppression d'une contrainte non supportée dans le champ `ANNEE`

## 1.1.4

* fusion de la documentation du schéma à partir des fichiers `CONTEXT.md` et `SEE_ALSO.md` dans `README.md`
* documentée complétée par un fichier `schema.md` généré à partir de `schema.json` avec [table-schema-to-markdown](https://framagit.org/opendataschema/table-schema-to-markdown)
* utilisation des [métadonnées standardisées](https://github.com/frictionlessdata/specs/blob/master/specs/patterns.md#table-schema-metadata-properties)

## 1.1.3

* version rétro-compatible avec la 1.1, sans aucun impact sur les données
* le champ NOMBRE_OCCURENCES est désormais spécifié come "int" (soit un nombre) et sa valeur comprise entre 1 et 999999
* amélioration des titres et descriptions

## 1.1.2

* version rétro-compatible avec la 1.1, sans aucun impact sur les données
* spécification du délimiteur de colonnes CSV ","
* utilisation du type "enum" à la place de "pattern"

## 1.1.1

* version rétro-compatible avec la 1.1, sans aucun impact sur les données
* changement de la regex de contrôle des prénoms pour accepter O'brian et pas seulement O'Brian
* changement de la regex pour les lettres liées : AE et OE (exemple : Ægir, Œdipe, Læticia, Cœur)
* on précise bien qu'il s'agit du lieu de naissance et non du lieu de résidence

## 1.1

* alignement avec la version 1.1 d'OpenDataFrance : les deux specs sont désormais compatibles au niveau de l'ordre et du nom des champs
 * changement du titre : ajout de "déclarés à l'état-civil"
 * changement des noms de champs : COMMUNE devient COMMUNE_NOM, CODE_INSEE devient COLL_INSEE, SEXE_ENFANT devient ENFANT_SEXE, PRENOM devient ENFANT_PRENOM et NOMBRE_D_OCCURRENCES devient NOMBRE_OCCURENCES
* dans la spec au format Table Schema :
 * le champ ANNEE est désormais au format "year"
 * changement de la regexp de ENFANT_PRENOM pour rendre invalide JeanRenaud
* publication d'un fichier de test valide
* publication d'un fichier de test invalide
* publication du fichier goodtables.yml pour permettre au service goodtables.io de [valider les données de test](https://goodtables.io/github/CharlesNepote/liste-prenoms-nouveaux-nes)
* 2018-02-13 : publication par OpenDataFrance d'une version "1.1" sur le Socle commun des données locales d'Opendata Locale, sous le titre "Prénoms des nouveaux-nés. Liste annuelle des prénoms des nouveaux-nés déclarés à l’état-civil" : http://opendatalocale.net/presentation-de-chaque-jeu-et-de-sa-normalisation-precise/
* par rapport à la version 1.0 d'OpenDataFrance :
 * le nom de la commune (COMMUNE_NOM) fait son retour, en lieu et place du nom de la collectivité (COLL_NOM), car il est moins ambigü
 * le nom de la commune n'est pas obligatoire
 * le titre de la spec est plus clair, "Prénoms des nouveaux-nés"

## 1.0

* publication par OpenDataFrance de la v1.0 qui n'est que la validation de la 1.0 (beta)
* publication le 29/11/201 par la Ville de Digne-les-Bains d'une première version compatible avec la version 1.0 (beta) du Socle commun des données locales (source : https://twitter.com/mairiedigne/status/935878333174370305)

## 1.0 beta

* publication par OpenDataFrance d'une version "1.0 beta" sur le Socle commun des données locales d'Opendata Locale, sous le titre "Prénoms. Liste annuelle des prénoms des nouveaux-nés déclarés à l’état-civil" : http://opendatalocale.net/presentation-de-chaque-jeu-et-de-sa-normalisation-precise/
* il s'agit d'une version réécrite par OpenDataFrance de la 0.5beta :
 * les noms des colonnes ont presque tous changé
 * certains exemples ont été réécris (NOMBRE_OCCURENCES...)
 * le nom de la commune a été remplacé par le nom de la collectivité (COLL_NOM)
 * le nom de la collectivité est devenu obligatoire
 * le nom de la collectivité est ambigu lorsqu'on compare son objet "Nom officiel de la collectivité" et l'exemple donné "Ville de Nice" ; par ailleurs, "Ville de Nice" n'est pas intuitif pour le grand public qui, dans un index alphabétique, recherchera plus naturellement "Nice"
 * le document n'est pas historisé si bien qu'on ne sait pas qui a changé quoi et pourquoi
 * les différents auteurs ne sont pas mentionnés
 * il n'existe pas d'adresse email pour remonter des éventuels problèmes
 * il n'existe pas d'URL de référence pour suivre l'évolution du standard
 * le titre majeur, "Prénoms", est vague et peut prêter à confusion
 * le sous-titre est plus clair car il spécifie "déclarés à l'état-civil"
 * ajout de références utiles intéressantes : "Déclaration de naissance" sur les sites service-public.fr et wikipedia.
* le document est un Google doc à cette adresse : https://docs.google.com/document/d/1Vk0kpBw3MIocai9JqovLK2HxcUA_3QHnZicqxuOpcQ8/edit#

## 0.7 beta

* principaux changements :
 * dans la description, précision qu'il s'agit du premier prénom
 * URL vers un fichier d'exemple
