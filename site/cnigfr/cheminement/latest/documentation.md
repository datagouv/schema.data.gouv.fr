<MenuSchema />

## cheminement

Classe CHEMINEMENT du standard CNIG Accessibilité du Cheminement en Espace Naturel (ACEN)

Spécification du fichier d'échange conforme au standard CNIG Accessibilité du Cheminement en Espace Naturel pour la classe CHEMINEMENT

- Schéma créé le : 20/04/2026
- Site web : https://github.com/cnigfr/standard-accessibilite-espace-naturel
- Version : v0.1.0
- Valeurs manquantes : `""`, `"NA"`, `"NaN"`, `"N/A"`
- Clé primaire : `id_cheminement`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_cheminement](#identifiant-du-cheminement-propriete-id-cheminement) | chaîne de caractères  | Oui |
| [id_itineraire_rando](#identifiant-de-l-itineraire-de-rando-propriete-id-itineraire-rando) | chaîne de caractères  | Non |
| [id_osm](#identifiant-osm-propriete-id-osm) | nombre entier  | Non |
| [id_espace_nat_protege](#identifiant-de-l-espace-naturel-protege-propriete-id-espace-nat-protege) | chaîne de caractères  | Non |
| [pdipr_inscription](#inscription-au-pdipr-propriete-pdipr-inscription) | booléen  | Non |
| [pdipr_date_inscription](#date-d-inscription-au-pdipr-propriete-pdipr-date-inscription) | date  | Non |
| [nom_cheminement](#nom-du-cheminement-propriete-nom-cheminement) | chaîne de caractères  | Oui |
| [type_cheminement](#type-de-cheminement-propriete-type-cheminement) | chaîne de caractères  | Oui |
| [activité](#activites-proposees-propriete-activite) | chaîne de caractères  | Oui |
| [longueur](#longueur-du-cheminement-propriete-longueur) | nombre entier  | Oui |
| [depart](#nom-du-point-de-depart-propriete-depart) | chaîne de caractères  | Oui |
| [arrivee](#nom-du-point-d-arrivee-propriete-arrivee) | chaîne de caractères  | Oui |
| [coord_geo_depart](#coordonnees-gps-du-point-de-depart-propriete-coord-geo-depart) | point géographique  | Oui |
| [vue_aerienne](#prise-de-vue-aerienne-d-ensemble-du-cheminement-propriete-vue-aerienne) | chaîne de caractères  | Non |
| [communes_nom](#noms-des-communes-traversees-propriete-communes-nom) | liste  | Non |
| [communes_code](#codes-insee-des-communes-traversees-propriete-communes-code) | liste  | Non |
| [presentation](#presentation-et-description-generale-propriete-presentation) | chaîne de caractères  | Oui |
| [description_detaillee](#description-detaillee-propriete-description-detaillee) | chaîne de caractères  | Oui |
| [themes](#themes-ou-mots-clefs-propriete-themes) | chaîne de caractères  | Non |
| [environnement](#composantes-de-l-environnement-naturel-propriete-environnement) | liste  | Non |
| [comm_accessibilite](#informations-complementaires-sur-l-accessibilite-propriete-comm-accessibilite) | chaîne de caractères  | Non |
| [presence_personnel](#frequence-ou-amplitude-de-presence-du-personnel-propriete-presence-personnel) | chaîne de caractères  | Non |
| [fil_ariane](#presence-d-un-fil-d-ariane-propriete-fil-ariane) | booléen  | Oui |
| [saisonnalite](#presence-d-obstacles-saisonniers-propriete-saisonnalite) | chaîne de caractères  | Non |
| [url_media](#photos-representatives-du-cheminement-propriete-url-media) | liste  | Non |
| [site_web](#fiche-web-du-cheminement-propriete-site-web) | chaîne de caractères  | Non |
| [altitude](#altitude-max-par-rapport-au-niveau-de-la-mer-propriete-altitude) | nombre entier  | Oui |
| [exposition](#exposition-geographique-propriete-exposition) | chaîne de caractères  | Oui |
| [label_psh](#label-ou-certification-d-accessibilite-propriete-label-psh) | liste  | Non |
| [largeur_min](#largeur-minimale-propriete-largeur-min) | nombre réel  | Oui |
| [pente_max](#pente-du-terrain-la-plus-defavorable-propriete-pente-max) | chaîne de caractères  | Oui |
| [devers_max](#devers-le-plus-defavorable-propriete-devers-max) | chaîne de caractères  | Oui |
| [denivele_positif](#somme-de-toutes-les-montees-propriete-denivele-positif) | nombre entier  | Oui |
| [profil_altimétrique](#profil-de-l-itineraire-propriete-profil-altimetrique) | chaîne de caractères  | Non |
| [type_sol](#types-de-sols-majoritaires-propriete-type-sol) | liste  | Non |
| [etat_sol](#etats-majoritaires-du-sol-propriete-etat-sol) | liste  | Non |
| [systeme_guidage](#presence-de-systemes-de-guidage-propriete-systeme-guidage) | liste  | Non |
| [reperabilite](#reperabilite-du-cheminement-dans-son-environnement-propriete-reperabilite) | liste  | Non |
| [continuite_repere](#repere-lineaire-continu-propriete-continuite-repere) | chaîne de caractères  | Oui |
| [signaletique](#presence-d-elements-de-signaletique-propriete-signaletique) | booléen  | Oui |
| [mobilier](#presence-de-mobilier-propriete-mobilier) | booléen  | Oui |
| [frequence_assise](#frequence-des-assises-propriete-frequence-assise) | chaîne de caractères  | Non |
| [desserte_cyclable](#desserte-du-site-naturel-par-une-piste-cyclable-en-site-propre-propriete-desserte-cyclable) | booléen  | Non |
| [type_sol_liaison](#types-de-sol-majoritaire-de-la-liaison-propriete-type-sol-liaison) | chaîne de caractères  | Oui |
| [longueur_liaison](#longueur-de-la-liaison-propriete-longueur-liaison) | nombre entier  | Oui |
| [largeur_min_liaison](#largeur-minimale-de-la-liaison-propriete-largeur-min-liaison) | nombre réel  | Oui |
| [pente_max_liaison](#pente-maximale-de-la-liaison-propriete-pente-max-liaison) | chaîne de caractères  | Oui |
| [devers_max_liaison](#devers-le-plus-defavorable-de-la-liaison-propriete-devers-max-liaison) | chaîne de caractères  | Oui |
| [continuite_repere_liaison](#repere-lineaire-continu-sur-la-liaison-propriete-continuite-repere-liaison) | chaîne de caractères  | Oui |
| [date_creation](#date-de-creation-du-cheminement-propriete-date-creation) | date  | Non |
| [date_actualisation](#date-de-modification-du-cheminement-propriete-date-actualisation) | date  | Non |
| [producteur](#producteur-des-renseignements-du-cheminement-propriete-producteur) | chaîne de caractères  | Oui |
| [contact](#informations-de-contact-propriete-contact) | chaîne de caractères  | Oui |
| [geom_lin](#geometrie-lineaire-du-cheminement-propriete-geom-lin) | GéoJSON  | Oui |

#### identifiant du cheminement - Propriété `id_cheminement`

> *Description : identifiant unique du cheminement*<br/>*Exemple : 44003:CHE:00654:LOC*
- Valeur obligatoire
- Type : chaîne de caractères

#### Identifiant de l'itinéraire de rando - Propriété `id_itineraire_rando`

> *Description : Identifiant de l'itinéraire de rando correspondant dans le « schéma itinéraires randonnées »*<br/>*Exemple : 937571*
- Valeur optionnelle
- Type : chaîne de caractères

#### Identifiant OSM - Propriété `id_osm`

> *Description : Identifiant de la relation OSM correspondante*
- Valeur optionnelle
- Type : nombre entier

#### Identifiant de l'espace naturel protégé - Propriété `id_espace_nat_protege`

> *Description : Identifiant de l'espace naturel protégé dans le standard CNIG espaces naturels protégés*<br/>*Exemple : EN7845*
- Valeur optionnelle
- Type : chaîne de caractères

#### Inscription au PDIPR - Propriété `pdipr_inscription`

> *Description : Inscription (oui / non) au PDIPR*<br/>*Exemple : oui*
- Valeur optionnelle
- Type : booléen

#### date d'inscription au PDIPR - Propriété `pdipr_date_inscription`

> *Description : date d'inscription au PDIPR (AAAA-MM-JJ)*<br/>*Exemple : 2024-06-15*
- Valeur optionnelle
- Type : date

#### nom du cheminement - Propriété `nom_cheminement`

> *Description : nom du cheminement*<br/>*Exemple : Sentier des Glaisins*
- Valeur obligatoire
- Type : chaîne de caractères

#### type de cheminement - Propriété `type_cheminement`

> *Description : type de cheminement*<br/>*Exemple : boucle*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `boucle`
    - `aller-retour`
    - `linéaire`
    - `autre`
    - `NC`
    - `sans objet`

#### activités proposées - Propriété `activité`

> *Description : activités proposées par le cheminement*<br/>*Exemple : découverte pédagogique*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `balade`
    - `découverte pédagogique`
    - `parcours sportif`
    - `site naturel`
    - `NC`
    - `sans objet`

#### longueur du cheminement - Propriété `longueur`

> *Description : longueur du cheminement (en mètre)*<br/>*Exemple : 2200*
- Valeur obligatoire
- Type : nombre entier

#### nom du point de départ - Propriété `depart`

> *Description : nom du point de départ*<br/>*Exemple : 50 route des Glaisins*
- Valeur obligatoire
- Type : chaîne de caractères

#### nom du point d'arrivée - Propriété `arrivee`

> *Description : nom du point d'arrivée*<br/>*Exemple : 50 route des Glaisins*
- Valeur obligatoire
- Type : chaîne de caractères

#### coordonnées GPS du point de départ - Propriété `coord_geo_depart`

> *Description : coordonnées géographiques (GPS) du point de départ au format GeoJSON*<br/>*Exemple : 49.2527, 3.9815*
- Valeur obligatoire
- Type : point géographique

#### prise de vue aérienne d'ensemble du cheminement - Propriété `vue_aerienne`

> *Description : hyperlien vers une prise de vue d'ensemble aérienne du cheminement, lorsque son emprise le permet*<br/>*Exemple : https://urlz.fr/hTwT*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### noms des communes traversées - Propriété `communes_nom`

> *Description : noms des communes traversées par l'itinéraire*<br/>*Exemple : ["Commune d'Ancenis-Saint-Géréon"]*
- Valeur optionnelle
- Type : liste

#### codes INSEE des communes traversées - Propriété `communes_code`

> *Description : codes INSEE des communes traversées par l'itinéraire*<br/>*Exemple : ['44003']*
- Valeur optionnelle
- Type : liste

#### présentation et description générale - Propriété `presentation`

> *Description : présentation et description générale du cheminement*<br/>*Exemple : tout au long de l'itinéraire, alternance de parties plates et de montées*
- Valeur obligatoire
- Type : chaîne de caractères

#### description détaillée - Propriété `description_detaillee`

> *Description : description détaillée (pas à pas) du tracé du cheminement*<br/>*Exemple : L'itinéraire permet de découvrir en profondeur le Bois du mystère et les sables mouvants légendaires
*
- Valeur obligatoire
- Type : chaîne de caractères

#### thèmes ou mots-clefs - Propriété `themes`

> *Description : thèmes ou mots-clefs caractérisant le cheminement*<br/>*Exemple : marais, tourbe, végétation, pêche traditionnelle*
- Valeur optionnelle
- Type : chaîne de caractères

#### composantes de l'environnement naturel - Propriété `environnement`

> *Description : description des principales composantes l'environnement naturel*<br/>*Exemple : ['forêt', 'zone humide']*
- Valeur optionnelle
- Type : liste

#### informations complémentaires sur l'accessibilité - Propriété `comm_accessibilite`

> *Description : informations complémentaires sur l'accessibilité, les aménagements et les équipements*<br/>*Exemple : présence de FTT à l'office de tourisme*
- Valeur optionnelle
- Type : chaîne de caractères

#### fréquence ou amplitude de présence du personnel - Propriété `presence_personnel`

> *Description : fréquence ou amplitude de présence du personnel*<br/>*Exemple : présence saisonnière à horaires fixes*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `présence permanente 24h/24 et 7j/7`
    - `présence permanente à horaires fixes`
    - `présence saisonnière à horaires fixes`
    - `présence de personnel de façon ponctuelle`
    - `aucune présence de personnel`
    - `autre`
    - `NC`
    - `sans objet`

#### présence d'un fil d'Ariane - Propriété `fil_ariane`

> *Description : présence d'un fil d'Ariane tout au long du cheminement*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : booléen

#### présence d'obstacles saisonniers - Propriété `saisonnalite`

> *Description : informations sur la présence d'obstacles saisonniers*<br/>*Exemple : risque d'inondation entre octobre et avril*
- Valeur optionnelle
- Type : chaîne de caractères

#### photos représentatives du cheminement - Propriété `url_media`

> *Description : hyperliens vers des photos représentatives du cheminement*<br/>*Exemple : ['https://www.parcs-naturels-regionaux.fr/.../pnr_perche/sentier_glaisins/photos']*
- Valeur optionnelle
- Type : liste

#### fiche web du cheminement - Propriété `site_web`

> *Description : URL de la fiche web du cheminement*<br/>*Exemple : https://www.parcs-naturels-regionaux.fr/.../pnr_perche/sentier_glaisins*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### altitude max par rapport au niveau de la mer - Propriété `altitude`

> *Description : hauteur du parcours la plus élevée (altitude max) par rapport au niveau de la mer*<br/>*Exemple : 1200*
- Valeur obligatoire
- Type : nombre entier

#### exposition géographique - Propriété `exposition`

> *Description : exposition géographique du cheminement (points cardinaux)*<br/>*Exemple : ouest*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `nord`
    - `nord-ouest`
    - `nord-est`
    - `est`
    - `ouest`
    - `sud`
    - `sud-ouest`
    - `sud-est`
    - `NC`
    - `sans objet`

#### label ou certification d'accessibilité - Propriété `label_psh`

> *Description : label ou certification pour une démarche d'accessibilité*<br/>*Exemple : ['Tourisme & Handicap', "Handi'spot"]*
- Valeur optionnelle
- Type : liste

#### largeur minimale - Propriété `largeur_min`

> *Description : largeur minimale du cheminement libre de mobilier ou autre obstacle (en mètre)*<br/>*Exemple : 0.7*
- Valeur obligatoire
- Type : nombre réel

#### pente du terrain la plus défavorable - Propriété `pente_max`

> *Description : pente du terrain la plus défavorable*<br/>*Exemple : faible*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `nulle`
    - `minimale`
    - `faible`
    - `moyenne`
    - `forte`

#### dévers le plus défavorable - Propriété `devers_max`

> *Description : inclinaison du terrain la plus défavorable, perpendiculaire au sens de circulation*<br/>*Exemple : faible*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `minimal`
    - `faible`
    - `moyen`
    - `fort`
    - `NC`
    - `sans objet`

#### somme de toutes les montées - Propriété `denivele_positif`

> *Description : somme de toutes les montées du parcours (en mètre)*<br/>*Exemple : 150*
- Valeur obligatoire
- Type : nombre entier

#### profil de l'itinéraire - Propriété `profil_altimétrique`

> *Description : profil de l'itinéraire avec la distance en abscisse et l'altitude en ordonnée*<br/>*Exemple : https://www.parcs-naturels-regionaux.fr/.../pnr_perche/sentier_glaisins/profil*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(https?)://[^\s/$.?#].[^\s]*$`

#### types de sols majoritaires - Propriété `type_sol`

> *Description : types de sols majoritaires du cheminement*<br/>*Exemple : ['stabilisé', 'platelage']*
- Valeur optionnelle
- Type : liste

#### états majoritaires du sol - Propriété `etat_sol`

> *Description : états majoritaires du sol*<br/>*Exemple : ['roulant', 'ferme']*
- Valeur optionnelle
- Type : liste

#### présence de systèmes de guidage - Propriété `systeme_guidage`

> *Description : présence d'un système de guidage visuel et/ou tactile et/ou sonore*<br/>*Exemple : ['visuel', 'sonore']*
- Valeur optionnelle
- Type : liste

#### repérabilité du cheminement dans son environnement - Propriété `reperabilite`

> *Description : repérabilité du cheminement dans son environnement grâce aux repères tactiles, visuels et autres*<br/>*Exemple : ["fil d'Ariane et repérable à la canne sur au moins un côté", 'bande de guidage']*
- Valeur optionnelle
- Type : liste

#### repère linéaire continu - Propriété `continuite_repere`

> *Description : repère linéaire continu au sol et/ou aérien*<br/>*Exemple : repère tactile continu*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `repère tactile continu`
    - `repère tactile discontinu`
    - `aucun`
    - `NC`
    - `sans objet`

#### présence d'éléments de signalétique - Propriété `signaletique`

> *Description : présence d'éléments de signalétique directionnelle*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : booléen

#### présence de mobilier - Propriété `mobilier`

> *Description : présence de mobilier*<br/>*Exemple : oui*
- Valeur obligatoire
- Type : booléen

#### fréquence des assises - Propriété `frequence_assise`

> *Description : fréquence des assises*<br/>*Exemple : fréquent*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `fréquent`
    - `régulier`
    - `espacé`
    - `aucun`
    - `NC`
    - `sans objet`

#### desserte du site naturel par une piste cyclable en site propre - Propriété `desserte_cyclable`

> *Description : desserte du site naturel par une piste cyclable en site propre*<br/>*Exemple : non*
- Valeur optionnelle
- Type : booléen

#### types de sol majoritaire de la liaison - Propriété `type_sol_liaison`

> *Description : types de sol majoritaire de la liaison*<br/>*Exemple : gravier fin et compact*
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

#### longueur de la liaison - Propriété `longueur_liaison`

> *Description : longueur de la liaison (en m)*<br/>*Exemple : 100*
- Valeur obligatoire
- Type : nombre entier

#### largeur minimale de la liaison - Propriété `largeur_min_liaison`

> *Description : largeur minimale de la liaison libre de mobilier ou obstacle (en m)*<br/>*Exemple : 50*
- Valeur obligatoire
- Type : nombre réel

#### pente maximale de la liaison - Propriété `pente_max_liaison`

> *Description : pente maximale de la liaison*<br/>*Exemple : faible*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `nulle`
    - `minimale`
    - `faible`
    - `moyenne`
    - `forte`

#### dévers le plus défavorable de la liaison - Propriété `devers_max_liaison`

> *Description : inclinaison du terrain la plus défavorable, perpendiculaire au sein de circulation de la liaison (en %)*<br/>*Exemple : minimal*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `minimal`
    - `faible`
    - `moyen`
    - `fort`
    - `NC`
    - `sans objet`

#### repère linéaire continu sur la liaison - Propriété `continuite_repere_liaison`

> *Description : repère linéaire continu au sol et/ou aérien sur la liaison*<br/>*Exemple : repère tactile continu*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `repère tactile continu`
    - `repère tactile discontinu`
    - `aucun`
    - `NC`
    - `sans objet`

#### date de création du cheminement - Propriété `date_creation`

> *Description : date de création des renseignements du cheminement*<br/>*Exemple : 2020-03-06*
- Valeur optionnelle
- Type : date

#### date de modification du cheminement - Propriété `date_actualisation`

> *Description : date de modification des renseignements du cheminement*<br/>*Exemple : 2026-01-15*
- Valeur optionnelle
- Type : date

#### producteur des renseignements du cheminement - Propriété `producteur`

> *Description : structure productrice des renseignements du cheminement*<br/>*Exemple : PNR du Perche*
- Valeur obligatoire
- Type : chaîne de caractères

#### informations de contact - Propriété `contact`

> *Description : informations de contact de la structure productrice du cheminement*<br/>*Exemple : Conseil départemental du Puy-de-Dôme / Direction Environnement
tel : 04 12 34 56 78
mail : contact@puy-de-dome.fr
web  https://www.parcs-naturels-regionaux.fr/.../cd63/contact*
- Valeur obligatoire
- Type : chaîne de caractères

#### géométrie linéaire du cheminement - Propriété `geom_lin`

> *Description : géométrie linéaire du cheminement en projection Lambert93 au format GeoJSON*<br/>*Exemple : {"type": "LineString", "coordinates": [ [656589.70, 6425785.32], [656655.02, 6425866.31], [656663.55, 6425874.43] ] }*
- Valeur obligatoire
- Type : GéoJSON
