<MenuSchema />

## [0.2.0] - 2026-06-15

### Ajouté

**Nouveau référentiel `personnalites/`**

- `personnalites.json` : référentiel autonome des personnalités politiques avec historisation des fonctions à travers les gouvernements successifs
- [`personnalites/README.md`](https://github.com/GouvernementFR/referentiel-donnees-communication-publique/blob/main/personnaltes/README.md) : documentation
- Chaque fonction historisée est rattachée à un `gouvernement_id` (issu de `gouvernements-et-ministeres.json`) et conserve `date_debut` + `date_fin`

### Modifié

**Schéma des communiqués de presse (`communiques.jsonl`)**

- **Structure refondue** : chaque ligne JSONL contient désormais deux blocs, `metadata` (métadonnées du jeu de données) et `document` (le communiqué). Tous les champs du communiqué sont déplacés sous `document`.
- `document.type` (au lieu de `type_document`) : `communique_de_presse` ou `dossier_de_presse`
- `document.id` : remis obligatoire, permet la modification et la dépublication d'un communiqué
- `document.titre` : nouveau champ obligatoire
- `document.langue` : devient obligatoire
- `document.emetteurs[]` : nouveau champ obligatoire, permettant la co-signature par plusieurs ministères. Chaque émetteur porte `ministere_id`, `gouvernement_id` et `nom` figé au moment de la publication. Si plusieurs émetteurs, le bloc-marque DSFR bascule sur « GOUVERNEMENT ».
- `document.personnalites[]`, `document.thematiques[]`, `document.sous_thematiques[]` : tableaux d'UUID directs (au lieu d'objets `{id: "..."}`)
- `document.mission_id` (au lieu de `mission.id`) : UUID direct optionnel
- `document.objet_id` (au lieu de `objet.id`) : chaîne directe optionnelle
- `document.contenu_markdown` (au lieu de `contenu`) : corps Markdown du communiqué
- `document.contenu_pdf` : nouveau champ obligatoire. Sous-objet contenant `lien_telechargement`, `poids` et `checksum_sha256` (optionnel). Chaque version PDF est récupérée par info.gouv.fr et mise à disposition sous son domaine.
- `document.contacts_presse[]` : restructuré en groupes par entité émettrice. Chaque entrée contient `entite`, `ministere_id` optionnel, `gouvernement_id` optionnel pour cohérence avec `emetteurs[]`, et un tableau `contacts[]`. Le contact lui-même utilise `nom` (au lieu de `contact_privilegie`), et `civilite` devient obligatoire.
- `document.pieces_jointes_annexes[]` : renommé depuis `pieces_jointes[]` pour plus de clarté. `lien_telechargement` remplace `lien`. `checksum_sha256` remplace `checksum`.
- Algorithme de checksum : explicitement nommé `checksum_sha256` (au lieu de `checksum` générique), pattern hexadécimal 64 caractères
- Champs contacts : ajout de `adresse_postale` à côté de `adresse_physique` (physique = lieu, postale = adresse administrative)
- `telephone` : regex resserrée à `^(\+33|0)[0-9]{9}$` (9 chiffres après préfixe, sans espaces)
- `personnalites[]` : référence désormais `personnalites.json` (au lieu de `gouvernements-et-ministeres.json`)
- `lieu_diffusion` : par convention, `"Paris"` lorsqu'il y a plusieurs émetteurs

**Référentiel de la composition des Gouvernements (`gouvernements-et-ministeres.json`)**

- Renommé `composition-gouvernement/` → `gouvernements-et-ministeres/` et `composition-gouvernement.json` → `gouvernements-et-ministeres.json`
- Le fichier contient désormais un tableau `gouvernements[]` historisant les gouvernements successifs (et non plus un seul gouvernement courant)
- Le gouvernement en exercice est celui dont `date_fin` est `null`
- `gouvernements[].id` : ajout d'un UUID pour permettre l'historisation
- **Intégration des ministères** : suppression du fichier séparé `ministeres.json`. Les ministères sont désormais embarqués directement dans chaque gouvernement via `gouvernements[].ministeres[]`. Chaque ministère a un UUID unique au sein de son gouvernement, et un même intitulé apparaissant dans plusieurs gouvernements donne autant d'UUID distincts. Cela traite chaque ministère comme une entité autonome dans son contexte gouvernemental et empêche tout « héritage » de communiqués d'un ministère à un autre.
- `ordre_ministere` (auparavant dans `ministeres.json`) est désormais dans `gouvernements[].ministeres[]`
- Personnalités intégrées au niveau du ministère via `gouvernements[].ministeres[].personnalites[]`
- `gouvernements[].ministeres[].personnalites[].ordre_protocolaire` : position globale dans le gouvernement (1 = Premier ministre)
- `gouvernements[].ministeres[].personnalites[].ordre_ministeriel` : position au sein du ministère de tutelle (1 = ministre principal)

