<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schéma des collectivités

Ce schéma permet de décrire les collectivités territoriales qui sont associées aux projets de transition écologique.

## Types de collectivités

Le schéma prend en charge deux types de collectivités :
- **Commune** : Une commune française
- **EPCI** : Un Établissement Public de Coopération Intercommunale (métropole, communauté d'agglomération, etc.)

## Codes géographiques et administratifs

Les codes utilisés sont issus des référentiels officiels suivants :
- **INSEE** : [Référentiel des codes officiels géographiques](https://www.insee.fr/fr/information/2560452) pour les codes INSEE des communes
- **SIREN** : [Base SIRENE des entreprises](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/) pour les identifiants SIREN
- **EPCI** : [Référentiel des intercommunalités](https://www.collectivites-locales.gouv.fr/institutions/intercommunalite-et-metropoles) pour les codes EPCI

## Particularités selon le type de collectivité

- Pour une **Commune** :
  - `codeInsee` est obligatoirement renseigné
  - `codeEpci` peut être renseigné pour indiquer l'EPCI de rattachement

- Pour un **EPCI** :
  - `codeEpci` est obligatoirement renseigné
  - `codeInsee` n'est pas renseigné

## Relations

Les collectivités sont liées aux projets dans une relation many-to-many. Un projet peut être associé à plusieurs collectivités, et une collectivité peut être impliquée dans plusieurs projets.

## Validation des données

Pour valider des données contre ce schéma, vous pouvez utiliser les outils de la suite Frictionless :

```bash
frictionless validate --schema=schema.json donnees.csv
```