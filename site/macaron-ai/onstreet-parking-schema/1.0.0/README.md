<MenuSchema />

<MenuSchema />

# Informations emprises stationnemment

Ce schéma s'applique aux projets de cartographie des emprises de stationnement.

Le schéma se base sur la norme [GeoJSON](https://geojson.org/) pour la représentation des formes géométrique.

- Contributeur(s) : Abdou Bouroubi (Macaron)
- Schéma initié le : 08/08/2021
- Version : 0.0.2

### Attributs

|Nom|Type|Description|Exemple|Contrainte|
|-|-|-|-|-|
|`type`|chaîne de caractères|Type GeoJSON, a toujours la valeur `Feature`|Feature|Obligatoire|
|`properties`|objet JSON|Liste des propriété de l'emprise||Obligatoire|
|`geometry`|GeoJSON [Geometry](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1)|(`LineString`, `MultiLineString`) ou emprise (`Polygon`, `MultiPolygon`) exprimés en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) et selon le format [GeoJSON](https://geojson.org/).|{"type": "Point`, "coordinates": [4.839230, 45.750301]}|Conditionnel|


### Définition de l'objet `Properties`

Nom|Type|Description|Exemple|Contrainte|
|-|-|-|-|-|
|`city`|chaîne de caractères|Nom de la ville|Paris|Obligatoire|
|`city_code`|chaîne de caractères|France: code INSEE|Paris|Obligatoire|
|`length`|nombre|Longueur de l'emprise de stationnemment en mètre|35.83|Obligatoire|
|`width`|nombre|Largeur de l'emprise de stationnemment en mètre|2|Obligatoire|
|`places`|nombre entier|Nombre de places réeles de l'emprise en cas de présence de marquage au sol|12|Optionnel|
|`calculated_places`|nombre entier|Nombre de places calculée pour l'emprise. Exemple: 5m par place|5|Obligatoire|
|`calculated_area`|nombre|Surface calculée en m2 de l'emprise de stationnement|71,66|Obligatoire|
|`street_name`|chaîne de caractères|Nom de la voie où est situé l'emprise de stationnment|Rue Berger|Obligatoire|
|`street_number_start`|chaîne de caractères|Début du numéro de voie où est situé l'emprise de stationnment|14Bis|Optionnel|
|`street_number_end`|chaîne de caractères|Fin du numéro de voie où est situé l'emprise de stationnment|32Ter|Optionnel|
|`postal_code`|chaîne de caractères|Code postal de la voie [code postal](https://fr.wikipedia.org/wiki/Code_postal_en_France) de la commune sur 5 caractères (incluant 'A' ou 'B' pour la Corse)|75012|Obligatoire|
|`created_at`|date [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601)|Date de relevée de l'emprise|2021-08-27|Obligatoire|
|`updated_at`|date [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601)|Date de mise à jour de l'emprise|2021-08-27|Optionnel|
|`geo_point_2d`|GeoJSON [Position](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.1)|Latitude et longitude du centre de l'emprise de stationnemment|[ 2.277977652847767, 48.90399743580084 ]|Obligatoire|
|`producer`|chaîne de caractères|Nom ou raison sociale de l'entité ayant produit la donnée|Macaron|Optionnel|
|`regulations`|[Regulation]|Liste des régulations qui régissent l'emprise||Optionnel|

### Définition de l'objet `Regulation`

Nom|Type|Description|Exemple|Contrainte|
|-|-|-|-|-|
|`rule`|Rule|Règle qui régie l'emprise||Obligatoire|
|`opening_hours`|[Opening Hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)|Liste des périodes pendant lesquelles la règle est appliquée||Obligatoire|

### Définition de l'objet `Rule`

Nom|Type|Description|Exemple|Contrainte|
|-|-|-|-|-|
|`type`|chaîne de caractères|Type de stationnement|PAYANT|Obligatoire. Valeurs autorisées: `PAYANT`, `GIG/GIC`, `GRATUIT`, `AUTOCAR`, `TROTTINETTE`, `LIVRAISON PERMANENTE`, `LIVRAISON PERIODIQUE`, `VELO LIBRE SERVICE`, `ELECTRIQUE`, `TRANSPORT DE FOND`, `MOTOS`, `TAXI`, `VELO`, `POLICE`, `DEPOSE MINUTE`, `DEUX ROUES`, `AUTRES`|
|`price`|nombre|Prix de l'heure en euro si c'est applicable|2,4|Conditionnel|

