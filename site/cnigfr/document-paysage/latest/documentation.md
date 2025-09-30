<MenuSchema />

## document-paysage

Document Paysage

Un document paysage est un document illustrant un découpage paysager. Il peut s’agir d’un bloc-diagramme, d’une coupe, d’un croquis, d’une photographie, etc

- Schéma créé le : 01/01/2023
- Site web : https://github.com/cnigfr/schema-paysage
- Version : v1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [geometrie](#propriete-geometrie) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [date](#propriete-date) | date  | Oui |
| [auteur](#propriete-auteur) | chaîne de caractères  | Oui |
| [conditionsUtilisationTexte](#propriete-conditionsutilisationtexte) | chaîne de caractères  | Non |
| [conditionsUtilisationURL](#propriete-conditionsutilisationurl) | chaîne de caractères  | Non |
| [document](#propriete-document) | chaîne de caractères  | Oui |
| [lienAtlasPaysage](#propriete-lienatlaspaysage) | chaîne de caractères  | Oui |

#### Propriété `geometrie`

> *Description : Localisation géométrique 2D du document paysage.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom`

> *Description : Intitulé du document paysage.*<br/>*Exemple : Les ruelles étroites du centre ancien - Langon*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date`

> *Description : Date à laquelle le document paysage a été réalisé.*<br/>*Exemple : 2021-02-15*
- Valeur obligatoire
- Type : date

#### Propriété `auteur`

> *Description : Nom de l’auteur du document.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `conditionsUtilisationTexte`

> *Description : Conditions d'utilisation du document, sous forme d'un texte.*<br/>*Exemple : CC BY (Creative Commons)*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `conditionsUtilisationURL`

> *Description : Conditions d’utilisation du document, sous forme d’un lien vers un texte.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `document`

> *Description : Lien vers le document paysage.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienAtlasPaysage`

> *Description : Lien vers la classe AtlasPaysage correspondant au document paysage.
Ce lien permet à l’utilisateur global de trouver les documents paysage relatifs à un atlas donné.*<br/>*Exemple : AtlasPaysage_dept_33_2020*
- Valeur obligatoire
- Type : chaîne de caractères
