<MenuSchema />

<MenuSchema />

## Informations travaux

L'[article L49](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070987&idArticle=LEGIARTI000021493642) du code des postes et des communications électroniques a introduit le devoir de publicité de travaux d'infrastructures. Le schéma **Informations travaux** s'inscrit dans la continuité de cette réglementation avec l'objectif de simplifier et standardiser le partage de cette information afin de maximiser les externalités positives qui découlent de l'anticipation des travaux de génie civil.

Ce schéma s'applique donc aux projets de chantiers de toute nature sur le domaine public et n'ayant pas démarré.

- Contributeur(s) : Olivier Marcel (Metis)
- Schéma initié le : 06/26/19
- Version : 0.0.2

### Attributs

![Attributs](https://github.com/metis-reseaux/infos-travaux/blob/master/attributs.jpg)

|Nom|Type|Description|Exemple|Contrainte|
|-|-|-|-|-|
|`organisation` (Nom de l'organisation)|chaîne de caractères|Raison sociale du maître d'ouvrage|Société X, Entité Y|Obligatoire|
|`siret` (Identification de l'organisation)|chaîne de caractères|Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) du maître d'ouvrage|79889944900036|Obligatoire|
|`prenom` (Prénom du gestionnaire)|chaîne de caractères|Prénom|Léo|Obligatoire|
|`nom` (Nom du gestionnaire)|chaîne de caractères|Nom|Gali|Obligatoire|
|`mail` (Email du gestionnaire)|chaîne de caractères (format `email`)|Adresse mail du gestionnaire|leo@ga.li|Obligatoire|
|`telephone` (Téléphone du gestionnaire)|chaîne de caractères (format `email`)|Numéro de téléphone du gestionnaire|+1234567890|Obligatoire|
|`titre` (Titre du chantier)|chaîne de caractères|Intitulé univoque permettant de désigner le chantier|Déploiement fibre rue de la fracture numérique|Obligatoire|
|`resume` (Résumé du chantier)|chaîne de caractères|Détails portant sur l'infrastructure|Fourreau de X en PVC, sous trottoir|Optionnel|
|`date_debut` (Démarrage prévisionnel du chantier)|date|Date de début au format AAAA-MM-JJ, suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|2019-06-25|Obligatoire|
|`date_fin` (Fin prévisionnelle du chantier)|date|Date de fin au format AAAA-MM-JJ, suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).|2019-06-25|Obligatoire|
|`autorite` (Autorité compétente)|chaîne de caractères|Raison sociale de l'organisme validatrice|Ville de ...|Optionnel|
|`validation` (Validation du projet par l'autorité compétente)|booléen|`false`: Intention/Demande, `true`: Intervention/Déclaration|true|Optionnel|
|`moe` (Maître d'oeuvre)|chaîne de caractères|Raison sociale du maître d'oeuvre|Société X|Optionnel|
|`categorie` (Catégorie des travaux)|chaîne de caractères|Nature de l'infrastructure|TELECOM|Obligatoire. Valeurs autorisées : `TELECOM`, `ELECTRICITE`, `GAZ`, `EAU`, `ASSAINISSEMENT`, `CHAUFFAGE`, `CLIMATISATION`, `VOIRIE`, `AMENAGEMENT`, `AUTRE`|
|`creation` (Création d'infrastructure)|booléen|`true`: création d'infrastructure, `false`: infrastructure existante|true|Optionnel|
|`niveau` (Position verticale des opérations)|chaîne de caractères|Niveau des opérations le long de l'entité|SOUTERRAIN|Optionnel. Valeurs autorisées : `SOUTERRAIN`, `SURFACE`, `AERIEN`, `MIXTE`|Optionnel|
|`fonction` (Fonction de l'infrastructure)|chaîne de caractères|Rôle du tronçon posé au sein du réseau d'infrastructure|TRANSPORT|Optionnel. Valeurs autorisées : `TRANSPORT`, `DISTRIBUTION`, `COLLECTE`|
|`longueur` (Linéaire estimé)|nombre entier|Longeur en mètre linéaire de l'infrastructure|123|Conditionnel|
|`largeur` (Largeur estimée)|nombre réel|Largeur de la tranchée en mètre|1.5|Conditionnel|
|`adresse_id` (Identifiant unique national d’adresse)|chaîne de caractères|Cet identifiant unique d’adresse est géré et attribué par le service "guichet national d’identification" de la Base Adresse Nationale. Dans l'attente de la mise en place de ce service, les règles de création ou de gestion de cet identifiant ne sont pas connues. La valeur de ce champ est donc optionnelle et sera laissée vide aussi longtemps que le service d'identification ne sera pas opérationnel.||Optionnel|
|`adresse_numero` (Numéro de rue)|chaîne de caractères|Adressage du point de démarrage des travaux|39B|Conditionnel|
|`adresse_voie` (Nom complet de la voie)|chaîne de caractères|Ce champ contient la concaténation du type et du nom de la voie ou le nom d'un lieu-dit, exprimés en majuscules et minuscules accentuées.|Rue de Marseille|Conditionnel|
|`adresse_postal` (Code postal)|chaîne de caractères|Adressage du point de démarrage des travaux : [code postal](https://fr.wikipedia.org/wiki/Code_postal_en_France) de la commune sur 5 caractères (incluant 'A' ou 'B' pour la Corse)"|69007|Conditionnel|
|`adresse_commune` (Nom officiel de la commune)|chaîne de caractères|Ce champ doit permettre d’identifier rapidement le territoire concerné et d'éviter les quiproquos.|Lyon|Conditionnel|
|`geometry` (Géométrie du chantier)|GeoJSON|Point, cheminement (`LineString`, `MultiLineString`) ou emprise (`Polygon`, `MultiPolygon`) exprimés en [WGS 84](https://fr.wikipedia.org/wiki/WGS_84) et selon le format [GeoJSON](https://geojson.org/).|{"type": "Point", "coordinates": [4.839230, 45.750301]}|Conditionnel|
