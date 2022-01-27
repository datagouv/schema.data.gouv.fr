<MenuSchema />

## Lieux de stationnement

Spécification des lieux permettant le stationnement en parc

- Auteur : transport.data.gouv.fr
- Schéma créé le : 13.12.2019
- Site web : https://github.com/etalab/schema-stationnement
- Version : 0.1.0
- Clé primaire : `id`

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#propriete-id) | chaîne de caractères  | Oui |
| [nom](#propriete-nom) | chaîne de caractères  | Oui |
| [insee](#propriete-insee) | chaîne de caractères  | Oui |
| [adresse](#propriete-adresse) | chaîne de caractères  | Non |
| [url](#propriete-url) | chaîne de caractères  | Non |
| [type_usagers](#propriete-type-usagers) | chaîne de caractères  | Oui |
| [gratuit](#propriete-gratuit) | booléen  | Oui |
| [nb_places](#propriete-nb-places) | nombre entier  | Oui |
| [nb_pr](#propriete-nb-pr) | nombre entier  | Non |
| [nb_pmr](#propriete-nb-pmr) | nombre entier  | Non |
| [nb_voitures_electriques](#propriete-nb-voitures-electriques) | nombre entier  | Non |
| [nb_velo](#propriete-nb-velo) | nombre entier  | Non |
| [nb_2r_el](#propriete-nb-2r-el) | nombre entier  | Non |
| [nb_autopartage](#propriete-nb-autopartage) | nombre entier  | Non |
| [nb_2_rm](#propriete-nb-2-rm) | nombre entier  | Non |
| [nb_covoit](#propriete-nb-covoit) | nombre entier  | Non |
| [hauteur_max](#propriete-hauteur-max) | nombre entier  | Oui |
| [num_siret](#propriete-num-siret) | chaîne de caractères  | Oui |
| [Xlong](#propriete-xlong) | nombre réel  | Oui |
| [Ylat](#propriete-ylat) | nombre réel  | Oui |
| [tarif_pmr](#propriete-tarif-pmr) | chaîne de caractères  | Non |
| [tarif_1h](#propriete-tarif-1h) | nombre réel  | Non |
| [tarif_2h](#propriete-tarif-2h) | nombre réel  | Non |
| [tarif_3h](#propriete-tarif-3h) | nombre réel  | Non |
| [tarif_4h](#propriete-tarif-4h) | nombre réel  | Non |
| [tarif_24h](#propriete-tarif-24h) | nombre réel  | Non |
| [abo_resident](#propriete-abo-resident) | nombre réel  | Non |
| [abo_non_resident](#propriete-abo-non-resident) | nombre réel  | Non |
| [type_ouvrage](#propriete-type-ouvrage) | chaîne de caractères  | Non |
| [info](#propriete-info) | chaîne de caractères  | Non |

#### Propriété `id`

> *Description : L'identifiant unique du parking, délivré par le Point d’accès national. `INSEE-P-xxx` où `INSEE` est le code INSEE de la commune et `xxx` est le numéro d’ordre sur 3 chiffres.<br/>Ex : 75114-P-001*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}-P-\d{3}$`

#### Propriété `nom`

> *Description : Nom du parking, ou nom donné dans son utilisation quotidienne en majuscules et sans accents. Recommandation : inutile de répéter le mot parking et ne pas dépasser les 64 caractères.<br/>Ex : REPUBLIQUE*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `insee`

> *Description : Le code INSEE de la commune où le parking est localisé.<br/>Ex : 75114*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Propriété `adresse`

> *Description : L'adresse de l’entrée principale du parking, suivi du code postal et du nom de la Commune (séparé par des virgules). Nomenclature pour les lieux proches des sorties d'autoroute ou de nationale : A11 Sortie 7 Le Mans Nord. Nomenclature pour les zones rurales sans adresse : "Croisement de route_1 - route_2" ou "Le long de route_X après le passage à niveau".<br/>Ex : 3 rue de la Gare, 92300, Levallois-Peret*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `url`

> *Description : Une adresse URL (Uniform Resource Locator) pointant vers une ressource disponible sur Internet où l'on peut obtenir d'autres informations pertinente relatives aux horaires d’ouverture et fermeture du parc, tarifs appliquées dans le parc, ressource disponible sur Internet où l'on peut réserver en ligne la place de parking.<br/>Ex : https://www.exemple.fr/stationnementrepublique/*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `type_usagers`

> *Description : Type d'usagers autorisés à entrer dans le parc.<br/>Ex : tous*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - tous
    - abonnés

#### Propriété `gratuit`

> *Description : Indiquer si la gratuité est applicable à tous les usagers (hors abonnés, résidents, PMR). Il est possible d'indiquer dans le champ `info` toute information supplémentaire relative aux particularités et exceptions (par exemple : "Gratuité le samedi matin de 9h à 13h").<br/>Ex : true*
- Valeur obligatoire
- Type : booléen

#### Propriété `nb_places`

> *Description : Nombre total de places pour les voitures tout statut (PMR, covoiturage, autopartage, voitures électriques).<br/>Ex : 325*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `nb_pr`

> *Description : Nombre de places avec le tarif P+R.<br/>Ex : 250*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_pmr`

> *Description : Nombre total de places réservées aux personnes à mobilité réduite.<br/>Ex : 250*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_voitures_electriques`

> *Description : Nombre total de places réservées aux voitures électriques, disposant d’une infrastructure de recharge opérationnelle.<br/>Ex : 10*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_velo`

> *Description : Le nombre de vélos maximum pouvant y être rangés. Pour les appuis-vélos qui permettent d’attacher deux vélos (e.g arceau) : multiplier le nombre d’appuis par 2 (e.g. pour 5 arceaux = une capacité de 10 places). Les rateliers permettent d'attacher 1 vélo.<br/>Ex : 25*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_2r_el`

> *Description : Nombre d’emplacements vélos ou deux roues motorisés disposant d’une prise dédiée.<br/>Ex : 5*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_autopartage`

> *Description : Nombre total de places réservées aux voitures en autopartage.<br/>Ex : 5*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_2_rm`

> *Description : Nombre total de places réservées aux motos et scooters.<br/>Ex : 5*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `nb_covoit`

> *Description : Nombre total de places réservées au covoiturage.<br/>Ex : 5*
- Valeur optionnelle
- Type : nombre entier

#### Propriété `hauteur_max`

> *Description : Hauteur maximale autorisée à la fois pour l'accès au parking et pour le stationnement du véhicule, en centimètres.<br/>Ex : 5*
- Valeur obligatoire
- Type : nombre entier

#### Propriété `num_siret`

> *Description : Numéro SIRET de la société ou de la collectivité chargée de la gestion de l’ouvrage (14 chiffres).<br/>Ex : 80295478500028*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Propriété `Xlong`

> *Description : La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84.<br/>Ex : 1.452323*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -180 et 180

#### Propriété `Ylat`

> *Description : La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84.<br/>Ex : 46.59698*
- Valeur obligatoire
- Type : nombre réel
- Valeur entre -90 et 90

#### Propriété `tarif_pmr`

> *Description : Type de tarif horaire pour les PMR.<br/>Ex : 42*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - gratuit
    - normal_payant
    - tarif_special

#### Propriété `tarif_1h`

> *Description : Tarif à payer pour 1h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).<br/>Ex : 5.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `tarif_2h`

> *Description : Tarif à payer pour 2h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).<br/>Ex : 7.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `tarif_3h`

> *Description : Tarif à payer pour 3h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).<br/>Ex : 10.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `tarif_4h`

> *Description : Tarif à payer pour 4h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).<br/>Ex : 13.5*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `tarif_24h`

> *Description : Tarif à payer pour 24h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).<br/>Ex : 40*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `abo_resident`

> *Description : Abonnement mensuel-type pour un résident de la zone, en euros TTC. En cas de changement de tarif, préciser le tarif moyen sur l'année (prorata temporis).<br/>Ex : 60.99*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `abo_non_resident`

> *Description : Abonnement mensuel-type pour un non-résident de la zone, en euros TTC. En cas de changement de tarif, préciser le tarif moyen sur l'année (prorata temporis).<br/>Ex : 79.99*
- Valeur optionnelle
- Type : nombre réel
- Valeur supérieur à 0

#### Propriété `type_ouvrage`

> *Description : Précision sur le type de construction de l'équipement.<br/>Ex : ouvrage*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées : 
    - enclos_en_surface
    - ouvrage

#### Propriété `info`

> *Description : Faire remonter des informations ou commentaires, utiles pour un usager du parking, si les champs précédents ne correspondent pas. Si plusieurs informations sont renseignées, le séparateur est le point-virgule. Par exemple : gratuité le samedi matin de 9h à 12h, informations relatives aux services mis à disposition des usagers (présence d’agents de sécurité 24h…).<br/>Ex : Gratuité pour le marché le samedi matin*
- Valeur optionnelle
- Type : chaîne de caractères