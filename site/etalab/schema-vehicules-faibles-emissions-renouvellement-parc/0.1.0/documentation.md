<MenuSchema />

## vehicules-faibles-emissions-renouvellement-parc

Part des véhicules à faibles émissions dans le renouvellement d'un parc

Spécification des données fixant les termes et modalités de publication du pourcentage de véhicules à faibles et à très faibles émissions parmi les véhicules intégrés dans un renouvellement de parc

- Schéma créé le : 15/09/2021
- Site web : https://github.com/etalab/schema-flotte-publique-vehicule
- Version : 0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [sirenDeclarant](#propriete-sirendeclarant) | chaîne de caractères  | Oui |
| [sirenCouvert](#propriete-sirencouvert) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [naf](#propriete-naf) | chaîne de caractères  | Oui |
| [cj](#propriete-cj) | chaîne de caractères  | Oui |
| [zone](#propriete-zone) | chaîne de caractères  | Oui |
| [nbVP](#propriete-nbvp) | nombre entier  | Oui |
| [nbVPEL](#propriete-nbvpel) | nombre entier  | Oui |
| [nbVPH2](#propriete-nbvph2) | nombre entier  | Oui |
| [nbVPclean](#propriete-nbvpclean) | nombre entier  | Oui |
| [nbN1](#propriete-nbn1) | nombre entier  | Oui |
| [nbN1inf](#propriete-nbn1inf) | nombre entier  | Oui |
| [nbN1infEL](#propriete-nbn1infel) | nombre entier  | Oui |
| [nbN1infH2](#propriete-nbn1infh2) | nombre entier  | Oui |
| [nbN1infclean](#propriete-nbn1infclean) | nombre entier  | Oui |
| [nbN1sup](#propriete-nbn1sup) | nombre entier  | Oui |
| [nbN1supEL](#propriete-nbn1supel) | nombre entier  | Oui |
| [nbN1supH2](#propriete-nbn1suph2) | nombre entier  | Oui |
| [nbN1supclean](#propriete-nbn1supclean) | nombre entier  | Oui |
| [nbL](#propriete-nbl) | nombre entier  | Oui |
| [nbLEL](#propriete-nblel) | nombre entier  | Oui |
| [nbLH2](#propriete-nblh2) | nombre entier  | Oui |
| [nbN23](#propriete-nbn23) | nombre entier  | Oui |
| [nbN23EL](#propriete-nbn23el) | nombre entier  | Oui |
| [nbN23H2](#propriete-nbn23h2) | nombre entier  | Oui |
| [nbN23EHRE](#propriete-nbn23ehre) | nombre entier  | Oui |
| [nbN23GNV](#propriete-nbn23gnv) | nombre entier  | Oui |
| [nbN23GPL](#propriete-nbn23gpl) | nombre entier  | Oui |
| [nbN23Bio](#propriete-nbn23bio) | nombre entier  | Oui |
| [nbN23XTL](#propriete-nbn23xtl) | nombre entier  | Oui |
| [nbBus](#propriete-nbbus) | nombre entier  | Oui |
| [nbBusM2](#propriete-nbbusm2) | nombre entier  | Oui |
| [nbBusM2EL](#propriete-nbbusm2el) | nombre entier  | Oui |
| [nbBusM2H2](#propriete-nbbusm2h2) | nombre entier  | Oui |
| [nbBusM2clean](#propriete-nbbusm2clean) | nombre entier  | Oui |
| [nbBusM2EHRE](#propriete-nbbusm2ehre) | nombre entier  | Oui |
| [nbBusM2GNV](#propriete-nbbusm2gnv) | nombre entier  | Oui |
| [nbBusM2bioGNV](#propriete-nbbusm2biognv) | nombre entier  | Oui |
| [nbBusM2GPL](#propriete-nbbusm2gpl) | nombre entier  | Oui |
| [nbBusM2Bio](#propriete-nbbusm2bio) | nombre entier  | Oui |
| [nbBusM2XTL](#propriete-nbbusm2xtl) | nombre entier  | Oui |
| [nbBusM3](#propriete-nbbusm3) | nombre entier  | Oui |
| [nbBusM3EL](#propriete-nbbusm3el) | nombre entier  | Oui |
| [nbBusM3H2](#propriete-nbbusm3h2) | nombre entier  | Oui |
| [nbBusM3EHRE](#propriete-nbbusm3ehre) | nombre entier  | Oui |
| [nbBusM3GNV](#propriete-nbbusm3gnv) | nombre entier  | Oui |
| [nbBusM3bioGNV](#propriete-nbbusm3biognv) | nombre entier  | Oui |
| [nbBusM3GPL](#propriete-nbbusm3gpl) | nombre entier  | Oui |
| [nbBusM3Bio](#propriete-nbbusm3bio) | nombre entier  | Oui |
| [nbBusM3XTL](#propriete-nbbusm3xtl) | nombre entier  | Oui |
| [nbCar](#propriete-nbcar) | nombre entier  | Oui |
| [nbCarM2](#propriete-nbcarm2) | nombre entier  | Oui |
| [nbCarM2EL](#propriete-nbcarm2el) | nombre entier  | Oui |
| [nbCarM2H2](#propriete-nbcarm2h2) | nombre entier  | Oui |
| [nbCarM2clean](#propriete-nbcarm2clean) | nombre entier  | Oui |
| [nbCarEL](#propriete-nbcarel) | nombre entier  | Oui |
| [nbCarH2](#propriete-nbcarh2) | nombre entier  | Oui |
| [nbCarEHRE](#propriete-nbcarehre) | nombre entier  | Oui |
| [nbCarGNV](#propriete-nbcargnv) | nombre entier  | Oui |
| [nbCarbioGNV](#propriete-nbcarbiognv) | nombre entier  | Oui |
| [nbCarGPL](#propriete-nbcargpl) | nombre entier  | Oui |
| [nbCarBio](#propriete-nbcarbio) | nombre entier  | Oui |
| [nbCarsXTL](#propriete-nbcarsxtl) | nombre entier  | Oui |
| [pcentLDVFE](#propriete-pcentldvfe) | nombre réel  | Oui |
| [pcentLDVTFE](#propriete-pcentldvtfe) | nombre réel  | Oui |
| [pcentLDVclean](#propriete-pcentldvclean) | nombre réel  | Oui |
| [pcent23RMTFE](#propriete-pcent23rmtfe) | nombre réel  | Oui |
| [pcentPLclean](#propriete-pcentplclean) | nombre réel  | Oui |
| [pcentTCFE](#propriete-pcenttcfe) | nombre réel  | Oui |
| [pcentBusclean](#propriete-pcentbusclean) | nombre réel  | Oui |
| [pcentBusTFE](#propriete-pcentbustfe) | nombre réel  | Oui |

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

#### Propriété `zone`

> *Description : Situation géographique s'agissant des transports publics.*<br/>*Exemple : 47.72B*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Zone A (1)`
    - `Zone B (2)`
    - `Zone C (3)`

#### Propriété `nbVP`

> *Description : Nombre de voitures particulières (VP).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbVPEL`

> *Description : Nombre de VP électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbVPH2`

> *Description : Nombre de VP à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbVPclean`

> *Description : Nombre de VP à faibles émissions.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1`

> *Description : Nombre de camionnettes (VUL).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1inf`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1infEL`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1infH2`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1infclean`

> *Description : Nombre de VUL de PTAC inférieur à 2,6 tonnes à faibles émissions.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1sup`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1supEL`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1supH2`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN1supclean`

> *Description : Nombre de VUL de PTAC supérieur ou égal à 2,6 tonnes à faibles émissions.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbL`

> *Description : Nombre de véhicules de catégories L1e-B, L2e-P, L2e-U et L3a-A1 (2-3RM).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbLEL`

> *Description : Nombre de 2-3RM électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbLH2`

> *Description : Nombre de 2-3RM à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23`

> *Description : Nombre de véhicules de catégories N2 et N3 (PL).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23EL`

> *Description : Nombre de PL électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23H2`

> *Description : Nombre de PL à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23EHRE`

> *Description : Nombre de PL électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23GNV`

> *Description : Nombre de PL au GNV/bioGNV.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23GPL`

> *Description : Nombre de PL au GPL.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23Bio`

> *Description : Nombre de PL exclusivement aux biocarburants avancés.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbN23XTL`

> *Description : Nombre de PL exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBus`

> *Description : Nombre de véhicules de catégories M2 et M3 de classe I ou A (autobus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2`

> *Description : Nombre d'autobus M2.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2EL`

> *Description : Nombre d'autobus M2 électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2H2`

> *Description : Nombre d'autobus M2 à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2clean`

> *Description : Nombre d'autobus M2 à faibles émissions.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2EHRE`

> *Description : Nombre d'autobus M2 électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2GNV`

> *Description : Nombre d'autobus M2 au GNV.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2bioGNV`

> *Description : Nombre d'autobus M2 au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2GPL`

> *Description : Nombre d'autobus M2 au GPL.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2Bio`

> *Description : Nombre d'autobus M2 exclusivement aux biocarburants avancés.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM2XTL`

> *Description : Nombre d'autobus M2 exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3`

> *Description : Nombre d'autobus M3.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3EL`

> *Description : Nombre d'autobus M3 électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3H2`

> *Description : Nombre d'autobus M3 à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3EHRE`

> *Description : Nombre d'autobus M3 électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3GNV`

> *Description : Nombre d'autobus M3 au GNV.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3bioGNV`

> *Description : Nombre d'autobus M3 au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3GPL`

> *Description : Nombre d'autobus M3 au GPL.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3Bio`

> *Description : Nombre d'autobus M3 exclusivement aux biocarburants avancés.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbBusM3XTL`

> *Description : Nombre d'autobus M3 exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCar`

> *Description : Nombre de véhicules de catégories M2 et M3 d'autres classes (autocars).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2`

> *Description : Nombre d'autocars M2.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2EL`

> *Description : Nombre d'autocars M2 électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2H2`

> *Description : Nombre d'autocars M2 à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarM2clean`

> *Description : Nombre d'autocars M2 à faibles émissions.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarEL`

> *Description : Nombre d'autocars électriques purs.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarH2`

> *Description : Nombre d'autocars à hydrogène (hybrides inclus).*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarEHRE`

> *Description : Nombre d'autocars électriques hybrides rechargeables de l'extérieur.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarGNV`

> *Description : Nombre d'autocars au GNV.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarbioGNV`

> *Description : Nombre d'autocars au GNV contenant une fraction d'origine renouvelable d'au moins 20 %.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarGPL`

> *Description : Nombre d'autocars au GPL.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarBio`

> *Description : Nombre d'autocars exclusivement aux biocarburants avancés.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nbCarsXTL`

> *Description : Nombre d'autocars exclusivement à carburants de synthèse ou paraffiniques.*<br/>*Exemple : 12*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `pcentLDVFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean et nbN1supclean sur la somme des valeurs des champs nbVP et nbN1.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentLDVTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPEL, nbVEH2, nbN1infEL, nbN1infH2, nbN1supEL et nbN1supH2, sur la somme des valeurs des champs nbVP et nbN1.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentLDVclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules légers (6). Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean, nbN1supclean, nbBusM2clean et nbCarM2clean, sur la somme des valeurs des champs nbVP, nbN1, nbBusM2 et nbCarM2.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcent23RMTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes de 2-3RM. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbLEL et nbLH2 sur la valeur du champ nbL.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentPLclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de PL. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbN23EL, nbN23H2, nbN23EHRE, nbN23GNV, nbN23GPL, nbN23Bio et nbN23XTL sur la valeur du champ nbN23.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentTCFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes d'autobus et autocars. Correspond, en fonction de la valeur du champ zone, au quotient rapporté sur 100 de la somme des valeurs des champs relatifs aux autobus et autocars, à l'exception des champs nbBusM2clean, nbCarM2EL, nbCarM2H2 et nbCarM2clean, permettant de répondre aux dispositions pertinentes prévues aux articles D. 224-15-3, D. 224-15-4 et D. 224-15-6 du code de l'environnement, sur la somme des valeurs des champs nbBus et nbCar.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentBusclean`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes d'autobus. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbBusM3EL, nbBusM3H2, nbBusM3EHRE, nbBusM3GNV, nbBusM3bioGNV, nbBusM3GPL, nbBusM3Bio et nbBusM3XTL sur la valeur du champ nbBusM3.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pcentBusTFE`

> *Description : Part de véhicules à très faibles émissions dans le renouvellement des flottes d'autobus. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbBusM3EL et nbBusM3H2 sur la valeur du champ nbBusM3.*<br/>*Exemple : 12.2*
- Valeur obligatoire
- Type : nombre réel
