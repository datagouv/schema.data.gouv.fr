<MenuSchema />

## aire_stationnement

Classe AIRE_STATIONNEMENT du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe AIRE_STATIONNEMENT

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_aire_stationnement`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_aire_stationnement](#identifiant--de-l-aire-de-stationnement-propriete-id-aire-stationnement) | chaîne de caractères  | Oui |
| [id_cheminement](#identifiant-du-cheminement-propriete-id-cheminement) | chaîne de caractères  | Oui |
| [nom_aire](#nom-de-l-aire-de-stationnement-propriete-nom-aire) | chaîne de caractères  | Oui |
| [adresse_aire](#adresse-de-l-aire-de-stationnement-propriete-adresse-aire) | chaîne de caractères  | Non |
| [localisation_stationnement](#localisation-du-stationnement-propriete-localisation-stationnement) | chaîne de caractères  | Oui |
| [type_sol](#type-de-sol-majoritaire-propriete-type-sol) | chaîne de caractères  | Oui |
| [etat_sol](#etat-du-sol-propriete-etat-sol) | chaîne de caractères  | Oui |
| [nb_place_pmr](#nombre-de-stationnements-pmr-propriete-nb-place-pmr) | nombre entier  | Oui |
| [nb_place_allongee](#nombre-de-stationnements-allonges-propriete-nb-place-allongee) | nombre entier  | Non |
| [signaletique_pmr](#presence-de-signalisation-les-stationnements-pmr-propriete-signaletique-pmr) | chaîne de caractères  | Oui |
| [marquage_sol](#presence-de-marquage-au-sol-propriete-marquage-sol) | chaîne de caractères  | Oui |
| [pente](#pente-de-l'aire-de-stationnement-propriete-pente) | chaîne de caractères  | Oui |
| [devers](#devers-de-l'aire-de-stationnement-propriete-devers) | chaîne de caractères  | Oui |
| [mobilier](#presence-de-mobilier-propriete-mobilier) | chaîne de caractères  | Oui |
| [accrochage_deux_roues](#presence-de-garage-a-deux-roues-propriete-accrochage-deux-roues) | chaîne de caractères  | Oui |
| [portique_limiteur](#presence-d'un-portique-limiteur-propriete-portique-limiteur) | chaîne de caractères  | Oui |
| [url_media](#hyperliens-vers-des-photos-de-l-aire-de-stationnement-propriete-url-media) | liste  | Non |
| [coord_gps_aire](#coordonnees-geographiques-de-l-aire-de-stationnement-propriete-coord-gps-aire) | point géographique  | Non |
| [geom_surf](#geometrie-ponctuelle-ou-surfacique-de-l-aire-de-stationnement-propriete-geom-surf) | GéoJSON  | Oui |

#### identifiant  de l'aire de stationnement - Propriété `id_aire_stationnement`

> *Description : identifiant unique de l'aire de stationnement PMR*<br/>*Exemple : 44003:AST:0007:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### identifiant du cheminement - Propriété `id_cheminement`

> *Description : identifiant du cheminement desservi par l'aire de stationnement*<br/>*Exemple : 44003:CHE:00654:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom de l'aire de stationnement - Propriété `nom_aire`

> *Description : nom de l'aire de stationnement*<br/>*Exemple : Parking des Glaisins*
- Valeur obligatoire
- Type : chaîne de caractères

#### adresse de l'aire de stationnement - Propriété `adresse_aire`

> *Description : adresse de l'aire de stationnement*<br/>*Exemple : 12 rue de la forêt*
- Valeur optionnelle
- Type : chaîne de caractères

#### localisation du stationnement - Propriété `localisation_stationnement`

> *Description : localisation du stationnement*<br/>*Exemple : parking*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `parking`
    - `bord de route`
    - `voirie`
    - `chemin`
    - `autre`
    - `NC`
    - `sans objet`

#### type de sol majoritaire - Propriété `type_sol`

> *Description : type de sol majoritaire du tronçon*<br/>*Exemple : enrobé*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `béton`
    - `enrobé / bitume`
    - `stabilisé`
    - `pavage`
    - `dallage`
    - `platelage`
    - `sol naturel friable et poussiéreux`
    - `sol naturel compact`
    - `sol naturel irrégulier`
    - `pelouse entretenue`
    - `pelouse non entretenue`
    - `prairie`
    - `gravier maintenu`
    - `gravier fin et compact`
    - `gravier libre`
    - `gros gravier`
    - `sable stabilisé`
    - `sable meuble`
    - `sable non meuble (ferme)`
    - `dispositifs amovibles`
    - `autre`
    - `NC`
    - `sans objet`

#### état du sol - Propriété `etat_sol`

> *Description : état du sol*<br/>*Exemple : roulant*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `roulant`
    - `ferme`
    - `meuble`
    - `glissant`
    - `réfléchissant`
    - `boueux`
    - `NC`
    - `sans objet`

#### nombre de stationnements PMR - Propriété `nb_place_pmr`

> *Description : nombre de stationnements PMR*<br/>*Exemple : 3*
- Valeur obligatoire
- Type : nombre entier

#### nombre de stationnements allongés - Propriété `nb_place_allongee`

> *Description : nombre de stationnements allongés*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### présence de signalisation les stationnements PMR - Propriété `signaletique_pmr`

> *Description : présence (oui/non) de signalisation indiquant la spécificité du stationnement*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence de marquage au sol - Propriété `marquage_sol`

> *Description : présence (oui/non) du marquage au sol : pictogramme et contour de la place*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### pente de l’aire de stationnement - Propriété `pente`

> *Description : inclinaison du terrain dans le sens longitudinal du stationnement*<br/>*Exemple : minimale*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `nulle`
    - `minimale`
    - `faible`
    - `moyenne`
    - `forte`

#### dévers de l’aire de stationnement - Propriété `devers`

> *Description : inclinaison du terrain dans le sens latéral du stationnement*<br/>*Exemple : minimale*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `minimale`
    - `faible`
    - `moyen`
    - `fort`
    - `NC`
    - `sans objet`

#### présence de mobilier - Propriété `mobilier`

> *Description : présence (oui/non) de mobilier*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence de garage à deux-roues - Propriété `accrochage_deux_roues`

> *Description : présence (oui/non) d’un dispositif permettant le garage des deux-roues (bicyclette, mobylette, scooter, moto)*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### présence d’un portique limiteur - Propriété `portique_limiteur`

> *Description : présence (oui/non) d’un portique limiteur*<br/>*Exemple : non*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `oui`
    - `non`

#### hyperliens vers des photos de l'aire de stationnement - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives de l'aire de stationnement*<br/>*Exemple : ['https://panoramax.fr/?&focus=pic&map=17/46.347392/2.593132&xyz=226.00/0.00/30']*
- Valeur optionnelle
- Type : liste

#### coordonnées géographiques de l'aire de stationnement - Propriété `coord_gps_aire`

> *Description : coordonnées géographiques de l'aire de stationnement*<br/>*Exemple : 49.2527, 3.9815*
- Valeur optionnelle
- Type : point géographique

#### géométrie ponctuelle ou surfacique de l'aire de stationnement - Propriété `geom_surf`

> *Description : géométrie ponctuelle ou surfacique de l'aire de stationnement en projection Lambert93 au format GeoJSON*<br/>*Exemple : {'type': 'Polygon', 'coordinates': [[[656589.7, 6425785.32], [656655.02, 6425866.31], [656663.55, 6425874.43], [656589.707, 6425785.32]]]}*
- Valeur obligatoire
- Type : GéoJSON
