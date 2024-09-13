<MenuSchema />

## declaration-biens-valorisation

Schéma de déclaration de l'acquisition de biens issus de la valorisation

Spécification du fichier d'échange relatif aux déclarations de la part des dépenses relatives à l'acquisition de biens issus du réemploi ou de la réutilisation ou intégrant des matières recyclées.

- Schéma créé le : 24/07/2024
- Site web : https://github.com/datagouv/schema-declaration-biens-valorisation
- Version : v0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [annee](#propriete-annee) | année  | Oui |
| [siret](#propriete-siret) | chaîne de caractères  | Oui |
| [raison_sociale](#propriete-raison-sociale) | chaîne de caractères  | Oui |
| [type_produit_acquis](#propriete-type-produit-acquis) | chaîne de caractères  | Oui |
| [montant_total](#propriete-montant-total) | nombre réel  | Oui |
| [montant_valorisation_et_don](#propriete-montant-valorisation-et-don) | nombre réel  | Oui |
| [montant_produits_issus_don](#propriete-montant-produits-issus-don) | nombre réel  | Oui |
| [montant_produits_recycles](#propriete-montant-produits-recycles) | nombre réel  | Oui |
| [pourcent_valorisation](#propriete-pourcent-valorisation) | nombre réel  | Oui |
| [pourcent_reemploi_reutilisation](#propriete-pourcent-reemploi-reutilisation) | nombre réel  | Oui |
| [pourcent_don](#propriete-pourcent-don) | nombre réel  | Oui |
| [pourcent_matieres_recyclees](#propriete-pourcent-matieres-recyclees) | nombre réel  | Oui |

#### Propriété `annee`

> *Description : Année civile des dépenses.*<br/>*Exemple : 2024*
- Valeur obligatoire
- Type : année

#### Propriété `siret`

> *Description : N° SIRET de l'organisme acheteur (14 chiffres)*<br/>*Exemple : 13002526500013*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Propriété `raison_sociale`

> *Description : Raison sociale de l'organisme acheteur*<br/>*Exemple : DINUM*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `type_produit_acquis`

> *Description : Produits ou catégories de produits acquis*<br/>*Exemple : Mobilier urbain*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - Produits textiles à l'exception des équipements de protection individuels
    - Matériel informatique et téléphonie
    - Matériel de reprographie et d'impression
    - Consommables d'impression
    - Papier
    - Fournitures de bureau
    - Engins de transport et pièces détachées
    - Véhicules et pièces détachées
    - Mobilier et aménagement d'intérieur
    - Mobilier urbain
    - Equipements de collecte de déchets
    - Bocaux et flacons
    - Articles et équipement sportifs
    - Matériel d'entretien des espaces verts
    - Bâtiments modulaires ou préfabriqués
    - Gros électroménager, y compris appareils professionnels
    - Jeux et jouets

#### Propriété `montant_total`

> *Description : Montant total HT des dépenses en euros sur l'année*<br/>*Exemple : 15000*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `montant_valorisation_et_don`

> *Description : Montant HT des dépenses associées à l'acquisition de produits issus du réemploi ou de la réutilisation, y compris le montant des dons comptabilisés monétairement, en euros sur l'année*<br/>*Exemple : 5000*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `montant_produits_issus_don`

> *Description : Montant HT des dépenses associées à l'acquisition de produits issus du don (calculé à partir de l'annexe de l'arrêté du 29 février 2024 fixant la grille de valeur forfaitaire permettant la comptabilisation des dons acquis en application de l'article 58 de la loi n° 2020-105 du 10 février 2020 relative à la lutte contre le gaspillage et à l'économie circulaire) en euros sur l'année*<br/>*Exemple : 1000*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `montant_produits_recycles`

> *Description : Montant HT des dépenses associées à l'acquisition de produits intégrant des matières recyclées en euros sur l'année*<br/>*Exemple : 1500*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `pourcent_valorisation`

> *Description : % issu du réemploi ou de la réutilisation ou intégrant des matières recyclées par rapport au montant total*<br/>*Exemple : 25.2*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `pourcent_reemploi_reutilisation`

> *Description : % issu du réemploi ou de la réutilisation par rapport au montant total*<br/>*Exemple : 13.1*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `pourcent_don`

> *Description : % issu du don*<br/>*Exemple : 8.4*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `pourcent_matieres_recyclees`

> *Description : % issu de l'intégration de matières recyclées par rapport au montant total*<br/>*Exemple : 7.4*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 100
