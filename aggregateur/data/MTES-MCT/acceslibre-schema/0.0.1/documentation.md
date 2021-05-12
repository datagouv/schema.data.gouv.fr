---
permalink: /MTES-MCT/acceslibre-schema/latest/documentation.html
redirect_from: /MTES-MCT/acceslibre-schema/0.0.1/documentation.html
title: Documentation de Schéma des données d'accessibilité des ERPs
version: 0.0.1
---

## acceslibre

Schéma des données d'accessibilité des ERPs

Spécification du fichier d'échange relatif aux données d'accessibilité des Établissements Recevant du Public (ERP).

- Schéma créé le : 10/03/2021
- Site web : https://github.com/MTES-MCT/acceslibre-schema
- Version : 0.0.1
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriété-id) | chaîne de caractères  | Oui |
| [name](#propriété-name) | chaîne de caractères  | Oui |
| [postal_code](#propriété-postal_code) | chaîne de caractères  | Oui |
| [commune](#propriété-commune) | chaîne de caractères  | Oui |
| [numero](#propriété-numero) | chaîne de caractères  | Non |
| [voie](#propriété-voie) | chaîne de caractères  | Non |
| [lieu_dit](#propriété-lieu_dit) | chaîne de caractères  | Non |
| [code_insee](#propriété-code_insee) | chaîne de caractères  | Non |
| [siret](#propriété-siret) | chaîne de caractères  | None |
| [coordinates](#propriété-coordinates) | point géographique  | Non |
| [transport_station_presence](#proximité-d'un-arrêt-de-transport-en-commun---propriété-transport_station_presence) | booléen  | Non |
| [stationnement_presence](#stationnement-dans-l'erp---propriété-stationnement_presence) | booléen  | Non |
| [stationnement_pmr](#stationnements-adaptés-dans-l'erp---propriété-stationnement_pmr) | booléen  | Non |
| [stationnement_ext_presence](#stationnement-à-proximité-de-l'erp---propriété-stationnement_ext_presence) | booléen  | Non |
| [stationnement_ext_pmr](#stationnements-pmr-à-proximité-de-l'erp---propriété-stationnement_ext_pmr) | booléen  | Non |
| [cheminement_ext_presence](#cheminement-extérieur---propriété-cheminement_ext_presence) | booléen  | Non |
| [cheminement_ext_terrain_accidente](#revêtement-extérieur---propriété-cheminement_ext_terrain_accidente) | booléen  | Non |
| [cheminement_ext_plain_pied](#cheminement-extérieur-de-plain-pied---propriété-cheminement_ext_plain_pied) | booléen  | Non |
| [cheminement_ext_ascenseur](#ascenseur/élévateur---propriété-cheminement_ext_ascenseur) | booléen  | Non |
| [cheminement_ext_nombre_marches](#nombre-de-marches---propriété-cheminement_ext_nombre_marches) | nombre entier  | Non |
| [cheminement_ext_reperage_marches](#marches-ou-escalier-sécurisé(es)---propriété-cheminement_ext_reperage_marches) | booléen  | Non |
| [cheminement_ext_sens_marches](#sens-de-circulation-de-l'escalier---propriété-cheminement_ext_sens_marches) | chaîne de caractères  | None |
| [cheminement_ext_main_courante](#main-courante---propriété-cheminement_ext_main_courante) | booléen  | Non |
| [cheminement_ext_rampe](#rampe---propriété-cheminement_ext_rampe) | chaîne de caractères  | None |
| [cheminement_ext_pente_presence](#pente---propriété-cheminement_ext_pente_presence) | booléen  | Non |
| [cheminement_ext_pente_degre_difficulte](#degré-de-difficulté-de-la-pente---propriété-cheminement_ext_pente_degre_difficulte) | chaîne de caractères  | None |
| [cheminement_ext_pente_longueur](#longueur-de-la-pente---propriété-cheminement_ext_pente_longueur) | chaîne de caractères  | None |
| [cheminement_ext_devers](#dévers---propriété-cheminement_ext_devers) | chaîne de caractères  | None |
| [cheminement_ext_bande_guidage](#bande-de-guidage---propriété-cheminement_ext_bande_guidage) | booléen  | Non |
| [cheminement_ext_retrecissement](#rétrécissement-du-cheminement---propriété-cheminement_ext_retrecissement) | booléen  | Non |
| [entree_reperage](#entrée-facilement-repérable---propriété-entree_reperage) | booléen  | Non |
| [entree_vitree](#entrée-vitrée---propriété-entree_vitree) | booléen  | Non |
| [entree_vitree_vitrophanie](#repérage-de-la-vitre---propriété-entree_vitree_vitrophanie) | booléen  | Non |
| [entree_plain_pied](#entrée-de-plain-pied---propriété-entree_plain_pied) | booléen  | Non |
| [entree_ascenseur](#ascenseur/élévateur---propriété-entree_ascenseur) | booléen  | Non |
| [entree_marches](#nombre-de-marches---propriété-entree_marches) | nombre entier  | Non |
| [entree_marches_reperage](#repérage-des-marches---propriété-entree_marches_reperage) | booléen  | Non |
| [entree_marches_main_courante](#main-courante---propriété-entree_marches_main_courante) | booléen  | Non |
| [entree_marches_rampe](#rampe---propriété-entree_marches_rampe) | chaîne de caractères  | None |
| [entree_marches_sens](#sens-de-circulation-de-l'escalier---propriété-entree_marches_sens) | chaîne de caractères  | None |
| [entree_dispositif_appel](#dispositif-d'appel-à-l'entrée---propriété-entree_dispositif_appel) | booléen  | Non |
| [entree_dispositif_appel_type](#type-de-dispositif-d'appel-à-l'entrée---propriété-entree_dispositif_appel_type) | liste  | Non |
| [entree_balise_sonore](#balise-sonore-à-l'entrée---propriété-entree_balise_sonore) | booléen  | Non |
| [entree_aide_humaine](#aide-humaine---propriété-entree_aide_humaine) | booléen  | Non |
| [entree_largeur_mini](#largeur-de-la-porte---propriété-entree_largeur_mini) | nombre entier  | Non |
| [entree_pmr](#entrée-spécifique-pmr---propriété-entree_pmr) | booléen  | Non |
| [entree_porte_presence](#y-a-t-il-une-porte ?---propriété-entree_porte_presence) | booléen  | Non |
| [entree_porte_manoeuvre](#manoeuvre-de-la-porte---propriété-entree_porte_manoeuvre) | chaîne de caractères  | None |
| [entree_porte_type](#type-de-porte---propriété-entree_porte_type) | chaîne de caractères  | None |
| [accueil_visibilite](#visibilité-de-la-zone-d'accueil---propriété-accueil_visibilite) | booléen  | Non |
| [accueil_personnels](#personnel-d'accueil---propriété-accueil_personnels) | chaîne de caractères  | None |
| [accueil_equipements_malentendants_presence](#présence-d'équipements-d'aide-à-l'audition-et-à-la-communication---propriété-accueil_equipements_malentendants_presence) | booléen  | Non |
| [accueil_equipements_malentendants](#liste-des-équipements-d'aide-à-l'audition-et-à-la-communication---propriété-accueil_equipements_malentendants) | liste  | Non |
| [accueil_cheminement_plain_pied](#cheminement-de-plain-pied-entre-l'entrée-et-l'accueil---propriété-accueil_cheminement_plain_pied) | booléen  | Non |
| [accueil_cheminement_ascenseur](#ascenseur/élévateur---propriété-accueil_cheminement_ascenseur) | booléen  | Non |
| [accueil_cheminement_nombre_marches](#nombre-de-marches---propriété-accueil_cheminement_nombre_marches) | nombre entier  | Non |
| [accueil_cheminement_reperage_marches](#repérage-des-marches-ou-de-l’escalier---propriété-accueil_cheminement_reperage_marches) | booléen  | Non |
| [accueil_cheminement_main_courante](#main-courante---propriété-accueil_cheminement_main_courante) | booléen  | Non |
| [accueil_cheminement_rampe](#rampe---propriété-accueil_cheminement_rampe) | booléen  | Non |
| [accueil_cheminement_sens_marches](#sens-de-circulation-de-l'escalier---propriété-accueil_cheminement_sens_marches) | chaîne de caractères  | None |
| [accueil_retrecissement](#rétrécissement-du-cheminement---propriété-accueil_retrecissement) | booléen  | Non |
| [sanitaires_presence](#sanitaires---propriété-sanitaires_presence) | booléen  | Non |
| [sanitaires_adaptes](#sanitaires-adaptés---propriété-sanitaires_adaptes) | nombre entier  | Non |
| [labels](#marques-ou-labels---propriété-labels) | liste  | Non |
| [labels_familles_handicap](#famille(s)-de-handicap-concernées(s)---propriété-labels_familles_handicap) | liste  | Non |
| [registre_url](#registre---propriété-registre_url) | chaîne de caractères (format `uri`) | Non |
| [conformite](#conformité---propriété-conformite) | booléen  | Non |

#### Propriété `id`

> *Description : Identifiant unique<br/>Ex : 123e4567-e89b-12d3-a456-426614174000*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `name`

> *Description : Nom de l'établissement<br/>Ex : Mairie du 3e*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `postal_code`

> *Description : Code postal<br/>Ex : 75017*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `commune`

> *Description : Nom de la commune<br/>Ex : Paris 17*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `numero`

> *Description : Numero de la rue<br/>Ex : 15*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `voie`

> *Description : Nom de la rue/voie<br/>Ex : Rue Paul Chenavard*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `lieu_dit`

> *Description : Lieu-dit<br/>Ex : Le petit Marché*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `code_insee`

> *Description : Code INSEE<br/>Ex : 17877*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `siret`

> *Description : Le numero SIRET de l'ERP issue de la base SIRENE des entreprises. Vous pouvez récupérer cet identifiant sur le site annuaire-entreprises.data.gouv.fr.<br/>Ex : 13002526564591*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Propriété `coordinates`

> *Description : Coordonnées GPS<br/>Ex : 90, 45*
- Valeur optionnelle
- Type : point géographique

#### Proximité d'un arrêt de transport en commun - Propriété `transport_station_presence`

> *Description : Arrêt de transport en commun à proximité (moins de 200 mètres)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Stationnement dans l'ERP - Propriété `stationnement_presence`

> *Description : Présence de stationnement au sein de la parcelle de l'établissement<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Stationnements adaptés dans l'ERP - Propriété `stationnement_pmr`

> *Description : Présence de stationnement adapté au sein de la parcelle de l'établissement<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Stationnement à proximité de l'ERP - Propriété `stationnement_ext_presence`

> *Description : Présence de stationnement à proximité de l'établissement (moins de 200 mètres)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Stationnements PMR à proximité de l'ERP - Propriété `stationnement_ext_pmr`

> *Description : Présence de stationnement adapté à proximité de l'établissement (moins de 200 mètres)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Cheminement extérieur - Propriété `cheminement_ext_presence`

> *Description : L'accès à l'entrée depuis la voirie se fait par un cheminement extérieur<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Revêtement extérieur - Propriété `cheminement_ext_terrain_accidente`

> *Description : Ce revêtement est stable (absence de pavés, gravillons, terre, herbe, sable, ou toute surface non stabilisée)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Cheminement extérieur de plain-pied - Propriété `cheminement_ext_plain_pied`

> *Description : L'accès à cet espace se fait de plain-pied (sans rupture de niveau)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Ascenseur/élévateur - Propriété `cheminement_ext_ascenseur`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Nombre de marches - Propriété `cheminement_ext_nombre_marches`

> *Description : None<br/>Ex : 0*
- Valeur optionnelle
- Type : nombre entier

#### Marches ou escalier sécurisé(es) - Propriété `cheminement_ext_reperage_marches`

> *Description : Nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier et/ou première et dernière contremarches contrastées<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Sens de circulation de l'escalier - Propriété `cheminement_ext_sens_marches`

> *Description : Sens de circulation des marches ou de l’escalier<br/>Ex : Valeurs possibles: montant -> Montant, descendant -> Descendant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - montant
    - descendant

#### Main courante - Propriété `cheminement_ext_main_courante`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Rampe - Propriété `cheminement_ext_rampe`

> *Description : Présence et type de rampe<br/>Ex : Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - aucune
    - fixe
    - amovible

#### Pente - Propriété `cheminement_ext_pente_presence`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Degré de difficulté de la pente - Propriété `cheminement_ext_pente_degre_difficulte`

> *Description : None<br/>Ex : Valeurs possibles: légère -> Légère, importante -> Importante*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - légère
    - importante

#### Longueur de la pente - Propriété `cheminement_ext_pente_longueur`

> *Description : None<br/>Ex : Valeurs possibles: courte -> < 0,5 mètres, moyenne -> entre 0,5 et 2 mètres, longue -> > 2 mètres*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - courte
    - moyenne
    - longue

#### Dévers - Propriété `cheminement_ext_devers`

> *Description : None<br/>Ex : Valeurs possibles: aucun -> Aucun, léger -> Léger, important -> Important*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - aucun
    - léger
    - important

#### Bande de guidage - Propriété `cheminement_ext_bande_guidage`

> *Description : Présence d'une bande de guidage au sol facilitant le déplacement d'une personne aveugle ou malvoyante<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Rétrécissement du cheminement - Propriété `cheminement_ext_retrecissement`

> *Description : Un ou plusieurs rétrecissements (inférieurs à 80 cm) du chemin pour atteindre l'entrée<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Entrée facilement repérable - Propriété `entree_reperage`

> *Description : Présence d'éléments facilitant le repérage de l'entrée de l’établissement (numéro de rue à proximité, enseigne, végétaux, éléments architecturaux contrastés, etc)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Entrée vitrée - Propriété `entree_vitree`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Repérage de la vitre - Propriété `entree_vitree_vitrophanie`

> *Description : Présence d'éléments contrastés permettant de visualiser les parties vitrées de l'entrée<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Entrée de plain-pied - Propriété `entree_plain_pied`

> *Description : L'entrée se fait de plain-pied (sans rupture de niveau)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Ascenseur/élévateur - Propriété `entree_ascenseur`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Nombre de marches - Propriété `entree_marches`

> *Description : None<br/>Ex : 0*
- Valeur optionnelle
- Type : nombre entier

#### Repérage des marches - Propriété `entree_marches_reperage`

> *Description : Nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier et/ou première et dernière contremarches contrastées<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Main courante - Propriété `entree_marches_main_courante`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Rampe - Propriété `entree_marches_rampe`

> *Description : None<br/>Ex : Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - aucune
    - fixe
    - amovible

#### Sens de circulation de l'escalier - Propriété `entree_marches_sens`

> *Description : Sens de circulation des marches ou de l’escalier<br/>Ex : Valeurs possibles: montant -> Montant, descendant -> Descendant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - montant
    - descendant

#### Dispositif d'appel à l'entrée - Propriété `entree_dispositif_appel`

> *Description : Présence d'un dispositif comme une sonnette pour signaler sa présence<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Type de dispositif d'appel à l'entrée - Propriété `entree_dispositif_appel_type`

> *Description : Dispositifs d'appels présents<br/>Ex : Valeurs possibles: bouton -> Bouton d’appel, sonnette -> Sonnette, interphone -> Interphone, visiophone -> Visiophone*
- Valeur optionnelle
- Type : liste

#### Balise sonore à l'entrée - Propriété `entree_balise_sonore`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Aide humaine - Propriété `entree_aide_humaine`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Largeur de la porte - Propriété `entree_largeur_mini`

> *Description : Largeur minimale de la porte d'entrée<br/>Ex : 0*
- Valeur optionnelle
- Type : nombre entier

#### Entrée spécifique PMR - Propriété `entree_pmr`

> *Description : Présence d'une entrée secondaire spécifique dédiée aux personnes à mobilité réduite<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Y a-t-il une porte ? - Propriété `entree_porte_presence`

> *Description : Présence d'une porte à l'entrée de l'établissement<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Manoeuvre de la porte - Propriété `entree_porte_manoeuvre`

> *Description : Mode d'ouverture de la porte<br/>Ex : Valeurs possibles: battante -> Porte battante, coulissante -> Porte coulissante, tourniquet -> Tourniquet, tambour -> Porte tambour*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - battante
    - coulissante
    - tourniquet
    - tambour

#### Type de porte - Propriété `entree_porte_type`

> *Description : Type de porte<br/>Ex : Valeurs possibles: manuelle -> Manuelle, automatique -> Automatique*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - manuelle
    - automatique

#### Visibilité de la zone d'accueil - Propriété `accueil_visibilite`

> *Description : La zone d'accueil (guichet d’accueil, caisse, secrétariat, etc) est visible depuis l'entrée<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Personnel d'accueil - Propriété `accueil_personnels`

> *Description : None<br/>Ex : Valeurs possibles: aucun -> Aucun personnel, formés -> Personnels sensibilisés ou formés, non-formés -> Personnels non-formés*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - aucun
    - formés
    - non-formés

#### Présence d'équipements d'aide à l'audition et à la communication - Propriété `accueil_equipements_malentendants_presence`

> *Description : Présence de produits ou prestations dédiés aux personnes sourdes ou malentendantes<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Liste des équipements d'aide à l'audition et à la communication - Propriété `accueil_equipements_malentendants`

> *Description : Équipements ou prestations disponibles<br/>Ex : Valeurs possibles: bim -> Boucle à induction magnétique fixe, bmp -> Boucle à induction magnétique portative, lsf -> Langue des signes française, lpc -> Langue Française Parlée Complétée (LFPC), sts -> Sous-Titrage ou Transcription Simultanée, autres -> Autres*
- Valeur optionnelle
- Type : liste

#### Cheminement de plain-pied entre l'entrée et l'accueil - Propriété `accueil_cheminement_plain_pied`

> *Description : L'accès à cet espace se fait de plain-pied (sans rupture de niveau)<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Ascenseur/élévateur - Propriété `accueil_cheminement_ascenseur`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Nombre de marches - Propriété `accueil_cheminement_nombre_marches`

> *Description : None<br/>Ex : 0*
- Valeur optionnelle
- Type : nombre entier

#### Repérage des marches ou de l’escalier - Propriété `accueil_cheminement_reperage_marches`

> *Description : Nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier et/ou première et dernière contremarches contrastées<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Main courante - Propriété `accueil_cheminement_main_courante`

> *Description : None<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Rampe - Propriété `accueil_cheminement_rampe`

> *Description : Présence et type de rampe<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Sens de circulation de l'escalier - Propriété `accueil_cheminement_sens_marches`

> *Description : Sens de circulation des marches ou de l’escalier<br/>Ex : Valeurs possibles: montant -> Montant, descendant -> Descendant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - montant
    - descendant

#### Rétrécissement du cheminement - Propriété `accueil_retrecissement`

> *Description : Un ou plusieurs rétrecissements (inférieurs à 80 cm) du chemin pour atteindre l'entrée<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Sanitaires - Propriété `sanitaires_presence`

> *Description : Mise à disposition de sanitaires dans l'établissement<br/>Ex : True*
- Valeur optionnelle
- Type : booléen

#### Sanitaires adaptés - Propriété `sanitaires_adaptes`

> *Description : Nombre de sanitaires adaptés dans l'établissement<br/>Ex : 0*
- Valeur optionnelle
- Type : nombre entier

#### Marques ou labels - Propriété `labels`

> *Description : Marque(s) ou label(s) obtenus par l'établissement<br/>Ex : Valeurs possibles: autre -> Autre, dpt -> Destination pour Tous, mobalib -> Mobalib, th -> Tourisme & Handicap*
- Valeur optionnelle
- Type : liste

#### Famille(s) de handicap concernées(s) - Propriété `labels_familles_handicap`

> *Description : Famille(s) de handicap couverte(s) par ces marques ou labels<br/>Ex : Valeurs possibles: auditif -> Auditif, mental -> Mental, moteur -> Moteur, visuel -> Visuel*
- Valeur optionnelle
- Type : liste

#### Registre - Propriété `registre_url`

> *Description : Si l'établissement dispose d'un registre numérique, adresse internet à laquelle celui-ci est consultable<br/>Ex : https://handicap.gouv.fr/actualites/article/registre-d-accessibilite-obligatoire-un-guide-pour-les-erp*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Conformité - Propriété `conformite`

> *Description : Statut réglementaire de conformité de l'établissement<br/>Ex : True*
- Valeur optionnelle
- Type : booléen