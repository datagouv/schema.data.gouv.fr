<MenuSchema />

## dispositif-aide

Dispositifs d'aides

Spécification du fichier d'échange relatif aux dispositifs d'aides.

- Schéma créé le : 14/03/2022
- Site web : https://github.com/etalab/schema-dispositif-aide
- Version : v0.1.0

### Modèle de données


##### Liste des propriétés

| Propriété | Type | Obligatoire |
| -- | -- | -- |
| [id](#identifiant-propriete-id) | chaîne de caractères (format `uuid`) | Oui |
| [titre](#titre-propriete-titre) | chaîne de caractères  | Oui |
| [promesse](#promesse-propriete-promesse) | chaîne de caractères  | Non |
| [description](#description-propriete-description) | chaîne de caractères  | Oui |
| [eligibilite](#criteres-d'eligibilite-propriete-eligibilite) | chaîne de caractères  | Oui |
| [types_aides](#types-d-aides-propriete-types-aides) | chaîne de caractères  | Oui |
| [porteurs](#porteurs-propriete-porteurs) | chaîne de caractères  | Oui |
| [programmes_parents](#programmes-parents-et-regime-d-aides-propriete-programmes-parents) | chaîne de caractères  | Non |
| [url_source](#url-source-propriete-url-source) | chaîne de caractères (format `uri`) | Non |
| [cibles](#beneficiaires-propriete-cibles) | chaîne de caractères  | Oui |
| [eligibilite_geographique](#couverture-geographique-de-l'aide-propriete-eligibilite-geographique) | chaîne de caractères  | Oui |
| [eligibilite_geographique_exclusions](#couverture-geographique-de-l'aide-exclusions-propriete-eligibilite-geographique-exclusions) | chaîne de caractères  | Non |
| [date_ouverture](#date-d'ouverture-propriete-date-ouverture) | date et heure  | Non |
| [date_cloture](#date-de-fin-propriete-date-cloture) | date et heure  | Non |
| [date_mise_a_jour](#date-de-derniere-mise-a-jour-propriete-date-mise-a-jour) | date et heure  | Oui |

#### Identifiant - Propriété `id`

> *Description : Identifiant unique du dispositif d'aide tel que défini par le porteur d’origine. Si vous ne disposez pas d'un identifiant ou n'avez pas connaissance de l'identifiant du porteur, vous pouvez en générer un à l’aide d’un service de génération d’UUID, par exemple: https://heidi.app.etalab.studio/*<br/>*Exemple : 65d5b6c7-102c-4440-ac3b-768f708edc0a*
- Valeur obligatoire
- Type : chaîne de caractères (format `uuid`)

#### Titre - Propriété `titre`

> *Description : Titre court, nom commercial du dispositif. Si pas de titre commercial clairement identifé, un titre générique du type 'Dispositif { opérateur principal }' peut être utilisé*<br/>*Exemple : Accélérateur décarbonation*
- Valeur obligatoire
- Type : chaîne de caractères

#### Promesse - Propriété `promesse`

> *Description : La promesse a pour objectif de : - résumer le dispositif de manière claire & simple en quelques mots - distinguer les offres les unes des autres. Formulation: - 6 à 15 mots. - La promesse commence par un verbe à l'impératif. - rédigée sous l'angle du bénéfice utilisateur, s'adressant à lui par le pluriel de politesse `vous` `votre entreprise` - pas de point à la fin de la promesse (sauf point d'exclamation)*<br/>*Exemple : Développez votre stratégie bas carbone et mettez en œuvre votre plan de transition*
- Valeur optionnelle
- Type : chaîne de caractères
- Moins de 180 caractères

#### Description - Propriété `description`

> *Description : L'objectif de cette description est qu'un agent public comprenne bien le dispositif. Pour communiquer efficacement vers les cibles, des descriptions avec des formats plus précis seront proposées dans des schéma annexes. Il est recommandé d’indiquer les montants ou volumes typiques des aides présentées. Taille limite du champ : 5000 caractères*<br/>*Exemple : Le Futsal fait l'objet aujourd'hui d'un véritable plan de développement à la FFF L'une des orientations fédérales vise à doter les clubs amateurs de terrains spécifiques extérieurs. En effet, l'accès aux salles et aux gymnases étant très difficile pour les clubs de football, compte tenu de la saturation des créneaux d'utilisation, la FFF propose aux collectivités locales, propriétaires des installations sportives, une solution extérieure à moindre coût. Elle doit permettre aux clubs de football de développer une activité Futsal à travers leur école de football ou une section spécifique, sans remettre en cause l'activité même des sports exclusivement de salle. Cette solution technique, qui dans la majorité des cas pourra se substituer à un plateau multisports existant et obsolète, offre de plus aux collectivités davantage de possibilités d'utilisation, notamment pour la pratique scolaire. La FFF souhaite donc accompagner la construction de terrains dédiés au sein des clubs amateurs, avec pour objectif de permettre la diversification de leur offre de pratique en proposant une activité nouvelle à leurs licenciés.*
- Valeur obligatoire
- Type : chaîne de caractères
- Moins de 5000 caractères

#### Critères d’éligibilité - Propriété `eligibilite`

> *Description : Ces critères d’éligibilité ont pour vocations d'être lus et compris par des agents publics. Pour cibler automatiquement et efficacement vers les cibles, des critères d'éligibilité avec des formats plus précis seront proposées dans des schéma annexes. Renseigner ces critères d'éligibilité sous forme d'une liste de bullet points et dans la mesure du possible, ne mettre qu'un critère par item de la liste.*<br/>*Exemple : • Le porteur du projet doit être, soit un club affilié à la F.F.F., soit une collectivité locale en collaboration avec un club support affilié à la F.F.F. ; 
 • Le terrain doit être conforme au cahier des charges technique fédéral relatif à la réalisation d'un terrain de Futsal extérieur – Edition avril 2017; 
• La date de commencement des travaux ne doit pas être antérieure de plus de 3 mois à celle du dépôt du dossier au District d'appartenance ; 
 • L'équipement projeté doit être situé obligatoirement au sein d'un complexe sportif utilisé par le club support dont au moins une installation est classée au niveau 6 minimum ou adossé à un gymnase classé futsal 4 minimum équipé de deux vestiaires de minimum chacun 14 m2, douches et sanitaires avec un accès direct piétons ; 
 • Le porteur de projet doit impérativement présenter un projet d'utilisation des installations envisagées dans le respect des attentes de la F.F.F. ; 
 • Le maître d'ouvrage doit réaliser son opération dans un délai de 24 mois à compter de la date d'attribution de la subvention par le Bureau Exécutif de la Ligue du Football Amateur*
- Valeur obligatoire
- Type : chaîne de caractères

#### Types d'aides - Propriété `types_aides`

> *Description : Types d'aides disponibles via le dispositif décrit. Les valeurs possibles sont restreintes à la liste disponible dans le document grist dédié à la gestion du schéma : https://grist.numerique.gouv.fr/o/docs/uC2J5niqzb48/Gestion-des-schemas-des-dispositifs-daide/p/5. L'approche utilisée pour l'instant est celle d'une liste itérative. Si les valeurs présentent dans la table ne sont pas adaptées au dispositif ajouté, sentez vous libre d'ajouter de nouvelles valeurs. Format : valeurs autorisées séparées par des pipes : valeur1|valeur2 .*<br/>*Exemple : information|financement*
- Valeur obligatoire
- Type : chaîne de caractères

#### Porteurs - Propriété `porteurs`

> *Description : Liste des acteurs impliqués dans la mise en oeuvre du dispositif ainsi que leurs rôles. Format : { nom , siren, rôles[] } [] La liste des rôles est disponible dans la table dédiée : https: //grist.numerique.gouv.fr/o/docs/uC2J5niqzb48/Gestion-des-schemas-des-dispositifs-daide/p/7.La liste des noms déjà utilisés ainsi que leurs SIREN doit être tenue à jour dans la table dédiée pour éviter les doublons : https://grist.numerique.gouv.fr/o/docs/uC2J5niqzb48/Gestion-des-schemas-des-dispositifs-daide/p/6. Si possible, le nom et le Siren doivent être identiques à ceux renvoyés par l'API recherche entreprise.*<br/>*Exemple : [{ nom: 'ADEME', siren: '385290309', roles: [ 'instructeur' ]}, { nom: 'BPIFRANCE (BPIFRANCE)', siren: '320252489', roles: [ 'financeur' ]}]*
- Valeur obligatoire
- Type : chaîne de caractères

#### Programmes parents et régime d'aides - Propriété `programmes_parents`

> *Description : Programmes parents et régimes d'aides auxquels appartiennent le dispositif. La liste des valeurs déjà utilisées doit être tenue à jour dans la table dédiée pour éviter les doublons : https://grist.numerique.gouv.fr/o/docs/uC2J5niqzb48/Gestion-des-schemas-des-dispositifs-daide/p/11 . Format : valeurs autorisées séparées par des pipes : valeur1|valeur2 *<br/>*Exemple : Fonds Chaleur|Fonds vert 2024*
- Valeur optionnelle
- Type : chaîne de caractères

#### URL Source - Propriété `url_source`

> *Description : Lien permettant d'obtenir plus d'informations sur le dispositif. L'ajout d'un lien n'est pas obligatoire car certains dispositifs n'en disposent pas mais est très fortement recommandé*<br/>*Exemple : https://agirpourlatransition.ademe.fr/entreprises/aides-financieres/2023/audit-energetique-industrie*
- Valeur optionnelle
- Type : chaîne de caractères (format `uri`)

#### Bénéficiaires - Propriété `cibles`

> *Description : Grandes catégories de bénéficiaires ciblés par le dispositif. A choisir entre les quatres valeurs suivantes : professionnels ; particuliers ; associations ; secteur public . Format : valeurs autorisées séparées par des pipes : valeur1|valeur2 *<br/>*Exemple : professionnels|associations*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^(professionnels|particuliers|associations|secteur public)(\|(professionnels|particuliers|associations|secteur public))*$`

#### Couverture géographique de l’aide - Propriété `eligibilite_geographique`

> *Description : Couverture géographique du dispositif. Champ à écrire en utilisant le formalisme du Code Officiel Géographique du COG : https://www.insee.fr/fr/information/5230987. Séparer chaque code COG par des pipes*<br/>*Exemple : PAYS-99100 pour la France entière    OU    REG-84|DEP-05 pour la région Auvergne-Rhône-Alpes et le département des Hautes-Alpes*
- Valeur obligatoire
- Type : chaîne de caractères
- Motif : `^[A-Z]+-\d+(\|[A-Z]+-\d+)*$`

#### Couverture géographique de l’aide - exclusions - Propriété `eligibilite_geographique_exclusions`

> *Description : Aires géographique exclues du dispositif. Cette propriété a précédence sur les "eligibilite_geographique" s'il y a recouvrement. Champ à écrire en utilisant le formalisme du Code Officiel Géographique : https: //www.insee.fr/fr/information/5230987. Séparer chaque code COG par des pipes.*<br/>*Exemple : DEP-01|COM-83141*
- Valeur optionnelle
- Type : chaîne de caractères
- Motif : `^[A-Z]+-\d+(\|[A-Z]+-\d+)*$`

#### Date d’ouverture - Propriété `date_ouverture`

> *Description : Date d'ouverture du dispositif d'aides. Format ISO 8601*<br/>*Exemple : 2025-10-15T15:00:00Z*
- Valeur optionnelle
- Type : date et heure

#### Date de fin - Propriété `date_cloture`

> *Description : Date de cloture du dispositif d'aides. Format ISO 8601*<br/>*Exemple : 2025-10-15T15:00:00Z*
- Valeur optionnelle
- Type : date et heure

#### Date de dernière mise à jour - Propriété `date_mise_a_jour`

> *Description : Dernière date de mise à jour de l’aide dans les données, au format ISO 8601. Champ à remplissage automatique dans la majorité des cas d'usage.*<br/>*Exemple : 2025-10-15T15:00:00Z*
- Valeur obligatoire
- Type : date et heure
