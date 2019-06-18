---
permalink: /scdl/adresses/latest.html
redirect_from: /scdl/adresses/1.1.3.html
title: Base adresse locale
version: 1.1.3
---

# Schéma relatif aux adresses locales d’une collectivité (BAL)

## Specifications
* [Spécifications SCDL "Adresses locales" v1.1](http://www.opendatafrance.net/SCDL_Adresses_Locales)

* [Version modifiée pour assurer une convergence stricte vers le modèle de l'AITF](https://cms.geobretagne.fr/sites/default/files/documents/aitf-sig-topo-adresse-fichier-echange-simplifie-v_1.1_0.pdf)



### Validation sur mesure:

Case à cocher si la faisabilité est ok et soutenable
### `cle_interop`: 

Elle est composée de plusieurs informations dont certaines peuvent etre vérifiées unitairement et d'autres dont les valeurs sont reproduites dans les autres champs
 ```
	- (code INSEE) 
	+ code de voie ( 4 caractères) + numéro d’adresse (5 caractères préfixé par des zéros) 
	+ suffixe (indice de répétition et complément) séparés par `_`
```

- [x] Validation code INSEE par recherche dans la base INSEE
- [x] Validation code de voie par cohérence
- [x] Validation du numéro d'adresse par cohérence
- [x] Validation du suffixe par cohérence
- [x] Validation de composition	


### `x`

- [ ] Vérification maximum de 2 décimales (Non)[https://git.opendatafrance.net/qualidata/qualidata-ui/issues/29]
- [ ] Vérification que la valeur X est bien  dans la zone Lambert 93 ou si hors métropole dans la zone correspondante 

### `y`

- [ ] Vérification maximum de 2 décimales (Non)[https://git.opendatafrance.net/qualidata/qualidata-ui/issues/29]
- [ ]  Vérification que la valeur Y est bien  dans la zone Lambert 93 ou si hors métropole dans la zone correspondante

### `lat`

- [ ] Vérification que la valeur lat est bien  dans la zone France Métropolitaine ou DOM TOM

### `long`

- [ ] Vérification que la valeur long est bien  dans la zone France Métropolitaine ou DOM TOM


### `date_der_maj`

- [ ] Vérification que la date de mise à jour est supérieure à 2000-01-01 et inférieure à la date du jour+1?


### Exemples de fichiers CSV : 


* Strasbourg : https://www.data.gouv.fr/fr/datasets/adresses-de-la-ville-de-strasbourg/

* Rennes : https://www.data.gouv.fr/fr/datasets/adresses-du-referentiel-voies-et-adresses-au-format-bal/

* Bayonne : https://www.data.gouv.fr/fr/datasets/adresses-du-referentiel-voies-et-adresses-au-format-bal-bayonne/

* Brest : https://www.data.gouv.fr/fr/datasets/referentiel-adresses-au-format-bal-pays-de-brest-1/