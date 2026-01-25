<MenuSchema />

<MenuSchema />

# Schéma de données pour le comptage des mobilités - Fichier sites

Spécifications du fichier d'échange relatif aux comptages des mobilités : fichier sites.

Ce schéma est spécifique à la notion de site.
Le fichier site permet de décrire les réalités physiques du site de comptage des mobilités. Ainsi, le “site” représente un lieu physique, auquel les “channels” sont rattachés. Un site a une position géographique immuable (latitude/longitude), dispose d’un code commune de rattachement, d’un type de voie. Le champ "external_ids" permet notamment d'articuler le schéma au schéma national des aménagements cyclables.

## Finalité

Ce schéma permet d'estimer la fréquentation d'infrastructures grâce à des données dynamiques de comptage.
Il doit être associé au schéma "measure" et "channel" de comptage des mobilité. Il ne peut être réutilisé sans ces fichiers.

## Publication

Nous préconisons aux producteurs de données de publier leurs fichiers avec la règle de nommage suivante : comptagemobilites_channel_nom.csv avec nom étant le nom de la collectivité productrice des données, par exemple comptagemobilite_channel_Baix.csv

Nous recommandons de publier le fichier site dans le même jeu de données que les fichiers channel et measure. Ces trois fichiers s'articulent entre eux par des identifiants.

## Fichiers d'exemple
Deux fichiers d'exemples sont fournis pour ce schéma : 
- un fichier d'exemple `exemple-valide.csv` avec tous les champs remplis ;
- un fichier d'exemple `exemple-valide-eco-compteur.csv` élaboré par [Eco-Compteur](https://www.eco-compteur.com/) dont certaines valeurs optionnelles ne sont pas renseignées.