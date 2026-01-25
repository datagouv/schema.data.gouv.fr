<MenuSchema />

<MenuSchema />

## dispositif-aide

Dispositifs d'aides

Spécification du fichier d'échange relatif aux dispositifs d'aides.

- Schéma créé le : 14/03/2022
- Site web : https://github.com/etalab/schema-dispositif-aide
- Version : 0.0.1

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id_aide](#propriete-id-aide) | chaîne de caractères  | Oui |
| [nom_aide](#propriete-nom-aide) | chaîne de caractères  | Non |
| [nom_aide_normalise](#propriete-nom-aide-normalise) | chaîne de caractères  | Oui |
| [programme_aides](#propriete-programme-aides) | chaîne de caractères  | Non |
| [porteur_aide](#propriete-porteur-aide) | chaîne de caractères  | Oui |
| [porteur_siren](#propriete-porteur-siren) | chaîne de caractères  | Oui |
| [instructeurs_aide](#propriete-instructeurs-aide) | chaîne de caractères  | Non |
| [beneficiaires_aide](#propriete-beneficiaires-aide) | chaîne de caractères  | Oui |
| [types_aides](#propriete-types-aides) | chaîne de caractères  | Oui |
| [taux_subvention_minimum](#propriete-taux-subvention-minimum) | nombre réel  | Non |
| [taux_subvention_maximum](#propriete-taux-subvention-maximum) | nombre réel  | Non |
| [taux_subvention_commentaire](#propriete-taux-subvention-commentaire) | chaîne de caractères  | Non |
| [aap_ami](#propriete-aap-ami) | booléen  | Non |
| [description](#propriete-description) | chaîne de caractères  | Oui |
| [exemple_projet](#propriete-exemple-projet) | chaîne de caractères  | Non |
| [thematique_aide](#propriete-thematique-aide) | chaîne de caractères  | Oui |
| [recurrence_aide](#propriete-recurrence-aide) | chaîne de caractères  | Oui |
| [date_ouverture](#propriete-date-ouverture) | date (format `%Y-%m-%d`) | Non |
| [date_pre_depot](#propriete-date-pre-depot) | date (format `%Y-%m-%d`) | Non |
| [date_cloture](#propriete-date-cloture) | date (format `%Y-%m-%d`) | Non |
| [condition_eligibilite](#propriete-condition-eligibilite) | chaîne de caractères  | Non |
| [etat_avancement_projet](#propriete-etat-avancement-projet) | chaîne de caractères  | Non |
| [type_depense](#propriete-type-depense) | chaîne de caractères  | Non |
| [zone_geographique](#propriete-zone-geographique) | chaîne de caractères  | Oui |
| [url_descriptif](#propriete-url-descriptif) | chaîne de caractères (format `uri`) | Non |
| [url_demarche](#propriete-url-demarche) | chaîne de caractères (format `uri`) | Non |
| [contact](#propriete-contact) | chaîne de caractères  | Oui |
| [date_mise_a_jour](#propriete-date-mise-a-jour) | date (format `%Y-%m-%d`) | Non |

#### Propriété `id_aide`

> *Description : ID de l'aide. Identifiant local de l'aide du porteur (unique pour le porteur). Si vous ne disposez pas d'un identifiant, vous pouvez en générer un sur https://heidi.app.etalab.studio/*<br/>*Exemple : 65d5b6c7-102c-4440-ac3b-768f708edc0a*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `nom_aide`

> *Description : Nom de l'aide. Nom d'origine de l'aide par le porteur*<br/>*Exemple : Soutenir et expérimenter des initiatives de transition citoyenne d’intérêt collectif*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `nom_aide_normalise`

> *Description : Nom de l'aide normalisé. Le titre doit commencer par un verbe à l’infinitif pour que l'objectif de l'aide soit explicite. Texte limité à 180 caractères*<br/>*Exemple : Soutenir et expérimenter des initiatives de transition citoyenne d’intérêt collectif*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 180 caractères

#### Propriété `programme_aides`

> *Description : Programme(s) auquel se réfère l'aide. Si aucun programme, ne pas remplir ce champs. S'il y a plusieurs programmes, mettre une virgule sans espace entre les différents programmes.*<br/>*Exemple : France Relance,FSE - Fonds social européen*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `porteur_aide`

> *Description : Porteur(s) de l'aide. S'il y a plusieurs porteurs, mettre une virgule sans espace entre les différents porteurs..*<br/>*Exemple : Conseil départemental de la Nièvre,ADEME*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `porteur_siren`

> *Description : Numéro SIREN du/des porteur(s) de l'aide. S'il y a plusieurs porteurs, mettre une virgule sans espace entre les différents porteurs.*<br/>*Exemple : Conseil départemental de la Nièvre,ADEME*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(?:[^,]{9},)*[^,]{9}$`

#### Propriété `instructeurs_aide`

> *Description : Instructeurs de l'aide. S'il y a plusieurs instructeurs, mettre une virgule sans espace entre les différents instructeurs.*<br/>*Exemple : Conseil départemental de la Nièvre,ADEME*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `beneficiaires_aide`

> *Description : Liste des bénéficiaires possibles. S'il y a plusieurs bénéficiaires, mettre une virgule sans espace entre les différents bénéficiaires. Bénéficiaire à sélectionner parmi la liste suivante : "Communes", "EPCI à fiscalité propre", "Départements", "Régions", "Associations", "Particuliers", "Agriculteurs", "Entreprises privées", "Entreprises publiques locales (Sem, Spl, SemOp)", "Établissements publics - Services de l'État", "Recherche"*<br/>*Exemple : Communes,Départements*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Communes|EPCI à fiscalité propre|Départements|Régions|Associations|Particuliers|Agriculteurs|Entreprises privées|Entreprises publiques locales \(Sem, Spl, SemOp\)|Établissements publics - Services de l'État|Recherche))+$`

#### Propriété `types_aides`

> *Description : Liste des types d'aides possibles. S'il y a plusieurs types d'aides, mettre une virgule sans espace entre les différents types d'aides. "Subvention", "Prêt", "Avance récupérable", "Autre". Si aide en ingénierie : "Technique", "Financière", "Administrative"*<br/>*Exemple : Subvention,Autre*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Subvention|Prêt|Avance récupérable|Autre|Technique|Financière|Administrative))+$`

#### Propriété `taux_subvention_minimum`

> *Description : Taux de subvention minimum (en pourcentage, nombre entier).*<br/>*Exemple : 30*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `taux_subvention_maximum`

> *Description : Taux de subvention maximum (en pourcentage, nombre entier).*<br/>*Exemple : 70*
- Valeur optionnelle
- Type : nombre réel
- Valeur inférieure à : 100

#### Propriété `taux_subvention_commentaire`

> *Description : Commentaire sur les taux de subventions.*<br/>*Exemple : Le taux minimum est soumis à condition.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `aap_ami`

> *Description : S'agit-il d'un appel à projets (AAP) ou d'un appel à manifestation d'intérêt (AMI) ? Oui ou Non*<br/>*Exemple : Oui*
- Valeur optionnelle
- Type : booléen

#### Propriété `description`

> *Description : Description complète de l'aide et de ses objectifs.*<br/>*Exemple : Dispositif de certificats d'économies d'énergie (CEE). Changer l'attitude et le comportement des citoyens vis-à-vis de leur mobilité, plus particulièrement dans les villes de taille moyenne, en incitant à créer des solutions intelligentes en matière de mobilité afin de réduire les consommations énergétiques dues au transport, à travers la mise en œuvre d'un agrégateur territorial à La Rochelle et d'une coopérative locale permettant d'évaluer, vérifier et garantir les réductions de la consommation énergétique associée via les mesures systémiques suivantes pour réussir le passage à l'acte des citoyens.*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `exemple_projet`

> *Description : Exemples d'applications ou de projets réalisés grâce à cette aide.*<br/>*Exemple : Déploiement de services connectés dans un EHPAD à Auzières.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `thematique_aide`

> *Description : Thématique et sous-thématique de l'aide. S'il y a plusieurs thématiques, mettre un point-virgule sans espace entre les différentes thématiques. Pour décrire les thématiques et sous-thématiques, mettre un signe supérieur > entre les thématiques et sous-thématiques*<br/>*Exemple : Thématique A > Sous-Thématique AA > Sous-Thématique AAA,Thématique B > Sous-Thématique BB*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `recurrence_aide`

> *Description : Liste des récurrences de l'aide. Trois options : "Permanente" = sans calendrier de candidature, "Ponctuelle" = lancée une seule fois, "Récurrente" = ayant vocation à être relancée plusieurs fois. Choix unique.*<br/>*Exemple : Ponctuelle*
- Valeur obligatoire
- Type : chaîne de caractères
- Valeurs autorisées : 
    - `Permanente`
    - `Ponctuelle`
    - `Récurrente`

#### Propriété `date_ouverture`

> *Description : Date d'ouverture de l'aide. Format YYYY-MM-DD (Année-Mois-Jour)*<br/>*Exemple : 2022-03-03*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `date_pre_depot`

> *Description : Date de pré-dépôt de l'aide. Format YYYY-MM-DD (Année-Mois-Jour)*<br/>*Exemple : 2022-03-03*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `date_cloture`

> *Description : Date de cloture de l'aide. Format YYYY-MM-DD (Année-Mois-Jour)*<br/>*Exemple : 2022-03-03*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)

#### Propriété `condition_eligibilite`

> *Description : Conditions d'éligibilité.*<br/>*Exemple : Réservé aux communes de moins de 2000 habitants.*
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété `etat_avancement_projet`

> *Description : État d'avancement du projet pour bénéficier du dispositif. Trois options : "Réflexion - conception", "Mise en oeuvre - réalisation", "Usage - valorisation". S'il y a plusieurs états d'avancement, mettre une virgule sans espace entre les différents types d'états d'avancement.*<br/>*Exemple : Mise en oeuvre - réalisation,Usage - valorisation*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Réflexion - conception|Mise en oeuvre - réalisation|Usage - valorisation))+$`

#### Propriété `type_depense`

> *Description : Liste des types de dépenses. Deux options : "Fonctionnement", "Investissement". S'il y a plusieurs types de dépenses, mettre une virgule sans espace entre les différents types de dépense.*<br/>*Exemple : Fonctionnement,Investissement*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `(?:(?:^|,)(Fonctionnement|Investissement))+$`

#### Propriété `zone_geographique`

> *Description : Zone géographique couverte par l'aide.*<br/>*Exemple : Tarn*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `url_descriptif`

> *Description : Lien vers le descriptif complet.*<br/>*Exemple : https://aides-territoires.beta.gouv.fr/aides/7ee8-creer-un-agregateur-territorial-a-la-rochelle*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `url_demarche`

> *Description : Lien vers la démarche en ligne.*<br/>*Exemple : https://aides-territoires.beta.gouv.fr/aides/7ee8-creer-un-agregateur-territorial-a-la-rochelle*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Propriété `contact`

> *Description : Contact(s) pour candidater.*<br/>*Exemple : Ecrire un email à aides@programme.gouv.fr*
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété `date_mise_a_jour`

> *Description : Date de mise à jour du jeu de données.*<br/>*Exemple : 2022-03-03*
- Valeur optionnelle
- Type : date (format `%Y-%m-%d`)
