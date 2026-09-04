<MenuSchema />

## [0.1.0] - 2026-04-22

### Ajouté

**Schéma des communiqués de presse**

- `schema.json` : JSON Schema draft-07 des communiqués de presse, publié sur [schema.data.gouv.fr](http://schema.data.gouv.fr/)
- `exemple-valide.json` : exemple de communiqué conforme au schéma
- `README-schema.md` : documentation du schéma
- `README-donnees.md` : documentation du jeu de données

**Référentiel des thématiques**

- `thematiques.json` : référentiel officiel des thématiques et sous-thématiques de l'action gouvernementale
- `thematiques/README.md` : documentation du référentiel

**Référentiel de la composition du gouvernement**

- `composition-gouvernement.json` : snapshot du Gouvernement en exercice (personnalités, fonctions, rattachements)
- `ministeres.json` : liste des ministères du Gouvernement en exercice avec leurs UUID
- `composition-gouvernement/README.md` : documentation des deux référentiels

**Référentiel des missions essentielles**

- `missions-essentielles.json` : les 6 missions essentielles de l'État et leurs 23 objets de communication interministérielle
- `missions-essentielles/README.md` : documentation du référentiel

**Champs du schéma communiqués (`schema.json` v0.1.0)**

- `version` : numéro de version du communiqué
- `langue` : langue du communiqué (ISO Alpha-2, FR par défaut ou null)
- `type_document` : type de contenu (`communique_de_presse` ou `dossier_de_presse`)
- `mots_cles` : mots-clés libres (optionnel)
- `lieu_diffusion` : lieu d'émission
- `date_diffusion` : date de diffusion (ISO 8601)
- `personnalites` : personnalités associées, référencées par UUID issu de `composition-gouvernement.json`
- `thematiques` : thématiques associées, référencées par UUID issu de `thematiques.json` (min. 1)
- `sous_thematiques` : sous-thématiques associées, référencées par UUID (optionnel)
- `mission` : mission essentielle associée, référencée par UUID issu de `missions-essentielles.json` (optionnel)
- `objet` : objet de communication interministérielle associé, référencé par UUID (optionnel)
- `contenu` : corps du communiqué au format Markdown
- `contacts_presse` : contacts presse (0 à n, optionnel)
- `pieces_jointes` : pièces jointes (0 à 4, max 10 Mo recommandé, optionnel)

## Contact

Service d'information du Gouvernement (SIG) - https://www.info.gouv.fr/contact/services-du-premier-ministre?service=275ba149-e350-4077-b47e-b46ab70ab9c3