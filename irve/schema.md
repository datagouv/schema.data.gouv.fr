# Schéma « Spécification du fichier d'échange relatif aux données concernant la localisation géographique et les caractéristiques techniques des stations et des points de recharge pour véhicules électriques »

17 colonnes définies

## Propriétés
- Auteur(s) : Alexandre Bulté pour Etalab <info[arobas]data[point]gouv[point]fr>
- Contributeur(s) : Charles Nepote
- Schéma créé le : 2018-06-29
- Page d'accueil : https://github.com/etalab/schema.data.gouv.fr/tree/master/irve
- Données d'exemple : https://github.com/etalab/schema.data.gouv.fr/blob/master/irve/exemple-valide.csv

## Propriétés complémentaires
- Valeurs manquantes : ['']
- Clef primaire : id_pdc

## Colonnes

### `n_amenageur`
> Le nom de l'aménageur, c'est à dire de l'entité publique ou privée propriétaire des infrastructures  

- Type attendu : `chaîne de caractères`
- exemple(s) : Société X, Entité Y

### `n_operateur`
> Le nom de l'opérateur qui opère le réseau d'infrastructure (l'aménageur ou un tiers auquel a été confié la responsabilité par délégation)  

- Type attendu : `chaîne de caractères`
- exemple(s) : Société X, Entité Y

### `n_enseigne`
> Le nom commercial du réseau  

- Type attendu : `chaîne de caractères`
- exemple(s) : Réseau de recharge ABC

### `id_station`
> L'identifiant de la station délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017  

- Type attendu : `chaîne de caractères`
- exemple(s) : FR*A68*P68021*A

### `n_station`
> le nom de la station  

- Type attendu : `chaîne de caractères`
- exemple(s) : Picpus, Belleville, Villiers

### `ad_station`
> L'adresse complète de la station : <numéro> <rue>, <code postal> <ville>  

- Type attendu : `chaîne de caractères`
- exemple(s) : 1 avenue de la Paix, 75001 Paris

### `code_insee`
> Le code INSEE de la commune d'implantation  

- Cette colonne est optionnelle
- Type attendu : `chaîne de caractères`
- exemple(s) : 06088, 2B002 (pour une commune corse)
- La valeur doit respecter le motif suivant : ^([013-9]\d|2[AB1-9])\d{3}$

### `Xlongitude`
> La longitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée dans le système de coordonnées WGS84  

- Type attendu : `nombre`
- exemple(s) : 7.48710500

### `Ylatitude`
> La latitude en degrés décimaux (point comme séparateur décimal) de la localisation de la station exprimée le système de coordonnées WGS84  

- Type attendu : `nombre`
- exemple(s) : 47.63495500

### `nbre_pdc`
> Le nombre de points de recharge sur la station  

- Type attendu : `entier`
- exemple(s) : 1, 10

### `id_pdc`
> L'identifiant du point de recharge délivré selon les modalités définies à l'article 10 du décret n° 2017-26 du 12 janvier 2017  

- Type attendu : `chaîne de caractères`
- exemple(s) : FR*A68*E68021*A*B1*D

### `puiss_max`
> La puissance maximale délivrée à chaque point de recharge, exprimée en kW, en fonction du contrat d'abonnement de puissance de la station et du type de connecteur.  

- Type attendu : `nombre`
- exemple(s) : 22.00

### `type_prise`
> Les types de prises ou de connecteurs disponibles sur chaque point de charge  

- Type attendu : `chaîne de caractères`
- exemple(s) : E/F, T2

### `acces_recharge`
> Modalités d'accès à la recharge  

- Type attendu : `chaîne de caractères`
- exemple(s) : Payant, Gratuit, Sur abonnement

### `accessibilité`
> Amplitude d'ouverture de la station.  

- Type attendu : `chaîne de caractères`
- exemple(s) : 24/24 7/7 jours

### `observations`
> Champ destiné à préciser les modalités d'accès à la recharge, l'accessibilité, le tarif, les horaires d'ouverture, …  

- Type attendu : `chaîne de caractères`
- exemple(s) : Recharge uniquement disponible pendant les horaires d'ouverture du Centre Commercial XY

### `date_maj`
> Date de mise à jour des données  

- Type attendu : `date`
- `%Y/%m/%d` 
- exemple(s) : 2018/08/08, 2015/12/30
