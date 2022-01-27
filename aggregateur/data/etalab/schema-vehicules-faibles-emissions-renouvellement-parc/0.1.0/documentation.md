---
permalink: /etalab/schema-vehicules-faibles-emissions-renouvellement-parc/0.1.0/documentation.html
redirect_from: null
title: Documentation de Part des véhicules à faibles émissions dans le renouvellement
  d'un parc
version: 0.1.0
---

## vehicules-faibles-emissions-renouvellement-parc

Part des véhicules à faibles émissions dans le renouvellement d'un parc

Spécification des données fixant les termes et modalités de publication du pourcentage de véhicules à faibles et à très faibles émissions parmi les véhicules intégrés dans un renouvellement de parc

- Schéma créé le : 15.09.2021
- Site web : https://github.com/etalab/schema-flotte-publique-vehicule
- Version : 0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [sirenDeclarant](#propriété-sirendeclarant) | chaîne de caractères  | Oui |
| [sirenCouvert](#propriété-sirencouvert) | chaîne de caractères  | Oui |
| [nom](#propriété-nom) | chaîne de caractères  | Oui |
| [naf](#propriété-naf) | chaîne de caractères  | Oui |
| [cj](#propriété-cj) | chaîne de caractères  | Oui |
| [zone](#propriété-zone) | chaîne de caractères  | Oui |
| [nbVP](#propriété-nbvp) | nombre entier  | Oui |
| [nbVPEL](#propriété-nbvpel) | nombre entier  | Oui |
| [nbVPH2](#propriété-nbvph2) | nombre entier  | Oui |
| [nbVPclean](#propriété-nbvpclean) | nombre entier  | Oui |
| [nbN1](#propriété-nbn1) | nombre entier  | Oui |
| [nbN1inf](#propriété-nbn1inf) | nombre entier  | Oui |
| [nbN1infEL](#propriété-nbn1infel) | nombre entier  | Oui |
| [nbN1infH2](#propriété-nbn1infh2) | nombre entier  | Oui |
| [nbN1infclean](#propriété-nbn1infclean) | nombre entier  | Oui |
| [nbN1sup](#propriété-nbn1sup) | nombre entier  | Oui |
| [nbN1supEL](#propriété-nbn1supel) | nombre entier  | Oui |
| [nbN1supH2](#propriété-nbn1suph2) | nombre entier  | Oui |
| [nbN1supclean](#propriété-nbn1supclean) | nombre entier  | Oui |
| [nbL](#propriété-nbl) | nombre entier  | Oui |
| [nbLEL](#propriété-nblel) | nombre entier  | Oui |
| [nbLH2](#propriété-nblh2) | nombre entier  | Oui |
| [nbN23](#propriété-nbn23) | nombre entier  | Oui |
| [nbN23EL](#propriété-nbn23el) | nombre entier  | Oui |
| [nbN23H2](#propriété-nbn23h2) | nombre entier  | Oui |
| [nbN23EHRE](#propriété-nbn23ehre) | nombre entier  | Oui |
| [nbN23GNV](#propriété-nbn23gnv) | nombre entier  | Oui |
| [nbN23GPL](#propriété-nbn23gpl) | nombre entier  | Oui |
| [nbN23Bio](#propriété-nbn23bio) | nombre entier  | Oui |
| [nbN23XTL](#propriété-nbn23xtl) | nombre entier  | Oui |
| [nbBus](#propriété-nbbus) | nombre entier  | Oui |
| [nbBusM2](#propriété-nbbusm2) | nombre entier  | Oui |
| [nbBusM2EL](#propriété-nbbusm2el) | nombre entier  | Oui |
| [nbBusM2H2](#propriété-nbbusm2h2) | nombre entier  | Oui |
| [nbBusM2clean](#propriété-nbbusm2clean) | nombre entier  | Oui |
| [nbBusM2EHRE](#propriété-nbbusm2ehre) | nombre entier  | Oui |
| [nbBusM2GNV](#propriété-nbbusm2gnv) | nombre entier  | Oui |
| [nbBusM2bioGNV](#propriété-nbbusm2biognv) | nombre entier  | Oui |
| [nbBusM2GPL](#propriété-nbbusm2gpl) | nombre entier  | Oui |
| [nbBusM2Bio](#propriété-nbbusm2bio) | nombre entier  | Oui |
| [nbBusM2XTL](#propriété-nbbusm2xtl) | nombre entier  | Oui |
| [nbBusM3](#propriété-nbbusm3) | nombre entier  | Oui |
| [nbBusM3EL](#propriété-nbbusm3el) | nombre entier  | Oui |
| [nbBusM3H2](#propriété-nbbusm3h2) | nombre entier  | Oui |
| [nbBusM3EHRE](#propriété-nbbusm3ehre) | nombre entier  | Oui |
| [nbBusM3GNV](#propriété-nbbusm3gnv) | nombre entier  | Oui |
| [nbBusM3bioGNV](#propriété-nbbusm3biognv) | nombre entier  | Oui |
| [nbBusM3GPL](#propriété-nbbusm3gpl) | nombre entier  | Oui |
| [nbBusM3Bio](#propriété-nbbusm3bio) | nombre entier  | Oui |
| [nbBusM3XTL](#propriété-nbbusm3xtl) | nombre entier  | Oui |
| [nbCar](#propriété-nbcar) | nombre entier  | Oui |
| [nbCarM2](#propriété-nbcarm2) | nombre entier  | Oui |
| [nbCarM2EL](#propriété-nbcarm2el) | nombre entier  | Oui |
| [nbCarM2H2](#propriété-nbcarm2h2) | nombre entier  | Oui |
| [nbCarM2clean](#propriété-nbcarm2clean) | nombre entier  | Oui |
| [nbCarEL](#propriété-nbcarel) | nombre entier  | Oui |
| [nbCarH2](#propriété-nbcarh2) | nombre entier  | Oui |
| [nbCarEHRE](#propriété-nbcarehre) | nombre entier  | Oui |
| [nbCarGNV](#propriété-nbcargnv) | nombre entier  | Oui |
| [nbCarbioGNV](#propriété-nbcarbiognv) | nombre entier  | Oui |
| [nbCarGPL](#propriété-nbcargpl) | nombre entier  | Oui |
| [nbCarBio](#propriété-nbcarbio) | nombre entier  | Oui |
| [nbCarsXTL](#propriété-nbcarsxtl) | nombre entier  | Oui |
| [pcentLDVFE](#propriété-pcentldvfe) | nombre réel  | Oui |
| [pcentLDVTFE](#propriété-pcentldvtfe) | nombre réel  | Oui |
| [pcentLDVclean](#propriété-pcentldvclean) | nombre réel  | Oui |
| [pcent23RMTFE](#propriété-pcent23rmtfe) | nombre réel  | Oui |
| [pcentPLclean](#propriété-pcentplclean) | nombre réel  | Oui |
| [pcentTCFE](#propriété-pcenttcfe) | nombre réel  | Oui |
| [pcentBusclean](#propriété-pcentbusclean) | nombre réel  | Oui |
| [pcentBusTFE](#propriété-pcentbustfe) | nombre réel  | Oui |

#### Propriété `sirenDeclarant`

> *Description : Numéro SIREN de la personne morale déclarante<br/>Ex : 130025265*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `sirenCouvert`

> *Description : Numéro SIREN couvert sous la déclaration du sirenDéclarant<br/>Ex : 130025265*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `nom`

> *Description : Dénomination officielle de la personne morale.<br/>Ex : Direction interministerielle du numerique (DINUM)*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `naf`

> *Description : Code d'activité principale exercée.<br/>Ex : 47.72B*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `cj`

> *Description : Catégorie juridique Insee.<br/>Ex : 5710*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}$`

#### Propriété `zone`

> *Description : Situation géographique s'agissant des transports publics.<br/>Ex : 47.72B*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Zone A (1)
    - Zone B (2)
    - Zone C (3)

#### Propriété `nbVP`

> *Description : Nombre de voitures particulières (VP).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbVPEL`

> *Description : Nombre de VP électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbVPH2`

> *Description : Nombre de VP à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbVPclean`

> *Description : Nombre de VP à faibles émissions.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1`

> *Description : Nombre de camionnettes (VUL).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1inf`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1infEL`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1infH2`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1infclean`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes à faibles émissions.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1sup`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1supEL`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1supH2`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1supclean`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes à faibles émissions.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbL`

> *Description : Nombre de véhicules de catégories L1e-B, L2e-P, L2e-U et L3a-A1 (2-3RM).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbLEL`

> *Description : Nombre de 2-3RM électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbLH2`

> *Description : Nombre de 2-3RM à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23`

> *Description : Nombre de véhicules de catégories N2 et N3 (PL).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23EL`

> *Description : Nombre de PL électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23H2`

> *Description : Nombre de PL à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23EHRE`

> *Description : Nombre de PL électriques hybrides rechargeables de l'extérieur.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23GNV`

> *Description : Nombre de PL au GNV/bioGNV.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23GPL`

> *Description : Nombre de PL au GPL.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23Bio`

> *Description : Nombre de PL exclusivement aux biocarburants avancés.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23XTL`

> *Description : Nombre de PL exclusivement à carburants de synthèse ou paraffiniques.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBus`

> *Description : Nombre de véhicules de catégories M2 et M3 de classe I ou A (autobus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2`

> *Description : Nombre d'autobus M2.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2EL`

> *Description : Nombre d'autobus M2 électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2H2`

> *Description : Nombre d'autobus M2 à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2clean`

> *Description : Nombre d'autobus M2 à faibles émissions.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2EHRE`

> *Description : Nombre d'autobus M2 électriques hybrides rechargeables de l'extérieur.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2GNV`

> *Description : Nombre d'autobus M2 au GNV.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2bioGNV`

> *Description : Nombre d'autobus M2 au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2GPL`

> *Description : Nombre d'autobus M2 au GPL.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2Bio`

> *Description : Nombre d'autobus M2 exclusivement aux biocarburants avancés.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2XTL`

> *Description : Nombre d'autobus M2 exclusivement à carburants de synthèse ou paraffiniques.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3`

> *Description : Nombre d'autobus M3.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3EL`

> *Description : Nombre d'autobus M3 électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3H2`

> *Description : Nombre d'autobus M3 à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3EHRE`

> *Description : Nombre d'autobus M3 électriques hybrides rechargeables de l'extérieur.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3GNV`

> *Description : Nombre d'autobus M3 au GNV.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3bioGNV`

> *Description : Nombre d'autobus M3 au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3GPL`

> *Description : Nombre d'autobus M3 au GPL.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3Bio`

> *Description : Nombre d'autobus M3 exclusivement aux biocarburants avancés.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3XTL`

> *Description : Nombre d'autobus M3 exclusivement à carburants de synthèse ou paraffiniques.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCar`

> *Description : Nombre de véhicules de catégories M2 et M3 d'autres classes (autocars).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2`

> *Description : Nombre d'autocars M2.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2EL`

> *Description : Nombre d'autocars M2 électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2H2`

> *Description : Nombre d'autocars M2 à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2clean`

> *Description : Nombre d'autocars M2 à faibles émissions.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarEL`

> *Description : Nombre d'autocars électriques purs.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarH2`

> *Description : Nombre d'autocars à hydrogène (hybrides inclus).<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarEHRE`

> *Description : Nombre d'autocars électriques hybrides rechargeables de l'extérieur.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarGNV`

> *Description : Nombre d'autocars au GNV.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarbioGNV`

> *Description : Nombre d'autocars au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarGPL`

> *Description : Nombre d'autocars au GPL.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarBio`

> *Description : Nombre d'autocars exclusivement aux biocarburants avancés.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarsXTL`

> *Description : Nombre d'autocars exclusivement à carburants de synthèse ou paraffiniques.<br/>Ex : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `pcentLDVFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean et nbN1supclean sur la somme des valeurs des champs nbVP et nbN1.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentLDVTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPEL, nbVEH2, nbN1infEL, nbN1infH2, nbN1supEL et nbN1supH2, sur la somme des valeurs des champs nbVP et nbN1.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentLDVclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules légers (6). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean, nbN1supclean, nbBusM2clean et nbCarM2clean, sur la somme des valeurs des champs nbVP, nbN1, nbBusM2 et nbCarM2.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcent23RMTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes de 2-3RM. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbLEL et nbLH2 sur la valeur du champ nbL.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentPLclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de PL. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbN23EL, nbN23H2, nbN23EHRE, nbN23GNV, nbN23GPL, nbN23Bio et nbN23XTL sur la valeur du champ nbN23.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentTCFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes d'autobus et autocars. Correspond, en fonction de la valeur du champ zone, au quotient rapporté sur 100 de la somme des valeurs des champs relatifs aux autobus et autocars, à l'exception des champs nbBusM2clean, nbCarM2EL, nbCarM2H2 et nbCarM2clean, permettant de répondre aux dispositions pertinentes prévues aux articles D. 224-15-3, D. 224-15-4 et D. 224-15-6 du code de l'environnement, sur la somme des valeurs des champs nbBus et nbCar.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentBusclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes d'autobus. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbBusM3EL, nbBusM3H2, nbBusM3EHRE, nbBusM3GNV, nbBusM3bioGNV, nbBusM3GPL, nbBusM3Bio et nbBusM3XTL sur la valeur du champ nbBusM3.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentBusTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes d'autobus. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbBusM3EL et nbBusM3H2 sur la valeur du champ nbBusM3.<br/>Ex : 12.2*
- Valeur obligatoire
- Type : nombre réel