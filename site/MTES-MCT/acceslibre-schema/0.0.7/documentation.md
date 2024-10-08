<MenuSchema />

## acceslibre

Schéma des données d'accessibilité des ERPs

Spécification du fichier d'échange relatif aux données d'accessibilité des Établissements Recevant du Public (ERP).

- Schéma créé le : 10/03/2021
- Site web : https://github.com/MTES-MCT/acceslibre-schema
- Version : 0.0.7
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
| [stationnement_presence](#stationnement-dans-l-etablissement-propriete-stationnement-presence) | booléen  | Non |
| [stationnement_pmr](#stationnements-adaptes-dans-l-etablissement-propriete-stationnement-pmr) | booléen  | Non |
| [stationnement_ext_presence](#stationnement-a-proximite-de-l-etablissement-propriete-stationnement-ext-presence) | booléen  | Non |
| [stationnement_ext_pmr](#stationnements-adaptes-a-proximite-de-l-etablissement-propriete-stationnement-ext-pmr) | booléen  | Non |
| [cheminement_ext_presence](#chemin-exterieur-propriete-cheminement-ext-presence) | booléen  | Non |
| [cheminement_ext_terrain_stable](#revetement-exterieur-propriete-cheminement-ext-terrain-stable) | booléen  | Non |
| [cheminement_ext_plain_pied](#chemin-exterieur-de-plain-pied-propriete-cheminement-ext-plain-pied) | booléen  | Non |
| [cheminement_ext_ascenseur](#ascenseur-elevateur-propriete-cheminement-ext-ascenseur) | booléen  | Non |
| [cheminement_ext_nombre_marches](#nombre-de-marches-propriete-cheminement-ext-nombre-marches) | nombre entier  | Non |
| [cheminement_ext_reperage_marches](#marches-ou-escalier-securise(es)-propriete-cheminement-ext-reperage-marches) | booléen  | Non |
| [cheminement_ext_sens_marches](#sens-de-circulation-de-l-escalier-propriete-cheminement-ext-sens-marches) | chaîne de caractères  | Non |
| [cheminement_ext_main_courante](#main-courante-propriete-cheminement-ext-main-courante) | booléen  | Non |
| [cheminement_ext_rampe](#rampe-propriete-cheminement-ext-rampe) | chaîne de caractères  | Non |
| [cheminement_ext_pente_presence](#pente-propriete-cheminement-ext-pente-presence) | booléen  | Non |
| [cheminement_ext_pente_degre_difficulte](#degre-de-difficulte-de-la-pente-propriete-cheminement-ext-pente-degre-difficulte) | chaîne de caractères  | Non |
| [cheminement_ext_pente_longueur](#longueur-de-la-pente-propriete-cheminement-ext-pente-longueur) | chaîne de caractères  | Non |
| [cheminement_ext_devers](#devers-propriete-cheminement-ext-devers) | chaîne de caractères  | Non |
| [cheminement_ext_bande_guidage](#bande-de-guidage-propriete-cheminement-ext-bande-guidage) | booléen  | Non |
| [cheminement_ext_retrecissement](#retrecissement-du-chemin-propriete-cheminement-ext-retrecissement) | booléen  | Non |
| [entree_reperage](#entree-facilement-reperable-propriete-entree-reperage) | booléen  | Non |
| [entree_vitree](#entree-vitree-propriete-entree-vitree) | booléen  | Non |
| [entree_vitree_vitrophanie](#reperage-de-la-vitre-propriete-entree-vitree-vitrophanie) | booléen  | Non |
| [entree_plain_pied](#entree-de-plain-pied-propriete-entree-plain-pied) | booléen  | Non |
| [entree_ascenseur](#ascenseur-elevateur-propriete-entree-ascenseur) | booléen  | Non |
| [entree_marches](#nombre-de-marches-propriete-entree-marches) | nombre entier  | Non |
| [entree_marches_reperage](#reperage-des-marches-propriete-entree-marches-reperage) | booléen  | Non |
| [entree_marches_main_courante](#main-courante-propriete-entree-marches-main-courante) | booléen  | Non |
| [entree_marches_rampe](#rampe-propriete-entree-marches-rampe) | chaîne de caractères  | Non |
| [entree_marches_sens](#sens-de-circulation-de-l-escalier-propriete-entree-marches-sens) | chaîne de caractères  | Non |
| [entree_dispositif_appel](#dispositif-d-appel-a-l-entree-propriete-entree-dispositif-appel) | booléen  | Non |
| [entree_dispositif_appel_type](#type-de-dispositif-d-appel-a-l-entree-propriete-entree-dispositif-appel-type) | liste  | Non |
| [entree_balise_sonore](#balise-sonore-a-l-entree-propriete-entree-balise-sonore) | booléen  | Non |
| [entree_aide_humaine](#aide-humaine-propriete-entree-aide-humaine) | booléen  | Non |
| [entree_largeur_mini](#largeur-de-la-porte-propriete-entree-largeur-mini) | nombre entier  | Non |
| [entree_pmr](#entree-specifique-pmr-propriete-entree-pmr) | booléen  | Non |
| [entree_porte_presence](#y-a-t-il-une-porte-propriete-entree-porte-presence) | booléen  | Non |
| [entree_porte_manoeuvre](#manoeuvre-de-la-porte-propriete-entree-porte-manoeuvre) | chaîne de caractères  | Non |
| [entree_porte_type](#type-de-porte-propriete-entree-porte-type) | chaîne de caractères  | Non |
| [accueil_visibilite](#visibilite-de-la-zone-d-accueil-propriete-accueil-visibilite) | booléen  | Non |
| [accueil_personnels](#personnel-d-accueil-propriete-accueil-personnels) | chaîne de caractères  | Non |
| [accueil_equipements_malentendants_presence](#presence-d-equipements-d-aide-a-l-audition-et-a-la-communication-propriete-accueil-equipements-malentendants-presence) | booléen  | Non |
| [accueil_equipements_malentendants](#liste-des-equipements-d-aide-a-l-audition-et-a-la-communication-propriete-accueil-equipements-malentendants) | liste  | Non |
| [accueil_cheminement_plain_pied](#chemin-entre-l-entree-principale-du-batiment-et-l-accueil-de-l-etablissement-propriete-accueil-cheminement-plain-pied) | booléen  | Non |
| [accueil_cheminement_ascenseur](#ascenseur-elevateur-propriete-accueil-cheminement-ascenseur) | booléen  | Non |
| [accueil_cheminement_nombre_marches](#nombre-de-marches-propriete-accueil-cheminement-nombre-marches) | nombre entier  | Non |
| [accueil_cheminement_reperage_marches](#reperage-des-marches-ou-de-l-escalier-propriete-accueil-cheminement-reperage-marches) | booléen  | Non |
| [accueil_cheminement_main_courante](#main-courante-propriete-accueil-cheminement-main-courante) | booléen  | Non |
| [accueil_cheminement_rampe](#rampe-propriete-accueil-cheminement-rampe) | chaîne de caractères  | Non |
| [accueil_cheminement_sens_marches](#sens-de-circulation-de-l-escalier-propriete-accueil-cheminement-sens-marches) | chaîne de caractères  | Non |
| [accueil_retrecissement](#retrecissement-du-chemin-propriete-accueil-retrecissement) | booléen  | Non |
| [sanitaires_presence](#sanitaires-propriete-sanitaires-presence) | booléen  | Non |
| [sanitaires_adaptes](#sanitaires-adaptes-propriete-sanitaires-adaptes) | booléen  | Non |
| [labels](#marques-ou-labels-propriete-labels) | liste  | Non |
| [labels_familles_handicap](#famille(s)-de-handicap-concernees(s)-propriete-labels-familles-handicap) | liste  | Non |
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

#### Stationnement dans l'établissement - Propriété `stationnement_presence`

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

#### Chemin extérieur - Propriété `cheminement_ext_presence`

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

#### Nombre de marches - Propriété `cheminement_ext_nombre_marches`

> *Description : Combien y'a t'il de marches&nbsp;?*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Marches ou escalier sécurisé(es) - Propriété `cheminement_ext_reperage_marches`

> *Description : Présence de nez de marche contrastés, d'une bande d'éveil à la vigilance en haut de l'escalier et/ou de première et dernière contremarches contrastées*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Sens de circulation de l'escalier - Propriété `cheminement_ext_sens_marches`

> *Description : Sens de circulation des marches ou de l'escalier*<br/>*Exemple : Valeurs possibles: montant -> Montant, descendant -> Descendant*
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

> *Description : Présence d'une rampe fixe ou amovible*<br/>*Exemple : Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*
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

> *Description : Difficulté de la pente*<br/>*Exemple : Valeurs possibles: légère -> Légère, importante -> Importante*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `légère`
    - `importante`

#### Longueur de la pente - Propriété `cheminement_ext_pente_longueur`

> *Description : Longueur de la pente*<br/>*Exemple : Valeurs possibles: courte -> < 0,5 mètres, moyenne -> entre 0,5 et 2 mètres, longue -> > 2 mètres*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `courte`
    - `moyenne`
    - `longue`

#### Dévers - Propriété `cheminement_ext_devers`

> *Description : Dévers ou inclinaison transversale du chemin*<br/>*Exemple : Valeurs possibles: aucun -> Aucun, léger -> Léger, important -> Important*
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

> *Description : Un ou plusieurs rétrécissements inférieurs à 90 centimètres du chemin pour atteindre l'entrée*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Entrée facilement repérable - Propriété `entree_reperage`

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

> *Description : Présence d'une rampe fixe ou amovible*<br/>*Exemple : Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucune`
    - `fixe`
    - `amovible`

#### Sens de circulation de l'escalier - Propriété `entree_marches_sens`

> *Description : Sens de circulation des marches ou de l'escalier*<br/>*Exemple : Valeurs possibles: montant -> Montant, descendant -> Descendant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `montant`
    - `descendant`

#### Dispositif d'appel à l'entrée - Propriété `entree_dispositif_appel`

> *Description : Présence d'un dispositif comme une sonnette pour signaler sa présence*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Type de dispositif d'appel à l'entrée - Propriété `entree_dispositif_appel_type`

> *Description : Dispositifs d'appels présents*<br/>*Exemple : Valeurs possibles: bouton -> Bouton d'appel, interphone -> Interphone, visiophone -> Visiophone*
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

#### Largeur de la porte - Propriété `entree_largeur_mini`

> *Description : Largeur minimale de la porte d'entrée*<br/>*Exemple : 0*
- Valeur optionnelle
- Type : nombre entier

#### Entrée spécifique PMR - Propriété `entree_pmr`

> *Description : Présence d'une entrée secondaire spécifique dédiée aux personnes à mobilité réduite*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Y a-t-il une porte ? - Propriété `entree_porte_presence`

> *Description : Présence d'une porte à l'entrée de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Manoeuvre de la porte - Propriété `entree_porte_manoeuvre`

> *Description : Mode d'ouverture de la porte*<br/>*Exemple : Valeurs possibles: battante -> Porte battante, coulissante -> Porte coulissante, tourniquet -> Tourniquet, tambour -> Porte tambour*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `battante`
    - `coulissante`
    - `tourniquet`
    - `tambour`

#### Type de porte - Propriété `entree_porte_type`

> *Description : Type de porte*<br/>*Exemple : Valeurs possibles: manuelle -> Manuelle, automatique -> Automatique*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `manuelle`
    - `automatique`

#### Visibilité de la zone d'accueil - Propriété `accueil_visibilite`

> *Description : La zone d'accueil (guichet d'accueil, caisse, secrétariat, etc) est visible depuis l'entrée du bâtiment*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Personnel d'accueil - Propriété `accueil_personnels`

> *Description : Personnel à l'accueil des personnes handicapées*<br/>*Exemple : Valeurs possibles: aucun -> Aucun personnel, formés -> Personnels sensibilisés ou formés, non-formés -> Personnels non-formés*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucun`
    - `formés`
    - `non-formés`

#### Présence d'équipements d'aide à l'audition et à la communication - Propriété `accueil_equipements_malentendants_presence`

> *Description : Présence de produits ou prestations dédiés aux personnes sourdes ou malentendantes*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Liste des équipements d'aide à l'audition et à la communication - Propriété `accueil_equipements_malentendants`

> *Description : Équipements ou prestations disponibles*<br/>*Exemple : Valeurs possibles: bim -> Boucle à induction magnétique fixe, bmp -> Boucle à induction magnétique portative, lsf -> Langue des signes française, lpc -> Langue Française Parlée Complétée (LFPC), sts -> Sous-Titrage ou Transcription Simultanée, autres -> Autres*
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

> *Description : Présence d'une rampe fixe ou amovible*<br/>*Exemple : Valeurs possibles: aucune -> Aucune, fixe -> Fixe, amovible -> Amovible*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `aucune`
    - `fixe`
    - `amovible`

#### Sens de circulation de l'escalier - Propriété `accueil_cheminement_sens_marches`

> *Description : Sens de circulation des marches ou de l'escalier*<br/>*Exemple : Valeurs possibles: montant -> Montant, descendant -> Descendant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `montant`
    - `descendant`

#### Rétrécissement du chemin - Propriété `accueil_retrecissement`

> *Description : Présence d'un ou plusieurs rétrécissements inférieurs à 90 centimètres du chemin pour atteindre l'entrée*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Sanitaires - Propriété `sanitaires_presence`

> *Description : Des sanitaires sont mis à disposition dans l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Sanitaires adaptés - Propriété `sanitaires_adaptes`

> *Description : Des sanitaires adaptés sont mis à disposition dans l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Marques ou labels - Propriété `labels`

> *Description : Marque(s) ou label(s) obtenus par l'établissement*<br/>*Exemple : Valeurs possibles: autre -> Autre, dpt -> Destination pour Tous, mobalib -> Mobalib, th -> Tourisme & Handicap*
- Valeur optionnelle
- Type : liste

#### Famille(s) de handicap concernées(s) - Propriété `labels_familles_handicap`

> *Description : Famille(s) de handicap couverte(s) par ces marques ou labels*<br/>*Exemple : Valeurs possibles: auditif -> Handicap auditif, mental -> Handicap mental, moteur -> Handicap moteur, visuel -> Handicap visuel*
- Valeur optionnelle
- Type : liste

#### Registre - Propriété `registre_url`

> *Description : Adresse internet à laquelle le registre est consultable*<br/>*Exemple : https://handicap.gouv.fr/actualites/article/registre-d-accessibilite-obligatoire-un-guide-pour-les-erp*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Conformité - Propriété `conformite`

> *Description : Statut réglementaire de conformité de l'établissement*<br/>*Exemple : True*
- Valeur optionnelle
- Type : booléen
