<MenuSchema />

<MenuSchema />

## catalogue

Catalogue simplifié

Spécification du modèle de données relatif au catalogue des jeux de données publiés en open data par une collectivité

- Schéma créé le : 20/11/2018
- Site web : https://gitlab.com/opendatafrance/scdl/catalogue
- Version : 0.1.3

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [COLL_NOM](#nom-de-la-collectivite-propriete-coll-nom) | chaîne de caractères  | Oui |
| [COLL_SIRET](#code-siret-de-la-collectivite-propriete-coll-siret) | chaîne de caractères  | Oui |
| [ID](#identifiant-du-jeu-de-donnee-propriete-id) | chaîne de caractères  | Oui |
| [TITRE](#titre-du-jeu-de-donnees-propriete-titre) | chaîne de caractères  | Oui |
| [DESCRIPTION](#description-du-jeu-de-donnees-propriete-description) | chaîne de caractères  | Oui |
| [THEME](#theme-du-jeu-de-donnees-propriete-theme) | chaîne de caractères  | Oui |
| [PRODUCTEUR_NOM](#nom-du-producteur-propriete-producteur-nom) | chaîne de caractères  | Oui |
| [PRODUCTEUR_SIRET](#code-siret-du-producteur-propriete-producteur-siret) | chaîne de caractères  | Oui |
| [COUV_SPAT_MAILLE](#maille-de-couverture-spatiale-propriete-couv-spat-maille) | chaîne de caractères  | Oui |
| [COUV_SPAT_NOM](#nom-de-couverture-spatiale-propriete-couv-spat-nom) | chaîne de caractères  | Oui |
| [COUV_TEMP_DEBUT](#date-de-debut-de-la-couverture-temporelle-propriete-couv-temp-debut) | date  | Oui |
| [COUV_TEMP_FIN](#date-de-fin-de-la-couverture-temporelle-propriete-couv-temp-fin) | date  | Oui |
| [DATE_PUBL](#date-de-la-premiere-publication-propriete-date-publ) | date  | Oui |
| [FREQ_MAJ](#frequence-de-la-mise-a-jour-propriete-freq-maj) | chaîne de caractères  | Oui |
| [DATE_MAJ](#date-de-la-derniere-mise-a-jour-propriete-date-maj) | date  | Oui |
| [MOTS_CLES](#mots-cles-propriete-mots-cles) | chaîne de caractères  | Oui |
| [LICENCE](#licence-appliquee-sur-le-jeu-de-donnees-propriete-licence) | chaîne de caractères  | Oui |
| [NOMBRE_RESSOURCES](#nombre-de-ressource(s)-propriete-nombre-ressources) | nombre entier  | Oui |
| [FORMAT_RESSOURCES](#format(s)-des-ressources-propriete-format-ressources) | chaîne de caractères  | Oui |
| [URL](#url-d-acces-propriete-url) | chaîne de caractères (format `uri`) | Oui |

#### Nom de la collectivité - Propriété `COLL_NOM`

> *Description : Nom officiel de la collectivité qui publie le catalogue simplifié de jeux de données limité à 140 caractères maximum.*<br/>*Exemple : Rennes Métropole*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET de la collectivité - Propriété `COLL_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) de la collectivité qui publie le catalogue simplifié de jeux de données, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*<br/>*Exemple : 24350013900189*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Identifiant du jeu de donnée - Propriété `ID`

> *Description : Cet identifiant est une chaîne de caractères qui correspond soit au nom du jeu de données, exprimé en minuscules sans accent ni espace (identifiant texte ou 'slug'), soit à un code d'identification généré automatiquement (identifiant machine ou 'hash').*<br/>*Exemple : prenoms-des-nouveaux-nes-a-rennes-en-2017 ou 53699116a3a729239d203b7f*
- Valeur obligatoire
- Type : chaîne de caractères

#### Titre du jeu de données - Propriété `TITRE`

> *Description : Ce titre doit être un intitulé caractéristique et univoque permettant de désigner le jeu de données. Il est recommandé d'y faire figurer une indication de la zone géographique couverte et, lorsqu'elle se justifie, une indication de version ou de millésime.*<br/>*Exemple : Prénoms des nouveaux-nés à Rennes en 2017*
- Valeur obligatoire
- Type : chaîne de caractères

#### Description du jeu de données - Propriété `DESCRIPTION`

> *Description : Cette description doit fournir un bref résumé narratif du contenu du jeu de données, rédigé de façon compréhensible pour l’utilisateur.*<br/>*Exemple : Liste annuelle des prénoms des nouveaux-nés enregistrés à l'état-civil de la ville de Rennes pour l'année 2017.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Thème du jeu de données - Propriété `THEME`

> *Description : En l'absence d'une nomenclature de classement par thèmes satisfaisante et adaptée au contexte local, le thème est exprimé sous la forme d'une chaîne de caractères libre dans la limite de 140 caractères maximum. Le manque de pertinence du [thésaurus EuroVoc](https://publications.europa.eu/fr/web/eu-vocabularies/th-dataset/-/resource/dataset/eurovoc) ou des [thèmes INSPIRE](https://inspire.ec.europa.eu/Themes/Data%20Specifications/2892) implique d'élaborer collectivement une [nomenclature spécifique](https://docs.google.com/document/d/1oDJsHw3bmABfto6HPgCPG1ztrV3CihuHjcfU8tQpvPc/) à partir d'un appariement des termes les plus utilisés sur les plateformes territoriales de données ouvertes.*<br/>*Exemple : Administration locale*
- Valeur obligatoire
- Type : chaîne de caractères

#### Nom du producteur - Propriété `PRODUCTEUR_NOM`

> *Description : Nom officiel ou raison sociale du producteur du jeu de données limité à 140 caractères maximum.*<br/>*Exemple : Ville de Rennes*
- Valeur obligatoire
- Type : chaîne de caractères

#### Code SIRET du producteur - Propriété `PRODUCTEUR_SIRET`

> *Description : Identifiant du [Système d'Identification du Répertoire des Etablissements](https://fr.wikipedia.org/wiki/Syst%C3%A8me_d%27identification_du_r%C3%A9pertoire_des_%C3%A9tablissements) (SIRET) du producteur du jeu de données, composé de 9 chiffres SIREN + 5 chiffres NIC d’un seul tenant.*<br/>*Exemple : 21350238800019*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^\d{14}$`

#### Maille de couverture spatiale - Propriété `COUV_SPAT_MAILLE`

> *Description : La maille de couverture spatiale correspond à l'echelle territoriale que couvre le jeu de données. Pour simplifier le renseignement de ce champ, elle est désignée en choisissant une valeur parmi une liste pré-établie de valeurs possibles : 'Infracommunale', 'Communale', 'Intercommunale', 'Cantonale', 'Départementale', 'Régionale' ou 'Autre'.*<br/>*Exemple : Communale*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Infracommunale`
    - `Communale`
    - `Intercommunale`
    - `Cantonale`
    - `Départementale`
    - `Régionale`
    - `Autre`

#### Nom de couverture spatiale - Propriété `COUV_SPAT_NOM`

> *Description : Le nom de couverture spatiale correspond au nom de l'échelle territoriale que couvre le jeu de données. Il est exprimé sous la forme d'une chaîne de caractères limitée à 140 caractères maximum.*<br/>*Exemple : Rennes*
- Valeur obligatoire
- Type : chaîne de caractères

#### Date de début de la couverture temporelle - Propriété `COUV_TEMP_DEBUT`

> *Description : La couverture temporelle correspond à la période que couvre le jeu de données. Cette période est un intervalle entre deux dates. La date de début est donc le premier terme utilisé pour désigner cet intervalle, exprimé au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2017-01-01*
- Valeur obligatoire
- Type : date

#### Date de fin de la couverture temporelle - Propriété `COUV_TEMP_FIN`

> *Description : La couverture temporelle correspond à la période que couvre le jeu de données. Cette période est un intervalle entre deux dates. La date de fin est donc le second terme utilisé pour désigner cet intervalle, exprimé au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2017-12-31*
- Valeur obligatoire
- Type : date

#### Date de la première publication - Propriété `DATE_PUBL`

> *Description : Date de la publication initiale du contenu du jeu de données. Elle est exprimée au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2017-06-01*
- Valeur obligatoire
- Type : date

#### Fréquence de la mise à jour - Propriété `FREQ_MAJ`

> *Description : La fréquence de mise à jour correspond à la périodicité suivant laquelle des modifications sont apportées au jeu de données. Pour simplifier le renseignement de ce champ, elle est désignée en choisissant une valeur parmi une liste pré-établie de valeurs possibles : 'Inconnue', 'Ponctuelle', 'Irrégulière', 'Continuelle', 'Toutes les heures', 'Quotidienne ou plusieurs fois par jour', 'Hebdomadaire ou plusieurs fois par semaine', 'Mensuelle ou plusieurs fois par mois', 'Bimestrielle', 'Trimestrielle', 'Semestrielle', 'Annuelle', 'Biennale', 'Triennale', ou 'Quinquennale'.*<br/>*Exemple : Semestrielle*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Inconnue`
    - `Ponctuelle`
    - `Irrégulière`
    - `Continuelle`
    - `Toutes les heures`
    - `Quotidienne ou plusieurs fois par jour`
    - `Hebdomadaire ou plusieurs fois par semaine`
    - `Mensuelle ou plusieurs fois par mois`
    - `Bimestrielle`
    - `Trimestrielle`
    - `Semestrielle`
    - `Annuelle`
    - `Biennale`
    - `Triennale`
    - `Quinquennale`

#### Date de la dernière mise à jour - Propriété `DATE_MAJ`

> *Description : Date de la dernière modification effective du contenu du jeu de données. Elle est exprimée au format AAAA-MM-JJ suivant la norme internationale [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601).*<br/>*Exemple : 2018-01-14*
- Valeur obligatoire
- Type : date

#### Mots clés - Propriété `MOTS_CLES`

> *Description : Un ou plusieurs mot(s) clé(s) utilisé(s) pour décrire le jeu de données en minuscules non accentuées. S'il y en a plusieurs, le séparateur est le point-virgule.*<br/>*Exemple : scdl;prenoms;etat-civil*
- Valeur obligatoire
- Type : chaîne de caractères

#### Licence appliquée sur le jeu de données - Propriété `LICENCE`

> *Description : Désignation de la licence qui encadre la réutilisation du jeu de données. En France, le [décret n° 2017-638 du 27 avril 2017](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000034502557) restreint le choix exclusivement à deux licences. D'autres sont néanmoins utilisées par quelques producteurs ou acteurs territoriaux pour encadrer la réutilisation de certains jeux de données. Pour simplifier le renseignement de ce champ, la licence du jeu de données est désignée en choisissant une valeur parmi une liste pré-établie de valeurs possibles : 'Licence Ouverte-LO', 'Open Database License-ODBL', 'Creative Commons-CC', 'Spécifique ou autre'.*<br/>*Exemple : Licence Ouverte-LO*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Licence Ouverte-LO`
    - `Open Database License-ODBL`
    - `Creative Commons-CC`
    - `Spécifique ou autre`

#### Nombre de ressource(s) - Propriété `NOMBRE_RESSOURCES`

> *Description : Nombre de ressource(s) mise(s) à disposition dans le jeu de données.*<br/>*Exemple : 3*
- Valeur obligatoire
- Type : nombre entier
- Valeur supérieure à 1

#### Format(s) des ressources - Propriété `FORMAT_RESSOURCES`

> *Description : Format(s) dans le(s)quel(s) la (ou les) ressource(s) du jeu de données est (sont) mise(s) à disposition. Ce(s) format(s) est (sont) exprimé(s) en minuscules non accentuées. S'il y en a plusieurs, le séparateur est le point-virgule.*<br/>*Exemple : csv;xls;json*
- Valeur obligatoire
- Type : chaîne de caractères

#### URL d'accès - Propriété `URL`

> *Description : Cet élément fournit un lien, une adresse web la plus stable possible, vers la page du jeu de données (ou de la ressource si le jeu de données n'en comprend qu'une) et/ou vers des informations complémentaires le concernant.*<br/>*Exemple : https://data.rennesmetropole.fr/explore/dataset/prenoms-des-nouveaux-nes-a-rennes-en-2017*
- Valeur obligatoire
- Type : chaîne de caractères (format `uri`)
