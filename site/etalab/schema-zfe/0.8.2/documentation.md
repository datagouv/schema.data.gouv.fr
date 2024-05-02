<MenuSchema />

## schema-zfe

Zone à Faibles Emissions

Spécification du schéma de données des Zones à Faibles Emissions

- Site web : https://github.com/etalab/schema-zfe
- Version : 0.8.2

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
- Type : chaîne de caractères ou vide

#### vp_critair - Propriété vp_critair
> *Description : Véhicules particuliers : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple V4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler. L'ordre des vignettes est le suivant : EL, V1, V2, V3, V4, V5, NC. EL correspond aux véhicules électriques et NC aux véhicules sans vignette.*<br>
> *Exemple : V4*
- Valeur optionnelle
- Type : chaîne de caractères ou vide
- Valeurs autorisées :
   - V5
   - V4
   - V3
   - V2
   - V1
   - EL
   - NC
   - None

#### vp_horaires - Propriété vp_horaires
> *Description : Véhicules particuliers : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères ou vide

#### vul_critair - Propriété vul_critair
> *Description : Véhicules utilitaires légers : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple V4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler. L'ordre des vignettes est le suivant : EL, V1, V2, V3, V4, V5, NC. EL correspond aux véhicules électriques et NC aux véhicules sans vignette.*<br>
> *Exemple : V4*
- Valeur optionnelle
- Type : chaîne de caractères ou vide
- Valeurs autorisées :
   - V5
   - V4
   - V3
   - V2
   - V1
   - EL
   - NC
   - None

#### vul_horaires - Propriété vul_horaires
> *Description : Véhicules utilitaires légers : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères ou vide

#### pl_critair - Propriété pl_critair
> *Description : Poids lourds (>3,5t): Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple V4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler. L'ordre des vignettes est le suivant : EL, V1, V2, V3, V4, V5, NC. EL correspond aux véhicules électriques et NC aux véhicules sans vignette.*<br>
> *Exemple : V4*
- Valeur optionnelle
- Type : chaîne de caractères ou vide
- Valeurs autorisées :
   - V5
   - V4
   - V3
   - V2
   - V1
   - EL
   - NC
   - None

#### pl_horaires - Propriété pl_horaires
> *Description : Poids lourds (>3,5t): jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères ou vide

#### autobus_autocars_critair - Propriété autobus_autocars_critair
> *Description : Autobus et autocars : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple V4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler. L'ordre des vignettes est le suivant : EL, V1, V2, V3, V4, V5, NC. EL correspond aux véhicules électriques et NC aux véhicules sans vignette.*<br>
> *Exemple : V4*
- Valeur optionnelle
- Type : chaîne de caractères ou vide
- Valeurs autorisées :
   - V5
   - V4
   - V3
   - V2
   - V1
   - EL
   - NC
   - None

#### autobus_autocars_horaires - Propriété autobus_autocars_horaires
> *Description : Autobus et autocars : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères ou vide

#### deux_rm_critair - Propriété deux_rm_critair
> *Description : Deux roues, tricycles et quadricycles à moteur : Vignette CRITAIR à partir de laquelle la circulation n'est pas autorisée. Par exemple V4 signifie que les véhicules CRITAIR 4, CRITAIR 5 et sans vignettes ne sont pas autorisés à circuler. L'ordre des vignettes est le suivant : EL, V1, V2, V3, V4, V5, NC. EL correspond aux véhicules électriques et NC aux véhicules sans vignette.*<br>
> *Exemple : V4*
- Valeur optionnelle
- Type : chaîne de caractères ou vide
- Valeurs autorisées :
   - V5
   - V4
   - V3
   - V2
   - V1
   - EL
   - NC
   - None

#### deux_rm_horaires - Propriété deux_rm_horaires
> *Description : Deux roues, tricycles et quadricycles à moteur : jours et horaires de restriction au format 'opening hours' d'OpenStreetMap : https://wiki.openstreetmap.org/wiki/Key:opening_hours*<br>
> *Exemple : Mo-Fr 08:00-20:00; PH off*
- Valeur optionnelle
- Type : chaîne de caractères ou vide

#### url_arrete - Propriété url_arrete
> *Description : Lien de l'arrêté administratif précisant la réglementation sur la zone ou sur le tronçon de route.*<br>
> *Exemple : https://cdn.paris.fr/paris/2021/05/28/23fb2b69cfa451a4e517f1bc6e3001b7.pdf*
- Valeur optionnelle
- Type : chaîne de caractères

#### url_site_information - Propriété url_site_information
> *Description : Page web décrivant le dispositif et précisant la réglementation sur la zone ou sur le tronçon de route.*<br>
> *Exemple : https://www.metropolegrandparis.fr/fr/ZFE*
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

