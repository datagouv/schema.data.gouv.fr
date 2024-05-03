<MenuSchema />

## schema-amenagements-cyclables

Schéma d'aménagements cyclables

Spécification du schéma de données d'aménagements cyclables

- Site web : https://github.com/etalab/schema_amenagements_cyclables
- Version : 0.2.0

### Arborescence des propriétés :

#### Propriété features
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

#### Propriété properties
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété id_local
> *Description : Identifiant unique pérenne défini par la collectivité*<br>
> *Exemple : 751AC*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété reseau_loc
> *Description : Type de réseau structurant local auquel l'aménagement appartient*<br>
> *Exemple : Structurant*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - REV
   - Structurant
   - Autre

#### Propriété nom_loc
- Type : liste

<blockquote>
<details>

<summary>Cette propriété doit contenir une liste d'éléments parmi les suivants :</summary>

#### Propriété nom_loc
> *Description : Nom et numéro des itinéraires locaux*<br>
> *Exemple : V1*
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

#### Propriété code_com
> *Description : Code INSEE de la commune (5 caractères alphanumériques)*<br>
> *Exemple : 75114*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}`

#### Propriété id_osm
> *Description : Identifiant de l'aménagement sur OSM*<br>
> *Exemple : 7746952719*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété num_iti
> *Description : Numéro des itinéraires, des EuroVelo au schéma départementaux, auxquels le segment appartient. Séparé par « : »*<br>
> *Exemple : 0001:*
- Valeur optionnelle
- Type : liste

#### Propriété ame_d
> *Description : Type d'aménagement présent sur la voie de droite*<br>
> *Exemple : BANDE CYCLABLE*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - PISTE CYCLABLE
   - BANDE CYCLABLE
   - DOUBLE SENS CYCLABLE PISTE
   - DOUBLE SENS CYCLABLE BANDE
   - DOUBLE SENS CYCLABLE
   - VOIE VERTE
   - VELO RUE
   - COULOIR BUS+VELO
   - RAMPE
   - GOULOTTE
   - AMENAGEMENT MIXTES PIETON VELO HORS VOIE VERTE
   - CHAUSSEE A VOIE CENTRALE BANALISEE
   - ACCOTEMENT REVENTU HORS CVCB
   - AUCUN
   - AUTRE

#### Propriété regime_d
> *Description : Régime présent sur la voie de droite*<br>
> *Exemple : AIRE PIETONNE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - ZONE 30
   - AIRE PIETONNE
   - ZONE DE RENCONTRE
   - EN AGGLOMERATION
   - HORS AGGLOMERATION
   - AUTRE

#### Propriété sens_d
> *Description : Sens de circulation pour les cyclistes sur la voie de droite*<br>
> *Exemple : UNIDIRECTIONNEL*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - UNIDIRECTIONNEL
   - BIDIRECTIONNEL

#### Propriété largeur_d
> *Description : Largeur hors marquage minimale utile de la voie de droite réservée au cycliste, en mètre. La largeur du marquage est exclue*<br>
> *Exemple : 3*
- Valeur optionnelle
- Type : nombre

#### Propriété ame_g
> *Description : Type d'aménagement présent sur la voie de gauche*<br>
> *Exemple : BANDE CYCLABLE*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - PISTE CYCLABLE
   - BANDE CYCLABLE
   - DOUBLE SENS CYCLABLE PISTE
   - DOUBLE SENS CYCLABLE BANDE
   - DOUBLE SENS CYCLABLE
   - VOIE VERTE
   - VELO RUE
   - COULOIR BUS+VELO
   - RAMPE
   - GOULOTTE
   - AMENAGEMENT MIXTES PIETON VELO HORS VOIE VERTE
   - CHAUSSEE A VOIE CENTRALE BANALISEE
   - ACCOTEMENT REVENTU HORS CVCB
   - AUCUN
   - AUTRE

#### Propriété regime_g
> *Description : Régime présent sur la voie de gauche*<br>
> *Exemple : AIRE PIETONNE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - ZONE 30
   - AIRE PIETONNE
   - ZONE DE RENCONTRE
   - EN AGGLOMERATION
   - HORS AGGLOMERATION
   - AUTRE

#### Propriété sens_g
> *Description : Sens de circulation pour les cyclistes sur la voie de gauche*<br>
> *Exemple : UNIDIRECTIONNEL*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - UNIDIRECTIONNEL
   - BIDIRECTIONNEL

#### Propriété largeur_g
> *Description : Largeur hors marquage minimale utile de la voie de gauche réservée au cycliste, en mètre. La largeur du marquage est exclue*<br>
> *Exemple : 4.1*
- Valeur optionnelle
- Type : nombre

#### Propriété local_ame
> *Description : Emplacement de l'aménagement*<br>
> *Exemple : TROTTOIR*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - TROTTOIR
   - CHAUSSEE

#### Propriété statut_ame
> *Description : Niveau de réalisation de l'infrastructure*<br>
> *Exemple : PROVISOIRE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - EN TRAVAUX
   - EN SERVICE
   - PROVISOIRE

#### Propriété access_ame
> *Description : Accessibilité des amanégements par type de véhicule à deux roues non motorisé*<br>
> *Exemple : VTT*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - ROLLER
   - VTT
   - VTC
   - VELO DE ROUTE

#### Propriété date_maj
> *Description : Date de dernière mise à jour des données du segment  Notation ISO 8601, format AAAA-MM-JJ*<br>
> *Exemple : 2020-08-15*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété trafic_vit
> *Description : Vitesse maximale autorisée pour le trafic adjacent à l'aménagement, en km/h. La vitesse 5 km/h correspond à une vitesse à l'allure du pas*<br>
> *Exemple : 80*
- Valeur obligatoire
- Type : nombre entier

#### Propriété lumiere
> *Description : Aménagement éclairé*<br>
> *Exemple : True*
- Valeur optionnelle
- Type : booléen

#### Propriété d_service
> *Description : Date de mise en oeuvre de l'aménagement (AAAA)*<br>
> *Exemple : 2015*
- Valeur optionnelle
- Type : nombre

#### Propriété comm
> *Description : Remarques éventuelles au sujet de l'aménagement*<br>
> *Exemple : forte pente sur 10 mètres*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété source
> *Description : Entité ayant fourni les données*<br>
> *Exemple : Ville de Paris*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété project_c
> *Description : Projection cartographique utilisée*<br>
> *Exemple : Peters*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ref_geo
> *Description : référentiel géographique utilisé*<br>
> *Exemple : Bdortho*
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

