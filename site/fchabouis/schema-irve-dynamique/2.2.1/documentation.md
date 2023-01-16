<MenuSchema />

## schema-irve-dynamique

IRVE dynamique

Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

- Schéma créé le : 10/28/22
- Site web : https://github.com/etalab/schema-irve
- Version : 2.2.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_pdc_itinerance](#propriete-id-pdc-itinerance) | chaîne de caractères  | Oui |
| [etat_pdc](#propriete-etat-pdc) | chaîne de caractères  | Oui |
| [occupation_pdc](#propriete-occupation-pdc) | chaîne de caractères  | Oui |
| [horodatage](#propriete-horodatage) | date et heure  | Oui |
| [etat_prise_type_2](#propriete-etat-prise-type-2) | chaîne de caractères  | Non |
| [etat_prise_type_combo_ccs](#propriete-etat-prise-type-combo-ccs) | chaîne de caractères  | Non |
| [etat_prise_type_chademo](#propriete-etat-prise-type-chademo) | chaîne de caractères  | Non |
| [etat_prise_type_ef](#propriete-etat-prise-type-ef) | chaîne de caractères  | Non |

#### Propriété `id_pdc_itinerance`

> *Description : L'identifiant du point de recharge, tel qu'apparaissant dans le schéma statique. Doit permettre de faire le lien entre le dynamique et le statique.<br/>Ex : FRA68E680210015*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^FR[A-Z0-9]{4,33}$`

#### Propriété `etat_pdc`

> *Description : TODO<br/>Ex : TODO*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - en_service
    - hors_service
    - inconnu

#### Propriété `occupation_pdc`

> *Description : TODO<br/>Ex : TODO*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - libre
    - occupe
    - reserve
    - inconnu

#### Propriété `horodatage`

> *Description : TODO<br/>Ex : TODO*
- Valeur obligatoire
- Type : date et heure

#### Propriété `etat_prise_type_2`

> *Description : None<br/>Ex : None*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - fonctionnel
    - hors_service
    - inconnu

#### Propriété `etat_prise_type_combo_ccs`

> *Description : None<br/>Ex : None*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - fonctionnel
    - hors_service
    - inconnu

#### Propriété `etat_prise_type_chademo`

> *Description : None<br/>Ex : None*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - fonctionnel
    - hors_service
    - inconnu

#### Propriété `etat_prise_type_ef`

> *Description : None<br/>Ex : None*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - fonctionnel
    - hors_service
    - inconnu
