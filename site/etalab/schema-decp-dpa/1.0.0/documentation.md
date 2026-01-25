<MenuSchema />

<MenuSchema />

## Spécification du fichier de déclaration de profil d'acheteur

Spécification du fichier de déclaration de profil d'acheteur

- Auteur : Alexandre Bulté pour Etalab
- Schéma créé le : 18/02/2019
- Site web : https://github.com/etalab/schema-decp-dpa
- Données d'exemple : https://github.com/etalab/schema-decp-dpa/blob/master/exemple-valide.csv
- Version : 1.0.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [siretAcheteur](#propriete-siretacheteur) | chaîne de caractères  | Oui |
| [urlProfilAcheteur](#propriete-urlprofilacheteur) | chaîne de caractères (format `uri`) | Oui |
| [urlDCAT](#propriete-urldcat) | chaîne de caractères (format `uri`) | Non |
| [coordonnees](#propriete-coordonnees) | chaîne de caractères  | Oui |

#### Propriété `siretAcheteur`

> *Description : Le numéro SIRET de l'acheteur*<br/>*Exemple : 79248336400024*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Propriété `urlProfilAcheteur`

> *Description : L'adresse URL du profil d'acheteur*<br/>*Exemple : http://monacheteur.com/profil*
- Valeur obligatoire
- Type : chaîne de caractères (format `uri`)

#### Propriété `urlDCAT`

> *Description : L’adresse URL du catalogue DCAT qui répertorie les données*<br/>*Exemple : http://dcat.monacheteur.com/catalog.ttl*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `coordonnees`

> *Description : Les coordonnées de l'acheteur concerné*<br/>*Exemple : Service Achat, DINSIC, 20 avenue de Ségur, 75007 Paris*
- Valeur obligatoire
- Type : chaîne de caractères
