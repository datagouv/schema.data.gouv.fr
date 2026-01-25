<MenuSchema />

<MenuSchema />

# Schéma registres d'entrée d'archives

Ce schéma permet de modéliser les différents attributs des entrées dans les services publics d'archives.

## Contexte

En 2018, 86 kilomètres de documents et plus de 16000Go de données sont venus enrichir les collections des services publics d'archives français (Données du service interministériel des archives de France).

Dans une optique de gestion et de suivi de leurs fonds, les services d'archives consignent chaque entrée d'archives à partir de renseignements sommaires permettant d’identifier et de retracer toutes les arrivées de nouveaux documents (provenance, date d'arrivée dans le service, volume...) : c'est le registre des entrées.

Il est généralement directement tenu au sein d'un système d'information dédié aux archives (le SIA), mais il peut également être réalisé avec un tableur voir sur un cahier.

Dans son [Cadre stratégique commun de modernisation des archives](https://www.gouvernement.fr/cadre-strategique-commun-de-modernisation-des-archives-3042), la Délégation interministérielle aux archives de France, mentionne dans les objectifs 2020-2024 :

> **Objectif 1.4 : Numériser les archives et rendre les archives numériques aisément consultables et exploitables** 

> Il conviendra également de généraliser l’open data dans les services d’archives de l’État et de recommander ce modèle aux services territoriaux d’archives.

Pour en savoir plus sur la méthodologie de construction de ce schéma, consultez [ce document](https://github.com/Archivistes75/registre_entrees/blob/master/methodologie.md). 

## Cadre juridique

* Livre II du Code du Patrimoine
* Code des relations entre le public et l'administration

## Finalité

Les services d'archives consignent systématiquement, au sein d'un registre des entrées, tous les nouveaux documents qui entrent dans les fonds. Cela permet d’identifier et de retracer toutes les entrées de nouveaux documents d’archives.

La création d'un schéma de données permet de standardiser la diffusion des données produites par les services d'archives. 

Ces données informent sur la collecte des archives publiques et les acquisitions d'archives privées par les différentes institutions françaises.

Cette standardisation permet de faciliter la découverte des jeux de données et de les utiliser, notamment en simplifiant l'alignement à différentes échelles (utilisation sur des échelles locales ou nationales).

## Description du schéma

La documentation des champs est accessible [ici](https://schema.data.gouv.fr/Archivistes75/registre_entrees/latest/documentation.html).

Un [gabarit](https://raw.githubusercontent.com/Archivistes75/registre_entrees/master/exemple-valide.csv) au format tableur est également prévu pour faciliter la réalisation d'un registre des entrée au format du schéma.

## Format de fichier

Le format de fichier retenu pour la publication des données est le CSV (Comma Separated Values, valeurs séparées par des virgules).

Les fichiers doivent, sauf exception et autant que possible, respecter les règles de formatage suivantes :

* l’encodage des caractères est UTF-8,

* le séparateur des colonnes est la virgule,

* le séparateur des nombres décimaux est le point,

* le séparateur de valeurs multiples dans un champ est le point-virgule,

* si un champ contient une virgule, il doit être entouré de guillemets doubles,

* chaque ligne doit avoir le même nombre de champs,

* le type MIME ou Content-Type est text/csv.

**Recommandations pour le nommage des fichiers** :

Les fichiers doivent, sauf exception et autant que possible, respecter les règles de nommage suivantes :

`AAAAMMJJ_idProducteur_registre_des_entrees_millesime.csv`

* AAAAMMJJ : Date de création du fichier

* idServArch : identifiant du service d'archives (ex. FRAD_001)

* registre_des_entrees : nom du fichier, en minuscules non accentuées
    
* millésime : année des entrées

* extension : Si les règles de formatage sont respectées, l'extension est .csv

**Exemple** : `20201012_FRAD_001_registre_des_entrees_2020.csv`

**Recommandations pour la mise en conformité** :

Ces conseils reprennent ceux du [Schéma des données locales publié par Open Data france](https://scdl.opendatafrance.net/docs/recommandations-relatives-aux-jeux-de-donnees.html)

Les fichiers doivent comporter :

   * Toutes les colonnes, y compris celles dont les cellules ne sont pas renseignées, dans le bon ordre, et avec des en-têtes correctement nommées sur la première ligne (nom correspondant strictement au schéma)

   * Autant de lignes que nécessaire comprenant des cellules dont les valeurs peuvent être obligatoires (elles doivent être impérativement renseignées) ou optionnelles (elles sont seulement recommandées ou soumises à condition de disponibilité / pertinence)
   
   * Traitement des cellules vides (absence de valeur ou valeur équivalente à 0) : ces cellules doivent être laissées vides. Dans le cas où une valeur numérique est égale à zéro elle doit être écrite 0.0 (zéro [point] zéro), et, dans le cas où des caractères spéciaux sont utilisés pour remplacer des valeurs manquantes (ex. "-" ou "NaN"), cela doit être mentionné dans les métadonnées.
   
   * Les dates doivent être formées selon la norme 8601 : YYYY-MM-DD. 