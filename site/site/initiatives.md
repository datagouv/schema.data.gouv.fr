<br />

## Initiatives similaires

schema.data.gouv.fr n'a pas pour ambition d'être une réponse exhaustive à tous les besoins de normalisation des données. Il existe des initiatives similaires mais portant sur des périmètres différents, par exemple celles présentées ci-dessous.

Si vous connaissez une initiative similaire, n'hésitez pas à [nous le faire savoir](https://github.com/etalab/schema.data.gouv.fr/issues/new).

<br />
<br />

#### schema.org
[schema.org](https://schema.org) est une initiative collaborative visant à créer, maintenir et promouvoir des schémas de données structurées pour le web et les e-mails.

Ce projet comporte plusieurs centaines de modèles de données variés : lieux, événements, entreprise, personnes, réservations etc.

<br />
<br />

#### Données de transport
Pour favoriser l'usage des transports en commun, il est crucial d'utiliser des standards facilitant l'interopérabilité des systèmes.

Les standards les plus connus sont :

- [GTFS](https://developers.google.com/transit/gtfs) modélise des réseaux de transports en commun : lignes, arrêts, horaires
- [NeTEx](http://netex-cen.eu) est un projet européen modélisant des transports en commun : lignes, arrêts, horaires, accessibilité, tarification

<br />
<br />

#### IGN 

L’[IGN (Institut national de l'information géographique et forestière)](https://www.ign.fr) opère le [Géoportail de l’Urbanisme](https://www.geoportail-urbanisme.gouv.fr/) pour le compte du Ministère de la Cohésion des territoires. Ce portail permet aux citoyens comme aux professionnels de consulter tous les documents de planification urbaine (PLU(i), POS, PSMV, SCOT) et les servitudes d’utilité publique qui y ont été versés par leurs autorités compétentes. Ces documents sont standardisés par le [CNIG (Conseil National de l'Information Géographique)](http://cnig.gouv.fr/). Pour vérifier que les documents téléversés sont conformes à ces standards, l’IGN a développé un outil de validation à partir de 2014. 

Le [code source](https://github.com/IGNF/validator) de cet outil de validation est disponible sous licence CeCILL-B. 

Ce validateur a évolué pour permettre de valider les données concernant les territoires à risque d’inondation (TRI) et les données des fichiers Plan Corps de Rue Simplifié (PCRS). Un travail a également été mené à partir de 2019 pour rapprocher la description des schémas de ce qui se fait sur schema.gouv ([TableSchema](https://specs.frictionlessdata.io/table-schema/)). 

Quelques exemples de schémas : 
* Arborescence des fichiers : [CNIG PLU 2017](https://www.geoportail-urbanisme.gouv.fr/standard/cnig_PLU_2017#files) ([en JSON](https://www.geoportail-urbanisme.gouv.fr/standard/cnig_PLU_2017.json)) 
* Structure d’une table : [CNIG PLU 2017 table ZONE_URBA](https://www.geoportail-urbanisme.gouv.fr/standard/cnig_PLU_2017#table-ZONE_URBA) ([en JSON](https://www.geoportail-urbanisme.gouv.fr/standard/cnig_PLU_2017.json)) 
<br />
<br />

#### Sandre

Le [Sandre](http://www.sandre.eaufrance.fr) a pour mission, d'établir et de mettre à disposition le référentiel des données sur l'eau du [Système d'Information sur l'Eau](http://www.sandre.eaufrance.fr/concept/système-dinformation-sur-leau). Ce référentiel, composé de spécifications techniques et de listes de codes libres d'utilisation, décrit les modalités d'échange des données sur l'eau à l'échelle de la France. D'un point de vue informatique, le Sandre garantit l'interopérabilité des systèmes d'information relatifs à l'eau.


<br />
<br />

#### Le service d’administration des référentiels marins (SAR)

Le [SAR](https://sar.milieumarinfrance.fr/) a pour rôles d’assurer la gestion des référentiels du [Système d’information sur le milieu marin (SIMM)](https://www.milieumarinfrance.fr/) et de mettre en place les moyens techniques permettant de proposer un langage commun. Il s'agit à la fois des modèles de données et des données de référence, ainsi que les modalités de leur emploi et les services qui les rendent utilisables. Son objectif est de permettre l’interopérabilité des banques de données au sein du SIMM tout en veillant à ce que celui-ci soit interconnecté à d’autres systèmes (systèmes fédérateurs, publics, ou internationaux). Il assure d’autre part un service d’assistance aux acteurs du SIMM pour l’utilisation de toutes ses productions. Le SAR veille à ne pas re-créer inutilement des référentiels de données déjà existants. Pour cela, il peut être amené à collaborer avec les organisations de standardisation des données existantes au niveau national et international : avec en particulier le [GT-GIMeL (CNIG)](http://cnig.gouv.fr/?page_id=14042), le Sandre, le Caret, le pôle de données [ODATIS](https://www.odatis-ocean.fr/) et le TG DATA.

<br />
<br />

#### Le Système d'Information sur la Nature et les Paysages

[Le Système d'Information sur la Nature et les Paysages (SINP)](http://www.naturefrance.fr/sinp/presentation-du-sinp) a pour objet :

- de structurer les connaissances sur la biodiversité (faune, flore, fonge), les paysages, les habitats naturels ou semi-naturels et les données traduisant la règlementation ou des objectifs de gestion des espaces naturels,
- de  mettre à disposition ses connaissances selon des modalités différenciées entre le niveau local, régional, national et selon les publics concernés,
- de faciliter la mobilisation des connaissances sur la biodiversité pour élaborer ou suivre les politiques publiques, évaluer les impacts des plans, programmes, projets des différents aménageurs,
- de permettre le rapportage correspondant aux engagements européens et internationaux.

Le SINP [met à disposition des standards d’échanges sur la biodiversité et la géodiversité](http://standards-sinp.mnhn.fr).