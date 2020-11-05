---
permalink: /NaturalSolutions/schema-arbre/latest/documentation.html
redirect_from: /NaturalSolutions/schema-arbre/0.2.0/documentation.html
title: Documentation de Schéma des attributs des arbres urbains
version: 0.2.0
---

## Attributs des arbres urbains

Schéma des attributs des arbres urbains

Spécification des attributs liés aux arbres urbains dans le cadre d'un inventaire du patrimoine arboré par les collectivités.

- Schéma créé le : 16/10/2020
- Site web : https://github.com/NaturalSolutions/schema-arbre
- Version : 0.2.0
- Clé primaire : `id`

### Modèle de données

|Nom|Type|Description|Exemple|Propriétés|
|-|-|-|-|-|
|id|nombre entier|Un identifiant unique de l'objet arbre.|42|Valeur obligatoire, Valeur minimale : 1|
|longitude|nombre réel|La longitude en degrés décimaux (point comme séparateur décimal) de la localisation de l'arbre dans le système de coordonnées WGS84.|48.3610|Valeur obligatoire, Valeur minimale : -180, Valeur maximale : 180|
|latitude|nombre réel|La latitude en degrés décimaux (point comme séparateur décimal) de la localisation de l'arbre dans le système de coordonnées WGS84.|32.2812|Valeur obligatoire, Valeur minimale : -180, Valeur maximale : 180|
|famille_arbre|chaîne de caractères|Le taxon auquel appartient l'arbre en latin (cinquième niveau de la classification classique).|Platanaceae|Valeur optionnelle|
|genre_arbre|chaîne de caractères|La subdivision de la famille auquel appartient l'arbre en latin (sixième niveau de la classification classique).|Platanus|Valeur optionnelle|
|espece_arbre|chaîne de caractères||Valeur optionnelle|
|cultivar_variete_arbre|chaîne de caractères|La subdivision de l'espèce auquel appartient l'arbre en latin.|Cripps Pink'|Valeur optionnelle|
|nom_vernaculaire|chaîne de caractères|Le nom commun français correspondant au nom scientifique ([genre][espèce][cultivar]).|Platane commun|Valeur optionnelle|
|code_insee|chaîne de caractères|Le code INSEE de la commune dans laquelle l'arbre se trouve.|59599|Valeur optionnelle, Motif : `^([013-9]\d|2[AB1-9])\d{3}$`|
|code_postal|chaîne de caractères|Le code postal de la commune dans laquelle l'arbre se trouve.|13010|Valeur optionnelle, Motif : `^([013-9]\d|2[AB1-9])\d{3}$`|
|adresse|chaîne de caractères|Le nom de la rue (avec ou sans numéro) dans laquelle l'arbre se trouve.|61 rue de la Poste|Valeur optionnelle|
|matricule_arbre|chaîne de caractères|L'identifiant unique de l'arbre au norme de la collectivité.|A20200525|Valeur optionnelle|
|date_plantation|date (format `%Y-%m-%d`)|La date de plantation de l'arbre, au format ISO 8601 AAAA-MM-DD.|1996-07-12|Valeur optionnelle|
|hauteur|nombre réel|La hauteur de l'arbre exprimée en cm|30|Valeur optionnelle, Valeur minimale : 0, Valeur maximale : 15000|
|diametre|nombre réel|Le diamètre de l'arbre mesurée à hauteur d'homme, c'est-à-dire 150 exprimé en cm|70|Valeur optionnelle, Valeur minimale : 0, Valeur maximale : 3000|
|type_sol|chaîne de caractères|La composition pédologique du sol où est planté l'arbre|Argileux|Valeur optionnelle|
|type_enracinement|chaîne de caractères|Le type d'enracinement de l'arbre|Pivotant|Valeur optionnelle|
|port_arbre|chaîne de caractères|La forme du houppier de l'arbre|Pyramide|Valeur optionnelle|
|arbre_remarquable|booléen|Valeurs considérées comme vraies : ['true', 'True', 'TRUE', '1', 'vrai', 'Vrai', 'VRAI', 'Oui', 'oui', 'OUI']Valeurs considérées comme fausses : ['false', 'False', 'FALSE', '0', 'faux', 'Faux', 'FAUX', 'Non', 'non', 'NON']Classification de l'arbre à remarquable selon son âge, sa circonférence et sa hauteur|Oui|Valeur optionnelle|
|arbre_protege|booléen|Valeurs considérées comme vraies : ['true', 'True', 'TRUE', '1', 'vrai', 'Vrai', 'VRAI', 'Oui', 'oui', 'OUI']Valeurs considérées comme fausses : ['false', 'False', 'FALSE', '0', 'faux', 'Faux', 'FAUX', 'Non', 'non', 'NON']Si l'arbre fait l'objet d'une classification et d'une protection|Non|Valeur optionnelle|
|contraintes_sol|chaîne de caractères|Indique la présence de contraintes physiques au niveau du sol |Sol perméabilisé|Valeur optionnelle|
|contrainte_aeriennes|chaîne de caractères|Indique la présence de contraintes physiques au-dessus du sol|Présence de cables|Valeur optionnelle|
|eclairage|booléen|Valeurs considérées comme vraies : ['true', 'True', 'TRUE', '1', 'vrai', 'Vrai', 'VRAI', 'Oui', 'oui', 'OUI']Valeurs considérées comme fausses : ['false', 'False', 'FALSE', '0', 'faux', 'Faux', 'FAUX', 'Non', 'non', 'NON']Indique la présence d'éclairage à proximité de l'arbre|Oui|Valeur optionnelle|
|arrosage|chaîne de caractères|Indique la présence ou non d'un arrosage et quel type d'arrosage |Goutte à goutte|Valeur optionnelle|
|allergie|nombre entier|Indique le potentiel allergisant de l'arbre (0 = nul --> 5 = très fort)|2|Valeur optionnelle|
|remarque|chaîne de caractères|Tout autre remarque nécessaire à la gestion de l'arbre|Ceci est un exemple de remarque|Valeur optionnelle|