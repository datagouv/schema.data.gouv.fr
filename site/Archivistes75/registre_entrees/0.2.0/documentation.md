<MenuSchema />

## Registre d'entrée d'archives

Spécification du standard national des registres d'entrée d'archives

- Auteur : Datactivist pour l'Association des Archivistes Français (AAF) et le service interministériel des Archives de France (SIAF)
- Schéma créé le : 17/12/2020
- Site web : https://github.com/Archivistes75/registre_entrees
- Version : 0.2.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [ID](#identifiant-unique-de-chaque-entree-propriete-id) | chaîne de caractères  | Oui |
| [nomArch](#nom-du-service-archives-propriete-nomarch) | chaîne de caractères  | Oui |
| [coteArch](#cotation-propriete-cotearch) | chaîne de caractères  | Non |
| [dateEntree](#date-d-entree-propriete-dateentree) | date (format `default`) | Oui |
| [statutJur](#nature-juridique-des-documents-entres-propriete-statutjur) | chaîne de caractères  | Oui |
| [modeEntree](#modalite-d-entree-propriete-modeentree) | chaîne de caractères  | Oui |
| [orgaVers](#organisation-qui-verse-l-entree-propriete-orgavers) | chaîne de caractères  | Non |
| [servVers](#service-qui-verse-l-entree-propriete-servvers) | chaîne de caractères  | Non |
| [orgaProducteur](#organisation-productrice-de-l-entree-propriete-orgaproducteur) | chaîne de caractères  | Non |
| [servProd](#service-producteur-propriete-servprod) | chaîne de caractères  | Oui |
| [typeProd](#fonction-du-producteur-propriete-typeprod) | chaîne de caractères  | Oui |
| [activiteProd](#domaine-ou-thematique-d-action-du-producteur-propriete-activiteprod) | chaîne de caractères  | Oui |
| [descContenu](#description-du-contenu-propriete-desccontenu) | chaîne de caractères  | Oui |
| [datesExD](#date-extreme-de-debut-propriete-datesexd) | année  | Non |
| [datesExF](#date-extreme-de-fin-propriete-datesexf) | année  | Non |
| [natureSupport](#nature-du-support-materiel-des-documents-propriete-naturesupport) | chaîne de caractères  | Oui |
| [mlEntree](#metrage-lineaire-de-l-entree-propriete-mlentree) | nombre réel  | Non |
| [nbreArt](#nombre-d-articles-propriete-nbreart) | nombre réel  | Non |
| [volElec](#volume-d-archives-electroniques-de-l-entree-propriete-volelec) | nombre réel  | Non |
| [objElec](#nombre-d-objets-electroniques-propriete-objelec) | nombre réel  | Non |

#### Identifiant unique de chaque entrée - Propriété `ID`

> *Description : Identifiant unique de chaque entrée composés de ces trois éléments séparés par des tirets bas : l'identifiant du service archives, année d'entrée et un identifiant unique (numéro incrémental, identifiant technique...) L'identifiant du service d'archives peut être composé soit du numéro utilisé pour identifier les IR, ou pour des services d'entreprises le SIREN ou pour d'autres types de services le RCR, le numéro Muséophile. Dans ce cas, il faut renseigner cet éléments dans les métadonnées associées.*<br/>*Exemple : FRAC_13001_2020_001, FRAN_2020_aeaqaaaabehgml5fab7gialyq46s4jyaaaca*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `.*_[0-9]{4}_.*`

#### Nom du service archives - Propriété `nomArch`

> *Description : Nom sous forme textuelle du service d'archives dans où sont entrées les archives*<br/>*Exemple : Archives municipales d'Aix-en-Provence*
- Valeur obligatoire
- Type : chaîne de caractères

#### Cotation - Propriété `coteArch`

> *Description : Identifiant de l'entrée d’archives et correspondant à sa place dans le cadre de classement (série et sous-série). Dans le cas où les articles sont connus dès l'entrée, ils peuvent être ajoutés à la cotation (mais cela reste optionnel).*<br/>*Exemple : 1238W, 1240W 1-12*
- Valeur optionnelle
- Type : chaîne de caractères

#### Date d'entrée - Propriété `dateEntree`

> *Description : date à laquelle les documents sont entrés dans le service d'archives au format ISO8601*<br/>*Exemple : 2020-08-26*
- Valeur obligatoire
- Type : date (format `default`)

#### nature juridique des documents entrés - Propriété `statutJur`

> *Description : permet d'identifier le statut juridique des archives*<br/>*Exemple : Archives publiques*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Archives publiques`
    - `Archives privées`
    - `Archives publiques et privées`

#### modalité d'entrée - Propriété `modeEntree`

> *Description : permet d'identifier le mode d'entrée des archives*<br/>*Exemple : Versement*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Versement`
    - `Don`
    - `Dépôt`
    - `Dévolution`
    - `Achat`
    - `Legs ou dation`
    - `Copie`
    - `Réintégration`
    - `Protocole`
    - `Autre`

#### organisation qui verse l'entrée - Propriété `orgaVers`

> *Description : Nom de l'organisation qui a versé l'entrée, distincte du service qui a produit les entrées dans l'organisation. Dans le cas où des identifiants pérennes existent pour identifier les organisations versantes, elles peuvent être ajoutées en complément du nom de l'organisation : URI - Nom de l'organisation. Ce champ peut comporter plusieurs valeurs, dans ce cas, les éléments sont séparés par une barre verticale |.*<br/>*Exemple : Ville d'Aix-en-Provence, FR78422804100033_000000011 - Tribunal administratif*
- Valeur optionnelle
- Type : chaîne de caractères

#### service qui verse l'entrée - Propriété `servVers`

> *Description : permet d'identifier la personne physique ou morale qui a transféré les documents*<br/>*Exemple : Service de l'Achat public*
- Valeur optionnelle
- Type : chaîne de caractères

#### organisation productrice de l'entrée - Propriété `orgaProducteur`

> *Description : nom de l'organisation qui a produit l'entrée, distincte du service qui a produit les entrées dans l'organisation. Dans le cas où des identifiants pérennes existent pour identifier les organisations versantes, elles peuvent être ajoutées en complément du nom de l'organisation : URI - Nom de l'organisation. Ce champ peut comporter plusieurs valeurs, dans ce cas, les éléments sont séparés par une barre verticale |.*<br/>*Exemple : Ville d'Aix-en-Provence, FR78422804100033_000000011 - Tribunal administratif*
- Valeur optionnelle
- Type : chaîne de caractères

#### service producteur - Propriété `servProd`

> *Description : permet d'identifier la personne physique ou morale qui a produit les documents. Si le producteur est inconnu, saisir `Service producteur inconnu`.*<br/>*Exemple : Service de l'Achat public, Service producteur inconnu*
- Valeur obligatoire
- Type : chaîne de caractères

#### fonction du producteur - Propriété `typeProd`

> *Description : permet d'identifier la fonction du producteur, liste établie à partir des éléments du SIAF. La séparation entre type et activité répond à la nouvelle organisation définie pa le SIAF et mise en place au sein de l'enquête annuelle.*<br/>*Exemple : Commune et établissement public communal*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Présidence de la République`
    - `Premier ministre`
    - `Ministère (administration centrale) `
    - `Assemblée parlementaire`
    - `Grand organe de contrôle`
    - `Service déconcentré et établissement public de l’État à compétence départementale ou locale`
    - `Service déconcentré et établissement public de l’État à compétence régionale ou supra-départementale`
    - `Etablissement public national`
    - `Commune et établissement public communal`
    - `Conseil départemental et établissement public départemental`
    - `Conseil régional et établissement public régional`
    - `Structure de coopération intercommunale ou interdépartementale`
    - `Établissement public de santé`
    - `Organisme de droit privé chargé d’une mission de service public`
    - `Officier public ou ministériel (dont notaire) `
    - `Producteur privé`

#### Domaine ou thématique d'action du producteur - Propriété `activiteProd`

> *Description : permet d'identifier la fonction du producteur, liste établie à partir des éléments du SIAF. La séparation entre type et activité répond à la nouvelle organisation définie pa le SIAF et mise en place au sein de l'enquête annuelle. Ce champ peut comporter plusieurs valeurs, dans ce cas, les éléments sont séparés par une barre verticale |*<br/>*Exemple : Administration générale (fonctions transverses, RH) | Culture, jeunesse et sports*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Instance de délibération`
    - `Direction, cabinet`
    - `Administration générale (fonctions transverses, RH)`
    - `Finances, fiscalité`
    - `Économie, industrie`
    - `Agriculture`
    - `Équipement, environnement`
    - `Travail, emploi`
    - `Affaires sociales, santé`
    - `Justice`
    - `Police, protection civile, intérieur`
    - `Éducation, recherche`
    - `Culture, jeunesse et sports`
    - `Défense, anciens combattants`
    - `Outre-mer`
    - `Archives privées personnelles et familiales`
    - `Archives privées cultuelles`
    - `Archives privées d'associations, de partis politiques, de syndicats`
    - `Archives privées d'entreprises`
    - `Archives privées professionnelles`

#### description du contenu - Propriété `descContenu`

> *Description : Permet de décrire le contenu des archives de l'entrée*<br/>*Exemple : Marchés publics de prestations intellectuelles*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date extrême de début - Propriété `datesExD`

> *Description : date du plus vieux document d'archives format AAAA.*<br/>*Exemple : 2014*
- Valeur optionnelle
- Type : année

#### Date extrême de fin - Propriété `datesExF`

> *Description : date du plus récent document d'archives format AAAA.*<br/>*Exemple : 2020*
- Valeur optionnelle
- Type : année

#### nature du support matériel des documents - Propriété `natureSupport`

> *Description : permet d'indiquer de façon macro la typologie de support des documents*<br/>*Exemple : Support physique*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Support physique`
    - `Support électroniques`
    - `Support mixte`

#### métrage linéaire de l'entrée - Propriété `mlEntree`

> *Description : volume en mètre linéaire de l'entrée. le séparateur décimal doit être le point . L'unité sera rappelée en métadonnée.*<br/>*Exemple : 1.60*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'articles - Propriété `nbreArt`

> *Description : permet d'indiquer le nombre d'articles d'une entrée*<br/>*Exemple : 56*
- Valeur optionnelle
- Type : nombre réel

#### volume d'archives électroniques de l'entrée - Propriété `volElec`

> *Description : correspond à la volumétrie de fichiers électroniques présents dans l'entrée en Go. le séparateur décimal doit être le point. L'unité sera le Go et sera rappelée en métadonnées.*<br/>*Exemple : 2.30, 0.075*
- Valeur optionnelle
- Type : nombre réel

#### nombre d'objets électroniques - Propriété `objElec`

> *Description : permet d'indiquer le nombre d'objets électroniques d'une entrée*<br/>*Exemple : 234*
- Valeur optionnelle
- Type : nombre réel
