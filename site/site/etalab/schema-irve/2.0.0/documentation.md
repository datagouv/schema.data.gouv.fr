<MenuSchema />

## irve

Infrastructures de recharge pour véhicules électriques

Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques

- Schéma créé le : 29.06.2018
- Site web : https://github.com/etalab/schema-irve
- Version : 2.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [nom_amenageur](#propriete-nom-amenageur) | chaîne de caractères  | Non |
| [siren_amenageur](#propriete-siren-amenageur) | chaîne de caractères  | Oui |
| [contact_amenageur](#propriete-contact-amenageur) | chaîne de caractères (format `email`) | Oui |
| [nom_operateur](#propriete-nom-operateur) | chaîne de caractères  | Non |
| [contact_operateur](#propriete-contact-operateur) | chaîne de caractères (format `email`) | Oui |
| [telephone_operateur](#propriete-telephone-operateur) | chaîne de caractères  | Non |
| [nom_enseigne](#propriete-nom-enseigne) | chaîne de caractères  | Oui |
| [id_station_itinerance](#propriete-id-station-itinerance) | chaîne de caractères  | Oui |
| [id_station_local](#propriete-id-station-local) | chaîne de caractères  | Non |
| [nom_station](#propriete-nom-station) | chaîne de caractères  | Oui |
| [implantation_station](#propriete-implantation-station) | chaîne de caractères  | Oui |
| [adresse_station](#propriete-adresse-station) | chaîne de caractères  | Oui |
| [code_insee_commune](#propriete-code-insee-commune) | chaîne de caractères  | Oui |
| [coordonneesXY](#propriete-coordonneesxy) | point géographique (format `array`) | Oui |
| [nbre_pdc](#propriete-nbre-pdc) | nombre entier  | Oui |
| [id_pdc_itinerance](#propriete-id-pdc-itinerance) | chaîne de caractères  | Oui |
| [id_pdc_local](#propriete-id-pdc-local) | chaîne de caractères  | Non |
| [puissance_nominale](#propriete-puissance-nominale) | nombre réel  | Oui |
| [prise_type_ef](#propriete-prise-type-ef) | booléen  | Oui |
| [prise_type_2](#propriete-prise-type-2) | booléen  | Oui |
| [prise_type_combo_ccs](#propriete-prise-type-combo-ccs) | booléen  | Oui |
| [prise_type_chademo](#propriete-prise-type-chademo) | booléen  | Oui |
| [prise_type_autre](#propriete-prise-type-autre) | booléen  | Oui |
| [gratuit](#propriete-gratuit) | booléen  | Oui |
| [paiement_acte](#propriete-paiement-acte) | booléen  | Oui |
| [paiement_cb](#propriete-paiement-cb) | booléen  | Oui |
| [paiement_autre](#propriete-paiement-autre) | booléen  | Oui |
| [tarification](#propriete-tarification) | chaîne de caractères  | Non |
| [condition_acces](#propriete-condition-acces) | chaîne de caractères  | Oui |
| [reservation](#propriete-reservation) | booléen  | Oui |
| [horaires](#propriete-horaires) | chaîne de caractères  | Oui |
| [accessibilite_pmr](#propriete-accessibilite-pmr) | chaîne de caractères  | Oui |
| [restriction_gabarit](#propriete-restriction-gabarit) | chaîne de caractères  | Oui |
| [station_deux_roues](#propriete-station-deux-roues) | booléen  | Oui |
| [raccordement](#propriete-raccordement) | chaîne de caractères  | Oui |
| [num_pdl](#propriete-num-pdl) | chaîne de caractères  | Oui |
| [date_mise_en_service](#propriete-date-mise-en-service) | date (format `%Y-%m-%d`) | Oui |
| [observations](#propriete-observations) | chaîne de caractères  | Non |
| [date_maj](#propriete-date-maj) | date (format `%Y-%m-%d`) | Oui |

#### Propriété `nom_amenageur`

> *Description : La dénomination sociale du nom de l'aménageur, c'est à dire de l'entité publique ou privée propriétaire des infrastructures. Vous pouvez accéder à cette dénomination exacte sur le site annuaire-entreprises.data.gouv.fr. Ce champs n'est pas obligatoire car il sera automatiquement renseigné lors de la constitution du fichier global de consolidation des IRVE.<br/>Ex : Société X, Entité Y*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `siren_amenageur`

> *Description : Le numero SIREN de l'aménageur issue de la base SIRENE des entreprises. Vous pouvez récupérer cet identifiant sur le site annuaire-entreprises.data.gouv.fr.<br/>Ex : 130025265*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `contact_amenageur`

> *Description : Adresse courriel de l'aménageur. Favoriser les adresses génériques de contact. Cette adresse sera utilisée par les services de l'Etat en cas d'anomalie ou de besoin de mise à jour des données.<br/>Ex : contact@societe-amenageur.com*
- Valeur obligatoire
- Type : chaîne de caractères (format `email`)

#### Propriété `nom_operateur`

> *Description : La dénomination sociale de l'opérateur. L'opérateur est la personne qui exploite l'infrastructure de recharger pour le compte d'un aménageur dans le cadre d'un contrat ou pour son propre compte s'il est l'aménageur. Vous pouvez accéder à cette dénomination exacte sur le site annuaire-entreprises.data.gouv.fr.<br/>Ex : Société X, Entité Y*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `contact_operateur`

> *Description : Adresse courriel de l'opérateur. Favoriser les adresses génériques de contact.<br/>Ex : contact@societe-operateur.com*
- Valeur obligatoire
- Type : chaîne de caractères (format `email`)

#### Propriété `telephone_operateur`

> *Description : Numéro de téléphone permettant de contacter l'opérateur.<br/>Ex : 0111111111*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `nom_enseigne`

> *Description : Le nom commercial du réseau.<br/>Ex : Réseau de recharge ABC*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `id_station_itinerance`

> *Description : L'identifiant de la station délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017. Ne pas ajouter les séparateurs *. Si la station n'est pas en itinérance, merci d'indiquer "Non concerné".<br/>Ex : FRA68P68021001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(^FR[A-Z0-9]{4,33}$|Non concerné))+$`

#### Propriété `id_station_local`

> *Description : Identifiant de la station utilisé localement. Si vous n'avez pas d'identifiant unique et que vous souhaitez en récupérer un, vous pouvez vous rendre sur https://heidi.app.etalab.studio. En cas de station qui n'est pas ouverte à l'itinérance, cet identifiant est indispensable.<br/>Ex : 01F2KMMRZVQ5FQY882PCJQAPQ0*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `nom_station`

> *Description : Le nom de la station.<br/>Ex : Picpus, Belleville, Villiers*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `implantation_station`

> *Description : Le type d'implantation de la station. 
Pour une station sur voirie, sélectionner "Voirie". 
Pour un parking public, (en ouvrage, en enclos, etc.), sélectionner "Parking public". Ces parkings sont généralement en gestion directe ou déléguée de la collectivité territoriale. 
Pour un parking privé à usage public / parking ouvert (ex: zone commerciale), sélectionner "Parking privé à usage public". 
Pour un parking réservé à la clientèle, aux usagers, sélectionnez "Parking privé réservé à la clientèle" (il s'agit d'un choix de l'aménageur public ou privé sur l'utilisation de son parking. Ex: hôtel, commerce, éventuellement certains bâtiments publics). 
Pour une station dédiée à la recharge rapide dont la durée d'utilisation est généralement limitée à la recharge principalement rapide et dont la première fonction de la station est la recharge et non le stationnement, sélectionner "Station dédiée à la recharge rapide" (ex : aires de service sur axes routiers, stations services, etc.).<br/>Ex : Parking public*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Voirie
    - Parking public
    - Parking privé à usage public
    - Parking privé réservé à la clientèle
    - Station dédiée à la recharge rapide

#### Propriété `adresse_station`

> *Description : L'adresse complète de la station : [numéro] [rue] [code postal] [ville].<br/>Ex : 1 avenue de la Paix 75001 Paris*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `code_insee_commune`

> *Description : Le code INSEE de la commune d'implantation.<br/>Ex : 06088, 2B002 (pour une commune corse)*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `coordonneesXY`

> *Description : La latitude et la longitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée dans le système de coordonnées WGS84 au format [lat,lon].<br/>Ex : [48.345345,7.48710500]*
- Valeur obligatoire
- Type : point géographique (format `array`)

#### Propriété `nbre_pdc`

> *Description : Le nombre de points de recharge sur la station.<br/>Ex : 1, 10*
- Valeur obligatoire
- Type : nombre entier
- Valeur supérieur à 0

#### Propriété `id_pdc_itinerance`

> *Description : L'identifiant du point de recharge délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017. Ne pas mettre de séparateur * ou -. Si le point de recharge n'est pas en itinérance, merci d'indiquer "Non concerné".<br/>Ex : FRA68P680210015*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(^FR[A-Z0-9]{4,33}$|Non concerné))+$`

#### Propriété `id_pdc_local`

> *Description : Identifiant du point de recharge utilisé localement. Si vous n'avez pas d'identifiant unique et que vous souhaitez en récupérer un, vous pouvez vous rendre sur https://heidi.app.etalab.studio. En cas de point de recharge qui n'est pas ouvert à l'itinérance, cet identifiant est indispensable.<br/>Ex : 01F2KNFARDSJG7KEH1YHG4033M*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `puissance_nominale`

> *Description : Puissance maximale en kW que peut recevoir un véhicule connecté au point de recharge, déterminée en prenant en compte les capacités techniques propres du point, la puissance souscrite au réseau de distribution et les caractéristiques de l'installation comme le câblage par exemple, mais sans prendre en compte ni les limitations du connecteur ni celles du véhicule.<br/>Ex : 22.00*
- Valeur obligatoire
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `prise_type_ef`

> *Description : Disponibilité d'une prise de type E/F sur le point de recharge. Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `prise_type_2`

> *Description : Disponibilité d'une prise de type 2 sur le point de recharge. Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `prise_type_combo_ccs`

> *Description : Disponibilité d'une prise de type Combo / CCS sur le point de recharge. Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `prise_type_chademo`

> *Description : Disponibilité d'une prise de type Chademo sur le point de recharge. Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `prise_type_autre`

> *Description : Disponibilité d'une prise d'un autre type sur le point de recharge. Indiquer "true" si vrai, "false" si faux. Le ou les types de prises sont à préciser dans le champs "observations".<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `gratuit`

> *Description : Gratuité de la recharge. Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `paiement_acte`

> *Description : Possibilité de paiement à l'acte (sans identification ni abonnement). Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `paiement_cb`

> *Description : Possibilité de paiement par carte bancaire (présence d'un terminal de paiement avec une CB). Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `paiement_autre`

> *Description : Possibilité de paiement par un autre moyen (qui peut être préciser dans le champs "observation". Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `tarification`

> *Description : Toutes informations pouvant être apportées concernant les tarification(s) pratiquée(s).<br/>Ex : 0,40€ / kwh pour les non abonnés.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `condition_acces`

> *Description : Eventuelles conditions d’accès à la station, hors gabarit. Dans le cas d'un accès libre sans contrainte matérielle physique (ex : absence de barrière), indiquer "Accès libre". 
Dans le cas d'un accès limité / réservé qui nécessite une identification ou passage d'une barrière, indiquer "Accès réservé" (ce type d'accès inclut les IRVE sur le réseau autoroutier payant - passage péage).<br/>Ex : Accès libre*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Accès libre
    - Accès réservé

#### Propriété `reservation`

> *Description : Possibilité de réservation à l'avance d'un point de recharge. Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `horaires`

> *Description : Amplitude d’ouverture de la station. Si ouverte sans interruption indiquer « 24/7» sinon indiquer les horaires sous cette forme : Mo-Fr 08:00-12:00,Mo-Fr 14:00-18:00,Th 08:00-18:00.<br/>Ex : Mo-Fr 08:00-12:00,Mo-Fr 14:00-18:00,Th 08:00-18:00*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(.*?)((\d{1,2}:\d{2})-(\d{1,2}:\d{2})|24/7)`

#### Propriété `accessibilite_pmr`

> *Description : Accessibilité du point de recharge aux personnes à mobilité réduite. Dans le cas d'un point de recharge signalisé et réservé PMR, indiquer "Réservé PMR". 
Dans le cas d'une point de recharge non réservé PMR mais accessible PMR, indiquer "Accessible mais non réservé PMR". 
Dans le cas d'un point de recharge non accessible PMR, indiquer "Non accessible"<br/>Ex : False*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Réservé PMR
    - Accessible mais non réservé PMR
    - Non accessible
    - Accessibilité inconnue

#### Propriété `restriction_gabarit`

> *Description : Toutes informations relatives aux restrictions d’accès liées au gabarit des véhicules.<br/>Ex : Hauteur maximale 2m*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `station_deux_roues`

> *Description : La station est-elle réservée aux véhicules à deux roues ? Indiquer "true" si vrai, "false" si faux.<br/>Ex : False*
- Valeur obligatoire
- Type : booléen

#### Propriété `raccordement`

> *Description : Type de raccordement de la station au réseau de distribution d'électricité : direct (point de livraison exclusivement dédié à la station) ou indirect.<br/>Ex : Direct*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Direct
    - Indirect

#### Propriété `num_pdl`

> *Description : Numéro du point de livraison d'électricité, y compris en cas de raccordement indirect. Dans le cas d'un territoire desservi par ENEDIS, ce numéro doit compoter 14 chiffres.<br/>Ex : 12345678912345*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_mise_en_service`

> *Description : Date de mise en service de la station<br/>Ex : 2018-08-08, 2015-12-30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)

#### Propriété `observations`

> *Description : Champ destiné à préciser les modalités d'accès à la recharge, l'accessibilité, le tarif, les horaires d'ouverture, ...<br/>Ex : Recharge uniquement disponible pendant les horaires d'ouverture du Centre Commercial XY*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `date_maj`

> *Description : Date de mise à jour des données<br/>Ex : 2018/08/08, 2015/12/30*
- Valeur obligatoire
- Type : date (format `%Y-%m-%d`)