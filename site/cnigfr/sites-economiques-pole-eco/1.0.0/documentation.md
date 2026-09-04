<MenuSchema />

## sites-economiques-pole-eco

Classe POLE-ECO du standard CNIG Sites Economiques

Spécification du fichier d'échange conforme au standard CNIG Sites Economiques pour la classe POLE-ECO : Pôle économique

- Schéma créé le : 22/08/2023
- Site web : https://github.com/cnigfr/schema-sites-economiques
- Version : v1.0.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `pole_id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [pole_id](#identifiant-propriete-pole-id) | chaîne de caractères  | Oui |
| [pole_nom](#nom-propriete-pole-nom) | chaîne de caractères  | Oui |
| [pole_vocadomi](#vocation-dominante-propriete-pole-vocadomi) | chaîne de caractères  | Oui |
| [pole_identif_date](#date-d-identification-propriete-pole-identif-date) | date (format `%Y-%m-%d`) | Oui |
| [pole_actu_date](#date-de-derniere-actualisation-propriete-pole-actu-date) | date (format `%Y-%m-%d`) | Non |
| [pole_nb_site](#nombre-de-sites-propriete-pole-nb-site) | nombre réel  | Non |
| [pole_nb_etab](#nombre-d-etablissements-propriete-pole-nb-etab) | nombre réel  | Non |
| [pole_nb_emploi](#nombre-d-emploi-propriete-pole-nb-emploi) | nombre réel  | Non |
| [pole_surface](#surface--propriete-pole-surface) | nombre réel  | Oui |
| [pole_geompoint](#localisation-propriete-pole-geompoint) | point géographique (format `default`) | Oui |
| [pole_rayonnement](#rayonnement--propriete-pole-rayonnement) | chaîne de caractères  | Non |

#### identifiant - Propriété `pole_id`

> *Description : identifiant du pôle économique défini dans le standard CNIG Site Economique*<br/>*Exemple : 84003_POLE-ECO_00162*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom - Propriété `pole_nom`

> *Description : nom usuel du pôle économique*<br/>*Exemple : Les Bornes du Temps*
- Valeur obligatoire
- Type : chaîne de caractères

#### vocation dominante - Propriété `pole_vocadomi`

> *Description : vocation dominante du pôle économique, issue de la vocation dominante des sites économiques le constituant.*<br/>*Exemple : mixte à dominante logistique*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `industrielle`
    - `commerciale`
    - `tertiaire`
    - `artisanale`
    - `touristique`
    - `portuaire`
    - `aéroportuaire, aéronautique`
    - `entrepôts, logistique`
    - `logistique agricole`
    - `mixte à dominante logistique`
    - `mixte, sans dominante`
    - `inconnu`
    - `autre`
    - `sans objet`

#### date d'identification - Propriété `pole_identif_date`

> *Description : date d'identification du pôle économique*<br/>*Exemple : 2016-03-26*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### date de dernière actualisation - Propriété `pole_actu_date`

> *Description : date de dernière actualisation des informations sur le pôle économique.*<br/>*Exemple : 2022-08-22*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### nombre de sites - Propriété `pole_nb_site`

> *Description : nombre de sites composant le pôle économique.*<br/>*Exemple : 2*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'établissements - Propriété `pole_nb_etab`

> *Description : nombre total d'établissements du pôle économique*<br/>*Exemple : 40*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'emploi - Propriété `pole_nb_emploi`

> *Description : nombre total d'emplois du pôle économique*<br/>*Exemple : 1152*
- Valeur optionnelle
- Type : nombre réel

#### surface  - Propriété `pole_surface`

> *Description : somme des surfaces (en ha) des sites économiques constituant le pôle*<br/>*Exemple : 21*
- Valeur obligatoire
- Type : nombre réel

#### localisation - Propriété `pole_geompoint`

> *Description : coordonnées géographiques du centroïde du pôle économique au format geopoint (https://specs.frictionlessdata.io//table-schema/#geopoint)*<br/>*Exemple : 3.9815, 49.2527*
- Valeur obligatoire
- Type : point géographique (format `default`)

#### rayonnement  - Propriété `pole_rayonnement`

> *Description : rayonnement du pôle économique*<br/>*Exemple : régional*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `international`
    - `national`
    - `régional`
    - `local`
    - `inconnu`
    - `autre`
    - `sans objet`
