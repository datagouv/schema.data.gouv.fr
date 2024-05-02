<MenuSchema />

## schema-zfe

Zone à Faibles Emissions

Spécification du schéma de données des Zones à Faibles Emissions

- Site web : https://github.com/etalab/schema-zfe
- Version : 0.6.1

### Arborescence des propriétés :

#### features - Propriété features
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### GeoJSON Feature - Propriété features
- Valeur optionnelle
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### properties - Propriété properties
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### id - Propriété id
> *Description : Identifiant unique de l'aire réglementée. Pour construire l'identifiant on utilise cette formule : 'Code SIREN de l'entité administrative englobant la zone' - ZFE - XXX. Identifiant unique cleabs du tronçon routier issu de la couche TRONCON_DE_ROUTE de la BD Topo produite par l'IGN*<br>
> *Exemple : 200046977-ZFE-001*
- Valeur optionnelle
- Type : chaîne de caractères

#### date_debut - Propriété date_debut
> *Description : Date d'entrée en vigueur de la réglementation*<br>
> *Exemple : 2019-07-01*
- Valeur optionnelle
- Type : chaîne de caractères

#### date_fin - Propriété date_fin
> *Description : Date de fin de la réglementation*<br>
> *Exemple : 2023-07-01*
- Valeur optionnelle
- Type : chaîne de caractères

#### proprietaire_vehicule - Propriété proprietaire_vehicule
> *Description : Nature juridique du propriétaire du véhicule*<br>
> *Exemple : PERSONNE PHYSIQUE OU MORALE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - PERSONNE PHYSIQUE
   - PERSONNE MORALE
   - PERSONNE PHYSIQUE OU MORALE

#### vp_critair - Propriété vp_critair
> *Description : Véhicules particuliers : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple 4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler.*<br>
> *Exemple : 4*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - 5
   - 4
   - 3
   - 2
   - 1
   - ELECTRIQUE

#### vp_horaires - Propriété vp_horaires
> *Description : Véhicules particuliers : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### vul_critair - Propriété vul_critair
> *Description : Véhicules utilitaires légers : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple 4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler.*<br>
> *Exemple : 4*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - 5
   - 4
   - 3
   - 2
   - 1
   - ELECTRIQUE

#### vul_horaires - Propriété vul_horaires
> *Description : Véhicules utilitaires légers : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### pl_critair - Propriété pl_critair
> *Description : Poids lourds (>3,5t): Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple 4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler.*<br>
> *Exemple : 4*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - 5
   - 4
   - 3
   - 2
   - 1
   - ELECTRIQUE

#### pl_horaires - Propriété pl_horaires
> *Description : Poids lourds (>3,5t): jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### autobus_autocars_critair - Propriété autobus_autocars_critair
> *Description : Autobus et autocars : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple 4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler.*<br>
> *Exemple : 4*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - 5
   - 4
   - 3
   - 2
   - 1
   - ELECTRIQUE

#### autobus_autocars_horaires - Propriété autobus_autocars_horaires
> *Description : Autobus et autocars : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### deux_rm_critair - Propriété deux_rm_critair
> *Description : Deux roues, tricycles et quadricycles à moteur : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple 4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler.*<br>
> *Exemple : 4*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - 5
   - 4
   - 3
   - 2
   - 1
   - ELECTRIQUE

#### deux_rm_horaires - Propriété deux_rm_horaires
> *Description : Deux roues, tricycles et quadricycles à moteur : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### taxi_critair - Propriété taxi_critair
> *Description : Taxis : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple 4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler.*<br>
> *Exemple : 4*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - 5
   - 4
   - 3
   - 2
   - 1
   - ELECTRIQUE

#### taxi_horaires - Propriété taxi_horaires
> *Description : Taxis : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères

#### url_arrete - Propriété url_arrete
> *Description : Lien de l'arrêté administratif*<br>
> *Exemple : https://cdn.paris.fr/paris/2021/05/28/23fb2b69cfa451a4e517f1bc6e3001b7.pdf*
- Valeur optionnelle
- Type : chaîne de caractères

#### url_site_information - Propriété url_site_information
> *Description : Page web décrivant le dispositif*<br>
> *Exemple : https://www.metropolegrandparis.fr/fr/ZFE*
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