**Personnalités politiques (`personnalites.json`)**

- Référentiel autonome séparé de la composition du gouvernement
- Chaque personnalité contient `id`, `civilite`, `prenom`, `nom`, `fonctions[]`
- Le tableau `fonctions[]` historise toutes les fonctions exercées, chacune rattachée à un `gouvernement_id` et `ministere_id`
- `fonctions[].intitule_complet` : intitulé complet tel que publié au JO
- `fonctions[].intitule_partiel` : portion relative au ministère de tutelle
- `fonctions[].date_debut` et `date_fin` : `null` si fonction en cours

**Référentiel des missions essentielles (`missions-essentielles.json`)**

- `missions[].id` devient un identifiant technique chaîne (ex: `"1_organiser"`) au lieu d'un UUID
- `missions[].position` : numéro d'ordre de la mission
- `missions[].couleur_hexadecimal` (au lieu de `hex`) : code hexadécimal préfixé par `#`
- `missions[].objets[]` : tableau imbriqué (au lieu d'un tableau racine séparé)
- `missions[].objets[].id` : identifiant technique chaîne (ex: `"1A_engagement_citoyen"`)
- `missions[].objets[].menants_id[]` : UUID des ministères pilotes
- `missions[].objets[].id_co_menants_id[]` : UUID des ministères co-pilotes (optionnel)
- `missions[].objets[].concourants_id[]` : UUID des ministères contributeurs (optionnel)
- Les UUID des ministères sont issus de `gouvernements-et-ministeress.json` (`gouvernements[].ministeres[]`)

## [0.1.0] - 2026-04-21

### Ajouté

**Schéma des communiqués de presse**

- `schema.json` : JSON des communiqués de presse, publié sur schema.data.gouv.fr
- `exemple-valide.json` : exemple de communiqué conforme au schéma
- `README-schema.md` : documentation du schéma à destination des ministères émetteurs

**Référentiel des thématiques**

- `thematiques.json` : référentiel officiel des thématiques et sous-thématiques de l'action gouvernementale
- `thematiques/README.md` : documentation du référentiel

**Référentiel de la composition du gouvernement**

- `gouvernements-et-ministeres.json` : snapshot du Gouvernement en exercice (membres, fonctions, rattachements)
- `ministeres.json` : liste des ministères du Gouvernement en exercice avec leurs UUID
- `gouvernements-et-ministeres/README.md` : documentation des deux référentiels

**Référentiel des missions essentielles**

- `missions-essentielles.json` : les 6 missions essentielles de l'État et leurs 23 objets de communication interministérielle
- `missions-essentielles/README.md` : documentation du référentiel

**Champs du schéma communiqués (`schema.json` v0.1.0)**

- `version` : numéro de version du communiqué
- `langue` : langue du communiqué (ISO Alpha-2, FR par défaut)
- `type_document` : type de contenu (`communique_de_presse` ou `dossier_de_presse`)
- `mots_cles` : mots-clés libres (optionnel)
- `lieu_diffusion` : lieu d'émission
- `date_diffusion` : date de diffusion (ISO 8601)
- `personnalites` : personnalités associées, référencées par UUID issu de `gouvernements-et-ministeres.json`
- `thematiques` : thématiques associées, référencées par UUID issu de `thematiques.json` (min. 1)
- `sous_thematiques` : sous-thématiques associées, référencées par UUID (optionnel)
- `mission` : mission essentielle associée, référencée par UUID issu de `missions-essentielles.json` (optionnel)
- `objet` : objet de communication interministérielle associé, référencé par UUID (optionnel)
- `contenu` : corps du communiqué au format Markdown
- `contacts_presse` : contacts presse (0 à n, optionnel)
- `pieces_jointes` : pièces jointes (0 à 4, max 10 Mo recommandé, optionnel)

## Contact

Service d'information du Gouvernement (SIG) — https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3