<MenuSchema />

## vehicules-faibles-emissions-renouvellement-parc

Part des véhicules à faibles émissions dans le renouvellement d'un parc

Spécification des données fixant les termes et modalités de publication du pourcentage de véhicules à faibles et à très faibles émissions parmi les véhicules intégrés dans un renouvellement de parc

- Schéma créé le : 15/09/2021
- Site web : https://github.com/etalab/schema-flotte-publique-vehicule
- Version : v0.1.3

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [sirenDeclarant](#propriete-sirendeclarant) | chaîne de caractères  | Oui |
| [sirenCouvert](#propriete-sirencouvert) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [naf](#propriete-naf) | chaîne de caractères  | Oui |
| [cj](#propriete-cj) | chaîne de caractères  | Oui |
| [annee](#propriete-annee) | année  | Oui |
| [zone](#propriete-zone) | chaîne de caractères  | Non |
| [nbVP](#propriete-nbvp) | nombre entier  | Non |
| [nbVPEL](#propriete-nbvpel) | nombre entier  | Non |
| [nbVPH2](#propriete-nbvph2) | nombre entier  | Non |
| [nbVPclean](#propriete-nbvpclean) | nombre entier  | Non |
| [nbN1](#propriete-nbn1) | nombre entier  | Non |
| [nbN1inf](#propriete-nbn1inf) | nombre entier  | Non |
| [nbN1infEL](#propriete-nbn1infel) | nombre entier  | Non |
| [nbN1infH2](#propriete-nbn1infh2) | nombre entier  | Non |
| [nbN1infclean](#propriete-nbn1infclean) | nombre entier  | Non |
| [nbN1sup](#propriete-nbn1sup) | nombre entier  | Non |
| [nbN1supEL](#propriete-nbn1supel) | nombre entier  | Non |
| [nbN1supH2](#propriete-nbn1suph2) | nombre entier  | Non |
| [nbN1supclean](#propriete-nbn1supclean) | nombre entier  | Non |
| [nbL](#propriete-nbl) | nombre entier  | Non |
| [nbLEL](#propriete-nblel) | nombre entier  | Non |
| [nbLH2](#propriete-nblh2) | nombre entier  | Non |
| [nbN23](#propriete-nbn23) | nombre entier  | Non |
| [nbN23EL](#propriete-nbn23el) | nombre entier  | Non |
| [nbN23H2](#propriete-nbn23h2) | nombre entier  | Non |
| [nbN23EHRE](#propriete-nbn23ehre) | nombre entier  | Non |
| [nbN23GNV](#propriete-nbn23gnv) | nombre entier  | Non |
| [nbN23GPL](#propriete-nbn23gpl) | nombre entier  | Non |
| [nbN23Bio](#propriete-nbn23bio) | nombre entier  | Non |
| [nbN23XTL](#propriete-nbn23xtl) | nombre entier  | Non |
| [nbBus](#propriete-nbbus) | nombre entier  | Non |
| [nbBusM2](#propriete-nbbusm2) | nombre entier  | Non |
| [nbBusM2EL](#propriete-nbbusm2el) | nombre entier  | Non |
| [nbBusM2H2](#propriete-nbbusm2h2) | nombre entier  | Non |
| [nbBusM2clean](#propriete-nbbusm2clean) | nombre entier  | Non |
| [nbBusM2EHRE](#propriete-nbbusm2ehre) | nombre entier  | Non |
| [nbBusM2GNV](#propriete-nbbusm2gnv) | nombre entier  | Non |
| [nbBusM2bioGNV](#propriete-nbbusm2biognv) | nombre entier  | Non |
| [nbBusM2GPL](#propriete-nbbusm2gpl) | nombre entier  | Non |
| [nbBusM2Bio](#propriete-nbbusm2bio) | nombre entier  | Non |
| [nbBusM2XTL](#propriete-nbbusm2xtl) | nombre entier  | Non |
| [nbBusM2EuroVI](#propriete-nbbusm2eurovi) | nombre entier  | Non |
| [nbBusM3](#propriete-nbbusm3) | nombre entier  | Non |
| [nbBusM3EL](#propriete-nbbusm3el) | nombre entier  | Non |
| [nbBusM3H2](#propriete-nbbusm3h2) | nombre entier  | Non |
| [nbBusM3EHRE](#propriete-nbbusm3ehre) | nombre entier  | Non |
| [nbBusM3GNV](#propriete-nbbusm3gnv) | nombre entier  | Non |
| [nbBusM3bioGNV](#propriete-nbbusm3biognv) | nombre entier  | Non |
| [nbBusM3GPL](#propriete-nbbusm3gpl) | nombre entier  | Non |
| [nbBusM3Bio](#propriete-nbbusm3bio) | nombre entier  | Non |
| [nbBusM3XTL](#propriete-nbbusm3xtl) | nombre entier  | Non |
| [nbBusM3EuroVI](#propriete-nbbusm3eurovi) | nombre entier  | Non |
| [nbCar](#propriete-nbcar) | nombre entier  | Non |
| [nbCarM2](#propriete-nbcarm2) | nombre entier  | Non |
| [nbCarM2EL](#propriete-nbcarm2el) | nombre entier  | Non |
| [nbCarM2H2](#propriete-nbcarm2h2) | nombre entier  | Non |
| [nbCarM2clean](#propriete-nbcarm2clean) | nombre entier  | Non |
| [nbCarEL](#propriete-nbcarel) | nombre entier  | Non |
| [nbCarH2](#propriete-nbcarh2) | nombre entier  | Non |
| [nbCarEHRE](#propriete-nbcarehre) | nombre entier  | Non |
| [nbCarGNV](#propriete-nbcargnv) | nombre entier  | Non |
| [nbCarbioGNV](#propriete-nbcarbiognv) | nombre entier  | Non |
| [nbCarGPL](#propriete-nbcargpl) | nombre entier  | Non |
| [nbCarBio](#propriete-nbcarbio) | nombre entier  | Non |
| [nbCarXTL](#propriete-nbcarxtl) | nombre entier  | Non |
| [nbCarEuroVI](#propriete-nbcareurovi) | nombre entier  | Non |
| [pcentLDVFE](#propriete-pcentldvfe) | nombre réel  | Non |
| [pcentLDVTFE](#propriete-pcentldvtfe) | nombre réel  | Non |
| [pcentLDVclean](#propriete-pcentldvclean) | nombre réel  | Non |
| [pcent23RMTFE](#propriete-pcent23rmtfe) | nombre réel  | Non |
| [pcentPLclean](#propriete-pcentplclean) | nombre réel  | Non |
| [pcentTCFE](#propriete-pcenttcfe) | nombre réel  | Non |
| [pcentBusclean](#propriete-pcentbusclean) | nombre réel  | Non |
| [pcentBusTFE](#propriete-pcentbustfe) | nombre réel  | Non |

#### Propriété `sirenDeclarant`

> *Description : Numéro SIREN de la personne morale déclarante*<br/>*Exemple : 130025265*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `sirenCouvert`

> *Description : Numéro SIREN couvert sous la déclaration du sirenDéclarant*<br/>*Exemple : 130025265*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `nom`

> *Description : Dénomination officielle de la personne morale.*<br/>*Exemple : Direction interministerielle du numerique (DINUM)*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `naf`

> *Description : Code d'activité principale exercée.*<br/>*Exemple : 47.72B*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `cj`

> *Description : Catégorie juridique Insee.*<br/>*Exemple : 5710*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{4}$`

#### Propriété `annee`

> *Description : Année concernée par les données rapportées.*<br/>*Exemple : 2021*
- Valeur obligatoire
- Type : année

#### Propriété `zone`

> *Description : Situation géographique s'agissant des transports publics.*<br/>*Exemple : Zone A*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Zone A`
    - `Zone B`
    - `Zone C`
    - `Plusieurs zones`
    - `Non concerné`

#### Propriété `nbVP`

> *Description : Nombre de voitures particulières (VP).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbVPEL`

> *Description : Nombre de VP électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbVPH2`

> *Description : Nombre de VP à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbVPclean`

> *Description : Nombre de VP à faibles émissions (y compris les nbVPEL et nbVPH2).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1`

> *Description : Nombre de camionnettes (VUL).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1inf`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1infEL`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1infH2`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1infclean`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes à faibles émissions (y compris les nbN1infEL et nbN1infH2).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1sup`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1supEL`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1supH2`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN1supclean`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes à faibles émissions (y compris les nbN1supEL et nbN1supH2).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbL`

> *Description : Nombre de véhicules de catégories L1e-B, L2e-P, L2e-U et L3a-A1 (2-3RM).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbLEL`

> *Description : Nombre de 2-3RM électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbLH2`

> *Description : Nombre de 2-3RM à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23`

> *Description : Nombre de véhicules de catégories N2 et N3 (PL).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23EL`

> *Description : Nombre de PL électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23H2`

> *Description : Nombre de PL à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23EHRE`

> *Description : Nombre de PL électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23GNV`

> *Description : Nombre de PL au GNV/bioGNV.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23GPL`

> *Description : Nombre de PL au GPL.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23Bio`

> *Description : Nombre de PL exclusivement aux biocarburants.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbN23XTL`

> *Description : Nombre de PL exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBus`

> *Description : Nombre de véhicules de catégories M2 et M3 de classe I ou A (autobus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2`

> *Description : Nombre d'autobus M2.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2EL`

> *Description : Nombre d'autobus M2 électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2H2`

> *Description : Nombre d'autobus M2 à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2clean`

> *Description : Nombre d'autobus M2 à faibles émissions  (y compris les nbBusM2EL et nbBusM2H2).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2EHRE`

> *Description : Nombre d'autobus M2 électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2GNV`

> *Description : Nombre d'autobus M2 au GNV.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2bioGNV`

> *Description : Nombre d'autobus M2 au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2GPL`

> *Description : Nombre d'autobus M2 au GPL.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2Bio`

> *Description : Nombre d'autobus M2 exclusivement aux biocarburants.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2XTL`

> *Description : Nombre d'autobus M2 exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM2EuroVI`

> *Description : Nombre d'autobus M2 hybrides non électriques ou diesel satisfaisant au moins à la norme Euro VI (uniquement en zone C).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3`

> *Description : Nombre d'autobus M3.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3EL`

> *Description : Nombre d'autobus M3 électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3H2`

> *Description : Nombre d'autobus M3 à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3EHRE`

> *Description : Nombre d'autobus M3 électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3GNV`

> *Description : Nombre d'autobus M3 au GNV.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3bioGNV`

> *Description : Nombre d'autobus M3 au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3GPL`

> *Description : Nombre d'autobus M3 au GPL.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3Bio`

> *Description : Nombre d'autobus M3 exclusivement aux biocarburants.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3XTL`

> *Description : Nombre d'autobus M3 exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbBusM3EuroVI`

> *Description : Nombre d'autobus M3 hybrides non électriques ou diesel satisfaisant au moins à la norme Euro VI (uniquement en zone C).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCar`

> *Description : Nombre de véhicules de catégories M2 et M3 d'autres classes (autocars).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarM2`

> *Description : Nombre d'autocars M2.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarM2EL`

> *Description : Nombre d'autocars M2 électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarM2H2`

> *Description : Nombre d'autocars M2 à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarM2clean`

> *Description : Nombre d'autocars M2 à faibles émissions (y compris les nbCarM2EL et nbCarM2H2).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarEL`

> *Description : Nombre d'autocars (M2 et M3) électriques purs.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarH2`

> *Description : Nombre d'autocars (M2 et M3) à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarEHRE`

> *Description : Nombre d'autocars (M2 et M3) électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarGNV`

> *Description : Nombre d'autocars (M2 et M3) au GNV.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarbioGNV`

> *Description : Nombre d'autocars (M2 et M3) au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarGPL`

> *Description : Nombre d'autocars (M2 et M3) au GPL.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarBio`

> *Description : Nombre d'autocars (M2 et M3) exclusivement aux biocarburants.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarXTL`

> *Description : Nombre d'autocars (M2 et M3) exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nbCarEuroVI`

> *Description : Nombre d'autocar (M2 et M3) hybrides non électriques ou diesel satisfaisant au moins à la norme Euro VI.*<br/>*Exemple : 12*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `pcentLDVFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean et nbN1supclean sur la somme des valeurs des champs nbVP et nbN1. Pour les entreprises privées, la prise en compte des champs nbN1supclean et nbN1sup n’est obligatoire qu’à partir du 1er janvier 2024.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentLDVTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPEL, nbVPH2, nbN1infEL, nbN1infH2, nbN1supEL et nbN1supH2, sur la somme des valeurs des champs nbVP et nbN1. Pour les personnes dont le profil est «privé», la prise en compte des champs nbN1supEL, nbN1supH2 et nbN1sup n’est obligatoire qu’à partir du 1er janvier 2024.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentLDVclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules légers (6). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean, nbN1supclean, nbBusM2clean et nbCarM2clean, sur la somme des valeurs des champs nbVP, nbN1, nbBusM2 et nbCarM2.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcent23RMTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes de 2-3RM. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbLEL et nbLH2 sur la valeur du champ nbL.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentPLclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de PL. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbN23EL, nbN23H2, nbN23EHRE, nbN23GNV, nbN23GPL, nbN23Bio et nbN23XTL sur la valeur du champ nbN23.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentTCFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes d'autobus et autocars. Correspond, en fonction de la valeur du champ zone, au quotient rapporté sur 100 de la somme des valeurs des champs relatifs aux autobus et autocars, à l'exception des champs nbBusM2clean, nbCarM2EL, nbCarM2H2 et nbCarM2clean, permettant de répondre aux dispositions pertinentes prévues aux articles D. 224-15-3, D. 224-15-4 et D. 224-15-6 du code de l'environnement, sur la somme des valeurs des champs nbBus et nbCar.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentBusclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes d'autobus. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbBusM3EL, nbBusM3H2, nbBusM3EHRE, nbBusM3GNV, nbBusM3bioGNV, nbBusM3GPL, nbBusM3Bio et nbBusM3XTL sur la valeur du champ nbBusM3.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentBusTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes d'autobus. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbBusM3EL et nbBusM3H2 sur la valeur du champ nbBusM3.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel
