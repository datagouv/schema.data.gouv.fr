<MenuSchema />

<MenuSchema />

# Déclaration des profils d'acheteur

## Contexte et références

> La déclaration du profil d’acheteur est effectuée par l’acheteur ou toute personne habilitée par celui-ci sur le portail unique interministériel (data.gouv.fr) destiné à rassembler et à mettre à disposition librement l’ensemble des informations publiques.
>
> L’objectif est d’impliquer les éditeurs de profils d’acheteurs afin de simplifier et rationnaliser la déclaration des profils d’acheteurs initialement confiée aux acheteurs publics.
>
> Les éditeurs de profil d’acheteur sont invités à se créer un compte sur la plateforme data.gouv.fr afin d’y publier au format .CSV un fichier contenant les informations suivantes :
>
> - le SIRET des acheteurs (colonne siretAcheteur)
> - l’adresse URL des profils d’acheteurs (colonne urlProfilAcheteur)
> - les coordonnées du ou des acheteurs concernés (colonne coordonnnées)
>
> Pour chaque fiche publiée il est essentiel de demander aux éditeurs de profils d’acheteurs d’associer le mot clé (« tag ») suivant : « DECP » (données essentielles de la commande publique) afin de permettre la centralisation de l’ensemble des contributions par Etalab.
>
> Un modèle de fichier est disponible sur la page suivante : https://www.data.gouv.fr/fr/datasets/structure-du-fichier-de-declaration-de-profil-dacheteur/

## Schéma

Schéma au format [TableSchema](https://frictionlessdata.io/specs/table-schema) disponible [ici](https://github.com/etalab/schema-decp-dpa/blob/master/schema.json).

## Validation

Cf https://github.com/etalab/schema.data.gouv.fr#comment-valider-un-fichier

## Consolidation

Etalab réalise une consolidation des jeux de données DECP-DPA déposés sur data.gouv.fr. Le code est [disponible ici](https://github.com/etalab/schema-decp-dpa/tree/master/aggregration).
