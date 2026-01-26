<MenuSchema />

# Schéma du format SCDL relatif aux délibérations adoptées par une assemblée locale

En cours de développement.

## Custom checks

Par colonne :
- `BUDGET_ANNEE` : valider les intervalles de date entre deux années
  - année 1 < année 2
- `DELIB_MATIERE_NOM` : valider les noms de niveau 1 (avant le `/`), à savoir leur appartenance à une liste fermée
- `PREF_ID` : valider les chiffres en fonction du préfixe

Inter-colonnes :
- soit toutes les colonnes `BUDGET_*` sont remplies, soit aucune
- soit toutes les colonnes `VOTE_*` sont remplies, soit aucune
- `PREF_DATE` >= `DELIB_DATE`
- `VOTE_EFFECTIF` >= `VOTE_REEL`
- `VOTE_REEL` >= `VOTE_POUR`
- `VOTE_REEL` >= `VOTE_CONTRE`
- `VOTE_REEL` >= `VOTE_ABSTENTION`
- `VOTE_POUR` + `VOTE_CONTRE` + `VOTE_ABSTENTION` = `VOTE_REEL`
