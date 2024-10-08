<MenuSchema />

## hautes-remunerations

Hautes rémunérations dans la fonction publique

Spécification du fichier de déclaration des dix rémunérations les plus élevées des agents publiques

- Schéma créé le : 23/09/2020
- Site web : http://github.com/restuccia/schema-hautes-remunerations
- Version : 0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [siren](#propriete-siren) | chaîne de caractères  | Oui |
| [denomination_employeur](#propriete-denomination-employeur) | chaîne de caractères  | Oui |
| [type_administration](#propriete-type-administration) | chaîne de caractères  | Oui |
| [annee](#propriete-annee) | année  | Oui |
| [somme_10_plus_hautes_remunerations_brutes](#propriete-somme-10-plus-hautes-remunerations-brutes) | nombre réel  | Oui |
| [nb_femmes_beneficiaires](#propriete-nb-femmes-beneficiaires) | nombre entier  | Oui |
| [nb_hommes_beneficiaires](#propriete-nb-hommes-beneficiaires) | nombre entier  | Oui |
| [duree_cumulee_mois](#propriete-duree-cumulee-mois) | nombre réel  | Oui |
| [commentaires](#propriete-commentaires) | chaîne de caractères  | Non |

#### Propriété `siren`

> *Description : Le numéro SIREN de l'organisme*<br/>*Exemple : 110046018*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{9}$`

#### Propriété `denomination_employeur`

> *Description : Dénomination de l'employeur telle que saisie dans la base Sirene des entreprises et de leurs établissements. Vous pouvez accéder à cette dénomination exacte via le site annuaire-entreprises.data.gouv.fr*<br/>*Exemple : Ministère de la Culture*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `type_administration`

> *Description : Le type d'administration *<br/>*Exemple : Région*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Département ministériel`
    - `Région`
    - `Département`
    - `Autre collectivité territoriale`
    - `EPCI à fiscalité propre`
    - `Etablissement hospitalier`
    - `Autre`

#### Propriété `annee`

> *Description : Année*<br/>*Exemple : 2019*
- Valeur obligatoire
- Type : année

#### Propriété `somme_10_plus_hautes_remunerations_brutes`

> *Description : Somme des 10 plus hautes rémunérations brutes en euros (intégrant les primes et avantages en nature).*<br/>*Exemple : 1609769*
- Valeur obligatoire
- Type : nombre réel

#### Propriété `nb_femmes_beneficiaires`

> *Description : Nombre de femmes bénéficiaires*<br/>*Exemple : 5*
- Valeur obligatoire
- Type : nombre entier
- Valeur inférieure à : 10

#### Propriété `nb_hommes_beneficiaires`

> *Description : Nombre d'hommes bénéficiaires*<br/>*Exemple : 5*
- Valeur obligatoire
- Type : nombre entier
- Valeur inférieure à : 10

#### Propriété `duree_cumulee_mois`

> *Description : Durée cumulée en nombre de mois. La durée cumulée en nombre de mois correspond à la somme des durées d'activité des 10 personnes percevant les plus hautes rémunérations. Par exemple, si chacun a travaillé l'année entière, la durée cumulée vaudra 10x12=120 mois. Si parmi ces 10 personnes, une a été rémunérée 8.5 mois, la somme vaudra 9x12+8.5=116.5 mois. Cette colonne fournira un élément d'explication aux variations annuelles, les rémunérations n'étant pas redressé de la durée d'activité.*<br/>*Exemple : 120*
- Valeur obligatoire
- Type : nombre réel
- Valeur inférieure à : 120

#### Propriété `commentaires`

> *Description : Commentaires*<br/>*Exemple : Commentaire*
- Valeur optionnelle
- Type : chaîne de caractères
