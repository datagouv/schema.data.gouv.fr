<MenuSchema />

## schema_randonnee

Schéma des itinéraires de randonnée

Spécification du fichier d'échange relatif aux itinéraires de randonnée

- Site web : https://github.com/PnX-SI/schema-randonnee
- Version : 0.3.0

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

#### GeoJSON Feature - Propriété features
- Valeur obligatoire
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

#### Identifiant de l’objet dans sa BDD source - Propriété eid
> *Exemple : 37037*
- Valeur obligatoire
- Type : nombre entier

#### Structure(s) productrice(s) de l'itinéraire - Propriété proprietaire
> *Exemple : Parc national des Cévennes*
- Valeur obligatoire
- Type : chaîne de caractères

#### Contact de la structure publicatrice du jeu de données - Propriété contact
> *Exemple : contact@cevennes-parcnational.fr*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Identifiant unique généré par la BDD source - Propriété uuid
> *Exemple : 123e4567-e89b-12d3-a456-426614174000*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### URL de la fiche source de l'itinéraire - Propriété url
> *Exemple : https://destination.cevennes-parcnational.fr/sentiers-de-decouverte/mas-cevenol-de-la-roquette/*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Identifiant de la relation OSM correspondante - Propriété id_osm
> *Exemple : 1913426*
- Valeur optionnelle
- Type : nombre entier

#### Nom de l'itinéraire - Propriété nom_itineraire
> *Exemple : Mas cévenol de la Roquette*
- Valeur obligatoire
- Type : chaîne de caractères

#### Pratique de l'itinéraire - Propriété pratique
> *Exemple : pédestre*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - pédestre
   - trail
   - VTT
   - cyclo
   - gravel
   - équestre
   - ski de fond
   - ski de rando
   - raquettes
   - autre

#### Type d'itinéraire - Propriété type_itineraire
> *Description : Selon que l'itinéraire ait le même point de départ ou d'arrivée, que le chemin de retour soit le même que celui de l'aller, ou que l'itinéraire soit une itinérance ou part d'une itinérance*<br>
> *Exemple : boucle*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Valeurs autorisées :
   - aller-retour
   - boucle
   - aller simple
   - itinérance
   - étape

#### Noms des communes traversées par l'itinéraire - Propriété communes_nom
> *Exemple : Molezon, Florac, Cocurès*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Codes INSEE des communes traversées par l'itinéraire - Propriété communes_code
> *Exemple : 48098, 48061, 48050*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Nom du point de départ - Propriété depart
> *Exemple : Devant l'office de tourisme de Florac*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du point d'arrivée' - Propriété arrivee
> *Exemple : Devant l'office de tourisme de Florac*
- Valeur obligatoire
- Type : chaîne de caractères

#### Durée de l'itinéraire en heures - Propriété duree
> *Exemple : 2*
- Valeur optionnelle
- Type : nombre entier

#### Balisage(s) utilisé(s) sur l'itinéraire - Propriété balisage
> *Exemple : GR, GRP, PNC*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Longueur de l'itinéraire (en mètres) - Propriété longueur
> *Exemple : 2300*
- Valeur optionnelle
- Type : nombre

#### Difficulté de l'itinéraire - Propriété difficulte
> *Description : Selon l'échelle de la plateforme source des données, prend généralement en compte la longueur, le dénivelé et la cotation technique de l'itinéraire*<br>
> *Exemple : Très facile*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Cotation technique de l'itinéraire - Propriété cotation
> *Description : Généralement égale à la cotation du segment le plus difficile de l'itinéraire (échelles Club Alpin Suisse pour randonnée, ski de randonnée et raquettes, échelle FFC pour VTT)*<br>
> *Exemple : T1*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Valeurs autorisées :
   - T1
   - T2
   - T3
   - T4
   - T5
   - T6
   - F
   - PD
   - AD
   - D
   - TD
   - ED
   - EX
   - WT1
   - WT2
   - WT3
   - WT4
   - WT5
   - WT6
   - vert
   - bleu
   - rouge
   - noir
   - double noir

#### Altitude maximum de l'itinéraire (en mètres) - Propriété altitude_max
> *Exemple : 638*
- Valeur optionnelle
- Type : nombre entier

#### Altitude minimum de l'itinéraire (en mètres) - Propriété altitude_min
> *Exemple : 504*
- Valeur optionnelle
- Type : nombre entier

#### Dénivelé positif de l'itinéraire (en mètres) - Propriété denivele_positif
> *Exemple : 159*
- Valeur optionnelle
- Type : nombre entier

