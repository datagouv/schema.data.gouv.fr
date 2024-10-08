<MenuSchema />

## schema-amenagements-cyclables

Aménagements cyclables

Spécification du schéma de données d'aménagements cyclables

- Site web : https://github.com/etalab/amenagements-cyclables
- Version : 0.3.5

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
> *Exemple : 751AC001*
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

#### Propriété id_osm
> *Description : Identifiant de l'aménagement sur OSM*<br>
> *Exemple : 7746952719*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété num_iti
> *Description : Numéro des itinéraires, des EuroVelo au schéma départementaux, auxquels le segment appartient. Séparé par « : »*<br>
> *Exemple : 0001:0006:0045:*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété code_com_d
> *Description : Code INSEE de la commune (5 caractères alphanumériques) sur la voie de droite*<br>
> *Exemple : 75114*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}`

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
   - DOUBLE SENS CYCLABLE NON MATERIALISE
   - VOIE VERTE
   - VELO RUE
   - COULOIR BUS+VELO
   - RAMPE
   - GOULOTTE
   - AMENAGEMENT MIXTE PIETON VELO HORS VOIE VERTE
   - CHAUSSEE A VOIE CENTRALE BANALISEE
   - ACCOTEMENT REVETU HORS CVCB
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

#### Propriété local_d
> *Description : Emplacement de l'aménagement sur la voie de droite*<br>
> *Exemple : TROTTOIR*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - TROTTOIR
   - INTERMEDIAIRE
   - CHAUSSEE

#### Propriété statut_d
> *Description : Niveau de réalisation de l'infrastructure sur la voie de droite*<br>
> *Exemple : PROVISOIRE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - EN TRAVAUX
   - EN SERVICE
   - PROVISOIRE

#### Propriété revet_d
> *Description : Type de revêtement de l'aménagement sur la voie de droite*<br>
> *Exemple : LISSE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - LISSE
   - RUGUEUX
   - MEUBLE

#### Propriété code_com_g
> *Description : Code INSEE de la commune (5 caractères alphanumériques) sur la voie de gauche*<br>
> *Exemple : 75115*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}`

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
   - DOUBLE SENS CYCLABLE NON MATERIALISE
   - VOIE VERTE
   - VELO RUE
   - COULOIR BUS+VELO
   - RAMPE
   - GOULOTTE
   - AMENAGEMENT MIXTE PIETON VELO HORS VOIE VERTE
   - CHAUSSEE A VOIE CENTRALE BANALISEE
   - ACCOTEMENT REVETU HORS CVCB
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

#### Propriété local_g
> *Description : Emplacement de l'aménagement sur la voie de gauche*<br>
> *Exemple : TROTTOIR*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - TROTTOIR
   - INTERMEDIAIRE
   - CHAUSSEE

#### Propriété statut_g
> *Description : Niveau de réalisation de l'infrastructure sur la voie de gauche*<br>
> *Exemple : PROVISOIRE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - EN TRAVAUX
   - EN SERVICE
   - PROVISOIRE

#### Propriété revet_g
> *Description : Type de revêtement de l'aménagement sur la voie de gauche*<br>
> *Exemple : LISSE*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - LISSE
   - RUGUEUX
   - MEUBLE

#### Propriété access_ame
> *Description : Accessibilité des aménagements par type de véhicule à deux roues non motorisé*<br>
> *Exemple : VTT*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - ROLLER
   - VELO DE ROUTE
   - VTC
   - VTT

#### Propriété date_maj
> *Description : Date de dernière mise à jour des données du segment. Notation ISO 8601, format AAAA-MM-JJ*<br>
> *Exemple : 2020-08-15*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété trafic_vit
> *Description : Vitesse maximale autorisée pour le trafic adjacent à l'aménagement, en km/h. La vitesse 5 km/h correspond à une vitesse à l'allure du pas*<br>
> *Exemple : 80*
- Valeur optionnelle
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
> *Description : Projection cartographique de la donnée source*<br>
> *Exemple : Peters*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ref_geo
> *Description : Référentiel géographique utilisé*<br>
> *Exemple : Bdortho*
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

