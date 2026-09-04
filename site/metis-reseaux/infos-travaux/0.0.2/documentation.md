<MenuSchema />

## infos-travaux

Informations travaux

Schéma permettant de décrire des projets de travaux d'infrastructure.

- Site web : https://github.com/metis-reseaux/infos-travaux
- Version : 0.0.2

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

#### Chantier - Propriété feature
> *Description : Entité spatiale, temporelle et technique cohérente*<br>
- Valeur optionnelle

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

#### Nom de l'organisation - Propriété organisation
> *Description : Raison sociale du maître d'ouvrage*<br>
> *Exemple : Société X*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(.*)$`

#### Identification SIRET de l'organisation - Propriété siret
> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) du maître d'ouvrage*<br>
> *Exemple : 79889944900036*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[0-9]{14}$`

#### Prénom du gestionnaire - Propriété prenom
> *Description : Prénom*<br>
> *Exemple : Léo*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du gestionnaire - Propriété nom
> *Description : Nom*<br>
> *Exemple : Gali*
- Valeur obligatoire
- Type : chaîne de caractères

#### Email du gestionnaire - Propriété mail
> *Description : Adresse mail du gestionnaire*<br>
> *Exemple : leo@ga.li*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`

#### Téléphone du gestionnaire - Propriété telephone
> *Description : Numéro de téléphone du gestionnaire*<br>
> *Exemple : +1234567890*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(\+)?[0-9]*$`

#### Titre du chantier - Propriété titre
> *Description : Intitulé univoque permettant de désigner le chantier*<br>
> *Exemple : Déploiement fibre rue de la fracture numérique*
- Valeur optionnelle
- Type : chaîne de caractères

#### Détails portant sur l'infrastructure - Propriété resume
> *Description : Informations permettant de caractériser l'infrastructure (matériau, diamètre, emplacement, etc.)*<br>
> *Exemple : Fourreau de X en PVC, sous trottoir*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(.*)$`

#### Démarrage prévisionnel des travaux - Propriété date_debut
> *Description : Date de début au format AAAA-MM-JJ, suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br>
> *Exemple : 2019-06-25*
- Valeur obligatoire
- Type : chaîne de caractères

#### Fin prévisionnelle des travaux - Propriété date_fin
> *Description : Date de fin au format AAAA-MM-JJ, suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br>
> *Exemple : 2019-06-25*
- Valeur obligatoire
- Type : chaîne de caractères

#### Maître d'oeuvre - Propriété moe
> *Description : Raison sociale du maître d'oeuvre*<br>
> *Exemple : Société X*
- Valeur optionnelle
- Type : chaîne de caractères

#### Catégorie des travaux - Propriété categorie
> *Description : Nature de l'infrastructure*<br>
> *Exemple : TELECOM*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées :
   - ELECTRICITE
   - TELECOM
   - GAZ
   - EAU
   - ASSAINISSEMENT
   - CHAUFFAGE
   - CLIMATISATION
   - VOIRIE
   - AMENAGEMENT
   - AUTRE

#### Création d'infrastructure - Propriété creation
> *Description : `true`: le chantier est une création d'infrastructure, `false`: le chantier porte sur une infrastructure existante*<br>
> *Exemple : true*
- Valeur optionnelle
- Type : booléen

#### Autorité compétente - Propriété autorite
> *Description : Raison sociale de l'organisme validatrice*<br>
> *Exemple : Ville de ...*
- Valeur optionnelle
- Type : chaîne de caractères

#### Validation du projet par l'autorité compétente - Propriété validation
> *Description : `false`: Intention/Demande, `true`: Intervention/Déclaration*<br>
> *Exemple : false*
- Valeur optionnelle
- Type : booléen

#### Position verticale - Propriété niveau
> *Description : Niveau des opérations le long de l'entité*<br>
> *Exemple : SOUTERRAIN*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - SOUTERRAIN
   - SURFACE
   - AERIEN
   - MIXTE

#### Fonction de l'infrastructure - Propriété fonction
> *Description : Rôle du tronçon posé dans le réseau d'infrastructure*<br>
> *Exemple : TRANSPORT*
- Valeur optionnelle
- Type : chaîne de caractères
- Valeurs autorisées :
   - TRANSPORT
   - DISTRIBUTION
   - COLLECTE

#### Largeur estimée - Propriété largeur
> *Description : Largeur de la tranchée en mètre*<br>
> *Exemple : 1.5*
- Valeur obligatoire
- Type : nombre

#### Linéaire estimé - Propriété longueur
> *Description : Longeur en mètre linéaire de l'infrastructure*<br>
> *Exemple : 123*
- Valeur obligatoire
- Type : nombre

#### Identifiant unique national d’adresse des travaux - Propriété adresse_id
> *Description : Adressage du point de démarrage des travaux. Cet identifiant unique d’adresse est géré et attribué par le service "guichet national d’identification" de la Base Adresse Nationale. Dans l'attente de la mise en place de ce service, les règles de création ou de gestion de cet identifiant ne sont pas connues. La valeur de ce champ est donc optionnelle et sera laissée vide aussi longtemps que le service d'identification ne sera pas opérationnel.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Numéro de rue - Propriété adresse_numero
> *Description : Adressage du point de démarrage des travaux*<br>
> *Exemple : 39B*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^([1-9])([0-9])*([ a-zA-Z])*?$`

#### Nom complet de la voie - Propriété adresse_voie
> *Description : Adressage du point de démarrage des travaux. Ce champ contient la concaténation du type et du nom de la voie ou le nom d'un lieu-dit, exprimés en majuscules et minuscules accentuées.*<br>
> *Exemple : 'Rue de Marseille' pour une concaténation ou 'Le pré aux grenouilles' pour un lieu-dit*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9\-\'\s\d\u00C0-\u00FF]+$`

#### Code postal - Propriété adresse_postal
> *Description : Adressage du point de démarrage des travaux : [code postal](https://fr.wikipedia.org/wiki/Code_postal_en_France) de la commune sur 5 caractères (incluant 'A' ou 'B' pour la Corse)*<br>
> *Exemple : Rue de Marseille*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[a-zA-Z0-9]*$`

#### Nom officiel de la commune - Propriété adresse_commune
> *Description : Adressage du point de démarrage des travaux. Ce champ doit permettre d’identifier rapidement le territoire concerné et d'éviter les quiproquos.*<br>
> *Exemple : Lyon*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[A-Za-z\s\-\u00C0-\u00FF]+$`

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

