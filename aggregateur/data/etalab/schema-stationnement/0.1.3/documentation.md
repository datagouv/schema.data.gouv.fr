---
permalink: /etalab/schema-stationnement/latest/documentation.html
redirect_from: /etalab/schema-stationnement/0.1.3/documentation.html
title: Documentation de Lieux de stationnement
version: 0.1.3
---

## Lieux de stationnement

Spécification des lieux permettant le stationnement en parc

- Auteur : transport.data.gouv.fr
- Schéma créé le : 13/12/2019
- Site web : https://github.com/etalab/schema-stationnement
- Version : 0.1.3
- Clé primaire : `id`

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|id|chaîne de caractères|L'identifiant unique du parking, délivré par le Point d’accès national. `INSEE-P-xxx` où `INSEE` est le code INSEE de la commune et `xxx` est le numéro d’ordre sur 3 chiffres.|75114-P-001|Valeur obligatoire, Motif : `^([013-9]\d|2[AB1-9])\d{3}-P-\d{3}$`|
|nom|chaîne de caractères|Nom du parking, ou nom donné dans son utilisation quotidienne en majuscules et sans accents. Recommandation : inutile de répéter le mot parking et ne pas dépasser les 64 caractères.|REPUBLIQUE|Valeur obligatoire|
|insee|chaîne de caractères|Le code INSEE de la commune où le parking est localisé.|75114|Valeur obligatoire, Motif : `^([013-9]\d|2[AB1-9])\d{3}$`|
|adresse|chaîne de caractères|L'adresse de l’entrée principale du parking, suivi du code postal et du nom de la Commune (séparé par des virgules). Nomenclature pour les lieux proches des sorties d'autoroute ou de nationale : A11 Sortie 7 Le Mans Nord. Nomenclature pour les zones rurales sans adresse : "Croisement de route_1 - route_2" ou "Le long de route_X après le passage à niveau".|3 rue de la Gare, 92300, Levallois-Peret|Valeur optionnelle|
|url|chaîne de caractères|Une adresse URL (Uniform Resource Locator) pointant vers une ressource disponible sur Internet où l'on peut obtenir d'autres informations pertinente relatives aux horaires d’ouverture et fermeture du parc, tarifs appliquées dans le parc, ressource disponible sur Internet où l'on peut réserver en ligne la place de parking.|https://www.exemple.fr/stationnementrepublique/|Valeur optionnelle|
|type_usagers|chaîne de caractères|Type d'usagers autorisés à entrer dans le parc.|tous|Valeur obligatoire, Valeurs autorisées : tous, abonnés|
|gratuit|booléen|Valeurs considérées comme vraies : ['true', 'True', 'TRUE', '1', 'vrai', 'Vrai', 'VRAI']Valeurs considérées comme fausses : ['false', 'False', 'FALSE', '0', 'faux', 'Faux', 'FAUX']Indiquer si la gratuité est applicable à tous les usagers (hors abonnés, résidents, PMR). Il est possible d'indiquer dans le champ `info` toute information supplémentaire relative aux particularités et exceptions (par exemple : "Gratuité le samedi matin de 9h à 13h").|true|Valeur obligatoire|
|nb_places|nombre entier|Nombre total de places pour les voitures tout statut (PMR, covoiturage, autopartage, voitures électriques).|325|Valeur obligatoire|
|nb_pr|nombre entier|Nombre de places avec le tarif P+R.|250|Valeur optionnelle|
|nb_pmr|nombre entier|Nombre total de places réservées aux personnes à mobilité réduite.|250|Valeur optionnelle|
|nb_voitures_electriques|nombre entier|Nombre total de places réservées aux voitures électriques, disposant d’une infrastructure de recharge opérationnelle.|10|Valeur optionnelle|
|nb_velo|nombre entier|Le nombre de vélos maximum pouvant y être rangés. Pour les appuis-vélos qui permettent d’attacher deux vélos (e.g arceau) : multiplier le nombre d’appuis par 2 (e.g. pour 5 arceaux = une capacité de 10 places). Les rateliers permettent d'attacher 1 vélo.|25|Valeur optionnelle|
|nb_2r_el|nombre entier|Nombre d’emplacements vélos ou deux roues motorisés disposant d’une prise dédiée.|5|Valeur optionnelle|
|nb_autopartage|nombre entier|Nombre total de places réservées aux voitures en autopartage.|5|Valeur optionnelle|
|nb_2_rm|nombre entier|Nombre total de places réservées aux motos et scooters.|5|Valeur optionnelle|
|nb_covoit|nombre entier|Nombre total de places réservées au covoiturage.|5|Valeur optionnelle|
|hauteur_max|chaîne de caractères|Hauteur maximale autorisée à la fois pour l'accès au parking et pour le stationnement du véhicule, en centimètres. S'il n'y a pas de hauteur maximale, il est possible de renseigner ce champs avec la valeur `N/A`.|290|Valeur obligatoire, Motif : `^(\d+|N/A)$`|
|num_siret|chaîne de caractères|Numéro SIRET de la société ou de la collectivité chargée de la gestion de l’ouvrage (14 chiffres).|80295478500028|Valeur obligatoire, Motif : `^\d{14}$`|
|Xlong|nombre réel|La longitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84.|1.452323|Valeur obligatoire, Valeur minimale : -180, Valeur maximale : 180|
|Ylat|nombre réel|La latitude en degrés décimaux (point comme séparateur décimal, avec au moins 4 chiffres après le point décimal) de la localisation de l'entrée du lieu exprimée dans le système de coordonnées WGS84.|46.59698|Valeur obligatoire, Valeur minimale : -90, Valeur maximale : 90|
|tarif_pmr|chaîne de caractères|Type de tarif horaire pour les PMR.|42|Valeur optionnelle, Valeurs autorisées : gratuit, normal_payant, tarif_special|
|tarif_1h|nombre réel|Tarif à payer pour 1h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).|5.5|Valeur optionnelle, Valeur minimale : 0|
|tarif_2h|nombre réel|Tarif à payer pour 2h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).|7.5|Valeur optionnelle, Valeur minimale : 0|
|tarif_3h|nombre réel|Tarif à payer pour 3h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).|10.5|Valeur optionnelle, Valeur minimale : 0|
|tarif_4h|nombre réel|Tarif à payer pour 4h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).|13.5|Valeur optionnelle, Valeur minimale : 0|
|tarif_24h|nombre réel|Tarif à payer pour 24h de stationnement, en euros TTC (durée gratuite comprise, le cas échéant).|40|Valeur optionnelle, Valeur minimale : 0|
|abo_resident|nombre réel|Abonnement mensuel-type pour un résident de la zone, en euros TTC. En cas de changement de tarif, préciser le tarif moyen sur l'année (prorata temporis).|60.99|Valeur optionnelle, Valeur minimale : 0|
|abo_non_resident|nombre réel|Abonnement mensuel-type pour un non-résident de la zone, en euros TTC. En cas de changement de tarif, préciser le tarif moyen sur l'année (prorata temporis).|79.99|Valeur optionnelle, Valeur minimale : 0|
|type_ouvrage|chaîne de caractères|Précision sur le type de construction de l'équipement.|ouvrage|Valeur optionnelle, Valeurs autorisées : enclos_en_surface, ouvrage|
|info|chaîne de caractères|Faire remonter des informations ou commentaires, utiles pour un usager du parking, si les champs précédents ne correspondent pas. Si plusieurs informations sont renseignées, le séparateur est le point-virgule. Par exemple : gratuité le samedi matin de 9h à 12h, informations relatives aux services mis à disposition des usagers (présence d’agents de sécurité 24h…).|Gratuité pour le marché le samedi matin|Valeur optionnelle|