<MenuSchema />

## onstreet-parking-schema

Emprise de stationnement sur la voirie

Spécification du schéma de données d'emprises de stationnement

- Site web : https://github.com/macaron-ai/onstreet-parking-schema/
- Version : 1.0.0

### Arborescence des propriétés :

#### Propriété type
- Type : liste
- Valeurs autorisées :
   - FeatureCollection

#### Propriété features
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété feature
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété type
- Type : liste
- Valeurs autorisées :
   - Feature

#### Propriété properties
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Nom de la ville - Propriété city
> *Exemple : Paris*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(.*)$`

#### France: Code INSEE - Propriété city_code
> *Exemple : 75056*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(.*)$`

#### Longeur - Propriété lenght
> *Description : Longueur de l'emprise de stationnemment en mètre*<br>
> *Exemple : 35.83*
- Valeur obligatoire
- Type : nombre

#### Largeur - Propriété width
> *Description : Largeur de l'emprise de stationnemment en mètre*<br>
> *Exemple : 2*
- Valeur obligatoire
- Type : nombre

#### Places - Propriété places
> *Description : Nombre de places réeles de l'emprise en cas de présence de marquage au sol*<br>
> *Exemple : 13*
- Valeur optionnelle
- Type : nombre entier

#### Places calculées - Propriété calculated_places
> *Description : Nombre de places calculée pour l'emprise. Exemple: 5m par place*<br>
> *Exemple : 11*
- Valeur obligatoire
- Type : nombre entier

#### Surface calculée - Propriété calculated_area
> *Description : Surface calculée en m2 de l'emprise de stationnement*<br>
> *Exemple : 71.66*
- Valeur obligatoire
- Type : nombre

#### Nom de la rue - Propriété street_name
> *Description : Nom de la voie où est situé l'emprise de stationnment*<br>
> *Exemple : Rue Berger*
- Valeur obligatoire
- Type : chaîne de caractères

#### Début numéro de voie - Propriété street_number_start
> *Description : Début du numéro de voie où est situé l'emprise de stationnment*<br>
> *Exemple : 14Bis*
- Valeur optionnelle
- Type : chaîne de caractères

#### Fin numéro de voie - Propriété street_number_end
> *Description : Fin du numéro de voie où est situé l'emprise de stationnment*<br>
> *Exemple : 32Ter*
- Valeur optionnelle
- Type : chaîne de caractères

#### Code postal - Propriété postal_code
> *Description : Code postal de la voie de la commune sur 5 caractères (incluant 'A' ou 'B' pour la Corse)*<br>
> *Exemple : 75012*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de relevée de l'emprise - Propriété created_at
> *Description : Date de relevée de l'emprise au format AAAA-MM-JJ, suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br>
> *Exemple : 2021-08-02*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(((19|20)([2468][048]|[13579][26]|0[48])|2000)[/-]02[/-]29|((19|20)[0-9]{2}[/-](0[469]|11)[/-](0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}[/-](0[13578]|1[02])[/-](0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}[/-]02[/-](0[1-9]|1[0-9]|2[0-8])))`

#### Date de mise à jour de l'emprise - Propriété updated_at
> *Description : Date de mise à jour au format AAAA-MM-JJ, suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br>
> *Exemple : 2021-08-27*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(((19|20)([2468][048]|[13579][26]|0[48])|2000)[/-]02[/-]29|((19|20)[0-9]{2}[/-](0[469]|11)[/-](0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}[/-](0[13578]|1[02])[/-](0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}[/-]02[/-](0[1-9]|1[0-9]|2[0-8])))`

#### Centre de l'emprise - Propriété geo_point_2d
> *Description : Latitude et longitude du géocentre de l'emprise de stationnemment*<br>
> *Exemple : [2.277977652847767, 48.90399743580084]*
- Valeur optionnelle
- Type : liste

#### Nom du producteur - Propriété producer
> *Description : Nom ou raison sociale de l'entité ayant produit la donnée*<br>
> *Exemple : Macaron*
- Valeur optionnelle
- Type : chaîne de caractères

#### Régulations - Propriété regulations
> *Description : Liste des régulations qui régissent l'emprise*<br>
- Valeur optionnelle
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Régulation - Propriété regulation
> *Description : Régulation qui régit une emprise de stationnement*<br>
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Régle - Propriété rule
> *Description : Règle qui régie une emprise de stationnement*<br>
- Valeur obligatoire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Type de staionnement - Propriété type
> *Exemple : POLICE*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - PAYANT
   - GIG/GIC
   - GRATUIT
   - AUTOCAR
   - TROTTINETTE
   - LIVRAISON PERMANENTE
   - LIVRAISON PERIODIQUE
   - VELO LIBRE SERVICE
   - ELECTRIQUE
   - TRANSPORT DE FOND
   - MOTOS
   - TAXI
   - VELO
   - POLICE
   - DEPOSE MINUTE
   - DEUX ROUES
   - AUTRES

#### Prix par heure - Propriété price
> *Description : Prix de l'heure en euro si c'est applicable*<br>
> *Exemple : 2.4*
- Valeur optionnelle
- Type : nombre

</details>
</blockquote>

#### Plage horaire - Propriété opening_hours
> *Description : Liste des périodes pendant lesquelles la règle est appliquée*<br>
> *Exemple : Mo-Fr 08:00-12:00,13:00-17:30; Sa 08:00-12:00; PH 09:00-12:00*
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

