---
permalink: /CharlesNepote/liste-prenoms-nouveaux-nes/1.1.3.html
redirect_from: null
title: Prénoms des nouveaux-nés
version: 1.1.3
---

# liste-prenoms-nouveaux-nes 1.1.3
Spécification de la liste annuelle des prénoms des nouveaux-nés déclarés à l'état-civil.

La liste annuelle des prénoms des nouveaux-nés est un jeu de données simple et très apprécié du public. Il consiste en une liste de prénoms avec l'occurrence de chacun pour une année donnée. Les prénoms listés correspondent au premier prénom donné dans chaque acte de naissance de l'état-civil.

Ce schéma décrit le détail de chaque champ. Pour chacun, nous fournissons également l'expression rationnelle informatique (ou "regexp") qui permet de contrôler le contenu du champ.

La dernière version de cette spécification est disponible à l'adresse : https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes

## Origine du standard
Ce standard a tout d'abord été élaboré à partir du recueil et de l'observation des fichiers produits en open data par plusieurs communes françaises, publiés dès 2012. Il s'est nourri de l'observation des usages et a puisé également dans les textes de lois ou textes de référence qui standardisent la forme des prénoms en français.

### Textes de loi et de référence
* Le code civil : https://www.legifrance.gouv.fr/affichCode.do?cidTexte=LEGITEXT000006070721&dateTexte=20170327
* L'encyclopédie Wikipedia synthétise les instructions générales relatives à l'état-civil : https://fr.wikipedia.org/wiki/Instruction_g%C3%A9n%C3%A9rale_relative_%C3%A0_l%27%C3%A9tat_civil ; notamment les deux textes suivants, qui précisent ce qui possible ou non en matière de prénom :
  * Circulaire du 28 octobre 2011 relative aux règles particulières à divers actes de l'état civil relatifs à la naissance et à la filiation — NOR : JUSC1119808C : http://www.textes.justice.gouv.fr/art_pix/JUSC1119808C.pdf
  * Circulaire du 23 juillet 2014 relative à l’état civil — NOR : JUSC1412888C : http://circulaire.legifrance.gouv.fr/pdf/2014/07/cir_38565.pdf
* Normes techniques de l'INSEE : http://xml.insee.fr/schema/etat-civil/ ; ce texte spécifie notamment très clairement : "*Les caractères acceptés pour l’écriture du ou des prénom(s) sont : Pour la 1ère lettre : - les 26 lettres de l’alphabet utilisées dans la langue française en majuscules, - 15 lettres avec signes diacritiques en majuscules (À Â Ä Ç É È Ê Ë Î Ï Ô Ö Ù Û Ü), - 2 ligatures en majuscules (Æ Œ). Pour les suivantes : - les 26 lettres de l’alphabet utilisées dans la langue française en minuscules, - 15 lettres avec signes diacritiques en minuscules (à â ä ç é è ê ë î ï ô ö ù û ü), - 2 ligatures en minuscules (æ, œ) - l’apostrophe, le tiret sans espace avant et après (obligatoire pour les prénoms composés)*"

## Schéma au format Table Schema
Table Schema est une sorte de "dictionnaire de données" qui permet de valider automatiquement un fichier CSV. Il offre donc une spécification précise du fichier. Il permet également de documenter le format d'un fichier. Il s'agit d'un fichier au format JSON. La spécification de la liste annuelle des prénoms des nouveaux-nés est établie sous cette forme :
https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes/blob/1.1/prenom-schema.json

## Exemples de fichiers CSV
* Exemple compatible avec la version 1.1 : https://raw.githubusercontent.com/CharlesNepote/liste-prenoms-nouveaux-nes/1.1/prenoms-nouveaux-nes.exemple.1.1.csv

## TODO
* Mieux spécifier le nom de la commune pour encourager les communes à choisir un nom normalisé (INSEE, par exemple)
* Gérer le cas où les prénoms contiennent des espaces, ce qui semble permis depuis 2011, comme le montre notamment le jeu de données d'Avignon
* Résourdre les problèmes de branches/tags

## Process d'évolution
* À partir de la version 1.1, nous adoptons la pratique du "[versionnement sémantique](https://semver.org/lang/fr/)"
* Pour chaque nouvelle version :
  * Dans le fichier JSON de la spec :
   	* on effectue les changement de fond
   	* on change le champ "version"
	* on change le champ "created" avec la date de modification
	* on change le champ "uri" auquel on donne le nom de la branche
   	* on change le champ "previous" auquel on donne le nom de la version stable précédente
   	* on change éventuellement champ "example"
  * On documente le changement dans la rubrique "historique du readme"
  * On change la version dans le titre de la spec.
* Lorsqu'une nouvelle version est prête on la tague en veillant à ce que le tag soit cohérent avec le champ "uri" du fichier JSON.

## Historique
* 2018-11-30 : **[v.1.1.3](https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes/releases/tag/v1.1.3)**
  * version rétro-compatible avec la 1.1, sans aucun impact sur les données
  * Le champ NOMBRE_OCCURENCES est désormais spécifié come "int" (soit un nombre) et sa valeur comprise entre 1 et 999999
* 2018-05-16 : **[v1.1.2](https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes/tree/v1.1.2)**
  * version rétro-compatible avec la 1.1, sans aucun impact sur les données
  * spécification du délimiteur de colonnes CSV ","
  * utilisation du type "enum" à la place de "pattern"
* 2018-04-12 : **[v.1.1.1](https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes/tree/v1.1.1)**
  * version rétro-compatible avec la 1.1, sans aucun impact sur les données
  * changement de la regex de contrôle des prénoms pour accepter O'brian et pas seulement O'Brian
  * changement de la regex pour les lettres liées : AE et OE (exemple : Ægir, Œdipe, Læticia, Cœur)
  * on précise bien qu'il s'agit du lieu de naissance et non du lieu de résidence
* 2018-02-13 : **[v1.1](https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes/tree/v1.1)**
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
* 2018-01-31 : publication par OpenDataFrance d'une version "1.0", qui n'est que la validation de la 1.0(beta)
* 2018-01-19 : rétro-publication des versions 0.5beta et 0.7beta sur Github, afin de garder un historique des modifications et une URL plus pérenne
* 2017-11-29 : publication par la Ville de Digne-les-Bains d'une première version compatible avec la version 1.0 (beta) du Socle commun des données locales, source : https://twitter.com/mairiedigne/status/935878333174370305
* 2017-06-13 : publication par OpenDataFrance d'une version "1.0 (beta)" sur le Socle commun des données locales d'Opendata Locale, sous le titre "Prénoms. Liste annuelle des prénoms des nouveaux-nés déclarés à l’état-civil" : http://opendatalocale.net/presentation-de-chaque-jeu-et-de-sa-normalisation-precise/
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
* 2017-04-26 : **v0.7beta** ([diff](https://github.com/CharlesNepote/liste-prenoms-nouveaux-nes/commit/9a9a4963513e888bc7e7b86e54f4f3c830fda025#diff-ef3b39c9e34d1e422e98be05e0d9f2a3)) ; principaux changements :
  * dans la description, précision qu'il s'agit du premier prénom
  * URL vers un fichier d'exemple
* 2017-03-26 : **v0.5beta**
* 2017-03 : premières versions non publiées.