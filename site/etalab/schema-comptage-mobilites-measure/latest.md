<MenuSchema />

<MenuSchema />

<MenuSchema />

# Schéma de données pour le comptage des mobilités - Fichier measure

Spécifications du fichier d'échange relatif aux comptages des mobilités : fichier measure.

Ce schéma est spécifique à la notion de measure.
Le fichier measure contient les données de comptage. Ce fichier est dit “dynamique” car les données seront amenées à être fréquemment mises à jour selon le pas de temps ou la fréquence de rafraîchissement que le producteur définira en amont.
Les données fournies le sont soit en "temps-réel", soit a posteriori.
Le fichier contiendra autant de ligne que de comptage par créneau temporel ou par pas de temps.

## Finalité

Ce schéma permet d'estimer la fréquentation d'infrastructures grâce à des données dynamiques de comptage.
Il doit être associé au schéma "site" et "channel" de comptage des mobilité. Il ne peut être réutilisé sans ces fichiers.

## Publication

Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : comptagemobilites_measure_nom.csv avec nom étant le nom de la collectivité productrice des données, par exemple comptagemobilite_measure_Baix.csv

Nous recommandons de publier le fichier measure dans le même jeu de données que les fichiers site et channel. Ces trois fichiers s'articulent entre eux par des identifiants.

## Fichiers d'exemple
Deux fichiers d'exemples sont fournis pour ce schéma :

- un fichier d'exemple `exemple-valide.csv` avec tous les champs remplis ;
- un fichier d'exemple `exemple-valide-eco-compteur.csv` élaboré par Eco-Compteur dont certaines valeurs optionnelles ne sont pas renseignées.