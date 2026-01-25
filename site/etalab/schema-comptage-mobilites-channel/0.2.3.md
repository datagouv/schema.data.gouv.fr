<MenuSchema />

<MenuSchema />

# Schéma de données pour le comptage des mobilités - Fichier channel

Spécifications du fichier d'échange relatif aux comptages des mobilités : fichier channel.

Ce schéma est spécifique à la notion de channel.
La notion de "channel" a été introduite pour faire le lien entre la réalité immuable physique du site, et les mesures fournies par des "compteurs physiques".
Ce fichier définit les modalités techniques de comptage (types de pratiques mesurées, méthode utilisée pour récupérer les données), et permet de regrouper entre elles des mesures. À l’inverse, un channel ne définit pas d’identifiant physique du compteur, de façon volontaire.
Ceci permet de faire en sorte qu’un premier compteur physique émette des données sur un channel de 10h à 11h, puis qu’un deuxième compteur physique prenne le relais de 11h à 12h, sans changement du channel lui-même (continuité de la série temporelle des mesures).
Cette capacité permet notamment de gérer correctement:
- les changements de compteur physique (opération de maintenance, compteur défectueux, interruption temporaire)
- les réaffectations à un site différent de compteurs physiques, sous forme de "compteurs temporaires".

## Finalité

Ce schéma permet d'estimer la fréquentation d'infrastructures grâce à des données dynamiques de comptage.

Il doit être associé au schéma "site" et "measure" de comptage des mobilité. Il ne peut être réutilisé sans ces fichiers.

## Publication

Nous recommandons de publier le fichier channel dans le même jeu de données que les fichiers site et measure. Ces trois fichiers s'articulent entre eux par des identifiants.

## Fichiers d'exemple
Trois fichiers d'exemples sont fournis pour ce schéma :

- un fichier d'exemple `exemple-valide.csv` avec tous les champs remplis ;
- un fichier d'exemple `exemple-valide-eco-compteur.csv` élaboré par Eco-Compteur dont certaines valeurs optionnelles ne sont pas renseignées ;
- un fichier d'exemple invalide `exemple-invalide` qui contient des erreurs pour les champs "mobility_type" et "channel_id" .