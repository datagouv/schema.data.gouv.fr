<MenuSchema />

## espace-naturel-sensible

Schéma du format d'échange des Espaces Naturels Sensibles (ENS).

Spécification du format d'échange des Espaces Naturels Sensibles (ENS) établi par la communauté des CD AURA

- Schéma créé le : 08/04/2024
- Site web : https://github.com/freddtce/ENS_AURA
- Version : v0.1.0
- Clé primaire : `identifiant`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [identifiant](#propriete-identifiant) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [date_delib](#propriete-date-delib) | date (format `%Y-%m-%d`) | Oui |
| [diffusion_carto](#propriete-diffusion-carto) | booléen  | Oui |
| [surface_off](#propriete-surface-off) | nombre réel  | Non |
| [lien](#propriete-lien) | chaîne de caractères (format `uri`) | Non |
| [source](#propriete-source) | chaîne de caractères  | Non |
| [millesime](#propriete-millesime) | année  | Non |
| [commentaire](#propriete-commentaire) | chaîne de caractères  | Non |

#### Propriété `identifiant`

> *Description : Identifiant unique de l'objet définit comme suit :fr-ENS<dep>-<counter> avec dep sur 3 chiffres (0 en 1er chiffre pour les départements métropolitains) et 1 counter sur  6 chiffres avec des 0 pour combler.*<br/>*Exemple : fr-ENS001-000001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `fr-ENS\d{3}-\d{6}`

#### Propriété `nom`

> *Description : Dénomination de l'ENS comme inscrit dans la délibération, en graphie riche (minuscules accentuées)*<br/>*Exemple : Zone humide de la Forêt du Bout et Combe Grasse*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_delib`

> *Description : Date de délibération de création de l'ENS, au format AAAA-MM-JJ.
Si la date est inconnue, ne pas remplir.
Si uniquement l'année est connue, remplir avec AAAA-01-01*<br/>*Exemple : 2023-08-04*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `diffusion_carto`

> *Description : Autorise ou non la diffusion sur les productions cartographiques.*<br/>*Exemple : 1*
- Valeur obligatoire
- Type : booléen

#### Propriété `surface_off`

> *Description : Surface officielle inscrite dans la délibération, en hectares (2 décimales).*<br/>*Exemple : 3453619.67*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `lien`

> *Description : Lien url pointant vers une description plus complète de l'ENS (article, photo, fichier …).*<br/>*Exemple : http://patrimoines.ain.fr/img/thumbnails/425_266/dombes_reserve_1_cs.jpg?1522831882*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `source`

> *Description : Source utilisée pour la saisie de la géométrie du multipolygon.*<br/>*Exemple : Orthophoto*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `millesime`

> *Description : Millésime de la source utilisée pour la saisie de la géométrie du multipolygon.*<br/>*Exemple : 2022*
- Valeur optionnelle
- Type : année

#### Propriété `commentaire`

> *Description : Ajout de précisions concernant l’ENS (1000 caractères maximum).*<br/>*Exemple : Zone humide composée de marais et de tourbières*
- Valeur optionnelle
- Type : chaîne de caractères
