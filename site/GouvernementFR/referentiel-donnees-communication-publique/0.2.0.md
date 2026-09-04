<MenuSchema />

# referentiel-donnees-communication-publique

Dépôt de référence des schémas de données et de la documentation des jeux de données ouverts publiés par le Service d'information du Gouvernement (SIG) sur data.gouv.fr et schema.data.gouv.fr.

Voir le CHANGELOG.md pour l'historique des modifications.

## Jeux de données

### 🏷️ Thématiques

Référentiel officiel des thématiques et sous-thématiques de l'action gouvernementale. Structure la navigation du site info.gouv.fr et le classement de tous les contenus publiés.

- Fichier de données : `thematiques.json`
- Documentation : [`thematiques/README.md`](https://github.com/GouvernementFR/referentiel-donnees-communication-publique/blob/main/thematiques/README.md)

### 🏛️ Composition des Gouvernements

Composition officielle du Gouvernement en exercice **et historique des gouvernements précédents**, incluant les ministères de chaque gouvernement. Le gouvernement courant est celui dont `date_fin` est `null`. Le détail des personnalités et de leurs fonctions est dans `personnalites.json`.

- Fichier de données : `gouvernements-et-ministeres.json` (contient gouvernements et ministères)
- Documentation : [`gouvernements-et-ministeres/README.md`](https://github.com/GouvernementFR/referentiel-donnees-communication-publique/blob/main/gouvernements-et-ministeres/README.md)

### 👤 Personnalités politiques

Référentiel des personnalités politiques avec historisation de leurs fonctions à travers les gouvernements successifs. Source de vérité pour identifier une personnalité par UUID stable.

- Fichier de données : `personnalites.json`
- Documentation : [`personnalites/README.md`](https://github.com/GouvernementFR/referentiel-donnees-communication-publique/blob/main/personnalites/README.md)

### 🎯 Missions essentielles de l'État

Les six missions essentielles de l'État. Chaque mission se décline en objets de communication interministérielle.

- Fichier de données : `missions-essentielles.json`
- Documentation : [`missions-essentielles/README.md`](https://github.com/GouvernementFR/referentiel-donnees-communication-publique/blob/main/missions-essentielles/README.md)

### 📰 Communiqués de presse

Schéma de données officiel des communiqués de presse du Gouvernement.

<aside>
🚨

Ce contenu utilise le format **JSONL** (*JSON Lines*) est également dénommé **NDJSON** (*NewLine Delimited JSON*)

cf : https://ndjson.com/

👍🏽 Cette approche permet de traiter une grande volumétrie tout en limitant la consommation mémoire

</aside>

- Documentation schéma : [`communiques-de-presse/README.md`](https://github.com/GouvernementFR/referentiel-donnees-communication-publique/blob/main/communiques-de-presse/README.md)
- Schéma JSON : `communiques-de-presse/schema.json`
- Echantillon : `communiques.jsonl`

## Contact

Service d'information du Gouvernement (SIG) - https://www.info.gouv.fr/contact/services-du-premier-ministre

## Licence

Licence Ouverte / Open Licence version 2.0