#### Dénivelé négatif de l'itinéraire (en mètres) - Propriété denivele_negatif
> *Exemple : 159*
- Valeur optionnelle
- Type : nombre entier

#### Instructions de direction - Propriété instructions
> *Exemple : Au parking, prendre la route sur 300 m pour trouver la première balise. Après la balise numéro 2, quitter la route à gauche par le sentier étroit, pouvant être glissant après la pluie*
- Valeur obligatoire
- Type : chaîne de caractères

#### Présentation de l'itinéraire - Propriété presentation
> *Exemple : Ce sentier permet de découvrir un vallon à l’écart des grands axes de circulation, très évocateur de l’ambiance particulière des hautes vallées cévenoles du versant méditerranéen. Du moulin jusqu'à l'ensemble des habitations à mi-versant, le sentier grimpe à l'ombre des chênes verts et des châtaigniers, dans la fraîcheur du valat. Cette promenade est l'occasion de comprendre comment les Cévenols ont géré et valorisé cet environnement. De l'art de bâtir aux aménagements hydrauliques, toutes les composantes de l'organisation traditionnelle de l'espace sont évoquées dans un site au caractère préservé.*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Présentation courte de l'itinéraire - Propriété presentation_courte
> *Exemple : Ce sentier, niché au creux d'une vallée au charme préservé, est idéal pour imaginer le passé et mieux comprendre la vie d'aujourd'hui en Cévennes.*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Thèmes ou mots-clefs caractérisant l'itinéraire - Propriété themes
> *Exemple : Architecture et village, Causses et Cévennes / UNESCO*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Recommandations sur l'itinéraire - Propriété recommandations
> *Exemple : En été, sentier à réaliser de préférence le matin. Passages glissants par temps pluvieux. L’itinéraire que vous allez suivre chemine à travers plusieurs propriétés privées. Ne vous écartez pas de l’itinéraire balisé. Sa mise à disposition repose sur votre discrétion. Les randonnées équestre et à VTT ne sont pas autorisées ou adaptées sur les sentiers d'interprétation.*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Accessibilité de l'itinéraire à des publics particuliers - Propriété accessibilite
> *Exemple : Aménagements PMR*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Informations sur les accès routiers - Propriété acces_routier
> *Exemple : D 983 jusqu'à Pont-Ravagers, (à 12 km de Barre-des-Cévennes et 2 km de Sainte-Croix-Vallée-Française). À Pont-Ravagers, prendre la voie communale (panneau route étroite et sinueuse) qui mène au hameau de Trabassac. Environ 10 minutes de voiture depuis Pont-Ravagers*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Informations sur les accès en transports en commun - Propriété transports_commun
> *Exemple : Navettes en juillet et août depuis tel village, informations sur le site de l'Office du Tourisme*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Propriété parking
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété type
- Type : liste
- Valeurs autorisées :
   - Feature

</details>
</blockquote>

#### Date de création de l'itinéraire dans sa BDD source (AAAA-MM-JJ) - Propriété date_creation
> *Exemple : 2015-09-24*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Motif : `[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])`

#### Date de dernière modification de l'itinéraire dans sa BDD source (AAAA-MM-JJ) - Propriété date_modification
> *Exemple : 2018-06-18*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Motif : `[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])`

#### Type de média - Propriété type_media
> *Exemple : audio*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`
- Valeurs autorisées :
   - image
   - video
   - texte
   - audio
   - pdf
   - autre

#### URL du média (absolue ou relative) - Propriété url
> *Exemple : paperclip/trekking_trek/37037/08664.jpg*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Titre du média - Propriété titre
> *Exemple : La Roquette*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Auteur du média - Propriété auteur
> *Exemple : © Olivier Prohin*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### Licence d'utilisation du média - Propriété licence
> *Exemple : Propriétaire*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

#### eid de l'itinéraire parent dans sa BDD source - Propriété itineraire_parent
> *Description : Dans le cadre d'une itinérance, l'itinéraire parent est celui qui contient les itinéraires enfants, ou étapes*<br>
> *Exemple : 256*
- Valeur optionnelle
- Type : nombre entier

#### Types de sol sur lesquels se parcourt l'itinéraire - Propriété type_sol
> *Exemple : bitume, terre*
- Valeur optionnelle
- Type : chaîne de caractères ou `null`

</details>
</blockquote>


</details>
</blockquote>

</details>
</blockquote>

