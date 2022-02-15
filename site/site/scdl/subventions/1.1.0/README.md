<MenuSchema />

# Schéma du format SCDL relatif aux subventions

- Basé sur la spécification SCDL "Subventions" version 1.1 (non publiée actuellement)
  - [version 1.0 publiée](http://www.opendatafrance.net/SCDL_Subventions)
- Basé sur [Arrêté du 17 novembre 2017 relatif aux conditions de mises à disposition des données essentielles des conventions de subvention](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000036040528)

Voir aussi :
- la [définition du format "subventions" d'Etalab](https://github.com/etalab/format-subventions)
- la [page du forum d'Etalab dédiée au format "subventions"](https://forum.etalab.gouv.fr/t/cadre-juridique-et-technique-de-louverture-des-donnees-de-subventions)

Notes :
- les noms des colonnes SCDL ne correspondent pas à ceux de [l'arrêté](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000036040528). Exemple `ATTRIBUANT_NOM ≠ nomAttribuant`. Cette version de développement du schéma SCDL utilise les noms de colonnes de l'arrêté.

TODO :
- [ ] `idAttribuant` : valider la cohérence du code SIRET (cf [python-stdnum](https://arthurdejong.org/python-stdnum/doc/1.8/stdnum.fr.siret))
- [ ] `datesPeriodeVersement` : valider la cohérence des dates après validation du Schéma, car on a dû utiliser le type "string" pour permettre de valider les intervalles de dates, mais il reste à savoir si ce sont bien des dates
- [ ] `idRAE` : Trouver comment valider ce numéro
- [ ] Explorer les foreign keys pour la cohérence des données pivot

## Développement

Pour les développeurs, ce schéma peut être testé avec différents fichiers tabulaires en utilisant [Goodtables](https://github.com/frictionlessdata/goodtables-py) comme ceci :

```sh
goodtables validate --schema schema.json exemples/exemple_invalide.csv
```

Ou bien :

```sh
npm install -g localtunnel
npm install -g http-server
http-server -c-1
lt --port 8080 --subdomain qualidata
```

Utiliser [ce permalink](http://dev.qualidata.io/?source=https%3A%2F%2Fqualidata.localtunnel.me%2Fexemple_arrete.csv&schema=https%3A%2F%2Fqualidata.localtunnel.me%2Fschema.json).
