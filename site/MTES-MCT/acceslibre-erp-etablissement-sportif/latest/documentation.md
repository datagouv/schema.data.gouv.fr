<MenuSchema />

## acceslibre-erp-etablissement-sportif

Accessibilité ERP — Établissements sportifs

Spécification du fichier d'échange relatif aux données d'accessibilité des Établissements Recevant du Public (ERP).

- Schéma créé le : 10/03/2021
- Site web : https://github.com/MTES-MCT/acceslibre-schema
- Version : 0.0.20
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriete-id) | chaîne de caractères  | Oui |
| [name](#propriete-name) | chaîne de caractères  | Oui |
| [postal_code](#propriete-postal-code) | chaîne de caractères  | Oui |
| [commune](#propriete-commune) | chaîne de caractères  | Oui |
| [numero](#propriete-numero) | chaîne de caractères  | Non |
| [voie](#propriete-voie) | chaîne de caractères  | Non |
| [lieu_dit](#propriete-lieu-dit) | chaîne de caractères  | Non |
| [code_insee](#propriete-code-insee) | chaîne de caractères  | Non |
| [siret](#propriete-siret) | chaîne de caractères  | Non |
| [contact_url](#propriete-contact-url) | chaîne de caractères (format `uri`) | Non |
| [site_internet](#propriete-site-internet) | chaîne de caractères (format `uri`) | Non |
| [longitude](#propriete-longitude) | nombre réel  | Non |
| [latitude](#propriete-latitude) | nombre réel  | Non |
| [activite](#activite-propriete-activite) | chaîne de caractères  | Non |
| [transport_station_presence](#proximite-d-un-arret-de-transport-en-commun-propriete-transport-station-presence) | booléen  | Non |
| [stationnement_presence](#stationnement-prive-dans-l-etablissement-propriete-stationnement-presence) | booléen  | Non |
| [stationnement_pmr](#stationnements-adaptes-dans-l-etablissement-propriete-stationnement-pmr) | booléen  | Non |
| [stationnement_ext_presence](#stationnement-a-proximite-de-l-etablissement-propriete-stationnement-ext-presence) | booléen  | Non |
| [stationnement_ext_pmr](#stationnements-adaptes-a-proximite-de-l-etablissement-propriete-stationnement-ext-pmr) | booléen  | Non |
| [stationnement_zone_depose_pmr](#aire-de-depose-pmr-propriete-stationnement-zone-depose-pmr) | booléen  | Non |
| [cheminement_ext_presence](#exterieur-entre-le-trottoir-et-l'entree-principale-du-batiment-propriete-cheminement-ext-presence) | booléen  | Non |
| [cheminement_ext_terrain_stable](#revetement-exterieur-propriete-cheminement-ext-terrain-stable) | booléen  | Non |
| [cheminement_ext_plain_pied](#chemin-exterieur-de-plain-pied-propriete-cheminement-ext-plain-pied) | booléen  | Non |
| [cheminement_ext_ascenseur](#ascenseur-elevateur-propriete-cheminement-ext-ascenseur) | booléen  | Non |
| [cheminement_ext_ascenseur_pmr](#accessibilite-de-l'ascenseur-propriete-cheminement-ext-ascenseur-pmr) | booléen  | Non |
| [cheminement_ext_nombre_marches](#nombre-de-marches-propriete-cheminement-ext-nombre-marches) | nombre entier  | Non |
| [cheminement_ext_reperage_marches](#reperage-des-marches-propriete-cheminement-ext-reperage-marches) | booléen  | Non |
| [cheminement_ext_sens_marches](#sens-de-circulation-de-l-escalier-propriete-cheminement-ext-sens-marches) | chaîne de caractères  | Non |
| [cheminement_ext_main_courante](#main-courante-propriete-cheminement-ext-main-courante) | booléen  | Non |
| [cheminement_ext_rampe](#rampe-propriete-cheminement-ext-rampe) | chaîne de caractères  | Non |
| [cheminement_ext_pente_presence](#pente-propriete-cheminement-ext-pente-presence) | booléen  | Non |
| [cheminement_ext_pente_degre_difficulte](#degre-de-difficulte-de-la-pente-propriete-cheminement-ext-pente-degre-difficulte) | chaîne de caractères  | Non |
| [cheminement_ext_pente_longueur](#longueur-de-la-pente-propriete-cheminement-ext-pente-longueur) | chaîne de caractères  | Non |
| [cheminement_ext_devers](#devers-propriete-cheminement-ext-devers) | chaîne de caractères  | Non |
| [cheminement_ext_bande_guidage](#bande-de-guidage-propriete-cheminement-ext-bande-guidage) | booléen  | Non |
| [cheminement_ext_retrecissement](#retrecissement-du-chemin-propriete-cheminement-ext-retrecissement) | booléen  | Non |
| [cheminement_ext_signaletique_exterieure](#signaletique-exterieure-propriete-cheminement-ext-signaletique-exterieure) | booléen  | Non |
| [entree_reperage](#l'entree-de-l'etablissement-propriete-entree-reperage) | booléen  | Non |
| [entree_vitree](#entree-vitree-propriete-entree-vitree) | booléen  | Non |
| [entree_vitree_vitrophanie](#reperage-de-la-vitre-propriete-entree-vitree-vitrophanie) | booléen  | Non |
| [entree_plain_pied](#entree-de-plain-pied-propriete-entree-plain-pied) | booléen  | Non |
| [entree_ascenseur](#ascenseur-elevateur-propriete-entree-ascenseur) | booléen  | Non |
| [entree_ascenseur_pmr](#accessibilite-de-l'ascenseur-propriete-entree-ascenseur-pmr) | booléen  | Non |
| [entree_marches](#nombre-de-marches-propriete-entree-marches) | nombre entier  | Non |
| [entree_marches_reperage](#reperage-des-marches-propriete-entree-marches-reperage) | booléen  | Non |
| [entree_marches_main_courante](#main-courante-propriete-entree-marches-main-courante) | booléen  | Non |
| [entree_marches_rampe](#rampe-propriete-entree-marches-rampe) | chaîne de caractères  | Non |
| [entree_marches_sens](#sens-de-circulation-de-l-escalier-propriete-entree-marches-sens) | chaîne de caractères  | Non |
| [entree_dispositif_appel](#type-de-dispositif-d-appel-a-l-entree-propriete-entree-dispositif-appel) | booléen  | Non |
| [entree_dispositif_appel_type](#dispositif-d'appel-a-l'entree-propriete-entree-dispositif-appel-type) | liste  | Non |
| [entree_balise_sonore](#balise-sonore-a-l-entree-propriete-entree-balise-sonore) | booléen  | Non |
| [entree_aide_humaine](#aide-humaine-propriete-entree-aide-humaine) | booléen  | Non |
| [entree_largeur_mini](#largeur-de-la-porte-ou-de-l-entree-propriete-entree-largeur-mini) | nombre entier  | Non |
| [entree_pmr](#entree-dediee-aux-personnes-en-situation-de-handicap-propriete-entree-pmr) | booléen  | Non |
| [entree_porte_presence](#porte-d-entree-propriete-entree-porte-presence) | booléen  | Non |
| [entree_porte_manoeuvre](#manoeuvre-de-la-porte-propriete-entree-porte-manoeuvre) | chaîne de caractères  | Non |
| [entree_porte_type](#type-de-porte-propriete-entree-porte-type) | chaîne de caractères  | Non |
| [accueil_visibilite](#visibilite-de-la-zone-d-accueil-propriete-accueil-visibilite) | booléen  | Non |
| [accueil_equipements_malentendants_presence](#presence-d'equipements-d'aide-a-l'audition-et-a-la-comprehension-propriete-accueil-equipements-malentendants-presence) | booléen  | Non |
| [accueil_equipements_malentendants](#liste-des-equipements-d-aide-a-l-audition-et-a-la-communication-propriete-accueil-equipements-malentendants) | liste  | Non |
| [accueil_cheminement_plain_pied](#chemin-entre-l-entree-principale-du-batiment-et-l-accueil-de-l-etablissement-propriete-accueil-cheminement-plain-pied) | booléen  | Non |
| [accueil_cheminement_ascenseur](#ascenseur-elevateur-propriete-accueil-cheminement-ascenseur) | booléen  | Non |
| [accueil_cheminement_ascenseur_pmr](#accessibilite-de-l'ascenseur-propriete-accueil-cheminement-ascenseur-pmr) | booléen  | Non |
| [accueil_cheminement_nombre_marches](#nombre-de-marches-propriete-accueil-cheminement-nombre-marches) | nombre entier  | Non |
| [accueil_cheminement_reperage_marches](#reperage-des-marches-ou-de-l-escalier-propriete-accueil-cheminement-reperage-marches) | booléen  | Non |
| [accueil_cheminement_main_courante](#main-courante-propriete-accueil-cheminement-main-courante) | booléen  | Non |
| [accueil_cheminement_rampe](#rampe-propriete-accueil-cheminement-rampe) | chaîne de caractères  | Non |
| [accueil_cheminement_sens_marches](#sens-de-circulation-de-l-escalier-propriete-accueil-cheminement-sens-marches) | chaîne de caractères  | Non |
| [accueil_retrecissement](#retrecissement-du-chemin-propriete-accueil-retrecissement) | booléen  | Non |
| [accueil_signaletique_interieure](#signaletique-interieure-propriete-accueil-signaletique-interieure) | booléen  | Non |
| [accueil_physique](#accueil-physique-propriete-accueil-physique) | chaîne de caractères  | Non |
| [accueil_aire_de_jeux](#aire-de-jeux-propriete-accueil-aire-de-jeux) | booléen  | Non |
| [accueil_tribunes](#tribunes-propriete-accueil-tribunes) | booléen  | Non |
| [accueil_tribunes_places](#places-accessibles-en-tribunes-propriete-accueil-tribunes-places) | nombre entier  | Non |
| [accueil_tribunes_localisation_places](#propriete-accueil-tribunes-localisation-places) | chaîne de caractères  | Non |
| [accueil_tribunes_places_avec_accompagnants](#propriete-accueil-tribunes-places-avec-accompagnants) | nombre entier  | Non |
| [accueil_vestiaires](#vestiaires-propriete-accueil-vestiaires) | booléen  | Non |
| [accueil_vestiaires_largeur_passage](#propriete-accueil-vestiaires-largeur-passage) | chaîne de caractères  | Non |
| [accueil_douches_collectives](#douches-collectives-propriete-accueil-douches-collectives) | booléen  | Non |
| [accueil_douches_collectives_adaptees](#propriete-accueil-douches-collectives-adaptees) | booléen  | Non |
| [accueil_douches_individuelles](#douches-individuelles-propriete-accueil-douches-individuelles) | booléen  | Non |
| [accueil_douches_individuelles_adaptees](#propriete-accueil-douches-individuelles-adaptees) | booléen  | Non |
| [accueil_casiers](#casiers-propriete-accueil-casiers) | booléen  | Non |
| [accueil_casiers_adaptes](#propriete-accueil-casiers-adaptes) | booléen  | Non |
| [accueil_casiers_fermeture](#propriete-accueil-casiers-fermeture) | liste  | Non |
| [accueil_prestations_complementaires](#prestations-complementaires-propriete-accueil-prestations-complementaires) | liste  | Non |
| [accueil_presence_espaces_specifiques](#presence-d-espaces-specifiques-propriete-accueil-presence-espaces-specifiques) | liste  | Non |
| [sanitaires_presence](#toilettes-propriete-sanitaires-presence) | booléen  | Non |
| [sanitaires_adaptes](#toilettes-adaptees-propriete-sanitaires-adaptes) | booléen  | Non |
| [sanitaires_largeur_porte](#propriete-sanitaires-largeur-porte) | chaîne de caractères  | Non |
| [sanitaires_sens_transfert](#propriete-sanitaires-sens-transfert) | chaîne de caractères  | Non |
| [sanitaires_urinoirs](#propriete-sanitaires-urinoirs) | booléen  | Non |
| [registre_url](#registre-propriete-registre-url) | chaîne de caractères (format `uri`) | Non |
| [conformite](#conformite-propriete-conformite) | booléen  | Non |

#### Propriété `id`

> *Description : Identifiant unique*<br/>*Exemple : 123e4567-e89b-12d3-a456-426614174000*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `name`

> *Description : Nom de l'établissement*<br/>*Exemple : Mairie du 3e*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `postal_code`

> *Description : Code postal*<br/>*Exemple : 75017*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `commune`

> *Description : Nom de la commune*<br/>*Exemple : Paris 17*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `numero`

> *Description : Numero de la rue*<br/>*Exemple : 15*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `voie`

> *Description : Nom de la rue/voie*<br/>*Exemple : Rue Paul Chenavard*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `lieu_dit`

> *Description : Lieu-dit*<br/>*Exemple : Le petit Marché*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `code_insee`

> *Description : Code INSEE*<br/>*Exemple : 17877*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `siret`

> *Description : Le numero SIRET de l'ERP issue de la base SIRENE des entreprises. Vous pouvez récupérer cet identifiant sur le site annuaire-entreprises.data.gouv.fr.*<br/>*Exemple : 13002526564591*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Propriété `contact_url`

> *Description : Lien vers un moyen de contact (chatbot, formulaire, ...)*<br/>*Exemple : https://site.com/contact*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `site_internet`

> *Description : Site internet de l'établissement*<br/>*Exemple : https://site.com/*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `longitude`

> *Description : Coordonnées GPS: longitude*<br/>*Exemple : 2.352222*
- Valeur optionnelle
- Type : nombre réel

#### Propriété `latitude`

> *Description : Coordonnées GPS: latitude*<br/>*Exemple : 48.856613*
- Valeur optionnelle
- Type : nombre réel

#### Activité - Propriété `activite`

> *Description : Domaine d'activité de l'ERP*
- Valeur optionnelle
- Type : chaîne de caractères

#### Proximité d'un arrêt de transport en commun - Propriété `transport_station_presence`

> *Description : Arrêt de transport en commun à moins de 200 mètres de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Stationnement privé dans l'établissement - Propriété `stationnement_presence`

> *Description : Des places de stationnement sont disponibles au sein de la parcelle de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Stationnements adaptés dans l'établissement - Propriété `stationnement_pmr`

> *Description : Des places de stationnement adaptées sont disponibles au sein de la parcelle de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Stationnement à proximité de l'établissement - Propriété `stationnement_ext_presence`

> *Description : Des places de stationnement sont disponibles à moins de 200 mètres de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Stationnements adaptés à proximité de l'établissement - Propriété `stationnement_ext_pmr`

> *Description : Des places de stationnement adaptées sont disponibles à moins de 200 mètres de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Aire de dépose PMR - Propriété `stationnement_zone_depose_pmr`

> *Description : Présence d'une zone de dépose PMR*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Extérieur entre le trottoir et l’entrée principale du bâtiment - Propriété `cheminement_ext_presence`

> *Description : L'accès à l'entrée depuis la voirie se fait par un chemin extérieur*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Revêtement extérieur - Propriété `cheminement_ext_terrain_stable`

> *Description : Le revêtement est stable (absence de pavés, gravillons, terre, herbe, sable, ou toute surface non stabilisée)*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Chemin extérieur de plain-pied - Propriété `cheminement_ext_plain_pied`

> *Description : L'accès à cet espace se fait de plain-pied, c'est à dire sans rupture brutale de niveau*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Ascenseur/élévateur - Propriété `cheminement_ext_ascenseur`

> *Description : Existe-t-il un ascenseur ou un élévateur&nbsp;?*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Accessibilité de l’ascenseur - Propriété `cheminement_ext_ascenseur_pmr`

> *Description : Présence d’un ascenseur PMR*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Nombre de marches - Propriété `cheminement_ext_nombre_marches`

> *Description : Combien y'a t'il de marches&nbsp;?*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Repérage des marches - Propriété `cheminement_ext_reperage_marches`

> *Description : Présence de nez de marche contrastés, d'une bande d'éveil à la vigilance en haut de l'escalier et/ou de première et dernière contremarches contrastées*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Sens de circulation de l'escalier - Propriété `cheminement_ext_sens_marches`

> *Description : Sens de circulation des marches ou de l'escalier. Valeurs possibles: montant -> Monter, descendant -> Descendre*<br/>*Exemple : ["montant", "descendant"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `montant`
    - `descendant`

#### Main courante - Propriété `cheminement_ext_main_courante`

> *Description : L'escalier est équipé d'une ou plusieurs main-courantes*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Rampe - Propriété `cheminement_ext_rampe`

> *Description : Présence d'une rampe fixe ou amovible. Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*<br/>*Exemple : ["aucune", "fixe", "amovible"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucune`
    - `fixe`
    - `amovible`

#### Pente - Propriété `cheminement_ext_pente_presence`

> *Description : Le chemin est en pente*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Degré de difficulté de la pente - Propriété `cheminement_ext_pente_degre_difficulte`

> *Description : Difficulté de la pente. Valeurs possibles: légère -> Légère, importante -> Importante*<br/>*Exemple : ["l\u00e9g\u00e8re", "importante"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `légère`
    - `importante`

#### Longueur de la pente - Propriété `cheminement_ext_pente_longueur`

> *Description : Longueur de la pente. Valeurs possibles: courte -> inférieure à 0,5 mètres, moyenne -> entre 0,5 et 2 mètres, longue -> supérieure 2 mètres*<br/>*Exemple : ["courte", "moyenne", "longue"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `courte`
    - `moyenne`
    - `longue`

#### Dévers - Propriété `cheminement_ext_devers`

> *Description : Dévers ou inclinaison transversale du chemin. Valeurs possibles: aucun -> Aucun, léger -> Léger, important -> Important*<br/>*Exemple : ["aucun", "l\u00e9ger", "important"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucun`
    - `léger`
    - `important`

#### Bande de guidage - Propriété `cheminement_ext_bande_guidage`

> *Description : Présence d'une bande de guidage au sol facilitant le déplacement d'une personne aveugle ou malvoyante*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Rétrécissement du chemin - Propriété `cheminement_ext_retrecissement`

> *Description : Un ou plusieurs rétrécissements inférieurs à 90 centimètres du chemin pour atteindre la zone d'accueil*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Signalétique extérieure - Propriété `cheminement_ext_signaletique_exterieure`

> *Description : Présence d’une signalétique extérieure, lisible et compréhensible par tous*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### L’entrée de l’établissement - Propriété `entree_reperage`

> *Description : L'entrée de l'établissement est facilement repérable*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Entrée vitrée - Propriété `entree_vitree`

> *Description : La porte d'entrée est vitrée*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Repérage de la vitre - Propriété `entree_vitree_vitrophanie`

> *Description : Des éléments contrastés permettent de visualiser les parties vitrées de l'entrée*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Entrée de plain-pied - Propriété `entree_plain_pied`

> *Description : L'entrée se fait de plain-pied, c'est à dire sans rupture brutale de niveau*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Ascenseur/élévateur - Propriété `entree_ascenseur`

> *Description : Présence d'un ascenseur ou d'un élévateur*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Accessibilité de l’ascenseur - Propriété `entree_ascenseur_pmr`

> *Description : Présence d’un ascenseur PMR*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Nombre de marches - Propriété `entree_marches`

> *Description : Nombre de marches de l'escalier*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Repérage des marches - Propriété `entree_marches_reperage`

> *Description : Présence de nez de marche contrastés, d'une bande d'éveil à la vigilance en haut de l'escalier et/ou de première et dernière contremarches contrastées*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Main courante - Propriété `entree_marches_main_courante`

> *Description : L'escalier est équipé d'une ou plusieurs main-courantes*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Rampe - Propriété `entree_marches_rampe`

> *Description : Présence d'une rampe fixe ou amovible. Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*<br/>*Exemple : ["aucune", "fixe", "amovible"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucune`
    - `fixe`
    - `amovible`

#### Sens de circulation de l'escalier - Propriété `entree_marches_sens`

> *Description : Sens de circulation des marches ou de l'escalier. Valeurs possibles: montant -> Monter, descendant -> Descendre*<br/>*Exemple : ["montant", "descendant"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `montant`
    - `descendant`

#### Type de dispositif d'appel à l'entrée - Propriété `entree_dispositif_appel`

> *Description : Présence d'un dispositif comme une sonnette pour signaler sa présence*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Dispositif d’appel à l’entrée - Propriété `entree_dispositif_appel_type`

> *Description : Dispositifs d'appels présents. Valeurs possibles: bouton -> Bouton d'appel, interphone -> Interphone, visiophone -> Visiophone*<br/>*Exemple : ["bouton", "interphone", "visiophone"]*
- Valeur optionnelle
- Type : liste

#### Balise sonore à l'entrée - Propriété `entree_balise_sonore`

> *Description : Présence d'une balise sonore facilitant son repérage par une personne aveugle ou malvoyante*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Aide humaine - Propriété `entree_aide_humaine`

> *Description : Possibilité d'une aide humaine au déplacement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Largeur de la porte ou de l'entrée - Propriété `entree_largeur_mini`

> *Description : Largeur minimale de la porte d'entrée*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Entrée dédiée aux personnes en situation de handicap - Propriété `entree_pmr`

> *Description : Présence d'une entrée secondaire spécifique dédiée aux personnes à mobilité réduite*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Porte d'entrée - Propriété `entree_porte_presence`

> *Description : Présence d'une porte à l'entrée de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Manoeuvre de la porte - Propriété `entree_porte_manoeuvre`

> *Description : Mode d'ouverture de la porte. Valeurs possibles: battante -> Porte battante, coulissante -> Porte coulissante, tourniquet -> Tourniquet, tambour -> Porte tambour*<br/>*Exemple : ["battante", "coulissante", "tourniquet", "tambour"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `battante`
    - `coulissante`
    - `tourniquet`
    - `tambour`

#### Type de porte - Propriété `entree_porte_type`

> *Description : Type de porte. Valeurs possibles: manuelle -> Manuelle, automatique -> Automatique*<br/>*Exemple : ["manuelle", "automatique"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `manuelle`
    - `automatique`

#### Visibilité de la zone d'accueil - Propriété `accueil_visibilite`

> *Description : La zone d'accueil (guichet d'accueil, caisse, secrétariat, etc) est visible depuis l'entrée du bâtiment*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Présence d’équipements d’aide à l’audition et à la compréhension - Propriété `accueil_equipements_malentendants_presence`

> *Description : Présence de produits ou prestations dédiés aux personnes sourdes ou malentendantes*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Liste des équipements d'aide à l'audition et à la communication - Propriété `accueil_equipements_malentendants`

> *Description : Équipements ou prestations disponibles. Valeurs possibles: bim -> boucle à induction magnétique fixe, bmp -> boucle à induction magnétique portative, lsf -> langue des signes française (LSF), lpc -> langue française parlée complétée (LFPC), sts -> sous-titrage ou transcription simultanée, autres -> autres*<br/>*Exemple : ["bim", "bmp", "lsf", "lpc", "sts", "autres"]*
- Valeur optionnelle
- Type : liste

#### Chemin entre l'entrée principale du bâtiment et l'accueil de l'établissement - Propriété `accueil_cheminement_plain_pied`

> *Description : L'accès à cet espace se fait de plain-pied, c'est à dire sans rupture brutale de niveau*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Ascenseur/élévateur - Propriété `accueil_cheminement_ascenseur`

> *Description : Présence d'un ascenseur ou un élévateur*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Accessibilité de l’ascenseur - Propriété `accueil_cheminement_ascenseur_pmr`

> *Description : Présence d’un ascenseur PMR*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Nombre de marches - Propriété `accueil_cheminement_nombre_marches`

> *Description : Nombre de marches de l'escalier*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Repérage des marches ou de l'escalier - Propriété `accueil_cheminement_reperage_marches`

> *Description : Nez de marche contrastés, bande d'éveil à la vigilance en haut de l'escalier et/ou première et dernière contremarches contrastées*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Main courante - Propriété `accueil_cheminement_main_courante`

> *Description : L'escalier est équipé d'une ou plusieurs main-courantes*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Rampe - Propriété `accueil_cheminement_rampe`

> *Description : Présence d'une rampe fixe ou amovible. Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*<br/>*Exemple : ["aucune", "fixe", "amovible"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucune`
    - `fixe`
    - `amovible`

#### Sens de circulation de l'escalier - Propriété `accueil_cheminement_sens_marches`

> *Description : Sens de circulation des marches ou de l'escalier. Valeurs possibles: montant -> Monter, descendant -> Descendre*<br/>*Exemple : ["montant", "descendant"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `montant`
    - `descendant`

#### Rétrécissement du chemin - Propriété `accueil_retrecissement`

> *Description : Présence d'un ou plusieurs rétrécissements inférieurs à 90 centimètres du chemin pour atteindre la zone d'accueil*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Signalétique intérieure - Propriété `accueil_signaletique_interieure`

> *Description : Présence d’une signalétique, lisible et compréhensible par tous à l’intérieur de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Accueil physique - Propriété `accueil_physique`

> *Description : Présence de personnel pendant les heures d'ouverture. Valeurs possibles: inexistant -> Aucun personnel, non_forme -> Personnel non formé, sensibilise_ou_forme -> Personne sensibilisé ou formé*<br/>*Exemple : ["inexistant", "non_forme", "sensibilise_ou_forme"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `inexistant`
    - `non_forme`
    - `sensibilise_ou_forme`

#### Aire de jeux - Propriété `accueil_aire_de_jeux`

> *Description : L'aire de jeux est accessible à une personne en fauteuil*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Tribunes - Propriété `accueil_tribunes`

> *Description : Places spectateurs avec dossier*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Places accessibles en tribunes - Propriété `accueil_tribunes_places`

> *Description : Places accessibles pour les personnes en fauteuil roulant*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `accueil_tribunes_localisation_places`

> *Description : Localisation des places. Valeurs possibles: niveau_aire_de_jeux -> Places situées au niveau de l'aire de jeux, reparti_differents_niveaux -> Places répartis différents niveaux des tribunes*<br/>*Exemple : ["niveau_aire_de_jeux", "reparti_differents_niveaux"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `niveau_aire_de_jeux`
    - `reparti_differents_niveaux`

#### Propriété `accueil_tribunes_places_avec_accompagnants`

> *Description : Places accompagnant à côté des places pour les personnes en fauteuil roulant*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Vestiaires - Propriété `accueil_vestiaires`

> *Description : Vestiaires accessibles*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété `accueil_vestiaires_largeur_passage`

> *Description : Largeur du passage d'au moins 90 cm. Valeurs possibles: entre_90_et_110 -> Entre 90 et 110 cm, superieur_a_110 -> Supérieure à 110 cm*<br/>*Exemple : ["entre_90_et_110", "superieur_a_110"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `entre_90_et_110`
    - `superieur_a_110`

#### Douches collectives - Propriété `accueil_douches_collectives`

> *Description : Présence de cabines de douche collectives*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété `accueil_douches_collectives_adaptees`

> *Description : Présence de cabines de douche collectives accessibles*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Douches individuelles - Propriété `accueil_douches_individuelles`

> *Description : Présence de cabines de douche individuelles*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété `accueil_douches_individuelles_adaptees`

> *Description : Présence de cabines de douche individuelles accessibles*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Casiers - Propriété `accueil_casiers`

> *Description : Casiers à disposition du public*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété `accueil_casiers_adaptes`

> *Description : Le contraste et le relief des casiers permettent une bonne lisibilité.*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété `accueil_casiers_fermeture`

> *Description : Système de fermeture présent. Valeurs possibles: serrure_avec_cle -> Serrure avec clé, serrure_electronique_a_code -> Serrure électronique à code, serrure_mecanique_a_code -> Serrure mécanique à code, verrou_cadenas -> Verrou pour cadenas personnel, autre -> Autre*<br/>*Exemple : ["serrure_avec_cle", "serrure_electronique_a_code", "serrure_mecanique_a_code", "verrou_cadenas", "autre"]*
- Valeur optionnelle
- Type : liste

#### Prestations complémentaires - Propriété `accueil_prestations_complementaires`

> *Description : Prestations complémentaires disponibles. Valeurs possibles: sonorisation_arbitrage -> Sonorisation de l'arbitrage possible, score_visible -> Score visible depuis les places assises, reservation_place_facile_d_acces -> Réservation possible de places facile d'accès*<br/>*Exemple : ["sonorisation_arbitrage", "score_visible", "reservation_place_facile_d_acces"]*
- Valeur optionnelle
- Type : liste

#### Présence d'espaces spécifiques - Propriété `accueil_presence_espaces_specifiques`

> *Description : Présence d'espaces spécifiques. Valeurs possibles: presence_espace_depose_equipements -> Espace de dépose d'équipements (fauteuils, déambulateurs...), presence_espace_repos_sensoriel -> Espace de repos sensoriel (hyposensoriel, d'apaisement...), presence_espace_chiens_guides -> Espace destiné aux chiens guides et d'assistance, presence_espace_salle_de_change -> Salle de change destinée aux personnes ayant des handicaps multiples ou complexes*<br/>*Exemple : ["presence_espace_depose_equipements", "presence_espace_repos_sensoriel", "presence_espace_chiens_guides", "presence_espace_salle_de_change"]*
- Valeur optionnelle
- Type : liste

#### Toilettes - Propriété `sanitaires_presence`

> *Description : Des sanitaires sont mis à disposition dans l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Toilettes adaptées - Propriété `sanitaires_adaptes`

> *Description : Des sanitaires adaptés sont mis à disposition dans l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété `sanitaires_largeur_porte`

> *Description : Toilettes adaptées avec une largeur de passage entre. Valeurs possibles: entre_80_et_90 -> Entre 80 et 90 cm, entre_90_et_110 -> Entre 90 et 110 cm*<br/>*Exemple : ["entre_80_et_90", "entre_90_et_110"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `entre_80_et_90`
    - `entre_90_et_110`

#### Propriété `sanitaires_sens_transfert`

> *Description : Sens du transfert. Valeurs possibles: gauche -> Gauche, droite -> Droite, gauche_et_droite -> Gauche et droite*<br/>*Exemple : ["gauche", "droite", "gauche_et_droite"]*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `gauche`
    - `droite`
    - `gauche_et_droite`

#### Propriété `sanitaires_urinoirs`

> *Description : Urinoirs à différentes hauteurs*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Registre - Propriété `registre_url`

> *Description : Adresse internet à laquelle le registre est consultable*<br/>*Exemple : https://www.ecologie.gouv.fr/politiques-publiques/laccessibilite-etablissements-recevant-du-public-erp#le-registre-public-daccessibilite-6*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Conformité - Propriété `conformite`

> *Description : L'établissement a été déclaré conforme à la réglementation*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen
