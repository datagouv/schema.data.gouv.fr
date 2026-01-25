<MenuSchema />

<MenuSchema />

## prenoms

Prénoms des nouveaux-nés

Spécification du modèle de données relatif aux prénoms des nouveaux-nés déclarés à l’état-civil

- Schéma créé le : 12/04/2018
- Site web : https://gitlab.com/opendatafrance/scdl/prenoms
- Version : v1.1.6

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [COMMUNE_NOM](#nom-de-la-commune-d-enregistrement-a-l-etat-civil-propriete-commune-nom) | chaîne de caractères  | Non |
| [COLL_INSEE](#code-insee-de-la-commune-d-enregistrement-a-l-etat-civil-propriete-coll-insee) | chaîne de caractères  | Oui |
| [ENFANT_SEXE](#sexe-relatif-au-prenom-propriete-enfant-sexe) | chaîne de caractères  | Oui |
| [ENFANT_PRENOM](#prenom-propriete-enfant-prenom) | chaîne de caractères  | Oui |
| [NOMBRE_OCCURRENCES](#nombre-d-occurrences-propriete-nombre-occurrences) | nombre entier  | Oui |
| [ANNEE](#annee-propriete-annee) | année  | Oui |

#### Nom de la commune d'enregistrement à l'état-civil - Propriété `COMMUNE_NOM`

> *Description : Nom de la commune où les prénoms sont enregistrés à l'état-civil, c'est-à-dire le lieu de naissance. Le lieu de naissance peut être différent du lieu de résidence des parents, comme cela peut être le cas pour les enfants nés dans une maternité. Le renseignement de ce champ est facultatif. Il permet cependant de faciliter l'usage des données, notamment par le grand public.*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^(Le |La |Les |Los |Aux |L'|)([A-ZÉÇŒÈÎ])(((-| | - |')[A-ZÉÇŒÈÎ])|('|-| |)[a-zàâéèêëïîÿôûüœç])*( \([A-Z][a-z]*\)|)$`

#### Code INSEE de la commune d'enregistrement à l'état-civil - Propriété `COLL_INSEE`

> *Description : Code INSEE de la commune où les prénoms sont enregistrés à l'état-civil, c'est-à-dire le lieu de naissance. Issu du Code Officiel Géographique, le [code INSEE de la commune](https://fr.wikipedia.org/wiki/Code_Insee) est composé de 5 caractères alphanumériques (les deux premiers correspondent au département et peuvent donc contenir les lettres 'A' et 'B' utilisées pour la Corse).*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^([013-9]\d|2[AB1-9])\d{3}$`

#### Sexe relatif au prénom - Propriété `ENFANT_SEXE`

> *Description : Sexe correspondant au prénom, codé 'M' ou 'F' ou 'I', respectivement pour Masculin, Féminin ou Intersexué/Indéterminé. L'information est importante car certains prénoms sont aussi bien masculins que féminins, comme 'Camille'. 'I' signale un genre spécifiquement intersexué ou indéterminé et, contrairement à ce qu'il pourrait laisser penser, il ne mentionne pas un sexe inconnu. 'I' n'est théoriquement pas encore utilisé en France mais plusieurs pays ont créé un tel statut et de nombreux éléments suggèrent une évolution prochaine du droit en France.*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `M`
    - `F`
    - `I`

#### Prénom - Propriété `ENFANT_PRENOM`

> *Description : Prénom de nouveau(x)-né(s) constaté comme premier prénom dans les actes d'état-civil de l'année correspondante. Un acte de naissance peut désigner un nouveau-né avec plusieurs prénoms et le législateur a prévu que "[_tout prénom inscrit dans l'acte de naissance peut être choisi comme prénom usuel_](https://fr.wikipedia.org/wiki/Prénom_usuel)_"_. La plupart du temps le premier prénom est le prénom d'usage initialement choisi par le(s) parent(s). Cette spécification ne retient donc que le premier prénom : si un nouveau-né est appelé 'Armelle Julia Blanche', seul 'Armelle' sera retenu pour constituer ce jeu de données. Un prénom composé comme 'Marie-Jeanne' compte pour un prénom complet. Attention, "[_l'alphabet utilisé doit être celui qui sert à l'écriture du français. Les caractères alphabétiques étrangers ne sont donc pas autorisés (par exemple le « ñ »)_](https://www.demarches.interieur.gouv.fr/particuliers/choix-prenom-enfant)". Outre les caractères alphabétiques, un prénom peut posséder un trait d'union, voire deux, comme dans 'Lou-Anne' ou 'Mohamed-El-Amine'. Des prénoms peuvent posséder une apostrophe comme dans Gwenc'Hlan ou N'Deye, voire peut-être deux. Nous considérons aussi qu'un prénom pourrait se terminer, voire débuter, par une apostrophe - cette dernière étant parfois utilisée en français pour marquer la suppression de la finale ou le début d'un mot, comme dans Boul' Mich'.*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^'?[A-ZÉÀÈÙÄËÏÖÜŸÂÊÎÔÛŶÇŒÆ][a-zéàèùäëïüöÿâêîôûŷçæœ]*(|'|(('[A-ZÉÀÈÙÄËÏÖÜŸÂÊÎÔÛŶÇŒÆa-zéàèùäëïüöÿâêîôûŷçæœ][a-zéàèùäëïüöÿâêîôûŷçæœ]*'?){1,2}|(-[A-ZÉÀÈÙÄËÏÖÜŸÂÊÎÔÛŶÇŒÆ][a-zéàèùäëïüöÿâêîôûŷçæœ]*'?){1,2}){1,5})$`

#### Nombre d'occurrences - Propriété `NOMBRE_OCCURRENCES`

> *Description : Nombre d'occurrences du prénom pour l'année correspondante. Tous les prénoms sont comptabilisés, y compris les prénoms uniques - un seuil minimum est exclu car il conduirait à passer sous silence une importante part des naissances, voire la totalité dans les petites communes. La valeur de ce champ est donc un nombre entier d'1 à 6 chiffres maximum, 0 étant exclu.*
- Valeur obligatoire
- Type : nombre entier
- Valeur entre 1 et 999999

#### Année - Propriété `ANNEE`

> *Description : Année de relevé, sur quatre chiffres, au format AAAA.*
- Valeur obligatoire
- Type : année
