<MenuSchema />

<MenuSchema />

## schema-vehicules-faibles-emissions-renouvellement-parc-syntheses

Part des véhicules à faibles émissions dans le renouvellement des parcs d’entreprises de location, location-vente, de crédit-bail de véhicules, des plateformes de livraisons et des centrales de réservation de taxi et VTC

Spécification du fichier d’échange relatif aux parts de véhicules à faibles émissions dans les parcs de véhicules des entreprises de location, location-vente et crédit-bail de véhicules, des plateformes de livraison, des centrales de réservation de taxi et de VTC. Certaines données demandées nécessitent des champs qui doivent être transmis aux services de l'administration compétents, mais dont la publication sur data.gouv.fr n'est pas obligatoire.

- Schéma créé le : 22/07/2022
- Site web : https://github.com/etalab/schema-vehicules-faibles-emissions-renouvellement-parc-synthese
- Version : 0.0.1

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [sirenDeclarant](#propriete-sirendeclarant) | chaîne de caractères  | Oui |
| [sirenCouvert](#propriete-sirencouvert) | chaîne de caractères  | Non |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [type_entreprise](#propriete-type-entreprise) | chaîne de caractères  | Oui |
| [naf](#propriete-naf) | chaîne de caractères  | Oui |
| [cj](#propriete-cj) | chaîne de caractères  | Non |
| [pcentLDVFE](#propriete-pcentldvfe) | nombre réel  | Non |
| [pcentLDVTFE](#propriete-pcentldvtfe) | nombre réel  | Non |
| [pcentLDVclean](#propriete-pcentldvclean) | nombre réel  | Non |
| [pcent23RMTFE](#propriete-pcent23rmtfe) | nombre réel  | Non |
| [pcent23RTFE](#propriete-pcent23rtfe) | nombre réel  | Non |

#### Propriété `sirenDeclarant`

> *Description : Numéro SIREN de la personne morale déclarante*<br/>*Exemple : 130025265*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `sirenCouvert`

> *Description : Numéro SIREN couvert sous la déclaration du sirenDéclarant (uniquement pour les entreprises de location, location-vente et crédit-bail de véhicules)*<br/>*Exemple : 130025265*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `nom`

> *Description : Dénomination officielle de la personne morale.*<br/>*Exemple : Direction interministerielle du numerique (DINUM)*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `type_entreprise`

> *Description : Le type d'entreprise de la personne morale déclarante. Choixir parmi les valeurs suivantes : 'Location, Location-Vente et/ou Crédit-bail de véhicules' ; 'Plateforme de livraisons' ou 'Centrale de réservation de taxi ou de VTC'*<br/>*Exemple : Location, Location-Vente et/ou Crédit-bail de véhicules*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Location, Location-Vente et/ou Crédit-bail de véhicules`
    - `Plateforme de livraisons`
    - `Centrale de réservation de taxi ou de VTC`

#### Propriété `naf`

> *Description : Code d'activité principale exercée.*<br/>*Exemple : 47.72B*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `cj`

> *Description : Catégorie juridique Insee (uniquement pour les entreprises de location, location-vente et crédit-bail de véhicules).*<br/>*Exemple : 5710*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{4}$`

#### Propriété `pcentLDVFE`

> *Description : Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP+VUL). 
 Pour les entreprises de location, de location-vente, de crédit-bail de véhicules : correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean et nbN1supclean sur la somme des valeurs des champs nbVP et nbN1 (la prise en compte des champs nbN1supclean et nbN1sup n'est obligatoire qu'à partir du 1er janvier 2024.). 
 Pour les centrales de réservation de taxi ou VTC :  Correspond au quotient rapporté sur 100 de la valeur du champ nbVPclean sur la valeur du champ nbVP. 
 Pour les plateformes : champ non requis*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentLDVTFE`

> *Description : Uniquement pour les entreprises de location. 
 Part de véhicules à très faibles émissions dans le renouvellement des flottes de véhicules de PTAC inférieur ou égal à 3,5 tonnes (VP + VUL). 
Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPEL, nbVPH2, nbN1infEL, nbN1infH2, nbN1supEL et nbN1supH2, sur la somme des valeurs des champs nbVP et nbN1 (la prise en compte des champs nbN1supEL, nbN1supH2 et nbN1sup n'est obligatoire qu'à partir du 1er janvier 2024.).*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcentLDVclean`

> *Description : Uniquement pour les entreprises de location. 
Part de véhicules à faibles émissions dans le renouvellement des flottes de véhicules légers. (au sens où : 
 i) leurs émissions de gaz à effet de serre mesurées à l'échappement conformément au règlement (UE) 2017/1151 modifié ne dépassent pas 50 gCO2/km, et 
 ii) leurs émissions maximales en conditions de conduite réelle (RDE) de particules et d'oxydes d'azote respectivement exprimées en nombre par kilomètre et en milligramme par km, déclarées au point 48.2 du certificat de conformité, comme décrit dans l'annexe VIII du règlement d'exécution (UE) 2020/683 de la Commission ou l'annexe IX de la directive 2007/46/CE du Parlement européen et du Conseil pour les trajets complets et urbains, sont inférieures à 0,8 fois la limite d'émission applicable figurant à l'annexe I du règlement (CE) n° 715/2007 du Parlement européen et du Conseil ou dans les versions ultérieures.). 
Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVPclean, nbN1infclean et nbN1supclean, sur la somme des valeurs des champs nbVP et nbN1.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcent23RMTFE`

> *Description : Uniquement pour les entreprises de location. 
 Pour les entreprises de location, de location-vente, de crédit-bail de véhicules : Part de véhicules à très faibles émissions dans le renouvellement des flottes de 2-3RM. 
Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbLEL et nbLH2 sur la valeur du champ nbL.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `pcent23RTFE`

> *Description : Uniquement pour les plateformes de livraison. 
Part de cycles, y compris à pédalage assisté, ou de véhicules 2-3RM à très faibles émissions. Correspond au quotient rapporté sur 100 de la somme des valeurs des champs nbVelo, nbLEL et nbLH2 sur la somme des valeurs des champs nbVelo et nbL.*<br/>*Exemple : 12.2*
- Valeur optionnelle
- Type : nombre réel
