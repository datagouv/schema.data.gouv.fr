<MenuSchema />

<MenuSchema />

## schema-irve-dynamique

IRVE dynamique

Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

- Schéma créé le : 28/10/2022
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

> *Description : L'identifiant du point de recharge, tel qu'apparaissant dans le schéma statique. Doit permettre de faire le lien entre le dynamique et le statique.*<br/>*Exemple : FRA68E680210015*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^FR[A-Z0-9]{4,33}$`

#### Propriété `etat_pdc`

> *Description : `etat_pdc` caractérise l’état de fonctionnement du point de recharge : est-il en service ou hors service ? En l’absence d’information, etat_pdc sera égal à ‘inconnu’.*<br/>*Exemple : en_service*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `en_service`
    - `hors_service`
    - `inconnu`

#### Propriété `occupation_pdc`

> *Description : `occupation_pdc` caractérise l’occupation du point de recharge : est-il libre, occupé ou réservé ? En l’absence d’information, occupation_pdc sera égal à ‘inconnu’.*<br/>*Exemple : occupe*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `libre`
    - `occupe`
    - `reserve`
    - `inconnu`

#### Propriété `horodatage`

> *Description : Indique la date et heure de remontée de l’information publiée, formaté selon la norme ISO 8601*<br/>*Exemple : 2023-01-30T10:27:50+01:00*
- Valeur obligatoire
- Type : date et heure

#### Propriété `etat_prise_type_2`

> *Description : `etat_prise_type_2` indique l’état de fonctionnement du connecteur T2 : est-il fonctionnel ou hors-service ? En l’absence d’information, indiquer ‘inconnu’. En l’absence de connecteur de ce type sur le point de recharge, laisser une chaîne de caractère vide.*<br/>*Exemple : fonctionnel*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `fonctionnel`
    - `hors_service`
    - `inconnu`

#### Propriété `etat_prise_type_combo_ccs`

> *Description : `etat_prise_type_combo_ccs` indique l’état de fonctionnement du connecteur Combo CCS : est-il fonctionnel ou hors-service ? En l’absence d’information, indiquer ‘inconnu’. En l’absence de connecteur de ce type sur le point de recharge, laisser une chaîne de caractère vide.*<br/>*Exemple : hors_service*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `fonctionnel`
    - `hors_service`
    - `inconnu`

#### Propriété `etat_prise_type_chademo`

> *Description : `etat_prise_type_chademo` indique l’état de fonctionnement du connecteur Chademo : est-il fonctionnel ou hors-service ? En l’absence d’information, indiquer ‘inconnu’. En l’absence de connecteur de ce type sur le point de recharge, laisser une chaîne de caractère vide.*<br/>*Exemple : inconnu*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `fonctionnel`
    - `hors_service`
    - `inconnu`

#### Propriété `etat_prise_type_ef`

> *Description : `etat_prise_type_ef` indique l’état de fonctionnement du connecteur EF : est-il fonctionnel ou hors-service ? En l’absence d’information, indiquer ‘inconnu’. En l’absence de connecteur de ce type sur le point de recharge, laisser une chaîne de caractère vide.*<br/>*Exemple : fonctionnel*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `fonctionnel`
    - `hors_service`
    - `inconnu`
