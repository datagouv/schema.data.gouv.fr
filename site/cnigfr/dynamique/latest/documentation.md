<MenuSchema />

## dynamique

Dynamique

Une dynamique est une évolution du paysage en général depuis la dernière version de l’atlas des paysages.
Une dynamique est modélisée par un « data type », c’est-à-dire un attribut complexe ; celui-ci peut s’appliquer à tout niveau de découpage paysager : sous-unités paysagères, unités paysagères, ensembles paysagers.
Un découpage paysager peut avoir plusieurs dynamiques.

- Schéma créé le : 01/01/2023
- Site web : https://github.com/cnigfr/schema-paysage
- Version : v1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [objetEvolution](#propriete-objetevolution) | chaîne de caractères  | Oui |
| [natureEvolution](#propriete-natureevolution) | chaîne de caractères  | Oui |
| [description](#propriete-description) | chaîne de caractères  | Non |
| [dateObservation](#propriete-dateobservation) | date  | Non |
| [dateFin](#propriete-datefin) | date  | Non |
| [lienPhotoOPP](#propriete-lienphotoopp) | chaîne de caractères  | Oui |
| [lienUP](#propriete-lienup) | chaîne de caractères  | Oui |
| [lienEP](#propriete-lienep) | chaîne de caractères  | Oui |
| [lienSousUP](#propriete-liensousup) | chaîne de caractères  | Oui |

#### Propriété `objetEvolution`

> *Description : Caractéristique paysagère sur laquelle porte l’évolution.*<br/>*Exemple : sols nus*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `natureEvolution`

> *Description : Catégorie d’évolution de la dynamique.*<br/>*Exemple : augmentation*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `description`

> *Description : Texte libre décrivant la dynamique de façon plus détaillée ou plus adaptée que la combinaison natureEvolution + objetEvolution.*<br/>*Exemple : Construction de 15 éoliennes sur la ligne de crête. Les toits de nombreuses fermes ont été équipés de panneaux photovoltaïques.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `dateObservation`

> *Description : Date à laquelle la dynamique a été observée.*<br/>*Exemple : 2027-06-30*
- Valeur optionnelle
- Type : date

#### Propriété `dateFin`

> *Description : Date à laquelle un arrêt de la dynamique a été observé.*<br/>*Exemple : 2027-07-18*
- Valeur optionnelle
- Type : date

#### Propriété `lienPhotoOPP`

> *Description : Lien vers la série de photos de l'OPP illustrant cette dynamique.*<br/>*Exemple : http://mon_url.fr*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienUP`

> *Description : Lien vers l’unité paysagère à laquelle s’applique cette dynamique.*<br/>*Exemple : AtlasPaysage_dept_33_2021.J2*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienEP`

> *Description : Lien vers l’ensemble  paysager auquel s’applique cette dynamique.*<br/>*Exemple : AtlasPaysage_dept_33_2021.J*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lienSousUP`

> *Description : Lien vers la sous-unité paysagère à laquelle s’applique cette dynamique.*<br/>*Exemple : AtlasPaysage_dept_33_2021.3*
- Valeur obligatoire
- Type : chaîne de caractères
