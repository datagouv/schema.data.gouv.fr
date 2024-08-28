<MenuSchema />

## test-schema-hydrometrie

Hydrométrie

Spécification du schéma de données du Sandre pour l'hydrométrie

- Site web : https://github.com/Pierlou/test-schema-hydrometrie
- Version : 0.1.0

### Arborescence des propriétés :

#### Propriété hydrometrie
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Scenario
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>


#### Propriété Emetteur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Service
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Destinataire
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Service
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Contexte
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété RefHyd
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Intervenants
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Intervenant
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>



#### Propriété Commune
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété VersionReferentiel
> *Description : Chacun des divers aspects que peut prendre un même jeu de données au cours du temps. En théorie, une mise à jour mineure ou majeure sur tout ou partie d'un jeu de données produit une nouvelle version de ce jeu. En pratique, il arrive qu'un jeu de donnés subissent des évolutions sans changement de version. La date de mise à jour du jeu de donnée est en revanche systématiquement renseignée pour signaler la ou les mise(s) à jour tracée(s) par ailleurs dans la généalogie.*<br>
- Valeur optionnelle

#### Propriété SourceReferentiel
> *Description : Origine du jeu de données qui a permis la constitution du jeu de données Sandre (i.e référentiel). La source du référentiel prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°633. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:633::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété Contacts
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Contact
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ProfilsAdminLocal
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ProfilAdminLocal
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdProfilAdminLocal
> *Description : Identifiant du rôle assumé par l'administrateur (ie.contact) vis à vis d'une zone hydrographique. Le code du profil de l'administrateur prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°539.       cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:539::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété ZonesHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ZoneHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété DtActivationProfilAdminLocal
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le profil de l'administrateur (ie.contact)  vis à vis d'une zone hydrographique est actif.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationProfilAdminLocal
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le profil de l'administrateur (ie.contact)  vis à vis d'une zone hydrographique est inactif.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété AliasContact
> *Description : Diminutif visant à identifier un contact. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer que l'alias du contact est unique pour tous les contacts.*<br>
- Valeur optionnelle

#### Propriété MotPassContact
> *Description : Code composé de lettres et/ou de chiffres visant à vérifier l'identité d'un contact. Il est vivement recommandé de respecter des conventions d'écriture d'un mot de passe pour des raisons de sécurité informatique.*<br>
- Valeur optionnelle

#### Propriété DtActivationContact
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle les identifiants (cf. alias et mots de passe) d'un contact sont activés.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationContact
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle les identifiants (cf. alias et mots de passe) d'un contact sont désactivés.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PaysComplementIntervenant
> *Description : Territoire d'une nation délimitée par des frontières et constituant une entité géographique, auquel appartient l'intervenant sur le plan géographique.  Chaque pays est identifié par un code à 2 chiffres selon la norme ISO 3166-1 alpha2. La liste des valeurs possibles est définie dans la nomenclature n°678. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:678::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété AdEtrangereComplementIntervenant
> *Description : Désigne les coordonnées postales étrangères où réside l'intervenant.*<br>
- Valeur optionnelle

#### Propriété TelephoneComplementIntervenant
> *Description : Numéro de téléphone complet d'un intervenant (avec code des pays pour l'international ou les DOM) exprimé dans le format d'origine. Le téléphone de l'intervenant relève de la responsabilité de l'organisme ayant saisi les informations, gestionnaire de la liste des intervenants.*<br>
- Valeur optionnelle

#### Propriété FaxComplementIntervenant
> *Description : Numéro de télécopie complet d'un intervenant (avec code des pays pour l'international ou les DOM) exprimé dans le format d'origine. Le fax de l'intervenant relève de la responsabilité de l'organisme ayant saisi les informations, gestionnaire de la liste des intervenants.*<br>
- Valeur optionnelle

#### Propriété SiteWebComplementIntervenant
> *Description : Adresse logique où l'on trouve un site internet d'un intervenant au sein du Web.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SitesHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété LbSiteHydro
> *Description : Chaque site hydrométrique possède un intitulé à des fins d'identification rapide et de reprise dans la plupart des références. Il est établi de la manière suivante : - article et nom du cours d'eau, - précision sur le cours d'eau entre crochets (canal, bras rive gauche, dérivation, ...), - à (au, aux) - nom de la ou des communes (définition INSEE avec l'utilisation impérative de 'St', 'Ste' et 'Stes' pour Saint, Sainte et Saintes) - lieu-dit ou complément du nom,entre crochets  (cf. attribut correspondant).  Exemple : - La Seine à Paris [Pont d'Austerlitz], - La Doller [totale] à Burnhaubt-le-Haut [Pont d'Aspach], - Le Roder à Schweighoure sur Roder [amont], - Le Couzou à Courpière [Le Salet], - La Choisille [bras sud] à Mettray, - La Vienne à Limoges et au Palais-sur-Vienne - Le ru d'Elancourt à Jouars-Pontchartrain [Chemevières].  L'intitulé du site relève de la responsabilité du producteur.*<br>
- Valeur optionnelle

#### Propriété LbUsuelSiteHydro
> *Description : Nom commun désignant un site hydrométrique. Le libellé usuel du site hydrométrique ne répond à aucune convention d'écriture.*<br>
- Valeur optionnelle

#### Propriété TypSiteHydro
> *Description : Catégorie de site hydrométrique présentant des caractéristiques communes. Le type de site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°530. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:530::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété PrecisionTypSiteHydro
> *Description : Précision complémentaire apporté au type de site hydrométrique. La précision du type de site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°972.     cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:972::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété MnSiteHydro
> *Description : Symbole ou signe désignant un site hydrométrique. Le mnémonique du site hydrométrique du site hydrométrique ne répond à aucune convention d'écriture.*<br>
- Valeur optionnelle

#### Propriété ComplementLbSiteHydro
> *Description : Précision apportée par le gestionnaire au nom de la commune faisant partie de l'intitulé du site hydrométrique. Le complément libellé du site hydrométrique est utile lorsque le nom de la commune est insuffisant pour désigner ou localiser la station hydrométrique par exemple. Il s'agit en général d'une précision topographique (ex: pont d'Austerlitz, nom d'un hameau, ...) voire un numéro d'ordre historique. Il peut aussi reprendre le nom d'usage du site hydrométrique, créé historiquement sans contenir le nom de la commune.*<br>
- Valeur optionnelle

#### Propriété CoordSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CoordXSiteHydro
> *Description : Nombre X qui détermine l'abscisse d'un site hydrométrique dans un plan, exprimé dans le système de projection indiqué selon l’attribut système de projection des coordonnées géographique. Par convention, la projection est en Lambert 93 pour tous les sites situés sur le territoire métropolitain et corse. Elle est exprimée avec la précision maximale du mètre et varie dans une plage de 0 à 1 250 000. 		 Pour les sites situés en dehors de la France métropolitaine, cet attribut contient la coordonnée X de la projection U.T.M. précisée dans l'attribut "Type de projection des coordonnées du site de mesure". Il est également exprimé avec la précision maximale du mètre et prend une valeur comprise dans une plage variant au maximum de 0 à + 833 000 au niveau de l'équateur. 		 Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété CoordYSiteHydro
> *Description : Nombre Y qui détermine l'ordonnée d'un site hydrométrique dans un plan, exprimé dans le système de projection indiqué dans l’attribut système de projection des coordonnées géographique.   Par convention, la projection est en Lambert 93 pour tous les points d'eau situés sur le territoire métropolitain et Corse. Elle est exprimée avec la précision maximale du mètre et varie dans une plage allant de 6 000 000 à 7 100 000. Pour les sites situés en dehors de la France métropolitaine, cet attribut contient la coordonnée Y de la projection U.T.M. précisée dans l'attribut "Type de projection des coordonnées du site de mesure". Il est également exprimé avec la précision maximale du mètre et varie dans une plage allant de - 10 000 000 (pour le pôle Sud) à + 10 000 000 (pour le pôle Nord). 		 Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété ProjCoordSiteHydro
> *Description : Code indiquant la projection dans laquelle s'expriment les coordonnées X et Y du site hydrométrique. Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e. Par convention, par défaut, les coordonnées des sites sont exprimées en Lambert 93, exceptées celles situées en dehors du territoire métropolitain et corse. Le type de projection du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°22.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:22::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété PkAmontSiteHydro
> *Description : Nombre correspondant au point kilométrique en amont d'un site hydrométrique localisé sur le référentiel hydrographique BD CARTHAGE. Le pk correspond à une abscisse curviligne du point caractéristique en amont du site hydrométrique en utilisant les références pK du tronçon hydrographique élémentaire de la BD CARTHAGE sur lequel est situé le site. Elle s'exprime en mètres dans une plage variant de 0 à 1000000 mètres. Plus la valeur est grande, plus le site est situé en aval du cours d'eau.  Le point kilométrique amont correspond au point amont du site hydrométrique.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété PkAvalSiteHydro
> *Description : Nombre correspondant au point kilométrique aval d'un site hydrométrique localisé sur le référentiel hydrographique BD CARTHAGE. Le pk correspond à une abscisse curviligne du point caractéristique en aval du site hydrométrique en utilisant les références pK du tronçon hydrographique élémentaire de la BD CARTHAGE sur lequel est situé le site. Elle s'exprime en mètres dans une plage variant de 0 à 1000000 mètres. Plus la valeur est grande, plus le site est situé en aval du cours d'eau.  Le point kilométrique aval correspond au point aval du site hydro.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété AltiSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AltitudeSiteHydro
> *Description : Indication altimétrique, exprimée au mètre près, la plus proche obtenue sur les lieux (borne...) ou sur une carte au 1/25000e d'un site hydrométrique. L'altitude du site hydrométrique peut être négative pour des sites situés au dessous du niveau de la mer.   Attention : cette altitude « générale » ne correspond pas à un zéro d'une échelle limnimétrique.   En métropole, l'altitude est exprimée en NGF69, codifié selon la nomenclature du Sandre. Dans les DOM, il sera utilisé le système de référence altimétrique local.   Cette information relève de la responsabilité du producteur.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété SysAltimetriqueSiteHydro
> *Description : Précision relative au système de référence altimétrique dans lequel est exprimée l’altitude générale du site hydrométrique. Le système de référence altimétrique du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°76. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété DtMajSiteHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'un site hydrométrique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété BassinVersantSiteHydro
> *Description : Superficie, exprimée en km2, du bassin versant topographique drainée au droit du site hydrométrique. Elle ne tient compte que de la pente des terrains. Elle peut différer de la surface du bassin versant hydrologique lorsque des écoulements souterrains influent de façon notable sur l'hydrologie du cours d'eau.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété BassinVersantHydroSiteHydro
> *Description : Superficie, exprimée en km2, du bassin versant hydrologique drainée au droit du site hydrométrique. Elle tient compte de la pente des terrains et des écoulements souterrains qui influent sur l'hydrologie du cours d'eau.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété FuseauHoraireSiteHydro
> *Description : Ligne imaginaire tracée à la surface du globe avec les pôles pour extrémités. Le globe terrestre comporte 24 fuseaux sphériques imaginaires. Un site hydrométrique appartient localement à l'un de ces fuseaux horaires à l'intérieur du quel tous les points ont conventionnellement la même heure. Cette information est utilisée pour le calcul de certaines valeurs hydrologiques moyennes ou statistiques.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété StSiteHydro
> *Description : Indication relative à l'écoulement mesurée par un site hydrométrique. Le statut hydrologique du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°460. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:460::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DtPremDonSiteHydro
> *Description : Jour, mois, et année correspondant à la date de la première donnée archivée (au sens non bancarisée) disponible sur le site hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété PremMoisEtiageSiteHydro
> *Description : Nombre représentant l'une des 12 divisions d'une année de début de la période d'étiage d'un site hydrométrique. Le premier mois d'étiage du site hydrométrique est le mois à partir duquel on effectue les calculs statistiques d'étiage. Il correspond en principe au premier mois d'une période de 12 mois dans laquelle tous les étiages sont inclus. Nota : En régime pluvial océanique, on utilise généralement le mois de janvier. En régime nival ou glaciaire, on utilise généralement le mois de septembre.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété PremMoisAnHydSiteHydro
> *Description : Nombre représentant l'une des 12 divisions d'une année de début de l'année hydrologique d'un site hydrométrique. Le premier mois de l'année hydrologique du site hydrométrique est le mois à partir duquel s'effectuent les calculs statistiques pour les modules ou les hautes eaux. Il correspond en principe au mois qui suit les plus basses eaux (période où la quantité d'eau stockée dans le bassin versant est minimale). Nota : Pour la majorité des cours d'eau français (de régime pluvial océanique), l'année hydrologique débute le 1er septembre.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DureeCarCruSiteHydro
> *Description : Espace de temps, exprimé en heures,  pendant lequel le débit dépasse la moitié du débit de pointe instantané. La durée caractéristique de crues du site hydrométrique est estimée par plusieurs méthodes selon le bassin versant concerné (par exemple la méthode Socose - CTGREF 1980-1982). Elle est généralement peu dépendante de la fréquence de la crue.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DroitPublicationSiteHydro
> *Description : Autorisation de diffusion des informations (données descriptives et de mesures) d'un site hydrométrique. Le droit de publication du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°871. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:871::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété EssaiSiteHydro
> *Description : Indication sur le niveau opérationnel d'un site hyrométrique. Un site non opérationnel est un site d'essai pour échanger des données de test par exemple. Par défaut, la valeur du site hydrométrique d'essai est égale à faux ; le site est opérationnel dans ce cas.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété InfluGeneSiteHydro
> *Description : Indication de présence -en amont ou en aval d'un site de hydrométrique- d’un ouvrage ou d’un cours d’eau ayant une influence hydrologique significative sur les mesures hydrométriques. Il s’agit ici d’une influence globale, valable pour toutes les stations d’un site hydrométrique et à différencier d’une influence locale attachée aux stations hydrométriques. L'influence générale du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°104. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:104::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ComInfluGeneSiteHydro
> *Description : Précision ou complément d'information de l'influence générale d'un site hydrométrique. Aucune convention d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété ComSiteHydro
> *Description : Remarques, non structurées et complémentaires, relatives à un site hydrométrique. Aucune convention d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété SiteHydroAssocie
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété PeriodesActiviteSiteHydroVirtuel
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PeriodeActiviteSiteHydroVirtuel
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtDebActivationPeriodeActiviteSiteHydroVirtuel
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle l'association du site hydrométrique est active.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinActivationPeriodeActiviteSiteHydroVirtuel
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle l'association du site hydrométrique est inactive.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDebPeriodeActiviteSiteHydroVirtuel
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle l'association du site hydrométrique commence.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinPeriodeActiviteSiteHydroVirtuel
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle l'association du site hydrométrique se termine.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété SitesHydroAttaches
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteHydroAttache
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété LbSiteHydro
> *Description : Chaque site hydrométrique possède un intitulé à des fins d'identification rapide et de reprise dans la plupart des références. Il est établi de la manière suivante : - article et nom du cours d'eau, - précision sur le cours d'eau entre crochets (canal, bras rive gauche, dérivation, ...), - à (au, aux) - nom de la ou des communes (définition INSEE avec l'utilisation impérative de 'St', 'Ste' et 'Stes' pour Saint, Sainte et Saintes) - lieu-dit ou complément du nom,entre crochets  (cf. attribut correspondant).  Exemple : - La Seine à Paris [Pont d'Austerlitz], - La Doller [totale] à Burnhaubt-le-Haut [Pont d'Aspach], - Le Roder à Schweighoure sur Roder [amont], - Le Couzou à Courpière [Le Salet], - La Choisille [bras sud] à Mettray, - La Vienne à Limoges et au Palais-sur-Vienne - Le ru d'Elancourt à Jouars-Pontchartrain [Chemevières].  L'intitulé du site relève de la responsabilité du producteur.*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété PonderationSiteHydroAttache
> *Description : Nombre, exprimé sous la forme d'un coefficient, utilisé pour le calcul du débit du site hydrométrique virtuel.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété DecalSiteHydroAttache
> *Description : Valeur  du décalage, exprimée en minutes entières, de l'hydrogramme (ie. débit) du site hydrométrique attaché par rapport au site hydrométrique de référence.*<br>
- Valeur optionnelle
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdEuMasseDEau
> *Description : Le code européen de la masse d'eau est structuré de la manière suivante : Code Nationale de la masse d'eau préfixé par "FR".*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété EntiteHydrographique
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Propriété LoisStatContexteSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété LoiStatContexteSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété TypContexteLoiStat
> *Description : Nature du contexte hydrologique du site ou de la station hydrométrique dans lequel la loi statistique s'applique. Le type de contexte loi statistique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°521. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:521::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété TypLoiSiteHydro
> *Description : Type de la loi statistique. Il prend les valeurs suivantes administrées par le Sandre dans la nomenclature n°114.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:114::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ImagesSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ImageSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AdressedelImageSiteHydro
> *Description : Lieu physique ou logique où se trouve une image ou une carte d'un site hydrométrique dans un réseau informatique.*<br>
- Valeur obligatoire

#### Propriété TypIllSiteHydro
> *Description : Précision sur la nature d'une image ou d'une carte d'un site hydrométrique. Le type d'illustration de l'image du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°524. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:524::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ImageIllSiteHydro
> *Description : Contenu numérique, au format binaire, d'une image ou d'une carte d'un site hydrométrique.*<br>
- Valeur optionnelle

#### Propriété FormatIllSiteHydro
> *Description : Dimension d'une image ou d'une carte d'un site hydrométrique. Le format de l'image du site hydrométrique est lié à la compression de l'image.  Il s'appuie sur la norme IETF RFC qui définit les types MIME, exemple: image/jpeg ou image/png.*<br>
- Valeur optionnelle

#### Propriété ComImgSiteHydro
> *Description : Remarques visant à décrire une image ou une carte d'un site hydrométrique.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété RolsContactSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RolContactSiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RoleContactSiteHydro
> *Description : Fonction assurée par une personne vis à vis d'un site hydrométrique. Le rôle du contact du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°527. Seuls, les codes suivants de cette nomenclature sont autorisés :  - ADM ! Administrateur local du site (pôle 2) - REF ! Responsable référentiel (pôle 2) - RC ! Responsable règles de calcul (pôle 2) - EXP ! Gestion des gestion des paramètres liés aux échanges de données temps réel  - CT ! Droit de consultation sur les sites privés ou restreints  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:527::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebutContactSiteHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde, exprimés en temps universel (TU), correspondant à la date de début de prise de fonction d'une personne (ie. contact) vis à vis d'un site hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinContactSiteHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde, exprimés en temps universel (TU), correspondant à la date de fin de prise de fonction d'une personne (ie. contact) vis à vis d'un site hydrométrique. Lorsque cette date n'est pas renseignée, la date de fin de prise de fonction est logiquement indéterminée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtMajRoleContactSiteHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde, exprimés en temps universel (TU), correspondant à la date d'actualisation d'au moins une information portant sur le rôle du contact d'un site hydrométrique. Cette date est renseignée dès l'attribution d'une fonction à un contact.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété EntsVigiCru
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété EntVigiCru
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdEntVigiCru
> *Description : Identifiant, unique et non signifiant, de l'entité de vigilance crues. La gestion des identifiants uniques des entités de vigilance crues est assurée par le service central d'hydrométéorologie et d'appui à la prévision des inondations (Schapi). Les créations et les modifications des entités de vigilance crues peuvent être demandées par leurs administrateurs via le site Web du service d'administration national des données et des référentiels sur l'eau (Sandre)  ; le  Schapi est ensuite chargé de les valider.  Notons que ces administrateurs peuvent être  des services de prévision des crues (SPC), des cellules de veille hydrométéorologique (CVH) ....*<br>
- Valeur obligatoire

#### Propriété NomEntVigiCru
> *Description : Désignation de l'entité de vigilance crues. La convention d'écriture du nom commun de l'entité de la vigilance crues est imposée par le service central d'hydrométéorologie et d'appui à la prévision des inondations (Schapi).*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Communes
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Commune
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété VersionReferentiel
> *Description : Chacun des divers aspects que peut prendre un même jeu de données au cours du temps. En théorie, une mise à jour mineure ou majeure sur tout ou partie d'un jeu de données produit une nouvelle version de ce jeu. En pratique, il arrive qu'un jeu de donnés subissent des évolutions sans changement de version. La date de mise à jour du jeu de donnée est en revanche systématiquement renseignée pour signaler la ou les mise(s) à jour tracée(s) par ailleurs dans la généalogie.*<br>
- Valeur optionnelle

#### Propriété SourceReferentiel
> *Description : Origine du jeu de données qui a permis la constitution du jeu de données Sandre (i.e référentiel). La source du référentiel prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°633. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:633::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdSiteHydroAncienRef
> *Description : Il s'agit du code station de l'ancien référentiel d'Hydro II.*<br>
- Valeur optionnelle

#### Propriété StationsHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété StationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

#### Propriété TypStationHydro
> *Description : Catégorie d'appareil installé sur une station hydrométrique. Le type de station ne décrit pas le matériel exact utilisé pour la mesure. Le type de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°531.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:531::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ComplementLbStationHydro
> *Description : Précision complémentaire associée au libellé d'une station hydrométrique lorsque son libellé est insuffisant pour la désigner ou la localiser précisément.*<br>
- Valeur optionnelle

#### Propriété ComPrivStationHydro
> *Description : Texte libre visant à décrire une station hydrométrique par son producteur de données. Elle est réservée à une communauté restreinte de personnes. Aucune règle particulière n'est imposée dans la manière de rédiger le commentaire privé de la station hydrométrique.*<br>
- Valeur optionnelle

#### Propriété DtMajStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'une station hydrométrique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété CoordStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CoordXStationHydro
> *Description : Nombre X qui détermine l'abscisse d'une station hydrométrique dans un plan, exprimé dans le système de projection indiqué selon l’attribut système de projection des coordonnées géographique. Par convention, la projection est en Lambert 93 pour tous les sites situés sur le territoire métropolitain et corse. Elle est exprimée avec la précision maximale du mètre et varie dans une plage de 0 à 1 250 000. 		 Pour les stations situées en dehors de la France métropolitaine, cet attribut contient la coordonnée X de la projection U.T.M. précisée dans l'attribut "Type de projection des coordonnées". Il est également exprimé avec la précision maximale du mètre et prend une valeur comprise dans une plage variant au maximum de 0 à + 833 000 au niveau de l'équateur. 		 Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété CoordYStationHydro
> *Description : Nombre Y qui détermine l'ordonnée d'une station hydrométrique dans un plan, exprimé dans le système de projection indiqué dans l’attribut système de projection des coordonnées géographique.  		 Pour les stations situées en dehors de la France métropolitaine, cet attribut contient la coordonnée Y de la projection U.T.M. précisée dans l'attribut "Type de projection des coordonnées". Il est également exprimé avec la précision maximale du mètre et prend une valeur comprise dans une plage variant au maximum de 0 à + 833 000 au niveau de l'équateur. 		 Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété ProjCoordStationHydro
> *Description : Code indiquant la projection dans laquelle s'expriment les coordonnées X et Y de la station hydrométrique. Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e. Par convention, par défaut, les coordonnées des stations sont exprimées en Lambert 93, exceptées celles situées en dehors du territoire métropolitain et corse. Le type de projection de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°22. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:22::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété PkStationHydro
> *Description : Point kilométrique précisant le positionnant de la station hydrométrique sur une entité hydrographique de la BD CARTHAGE. Cette information est uniquement renseignée si elle précise le pk associé au site hydrométrique. Le Pk se réfère à l’entité hydrographique du site hydrométrique auquel est rattachée la station.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtMiseServiceStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une station hydrométrique commence à faire l'objet de mesures.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFermetureStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une station hydrométrique ne fait plus l'objet de mesures.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ASurveillerStationHydro
> *Description : Indication relative à la surveillance d'une station hydrométrique. Par défaut, la valeur de la surveillance de la station hydrométrique est à vrai ; elle fait l'objet d'une surveillance. Dans ce cas, s'il y a des dépassements de seuils, des alarmes sont générées par la station hydrométrique.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété NiveauAffichageStationHydro
> *Description : Classement d'une station hyrométrique selon son importance vis à vis des autres. Le niveau d’affichage de la station hydrométrique peut être utilisé lors d'une représentation cartographique pour n'afficher que certaines stations selon un niveau de zoom défini. Exemple, les stations de catégorie 2 seront affichées pour le niveau de zoom 50 000. Aucune règle nationale n'est définie ; l'utilisateur est donc libre d'utiliser ses propres règles.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DroitPublicationStationHydro
> *Description : Autorisation de diffusion des informations descriptives et de mesures d'une station hydrométrique. Le droit de publication de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°532. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:532::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DelaiDiscontinuiteStationHydro
> *Description : Laps de temps, exprimé en minutes, au delà duquel une discontinuité entre les mesures temps réelles d'une station hydrométrique est soupçonnée. Nota : Les calculs hydrologiques ne tiennent pas compte des délais de discontinuité des stations hydrométriques.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DelaiAbsenceStationHydro
> *Description : Laps de temps, exprimé en minutes, au delà duquel l'absence de mesure temps réelle d'une station hydrométrique est considérée comme un dysfonctionnement de la chaîne d'acquisition des données.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété EssaiStationHydro
> *Description : Indication sur le niveau opérationnel d'une station hyrométrique. Une station non opérationnelle est une station d'essai pour échanger des données de test par exemple. Par défaut, la valeur de la station hydrométrique d'essai est égale à faux ; la station est opérationnelle dans ce cas.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété InfluLocaleStationHydro
> *Description : Indication de présence -en amont ou en aval d'une station hydrométrique- d’un ouvrage ou d’un cours d’eau ayant une influence hydrologique significative sur les mesures hydrométriques. Il s’agit ici d’une influence locale, uniquement valable pour les stations hydrométriques. L'influence locale du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°104. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:104::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ComInfluLocaleStationHydro
> *Description : Précision ou complément d'information de l'influence locale d'une station hydrométrique. Aucune convention d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété ComStationHydro
> *Description : Remarques, non structurées et complémentaires, relatives à une station hydrométrique. Aucune convention d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété StationsHydroAnterieures
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété StationHydroAnterieure
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété StationsHydroPosterieures
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété StationHydroPosterieure
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété QualifsDonneesStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété QualifDonneesStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdRegime
> *Description : Information décrivant la qualité générale des données hydrométriques portant sur les informations en basses eaux, moyenne eaux et/ou hautes eaux. Le code du régime hydrométrique prend l'une valeurs possibles administrées par le Sandre selon la nomenclature n°526.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:526::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété QualifDonStationHydro
> *Description : Valeur de la qualité des données produites par une station hydrométrique selon un régime hydrométrique. La qualification des données de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°533.    cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:533::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété ComQualifDonStationHydro
> *Description : Information complémentaire, sous forme de texte libre, justifiant la qualification des données produites par la station hydrométrique.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété FinalitesStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété FinaliteStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdFinaliteStationHydro
> *Description : Objectif pour lequel une station hydrométrique est créée. Le code de la finalité de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°522. Cette nomenclature est conforme à la circulaire sur l'hydrométrie.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:522::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété LoisStatContexteStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété LoiStatContexteStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété TypContexteLoiStat
> *Description : Nature du contexte hydrologique du site ou de la station hydrométrique dans lequel la loi statistique s'applique. Le type de contexte loi statistique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°521. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:521::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété TypLoiStationHydro
> *Description : Type de la loi statistique.Il prend les valeurs suivantes administrées par le Sandre dans la nomenclature n°114.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:114::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ImagesStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ImageStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AdressedelImageStationHydro
> *Description : Lieu physique ou logique où se trouve une image ou une carte d'une station hydrométrique dans un réseau informatique.*<br>
- Valeur obligatoire

#### Propriété TypIllStationHydro
> *Description : Précision sur la nature d'une image ou d'une carte d'une station hydrométrique. Le type d'illustration de l'image de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°524. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:524::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ImageIllStationHydro
> *Description : Contenu numérique, au format binaire, d'une image ou d'une carte d'une station hydrométrique.*<br>
- Valeur optionnelle

#### Propriété FormatIllStationHydro
> *Description : Dimension d'une image ou d'une carte d'une station hydrométrique. Le format de l'image de la station hydrométrique est lié à la compression de l'image.  Il s'appuie sur la norme IETF RFC qui définit les types MIME, exemple: image/jpeg ou image/png.*<br>
- Valeur optionnelle

#### Propriété ComImgStationHydro
> *Description : Remarques visant à décrire une image ou une carte d'une station hydrométrique.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété RolsContactStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RolContactStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RoleContactStationHydro
> *Description : Fonction assurée par une personne vis à vis d'une station hydrométrique. Le rôle du contact de la station hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°527.      cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:527::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebutContactStationHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde, exprimés en temps universel (TU), correspondant à la date de début de prise de fonction d'une personne (ie. contact) vis à vis d'une station hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinContactStationHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde, exprimés en temps universel (TU), correspondant à la date de fin de prise de fonction d'une personne (ie. contact) vis à vis d'une station hydrométrique. Lorsque cette date n'est pas renseignée, la date de fin de prise de fonction est logiquement indéterminée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtMajRoleContactStationHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde, exprimés en temps universel (TU), correspondant à la date d'actualisation d'au moins une information portant sur le rôle du contact d'une station hydrométrique. Cette date est renseignée dès l'attribution d'une fonction à un contact.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PlagesUtilStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PlageUtilStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtDebPlageUtilStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de début d’utilisation des mesures d'une station hydrométrique.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinPlageUtilStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de fin d’utilisation des mesures d'une station hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtActivationPlageUtilStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la plage de mesure correspondante a été activée (données affectées à la station hydrométrique).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationPlageUtilStationHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la plage de mesure correspondante a été désactivée (données plus affectées au site hydrométrique).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ActivePlageUtilStationHydro
> *Description : Indique si une station hydrométrique est active ou inactive sur une plage d'utilisation donnée.*<br>
- Valeur optionnelle
- Type : booléen

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ReseauxMesureStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ReseauMesureStationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CodeSandreRdd
> *Description : Le code du dispositif de collecte est un code artificiel non signifiant sur 10 positions qui identifie sur le plan national tout dispositif relatif à l'eau.   Il est constitué : [code bassin étendu sur 2 caractères] + [code sans signification].   Le code bassin est celui attribué par l'INSEE pour les 6 bassins auquel il est ajouté les cas suivants :  00 réseau de niveau national (Ensemble des bassins) 01 Artois-Picardie 02 Rhin-Meuse 03 Seine-Normandie 04 Loire-Bretagne 05 Adour-Garonne 06 Rhône-Méditerranée 07 Guadeloupe 08 Martinique 09 Guyane 10 Réunion 11 Mayotte 12 Corse 99 Réseau concernant plus de 1 bassin et moins de 6, ou s'il est transfrontalier  Ce code est attribué par le Sandre pour les dispositifs de collecte nationaux et par les administrateurs de bassin pour les dispositifs de collecte des bassin.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété NomRdd
> *Description : Le libellé du dispositif de collecte est un nom sur 110 caractères qui identifie explicitement le réseau de mesure. Les noms des nouveaux réseaux de mesure comportent les informations suivantes sur 110 caractères : : - la nature (quantité ou qualité), - la géographie (local, régional, national, ou l’aquifère,…) - le type d’eau : eaux superficielles, souterraines, littorales….  Les abréviations sont à éviter dans le nom du réseau de mesure et seront utilisées uniquement pour le mnémonique du réseau de mesure.  Les informations sur le dispositif de collecte relèvent de la responsabilité du maître d'ouvrage du dispositif de collecte.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Capteurs
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Capteur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdCapteur
> *Description : Identifiant unique d'un capteur. Le code du capteur comporte 12 chiffres dont 10 sont relatifs au code station hydrométrique et les 2 autres numéros sont fournis par l'exploitant. La codification des capteurs est sous la responsabilité des producteurs de données.*<br>
- Valeur obligatoire

#### Propriété LbCapteur
> *Description : Désignation d'un capteur. Aucune convention d'écriture du libellé du capteur n'est imposée. Néanmoins, il est préférable de s'assurer que ce libellé est unique pour tous les capteurs.*<br>
- Valeur optionnelle

#### Propriété MnCapteur
> *Description : Sigle ou symbole désignant un capteur. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de mnémonique identique.*<br>
- Valeur optionnelle

#### Propriété TypCapteur
> *Description : Catégorie d'un capteur qui effectue les mesures dans un milieu. Le type du capteur prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°519.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:519::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété TypMesureCapteur
> *Description : Paramètre mesuré d'un capteur. Le type de mesure du capteur prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°509.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:509::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ASurveillerCapteur
> *Description : Indication si un capteur fait l'objet d'une surveillance. Par défaut, la valeur de la surveillance du capteur est à vrai. Le capteur est sous surveillance ; des alarmes sont déclenchées lorsque les seuils sont dépassés.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété DtMajCapteur
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'un capteur est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété PDTCapteur
> *Description : Fréquence des mesures réalisées par un capteur. Le pas de temps du capteur peut être :  - variable : dans ce cas le pas de temps est null. - fixe : dans ce cas le pas de temps est exprimé en minutes.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété EssaiCapteur
> *Description : Indique si le capteur est opérationnel ou non. Il est donc possible d'identifier des capteurs non opérationnels, nommés capteurs d'essai, utilisés dans le cadre d'échanges de données de tests par exemple. Par défaut, cet attribut est à faux ; le capteur est donc fonctionnel.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété ComCapteur
> *Description : Remarques fournissant des indications sur le fonctionnement d'un capteur. Aucune convention d'écriture n'est définie.*<br>
- Valeur optionnelle

#### Propriété Observateur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Propriété PlagesUtilCapteur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PlageUtilCapteur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtDebPlageUtilCapteur
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de début d’utilisation des mesures d'un capteur placé sur une station hydrométrique.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinPlageUtilCapteur
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de fin d’utilisation des mesures d'un capteur placé sur une station hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtActivationPlageUtilCapteur
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la plage de mesure correspondante a été activée (données affectées au capteur).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationPlageUtilCapteur
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la plage de mesure correspondante a été désactivée (données plus affectées à la station hydrométrique).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ActivePlageUtilCapteur
> *Description : Indication si un capteur est actif ou inactif sur une plage d'utilisation donnée.*<br>
- Valeur optionnelle
- Type : booléen

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdCapteurAncienRef
> *Description : Ancien identifiant d'un capteur au sein du référentiel Hydro II.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété RefsAlti
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RefAlti
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AltitudeRefAlti
> *Description : Altitude du zéro de l’échelle, exprimée en mètres selon le système altimétrique spécifié, de la station hydrométrique. L'altitude de la référence altimétrique est facultative. Elle est néanmoins très recommandée car elle seule permet de convertir des hauteurs relatives en hauteurs absolues sur une échelle et donc de faire des comparaisons sur des chroniques de données importantes.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété SysAltiRefAlti
> *Description : Système dans lequel la référence altimétrique de la station hydrométrique est exprimée. Le système altimétrique de la référence altimétrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°76.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebutRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est utilisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique n'est plus utilisée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtActivationRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est activée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est désactivée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtMajRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est désactivée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdStationHydroAncienRef
> *Description : Identifiant d'une station hydrométrique dans l'ancien référentiel d'Hydro II.*<br>
- Valeur optionnelle

#### Propriété Commune
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété VersionReferentiel
> *Description : Chacun des divers aspects que peut prendre un même jeu de données au cours du temps. En théorie, une mise à jour mineure ou majeure sur tout ou partie d'un jeu de données produit une nouvelle version de ce jeu. En pratique, il arrive qu'un jeu de donnés subissent des évolutions sans changement de version. La date de mise à jour du jeu de donnée est en revanche systématiquement renseignée pour signaler la ou les mise(s) à jour tracée(s) par ailleurs dans la généalogie.*<br>
- Valeur optionnelle

#### Propriété SourceReferentiel
> *Description : Origine du jeu de données qui a permis la constitution du jeu de données Sandre (i.e référentiel). La source du référentiel prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°633. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:633::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété StationsHydroAmont
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété StationHydroAmont
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété StationsHydroAval
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété StationHydroAval
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PlagesAssoStationHydroFille
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PlageAssoStationHydroFille
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété stationHydroFille
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété DtDebPlageAssoStationHydroMereFille
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de début d’utilisation des stations hydrométriques filles.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinPlageAssoStationHydroMereFille
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de fin d’utilisation des stations hydrométriques filles.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtMajPlageAssoStationHydroMereFille
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la plage d’association est mise à jour.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PlagesAssoStationHydroMere
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PlageAssoStationHydroMere
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété stationHydroMere
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété DtDebPlageAssoStationHydroMereFille
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de début d’utilisation des stations hydrométriques filles.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinPlageAssoStationHydroMereFille
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de fin d’utilisation des stations hydrométriques filles.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtMajPlageAssoStationHydroMereFille
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la plage d’association est mise à jour.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PluiesDeBassin
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PluieDeBassin
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

#### Propriété PonderationPluieDeBassin
> *Description : Nombre exprimant le pourcentage de pluie d'un site météorologique à intégrer dans le calcul de la pluie de bassin d'un site hydrométrique*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ZoneHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Propriété PrecisionCoursDEauSiteHydro
> *Description : Information libre utile pour préciser la nature d'un cours d'eau sur lequel est situé un site hydrométrique. Elle peut indiquer qu'il s'agit d'un bras principal, d'un bief, d'un estuaire...*<br>
- Valeur optionnelle

#### Propriété SitesHydroAmont
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteHydroAmont
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété LbSiteHydro
> *Description : Chaque site hydrométrique possède un intitulé à des fins d'identification rapide et de reprise dans la plupart des références. Il est établi de la manière suivante : - article et nom du cours d'eau, - précision sur le cours d'eau entre crochets (canal, bras rive gauche, dérivation, ...), - à (au, aux) - nom de la ou des communes (définition INSEE avec l'utilisation impérative de 'St', 'Ste' et 'Stes' pour Saint, Sainte et Saintes) - lieu-dit ou complément du nom,entre crochets  (cf. attribut correspondant).  Exemple : - La Seine à Paris [Pont d'Austerlitz], - La Doller [totale] à Burnhaubt-le-Haut [Pont d'Aspach], - Le Roder à Schweighoure sur Roder [amont], - Le Couzou à Courpière [Le Salet], - La Choisille [bras sud] à Mettray, - La Vienne à Limoges et au Palais-sur-Vienne - Le ru d'Elancourt à Jouars-Pontchartrain [Chemevières].  L'intitulé du site relève de la responsabilité du producteur.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SitesHydroAval
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteHydroAval
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété LbSiteHydro
> *Description : Chaque site hydrométrique possède un intitulé à des fins d'identification rapide et de reprise dans la plupart des références. Il est établi de la manière suivante : - article et nom du cours d'eau, - précision sur le cours d'eau entre crochets (canal, bras rive gauche, dérivation, ...), - à (au, aux) - nom de la ou des communes (définition INSEE avec l'utilisation impérative de 'St', 'Ste' et 'Stes' pour Saint, Sainte et Saintes) - lieu-dit ou complément du nom,entre crochets  (cf. attribut correspondant).  Exemple : - La Seine à Paris [Pont d'Austerlitz], - La Doller [totale] à Burnhaubt-le-Haut [Pont d'Aspach], - Le Roder à Schweighoure sur Roder [amont], - Le Couzou à Courpière [Le Salet], - La Choisille [bras sud] à Mettray, - La Vienne à Limoges et au Palais-sur-Vienne - Le ru d'Elancourt à Jouars-Pontchartrain [Chemevières].  L'intitulé du site relève de la responsabilité du producteur.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SitesMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

#### Propriété LbSiteMeteo
> *Description : Désignation d'un site météorologique. Aucune convention d'écriture du libellé du site météorologique n'est imposée. Néanmoins, le libellé est généralement le nom de la commune principale de localisation du site météorologique .*<br>
- Valeur optionnelle

#### Propriété LbUsuelSiteMeteo
> *Description : Dénomination commune d'un site météorologique. Aucune convention d'écriture du libellé usuel du site météorologique n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de libellé identique.*<br>
- Valeur optionnelle

#### Propriété MnSiteMeteo
> *Description : Sigle ou symbole désignant un site météorologique. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de mnémonique identique.*<br>
- Valeur optionnelle

#### Propriété LieuDitSiteMeteo
> *Description : Précision apportée par le gestionnaire au nom de la commune faisant partie de l'intitulé du site, lorsqu'il juge que le nom de la commune est insuffisant pour désigner ou localiser la station.Il s'agit en général d'une précision topographique (ex: pont d'Austerlitz, nom d'un hameau, ...) voire un numéro d'ordre historique. Le lieu-dit peut aussi reprendre le nom d'usage du site, créé historiquement sans contenir le nom de la commune.*<br>
- Valeur optionnelle

#### Propriété CoordSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CoordXSiteMeteo
> *Description : Nombre X qui détermine l'abscisse du site de mesure dans un plan, exprimé dans le système de projection des coordonnées géographiques (cf. type de projection des coordonnées du site de mesure). Par convention, celle-ci est exprimée en Lambert 93 pour tous les sites situés sur le territoire métropolitain et corse. Elle est exprimée avec la précision maximale du mètre et varie dans une plage de 0 à 1 250 000. 		 Pour les sites situés en dehors de la France métropolitaine, cet attribut contient la coordonnée X de la projection U.T.M. précisée dans l'attribut "Type de projection des coordonnées du site de mesure". Il est également exprimé avec la précision maximale du mètre et prend une valeur comprise dans une plage variant au maximum de 0 à + 833 000 au niveau de l'équateur. 		 Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété CoordYSiteMeteo
> *Description : Nombre Y qui détermine l'ordonnée du site de mesure dans un plan, exprimé dans le système de projection des coordonnées géographiques (cf. type de projection des coordonnées du site de mesure). Par convention, celle-ci est en Lambert 93 pour tous les points d'eau situés sur le territoire métropolitain et Corse. Elle est exprimée avec la précision maximale du mètre et varie dans une plage allant de 6 000 000 à 7 100 000. 		 Pour les sites situés en dehors de la France métropolitaine, cet attribut contient la coordonnée Y de la projection U.T.M. précisée dans l'attribut "Type de projection des coordonnées du site de mesure". Il est également exprimé avec la précision maximale du mètre et varie dans une plage allant de - 10 000 000 (pour le pôle Sud) à + 10 000 000 (pour le pôle Nord). 		 Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété ProjCoordSiteMeteo
> *Description : Code indiquant la projection dans laquelle s'expriment les coordonnées X et Y du site météorologique. Les coordonnées devront être déterminées sur une carte dont l'échelle est supérieure ou égale au 50 000e. Par convention, par défaut, les coordonnées des sites météorologique sont exprimées en Lambert 93, exceptées celles situées en dehors du territoire métropolitain et corse. Le type de projection du site météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°22.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:22::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété AltiSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AltitudeSiteMeteo
> *Description : Elévation verticale, exprimée en mètres, la plus proche de l'endroit d'un site météométrique, obtenue sur les lieux (borne...) ou sur une carte au 1/25000e (cf. système de référence altimétrique du site météorologique). L'altitude d'un site météométrique peut être négative pour des sites situés au dessous du niveau de la mer.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété SysAltimetriqueSiteMeteo
> *Description : Référence sur laquelle repose la prise d'altitude du site météométrique. Le système de référence altimétrique du site météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°76. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété FuseauHoraireSiteMeteo
> *Description : Ligne imaginaire -représentant l'un des 24 fuseaux sphériques imaginaires tracés à la surface du globe terrestre- passant par l'endroit d'un site météorologique et ayant les pôles pour extrémités. Le fuseau horaire du site météorologique permet de passer de l'heure TU utilisée pour stocker les données à l'heure fuseau ou à l'heure locale.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtMajSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'un site météorologique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtOuvertureSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le site météorologique est installé et produit les premières données.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFermSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le site météorologique est arrêté et ne produit plus de donnée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DroitPublicationSiteMeteo
> *Description : Autorisation de diffusion des informations descriptives d'un site météorologique. Par défaut, la valeur du droit de publication d'un site météorologique est égale à faux signifiant que la publication est interdite.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété EssaiSiteMeteo
> *Description : Indique si le site météorologique est opérationnel ou non. Il est donc possible d'identifier des sites non opérationnels, nommés sites d'essai, utilisés dans le cadre d'échanges de données de tests par exemple. Par défaut, cet attribut est à faux ; le site est donc fonctionnel.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété ComSiteMeteo
> *Description : Ensemble d'explications, de remarques ayant pour objectif d'apporter une information complémentaire sur un site météorologique. Aucune règle d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété ImagesSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ImageSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AdressedelImageSiteMeteo
> *Description : Lieu physique ou logique où se trouve une image ou une carte d'un site météorologique dans un réseau informatique.*<br>
- Valeur obligatoire

#### Propriété TypIllSiteMeteo
> *Description : Précision sur la nature d'une image ou d'une carte d'un site météorologique. Le type d'illustration prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°524. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:524::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ImageIllSiteMeteo
> *Description : Contenu numérique, au format binaire, d'une image ou d'une carte d'un site météorologique.*<br>
- Valeur optionnelle

#### Propriété FormatIllSiteMeteo
> *Description : Dimension d'une image ou d'une carte d'un site météorologique. Le format de l'image du site météorologique est lié à la compression de l'image.  Il s'appuie sur la norme IETF RFC qui définit les types MIME, exemple: image/jpeg ou image/png*<br>
- Valeur optionnelle

#### Propriété ComImgSiteMeteo
> *Description : Remarques visant à décrire une image ou une carte d'un site météorologique.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ReseauxMesureSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RSX
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CodeSandreRdd
> *Description : Le code du dispositif de collecte est un code artificiel non signifiant sur 10 positions qui identifie sur le plan national tout dispositif relatif à l'eau.   Il est constitué : [code bassin étendu sur 2 caractères] + [code sans signification].   Le code bassin est celui attribué par l'INSEE pour les 6 bassins auquel il est ajouté les cas suivants :  00 réseau de niveau national (Ensemble des bassins) 01 Artois-Picardie 02 Rhin-Meuse 03 Seine-Normandie 04 Loire-Bretagne 05 Adour-Garonne 06 Rhône-Méditerranée 07 Guadeloupe 08 Martinique 09 Guyane 10 Réunion 11 Mayotte 12 Corse 99 Réseau concernant plus de 1 bassin et moins de 6, ou s'il est transfrontalier  Ce code est attribué par le Sandre pour les dispositifs de collecte nationaux et par les administrateurs de bassin pour les dispositifs de collecte des bassin.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété NomRdd
> *Description : Le libellé du dispositif de collecte est un nom sur 110 caractères qui identifie explicitement le réseau de mesure. Les noms des nouveaux réseaux de mesure comportent les informations suivantes sur 110 caractères : : - la nature (quantité ou qualité), - la géographie (local, régional, national, ou l’aquifère,…) - le type d’eau : eaux superficielles, souterraines, littorales….  Les abréviations sont à éviter dans le nom du réseau de mesure et seront utilisées uniquement pour le mnémonique du réseau de mesure.  Les informations sur le dispositif de collecte relèvent de la responsabilité du maître d'ouvrage du dispositif de collecte.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété RolsContactSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RolContactSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété RoleContactSiteMeteo
> *Description : Fonction assurée par une personne (ie. contact) vis à vis d'un site météorologique. Le rôle du contact du site météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°527. Seuls, les codes suivants sont autorisés :  ADM ! administrateur local du site (pôle 2) REF ! responsable référentiel (pôle 2) RC ! responsable règles de calcul (pôle 2) DB ! responsable données brutes (et concentration -pôle 4) DC ! responsable données corrigée (pôle 4) MA ! responsable maintenance (utilisation future) EXP ! gestion des paramètres liés aux échanges de données temps réel  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:527::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebutContactSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à partir de laquelle une  personne assure un rôle vis à vis d'un site météorologique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinContactSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à partir de laquelle une  personne n'assure plus un rôle vis à vis d'un site météorologique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtMajRoleContactSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations descriptives du rôle du contact du site méorologique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ZoneHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

</details>
</blockquote>

#### Propriété Commune
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété VersionReferentiel
> *Description : Chacun des divers aspects que peut prendre un même jeu de données au cours du temps. En théorie, une mise à jour mineure ou majeure sur tout ou partie d'un jeu de données produit une nouvelle version de ce jeu. En pratique, il arrive qu'un jeu de donnés subissent des évolutions sans changement de version. La date de mise à jour du jeu de donnée est en revanche systématiquement renseignée pour signaler la ou les mise(s) à jour tracée(s) par ailleurs dans la généalogie.*<br>
- Valeur optionnelle

#### Propriété SourceReferentiel
> *Description : Origine du jeu de données qui a permis la constitution du jeu de données Sandre (i.e référentiel). La source du référentiel prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°633. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:633::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété GrdsMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété GrdMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdGrdMeteo
> *Description : Paramètre (exemple : température de l'air, pression atmosphérique...) qui fait l'objet de mesures ou d'observations météorologiques au cours du temps sur un site météorologique. La grandeur météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°523. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:523::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtMiseServiceGrdMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le capteur météorologique est mis en service.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFermetureServiceGrdMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le capteur météorologique est mis hors service.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété EssaiGrdMeteo
> *Description : Indique si la grandeur du capteur est fonctionnelle ou non. Une grandeur non fonctionnelle est nommée grandeur d'essai qui est utilisée dans le cadre d'échanges de données de tests par exemple. Par défaut, une grandeur météorologique d'essai est à faux signifiant qu'elle est fonctionnelle.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété ASurveillerGrdMeteo
> *Description : Indique si une grandeur du capteur est surveillée. Par défaut, la surveillance de la grandeur météorologique est à vrai signifiant qu'elle est surveillée. Dans cet état, des alarmes sont déclenchées lorsque les valeurs des seuils sont dépassées.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété DelaiAbsGrdMeteo
> *Description : Laps de temps, exprimé en minutes, au delà duquel l'absence de mesure temps réelles est considérée comme un dysfonctionnement de la chaîne d'acquisition des données météorologiques.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété PDTGrdMeteo
> *Description : Fréquence, exprimée en minutes, de mesure d'une grandeur météorologique. Le pas de temps nominal de la grandeur météorologique est communément appelé "pas de temps".*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ClassesQualiteGrd
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ClasseQualiteGrd
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdqClasseQualiteGrd
> *Description : Valeur d'une classe de qualité attribuée à une grandeur d'un site météorologique - selon un protocole défini par MétéoFrance (note technique n°35B) - effective sur une période donnée. La classe de qualité de la grandeur météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°969. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:969::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtVisiteSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la visite de terrain d'un site météorologique a permis de procéder à la classification qualité des grandeurs d'un site météorologique.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtDebutClasseQualiteGrd
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de début de validité de la grandeur météorologique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinClasseQualiteGrd
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de fin de validité de la grandeur météorologique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété DtMajGrdMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'une grandeur météorologique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété VisitesSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété VisiteSiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtVisiteSiteMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la visite de terrain d'un site météorologique a permis de procéder à la classification qualité des grandeurs d'un site météorologique.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété MethClassVisiteSiteMeteo
> *Description : Démarche aboutissant à la détermination de la classe de qualité des grandeurs d'un site météorologique. Aucune convention d'écriture n'est fixée.*<br>
- Valeur optionnelle

#### Propriété ModeOperatoireUtiliseVisiteSiteMeteo
> *Description : Remarques, sous forme de texte libre, finalisant la visite du site météorologique.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ModelesPrevision
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ModelePrevision
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdModelePrevision
> *Description : Identifiant unique du modèle numérique permettant la prévision des débits et hauteurs d'eau au niveau des sites et des stations hydrométriques. Le code du modèle de prévision est sous la responsabilité du service central d’hydrométéorologie et d’appui à la prévision des inondations (Schapi).*<br>
- Valeur obligatoire

#### Propriété LbModelePrevision
> *Description : Désignation commune du modèle numérique de prévision hydrologique. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de libellé identique à l'ensemble des modèles de prévision hydrologique.*<br>
- Valeur optionnelle

#### Propriété TypModelePrevision
> *Description : Classe d'appartenance d'un modèle numérique de prévision hydrologique. Un modèle de prévision hydrologique appartient à l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°525.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:525::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DescModelePrevision
> *Description : Caractéristiques de nature explicative, visant à définir les objectifs et les modalités de fonctionnement d'un modèle numérique de prévision hydrologique.*<br>
- Valeur optionnelle

#### Propriété DtMajModelePrevision
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'un modèle de prévision hydrologique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété SitesHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SeuilsHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SeuilHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSeuilHydro
> *Description : Identifiant non signifiant désignant de manière unique un seuil hydrométrique. Le code du seuil hydrométrique est sous la responsabilité du service central d’hydrométéorologie et d’appui à la prévision des inondations (Schapi).*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété SiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété LbSiteHydro
> *Description : Chaque site hydrométrique possède un intitulé à des fins d'identification rapide et de reprise dans la plupart des références. Il est établi de la manière suivante : - article et nom du cours d'eau, - précision sur le cours d'eau entre crochets (canal, bras rive gauche, dérivation, ...), - à (au, aux) - nom de la ou des communes (définition INSEE avec l'utilisation impérative de 'St', 'Ste' et 'Stes' pour Saint, Sainte et Saintes) - lieu-dit ou complément du nom,entre crochets  (cf. attribut correspondant).  Exemple : - La Seine à Paris [Pont d'Austerlitz], - La Doller [totale] à Burnhaubt-le-Haut [Pont d'Aspach], - Le Roder à Schweighoure sur Roder [amont], - Le Couzou à Courpière [Le Salet], - La Choisille [bras sud] à Mettray, - La Vienne à Limoges et au Palais-sur-Vienne - Le ru d'Elancourt à Jouars-Pontchartrain [Chemevières].  L'intitulé du site relève de la responsabilité du producteur.*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété TypSeuilHydro
> *Description : Catégorie (gradient, absolu) auquel appartient un seuil hydrométrique. Le type de seuil du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°528. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:528::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété NatureSeuilHydro
> *Description : Catégorie à laquelle appartient un seuil hydrométrique. Dans le contexte des seuils de type "hydrométrique", une valeur basse désigne une valeur d'étiage et une valeur forte désigne une valeur de crue. La nature du seuil du site hydrométrique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°529.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:529::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DureeSeuilHydro
> *Description : Laps de temps, exprimé en minutes, d'un seuil hydrométrique de type gradient (exemple : gradient de hauteur de 1m/h soit 60 minutes).*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété LbUsuelSeuilHydro
> *Description : Désignation commune d'un seuil hydrométrique utilisé en hydrologie. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de libellé usuel identique. Le libellé usuel du seuil hydrométrique apporte une information complémentaire sur la valeur du seuil, exemple : « Crue du 28 décembre 1905 »*<br>
- Valeur optionnelle

#### Propriété MnSeuilHydro
> *Description : Sigle ou symbole désignant un seuil hydrométrique utilisé en hydrologie. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de mnémonique identique. Le mnémonique du seuil hydrométrique correspond au libellé commun du seuil ; à titre d'exemples : - DOE - DCR - Premiers débordements - Débordements dommageables - VCN3 2 - VCN3 5 - QMNa - QIX 10 - QJX 20*<br>
- Valeur optionnelle

#### Propriété TypPubliSeuilHydro
> *Description : Autorisation donnant le droit de diffuser les informations descriptives d'un seuil hydrométrique auprès du grand public. Par défaut, le droit de publication du seuil hydrométrique n'est pas accordé. Le type de publication du seuil hydrométrique prend l'une des valeurs possibles de la nomenclature Sandre n°874. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:874::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété IndiceGraviteSeuilHydro
> *Description : Entier de 1 à 100 déterminant la force du seuil : faible (1) - fort (100). Un seuil fort sous entend un débit (ou gradient, ou hauteur) élevé pour un seuil relatif à une crue. Mais dans le cas d'un seuil d'étiage, cela sous entend un débit faible. Cet entier pourra être utilisé comme indice de couleur dans des fonctions d'affichage ou bien comme niveau d'alarme dans des outils de supervision (3 niveaux d'alarme).*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ValForceeSeuilHydro
> *Description : Dans le cas d’un seuil de type 4 « valeur expertisée », cette information signifie que la valeur est saisie et bloquée par l’utilisateur (vrai par défaut) ou calculée et actualisée automatiquement à partir des données hydrométriques (faux).*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété DtMajSeuilHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'un seuil hydrométrique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ComSeuilHydro
> *Description : Ensemble d'explications, de remarques ayant pour objectif d'apporter une information complémentaire sur le seuil hydrométrique. Aucune règle d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété ValsSeuilHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ValSeuilHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ValValSeuilHydro
> *Description : Nombre, exprimé sous la forme d'un débit ou d'une hauteur, en valeur absolu ou en gradient (cf. type de seuil du site hydrométrique), d'un seuil hydrométrique.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété ToleranceValSeuilHydro
> *Description : Limite de l'écart admis entre la valeur mesurée et celle du seuil de l'alarme. La tolérance est retranchée (pour un seuil de crue) ou ajoutée (pour un seuil d'étiage) à la valeur mesurée pour déclencher une alarme de franchissement du seuil.   Notons que cette tolérance évite la génération d'alarmes multiples lorsque le débit ou la hauteur du cours d'eau oscille autour de la valeur du seuil. Elle est exprimée en l/s ou en mm.   Exemple 1: un site hydrométrique possède un seuil d'étiage à 955 l/s, affecté d'une tolérance de 25 l/s. En début d'étiage, une alarme est déclenchée lorsque le débit du cours cours d'eau atteint 955 l/s. En sortie d'étiage, l'alarme n'est déclenchée que lorsque le débit dépasse la valeur de 955 + 25 = 980 l/s.  Exemple 2: une station hydrométrique possède un seuil de crue  à 3,25 m affecté d'une tolérance de 20 cm. En montée de crue, une alarme est déclenchée lorsque le cours d'eau atteint 3,25 m. A la décrue, l'alarme n'est déclenchée que lorsque le niveau descend sous la valeur de 3,25 - 0,20 = 3,05 m.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtActivationValSeuilHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la valeur d'un seuil du débit d'un site hydrométrique ou de la hauteur d'une station hydrométrique est créée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationValSeuilHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la valeur d'un seuil du débit d'un site hydrométrique est inactive (au sens supprimée).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété StationHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbStationHydro
> *Description : Nom courant attribué à une station hydrométrique située au sein d'un site hydrométrique. La rédaction du libellé s'appuie sur le libellé du site hydrométrique auquel s'ajoute une space, un tiré, un espace et le complément du libellé de la station hydrométrique exemple pour la station L040061002 : le libellé du site hydrométrique est égale à La Vienne à Limoges et le complément du libellé de la station hydrométrique est Pont-Neuf d'où son nom La Vienne à Limoges - Pont-Neuf*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété SiteHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété LbSiteHydro
> *Description : Chaque site hydrométrique possède un intitulé à des fins d'identification rapide et de reprise dans la plupart des références. Il est établi de la manière suivante : - article et nom du cours d'eau, - précision sur le cours d'eau entre crochets (canal, bras rive gauche, dérivation, ...), - à (au, aux) - nom de la ou des communes (définition INSEE avec l'utilisation impérative de 'St', 'Ste' et 'Stes' pour Saint, Sainte et Saintes) - lieu-dit ou complément du nom,entre crochets  (cf. attribut correspondant).  Exemple : - La Seine à Paris [Pont d'Austerlitz], - La Doller [totale] à Burnhaubt-le-Haut [Pont d'Aspach], - Le Roder à Schweighoure sur Roder [amont], - Le Couzou à Courpière [Le Salet], - La Choisille [bras sud] à Mettray, - La Vienne à Limoges et au Palais-sur-Vienne - Le ru d'Elancourt à Jouars-Pontchartrain [Chemevières].  L'intitulé du site relève de la responsabilité du producteur.*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété Capteur
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdCapteur
> *Description : Identifiant unique d'un capteur. Le code du capteur comporte 12 chiffres dont 10 sont relatifs au code station hydrométrique et les 2 autres numéros sont fournis par l'exploitant. La codification des capteurs est sous la responsabilité des producteurs de données.*<br>
- Valeur obligatoire

#### Propriété LbCapteur
> *Description : Désignation d'un capteur. Aucune convention d'écriture du libellé du capteur n'est imposée. Néanmoins, il est préférable de s'assurer que ce libellé est unique pour tous les capteurs.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SeuilsMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SeuilMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSeuilMeteo
> *Description : Identifiant non signifiant désignant de manière unique un seuil météorologique. Le code du seuil météorologique est sous la responsabilité du service central d’hydrométéorologie et d’appui à la prévision des inondations (Schapi).*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété SiteMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

#### Propriété LbSiteMeteo
> *Description : Désignation d'un site météorologique. Aucune convention d'écriture du libellé du site météorologique n'est imposée. Néanmoins, le libellé est généralement le nom de la commune principale de localisation du site météorologique .*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété GrdMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtMiseServiceGrdMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le capteur météorologique est mis en service.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété CdGrdMeteo
> *Description : Paramètre (exemple : température de l'air, pression atmosphérique...) qui fait l'objet de mesures ou d'observations météorologiques au cours du temps sur un site météorologique. La grandeur météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°523. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:523::::::referentiel:3.1:html*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété TypSeuilMeteo
> *Description : Catégorie (gradient, absolu) auquel appartient un seuil météorologique. Le type de seuil météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°528. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:528::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété NatureSeuilMeteo
> *Description : Catégorie à laquelle apprtient un seuil météorologique. La nature du seuil météorologique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°529. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:529::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DureeSeuilMeteo
> *Description : Laps de temps, exprimé en minutes, d'un seuil météorologique. Pour les seuils exprimés en gradient ou en cumul, la durée correspond à la période utilisée du seuil météorologique (exemple : pluie de 50mm en 30 minutes ou hausse de température de 10° en 24h).*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété LbUsuelSeuilMeteo
> *Description : Désignation commune d'un seuil météorologique. Aucune règle d'écriture n'est imposée ; il est néanmoins préférable de s'assurer qu'il n'existe pas de libellé usuel identique. Le libellé usuel du seuil météorologique apporte une information complémentaire sur la valeur du seuil, exemple : « Episode du 28 décembre 1905 »*<br>
- Valeur optionnelle

#### Propriété MnSeuilMeteo
> *Description : Sigle ou symbole désignant un seuil météorologique. Aucune règle d'écriture n'est imposée excepté pour un seuil météorologique de valeurs expertisées. Dans ce cas, les mnémoniques suivants sont imposés : - Cumul 1 heure - Cumul 12 heures*<br>
- Valeur optionnelle

#### Propriété IndiceGraviteSeuilMeteo
> *Description : Nombre entier, compris entre 1 et 100, déterminant la force d'un seuil météorologique. La valeur 1 correspond à un indice de gravité faible, la valeur 100 correspond à un indice de gravité fort. L'indice de gravité du seuil météorologique pourra être utilisé comme indice de couleur dans des fonctions d’affichage ou bien comme niveau d’alarme dans des outils de supervision (3 niveaux d’alarme).*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtMajSeuilMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des informations d'un seuil météorologique est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ComSeuilMeteo
> *Description : Explications ou remarques ayant pour objectif d'apporter une information complémentaire sur un seuil météorologique. Aucune règle d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété ValsSeuilMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ValSeuilMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ValValSeuilMeteo
> *Description : Nombre, exprimé dans l’unité du seuil météorologique en valeur absolu ou en gradient (cf. type de seuil de la grandeur météorologique), à l'échelle d'un site météorologique.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété ToleranceValSeuilMeteo
> *Description : Limite de l'écart admis entre valeur mesurée et celle du seuil de l'alarme. La tolérance est retranchée (pour un seuil haut) ou ajoutée (pour un seuil bas) à la valeur mesurée pour déclencher une alarme de franchissement du seuil à la baisse ou à la hausse.  Notons que cette tolérance évite la génération d'alarmes multiples lorsque la valeur mesurée oscille autour de la valeur du seuil.Elle est exprimée dans l'unité de la grandeur météo concernée.  Exemple: un site météo possède un seuil bas de température à 0°c affecté d'une tolérance de 2°c. Lorsque la température descend, une alarme est déclenchée à 0°C. Lorsque la température remonte, l'alarme n'est déclenchée que lorsque sa valeur atteint 0 +2 = 2°c.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtActivationValSeuilMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la valeur d'un seuil météorologique est créée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationValSeuilMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la valeur du seuil météorologique est inactive (au sens supprimée).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Donnees
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Evenements
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Evenement
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtEvenement
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles l’événement s'est déroulé.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété TypEvenement
> *Description : Catégorie d'événement. Le type d'événement repose sur l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°891.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:891::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DescEvenement
> *Description : Information qui s'attache à décrire un événement sur la base de faits observables. Le descriptif d'un événement est un texte rédigé par une personne (rédacteur) à l'origine de l’événement ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur obligatoire

#### Propriété TypPubliEvenement
> *Description : Indication autorisant la communication et la portée d'un événement. Le type de publication d'un événement repose sur l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°874.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:874::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DtMajEvenement
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles au moins une des  informations relatives à l'événement a été mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété RessEvenement
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ResEvenement
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété UrlResEvenement
> *Description : Adresse Web (ie. URL Uniforme Resource Locator ) de la ressource complémentaire de l'événement telle que définie par la RFC 3986.*<br>
- Valeur obligatoire

#### Propriété LbResEvenement
> *Description : Désignation commune de la ressource complémentaire de l'évènement ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété DtFinEvenement
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles l'événement se termine. La date et heure de fin de l'événement ne s'applique qu'aux évènements qui ont une durée comme la panne d'un matériel.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CourbesTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdCourbeTarage
> *Description : Identifiant unique et non signifiant d'une courbe de tarage permettant de la distinguer vis à vis des autres.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété LbCourbeTarage
> *Description : Désignation commune d'une courbe de tarage. Le libellé de la courbe de tarage est un expression rédigée par une personne (auteur) ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur obligatoire

#### Propriété TypCourbeTarage
> *Description : Classe de fonction (au sens mathématique) à laquelle une courbe de tarage se réfère. Le type de courbe de tarage prend l'une des valeurs possibles définies par le Sandre selon la nomenclature n°503.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:503::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtCreatCourbeTarage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles la courbe de tarage est créée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété LimiteInfCourbeTarage
> *Description : Nombre correspondant à la borne inférieure de la zone de bonne fiabilité de la courbe de tarage. Les débits calculés sont qualifiés "bons" lorsque le hauteur d'eau est comprise entre les limites inférieure et supérieure de la zone de bonne fiabilité de la courbe de tarage. Dans le cas contraire, ces débits sont qualifiés "douteux".*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété LimiteSupCourbeTarage
> *Description : Nombre correspondant à la borne supérieure de la zone de bonne fiabilité d'une courbe de tarage. Les débits calculés sont qualifiés "bons" lorsque le hauteur d'eau est comprise entre les limites inférieure et supérieure de la zone de bonne fiabilité de la courbe de tarage. Dans le cas contraire, ces débits sont qualifiés "douteux".*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété LimiteInfPubCourbeTarage
> *Description : Nombre correspondant à la borne inférieure de la zone de publication de la courbe de tarage. Les débits calculés à partir d'une hauteur inférieure à cette limite ont comme qualification "valeur estimée".*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété LimiteSupPubCourbeTarage
> *Description : Nombre correspondant à la borne supérieur de la zone de publication de la courbe de tarage. Les débits calculés à partir d'une hauteur supérieure à cette limite ont comme qualification "valeur estimée".*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DnCourbeTarage
> *Description : Pente de la ligne d'eau entre les deux échelles concernées. La dénivelée de la courbe de tarage est utilisée pour le calcul des stations à deux échelles dont le débit est calculé suivant la méthode de Boyer. La "dénivelée normale" est la dénivelée, exprimée en m, pour laquelle la courbe de tarage nominale est construite. Lorsque la dénivelée observée s'en écarte, une correction est appliquée. La formule théorique utilisée est la suivante : Q=Qn x Béta x (D/Dn)alpha, Dn la dénivelée normale, D la dénivelée mesurée et Qn le débit obtenu en appliquant la courbe de tarage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété AlphaCourbeTarage
> *Description : Nombre caractérisant la forme d'une puissance d'une courbe de tarage. Le coefficient alpha de la courbe de tarage est utilisé pour le calcul des stations à deux échelles dont le débit est calculé suivant la méthode de Boyer. Sa valeur théorique est 0,5. La formule théorique utilisée est la suivante : Q=Qn x Béta x (D/Dn)alpha, Dn la dénivelée normale, D la dénivelée mesurée et Qn le débit obtenu en appliquant la courbe de tarage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété BetaCourbeTarage
> *Description : Nombre caractérisant la forme d'une puissance d'une courbe de tarage. Le coefficient béta de la courbe de tarage est utilisé pour le calcul des stations à deux échelles dont le débit est calculé suivant la méthode de Boyer. Il prend en général la valeur 1. La formule théorique utilisée est la suivante : Q=Qn x Béta x (D/Dn)alpha, Dn la dénivelée normale, D la dénivelée mesurée et Qn le débit obtenu en appliquant la courbe de tarage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ComCourbeTarage
> *Description : Information descriptive d'une courbe de tarage. Le commentaire sur la courbe de tarage est un texte rédigé par une personne (auteur) ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur optionnelle

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété PivotsCourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PivotCourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété HtPivotCourbeTarage
> *Description : Dimension dans le sens vertical du point pivot.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété QPivotCourbeTarage
> *Description : Volume d'eau écoulé par unité de temps du point pivot.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété VarAPivotCourbeTarage
> *Description : Nombre caractérisant les courbes en tronçons de fonction puissance. A est l'un des coefficients du pivot de la courbe de tarage.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété VarBPivotCourbeTarage
> *Description : Nombre caractérisant les courbes en tronçons de fonction puissance. B est l'un des coefficients du pivot de la courbe de tarage.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété VarHPivotCourbeTarage
> *Description : Nombre caractérisant les courbes en tronçons de fonction puissance. H0 est l'un des coefficients du pivot de la courbe de tarage.*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PeriodesUtilisationCourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PeriodeUtilisationCourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtDebPeriodeUtilisationCourbeTarage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure date et heure auxquelles débute l'utilisation d'une courbe de tarage.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinPeriodeUtilisationCourbeTarage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles une courbe de tarage n'est plus utilisée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété EtatPeriodeUtilisationCourbeTarage
> *Description : Indication relative au stade d'utilisation d'une courbe de tarage sur une période donnée. L'état de la courbe de tarage prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°504.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:504::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété HistosActivationPeriode
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété HistoActivationPeriode
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtActivationHistoActivationPeriode
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure à laquelle une courbe de tarage a été utilisée sur la période d'utilisation considérée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtDesactivationHistoActivationPeriode
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure à laquelle la courbe de tarage n'est plus utilisée sur la période d'utilisation considérée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété DtMajCourbeTarage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles au moins une des informations relatives à la courbe de tarage est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ComPrivCourbeTarage
> *Description : Information complémentaire et technique d'une courbe de tarage réservée à une communauté restreinte de personnes. Le commentaire privé sur la courbe de tarage est un texte rédigé par une personne (auteur) ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Jaugeages
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Jaugeage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdJaugeage
> *Description : Référence auquel un jaugeage se rapporte. Il est indépendant de l'identifiant unique d'un jaugeage qui porte sur la date de début du jaugeage et sur le code du site hydrométrique associé.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DebitJaugeage
> *Description : Volume d'eau écoulé -en un site hydrométrique donné- par unité de temps. Il correspond à un débit mesuré au moment du jaugeage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtDebJaugeage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles débute une opération de jaugeage.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtFinJaugeage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles se termine une opération de jaugeage.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété SectionMouilJaugeage
> *Description : Surface, exprimée en mètre carré, délimitée par le périmètre mouillé et la limite entre l'eau et l'atmosphère.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété PerimMouilleJaugeage
> *Description : Longueur, exprimée en mètre, de paroi du cours d'eau au contact de l'eau (berges et fond). Elle ne comporte pas le contact entre l'eau et l'atmosphère.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété LargMiroirJaugeage
> *Description : Dimension, exprimée en mètre, opposée à longueur d'un cours d'eau, à la limite entre l'eau et l'atmosphère.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ModeJaugeage
> *Description : Méthode employée pour réaliser un jaugeage. Le mode de jaugeage prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°873. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:873::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ComJaugeage
> *Description : Information relative au déroulement jaugeage. Le commentaire libre concernant le jaugeage est un texte rédigé ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur optionnelle

#### Propriété VitesseMoyJaugeage
> *Description : Moyenne des rapports, exprimée en mètre seconde, d'une distance (représentée par une section de cours d'eau) au temps mis à la parcourir lors du jaugeage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété VitesseMaxJaugeage
> *Description : Rapport maximal, exprimé en mètre seconde, d'une distance (représentée par une section de cours d'eau) au temps mis à la parcourir lors du jaugeage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété VitesseMaxSurfaceJaugeage
> *Description : Rapport maximal, exprimé en mètre seconde, d'une distance (représentée par une surface du cours d'eau) au temps mis à la parcourir lors du jaugeage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété HauteursJaugeage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété HauteurJaugeage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété SysAltiStationJaugeage
> *Description : Système d'altitude dans lequel s'exprime l'altitude de la référence altimétrique du jaugeage. Le système altimétrique de référence du jaugeage prend l'une des valeurs possibles administrées par les Sandre selon la nomenclature n°76.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété CoteRetenueStationJaugeage
> *Description : Dimension verticale mesurée sur une station hydrométrique appartenant au site hydrométrique jaugé. Elle est retenue comme hauteur mesurée lors du jaugeage.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété CoteDebutStationJaugeage
> *Description : Dimension verticale mesurée sur une station hydrométrique appartenant au site hydrométrique jaugé. Elle est retenue comme hauteur mesurée en début de jaugeage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété CoteFinStationJaugeage
> *Description : Dimension verticale mesurée sur une station hydrométrique appartenant au site hydrométrique jaugé. Elle est retenue comme hauteur mesurée en fin de jaugeage.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DnStationJaugeage
> *Description : Différence de niveau d'altitude, exprimée en mètre, entre deux échelles de stations hydrométriques. Elle correspond à la pente de la ligne d'eau entre les deux échelles des stations hydrométriques.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DistanceStationJaugeage
> *Description : Dimension, exprimée en mètre, séparant le point de mesure du débit et la station hydrométrique. La distance à la station est négative lorsque la mesure est effectuée en amont de la station hydrométrique.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété StationFille
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

</details>
</blockquote>

#### Propriété DtDebutRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est utilisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété DtMajJaugeage
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles au moins une des informations d'un jaugeage est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété NumJaugeage
> *Description : Identifiant provisoire du jaugeage affecté temporairement au jaugeage lors des relevés de terrain. Une fois les relevés du jaugeage numérisés, l'identifiant unique et permanent du jaugeage est constitué de la date de début du jaugeage et du code du site hydrométrique.*<br>
- Valeur optionnelle

#### Propriété IncertCalJaugeage
> *Description : Valeur incertaine calculée exprimée en % avec un chiffre significatif (arrondi à 10 puissance moins 1). La méthode Q+ - mise au point par l'IRSTEA - permet notamment de produire ce résultat.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété IncertRetenueJaugeage
> *Description : Valeur incertaine retenue, exprimée en % avec un chiffre significatif (arrondi à 10 puissance moins 1). Elle est évaluée à partir de l'incertitude calculée complétée d'une expertise métier.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété QualifJaugeage
> *Description : Evaluation de la qualité du jaugeage permettant de savoir s'il peut être employé pour construire une courbe de tarage. La qualification du jaugeage prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°877.     cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:877::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ComPrivJaugeage
> *Description : Information technique complémentaire relative au déroulement du jaugeage. Elle est réservée à une communauté restreinte de personnes. Le commentaire privé sur le jaugeage est un texte rédigé ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur optionnelle

#### Propriété CourbesTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdCourbeTarage
> *Description : Identifiant unique et non signifiant d'une courbe de tarage permettant de la distinguer vis à vis des autres.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété LbCourbeTarage
> *Description : Désignation commune d'une courbe de tarage. Le libellé de la courbe de tarage est un expression rédigée par une personne (auteur) ; aucune convention d'écriture particulière n'est imposée.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CourbesCorrH
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CourbeCorrH
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété LbCourbeCorrH
> *Description : Désignation d'une courbe de correction des hauteurs. Le libellé de la courbe de correction des hauteurs ne repose sur aucune convention d'écriture particulière ; il doit néanmoins être suffisamment explicite pour le lecteur.*<br>
- Valeur optionnelle

#### Propriété ComCourbeCorrH
> *Description : Texte descriptif d'une courbe de correction des hauteurs. Le commentaire de la courbe de correction des hauteurs ne repose sur aucune convention d'écriture particulière.*<br>
- Valeur optionnelle

#### Propriété PointsPivot
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PointPivot
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtPointPivot
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles le point pivot est créé.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DeltaHPointPivot
> *Description : Valeur exprimant l'écart de hauteur du point pivot d'une courbe de correction.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété DtActivationPointPivot
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure à partir desquelles le point pivot est actif (au sens de servir).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationPointPivot
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure à partir desquelles le point pivot n'est plus actif (au sens de servir).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété DtMajCourbeCorrH
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles au moins une des informations relatives à la courbe de correction des hauteurs est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SeriesObsHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SerieObsHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété GrdSerieObsHydro
> *Description : Paramètre mesuré pour l'ensemble des observations hydrométriques. La grandeur observée de la série d'observations hydrométriques prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°509.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:509::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebSerieObsHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles débute la série d'observations hydrométriques. Cette date doit être antérieure ou égale à la date de la première observation de la série.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinSerieObsHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles se termine la série d'observations hydrométriques. Cette date doit être supérieure ou égale à la date de la dernière observation.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtProdSerieObsHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles la série d'observations hydrométriques est produite.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété SysAltiSerieObsHydro
> *Description : Système d'altitude dans lequel s'exprime l'altitude de la référence altimétrique employée dans une série de hauteurs mesurées (cf.  observations hydrométriques). Le système de référence altimétrique de la série d'observations hydrométriques prend l'une des valeurs possibles administrées par les Sandre selon la nomenclature n°76. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété SeriePerimSerieObsHydro
> *Description : Indication relative à la validité d'une série d'observations hydrométriques. Une série périmée d'observations hydrométriques vraie  annule la dernière série (au sens : la série la plus valide) ; les observations de la série antécédente sont valides.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété PDTSerieObsHydro
> *Description : Fréquence, exprimée en minutes, des observations hydrométriques réalisées dans une série. Si le pas de temps de la série d'observations hydrométriques n'est pas renseigné (ou égal à 0), la série est à pas de temps variable. Dans le cas contraire, la série est à pas de temps fixe.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété CourbeTarage
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdCourbeTarage
> *Description : Identifiant unique et non signifiant d'une courbe de tarage permettant de la distinguer vis à vis des autres.*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

#### Propriété ObssHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ObsHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtObsHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles l'observation hydrométrique est réalisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété ResObsHydro
> *Description : Valeur, exprimée selon la grandeur observée (cf. Grandeur observée de la série d'observations hydrométriques), de l'observation hydrométrique.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété QualifObsHydro
> *Description : Précision relative à la qualification de l'observation hydrométrique. La qualification de la donnée de l'observation prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°515.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:515::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété MethObsHydro
> *Description : Manière de procéder pour réaliser l'observation hydrométrique. La méthode d'obtention du résultat de l'observation hydrométrique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°512.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:512::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ContObsHydro
> *Description : Indication relative à l'enchaînement d'une observation hydrométrique vis-à-vis de la précédente. La continuité de la donnée de l'observation hydrométrique est vraie lorsqu'elle est jugée continue dans le temps. Lorsque cette indication est absente la données est considérée comme continue. La continuité de la donnée de l'observation hydrométrique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°923.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:923::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété StObsHydro
> *Description : Niveau de validité de l'observation hydrométrique. Le statut de l'observation hydrométrique prend l'une des valeurs possibles, administrées par le Sandre, selon la nomenclature n°510.    cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:510::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SerieSurRefAlti
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtDebutRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est utilisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

</details>
</blockquote>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété CdCapteur
> *Description : Identifiant unique d'un capteur. Le code du capteur comporte 12 chiffres dont 10 sont relatifs au code station hydrométrique et les 2 autres numéros sont fournis par l'exploitant. La codification des capteurs est sous la responsabilité des producteurs de données.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SeriesObsMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SerieObsMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

#### Propriété CdGrdMeteo
> *Description : Paramètre (exemple : température de l'air, pression atmosphérique...) qui fait l'objet de mesures ou d'observations météorologiques au cours du temps sur un site météorologique. La grandeur météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°523. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:523::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DureeSerieObsMeteo
> *Description : Durée du cumul, exprimé en minutes, (zéro pour les données instantanées) des observations météorologiques d'une série.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtDebSerieObsMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la première observation  météorologique de la série.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinSerieObsMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la dernière observation  météorologique de la série.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtProdSerieObsMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles la série d'observations météorologiques est produite.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ObssMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ObsMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtObsMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles  l'observation météorologique est réalisée. Pour les valeurs de cumul, cette date est celle de la fin du cumul. Exemple: la lame d'eau horaire de 8h représente le cumul de pluie entre 7h et 8h.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété ResObsMeteo
> *Description : Valeur, exprimée dans l'unité de la grandeur (cf. Grandeur météorologique), de l'observation météorologique.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété IndiceQualObsMeteo
> *Description : Nombre de valeurs disponibles divisés par le nombre de valeurs nécessaires pour le calcul d'un résultat. Utilisé pour les résultats de type cumul uniquement. Exemple: 0,75 (18/24) pour une lame d'eau journalière obtenue à partir de données horaires et pour laquelle 6 valeurs sont manquantes*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ContxtObsMeteo
> *Description : Cadre environnemental dans lequel l'observation météorologique est réalisée. Le contexte environnemental prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°872.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:872::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété QualifObsMeteo
> *Description : Etat de qualification de l'observation météorologique. Par défaut, la valeur par défaut est non qualifiée. La qualification de la donnée de l'observation météorologique prend l'une des valeurs possibles administrées par le Sandre selon nomenclature n°508.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:508::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété MethObsMeteo
> *Description : Manière de procéder aboutissant à l'observation météorologique. La mesure correspond à une valeur effectivement mesurée.  Le calcul permet d'indiquer que la valeur est le résultat d'un calcul (exemple : « recomposition » d'un cumul pluvio 24h à partir de cumuls pluvio 1h). L'interpolation permet d'indiquer que les valeurs échangées sont issus d'une interpolation qui fait « apparaître » des données là où il n'y a pas de mesure réelle (à la charge des utilisateurs d'évaluer la pertinence de ces données interpolées). La méthode d'obtention du résultat de l'observation météorologique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°512.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:512::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété StObsMeteo
> *Description : Niveau de validité de l'observation météorologique. Le statut de l'observation météorologique prend l'une des valeurs possibles, administrées par le Sandre, selon la nomenclature n°510.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:510::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SeriesObsElaborHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SerieObsElaborHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété TypDeGrdSerieObsElaborHydro
> *Description : Paramètre calculé de la série d'observations élaborées hydrométriques. Le type de grandeur de la série d'observations élaborées hydrométriques prend l'une des valeurs possibles définies par le Sandre dans la nomenclature n°513.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:513::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété PDTSerieObsElaborHydro
> *Description : Fréquence des observations hydrométriques réalisées dans une série d'observations élaborées hydrométriques. Le pas de temps est exprimé selon le type de grandeur observée. Cette indication figure clairement dans la définition du type de la grandeur élaborée hydrométrique. Prenons l'exemple de la grandeur élaborée hydrométrique de type VCN n, il s'agit du débit moyen minimal sur n jours consécutifs. Le pas de temps sera exprimé en jours pour cette grandeur.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtDebPlagSerieObsElaborHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde exprimés en temps universel (TU) de début de la plage des données prises en compte pour le calcul du résultat de l'observation élaborée hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinPlagSerieObsElaborHydro
> *Description : Jour, mois et année suivis de l'heure, minute et seconde exprimés en temps universel (TU) de fin de la plage des données prises en compte pour le calcul du résultat de l'observation élaborée hydrométrique.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtProdSerieObsElaborHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles la série d'observations élaborées météorologiques est produite.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDesactivationSerieObsElaborHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle  de la série d'observations élaborées hydrométriques est inactive (au sens supprimée).*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtActivationSerieObsElaborHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle  la série d'observations élaborées hydrométriques est créée.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété SysAltiSerieObsElaborHydro
> *Description : Système d'altitude dans lequel s'exprime l'altitude de la référence altimétrique employée dans une série de hauteurs mesurées (cf.  observations élaborées hydrométriques). Le système de référence altimétrique de la serie d'observations hydrométriques prend l'une des valeurs possibles administrées par les Sandre selon la nomenclature n°76. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété GlissanteSerieObsElaborHydro
> *Description : Une série d'observations élaborées hydrométriques est dite glissante lorsque les différentes observations qu'elle contient ne sont pas décalées de la valeur du pas de temps de la série mais de la valeur de base du type de grandeur. Par exemple, dans une série glissante, la série de débits moyens sur 5 jours contient une valeur de débit moyen par jour. Dans une série non glissante, la série ne contient qu'une valeur tous les 5 jours.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété DtDebutRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est utilisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété ObssElaborHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ObsElaborHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtObsElaborHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles  l'observation élaborée hydrométrique s'applique. Selon le type de grandeur élaborée, certains composants de la date et heure ne sont pas significatifs. Prenons l'exemple d'un débit moyen mensuel pour lequel seuls l'année et le mois de la date et heure de l'observation élaborée hydrométrique sont représentatifs.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ResObsElaborHydro
> *Description : Valeur de l'observation élaborée hydrométrique selon le type de grandeur. Elle est exprimée en mm lorsque le type de grandeur est une hauteur. Elle est exprimée en l/s lorsqu'il s'agit d'un débit. Cette valeur peut être représentée sous la forme d'un débit spécifique, d'une lame d'eau... Elle est vide (absente) lorsqu'il est impossible de la calculer.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété QualifObsElaborHydro
> *Description : Etat de qualification de l'observation élaborée hydrométrique. La qualification de l'observation élaborée hydrométrique hérite de la qualification la plus faible des données ayant servies à la calculer. La qualification de l'observation élaborée hydrométrique prend l'une des valeurs possibles définies par le Sandre dans la nomenclature n°515.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:515::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété MethObsElaborHydro
> *Description : Manière de procéder aboutissant à l'observation élaborée hydrométrique. La méthode de l'observation élaborée hydrométrique prend l'une des valeurs possibles définies par le Sandre dans la nomenclature n°512. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:512::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ContObsElaborHydro
> *Description : Indication relative à l'enchaînement d'une observation élaborée hydrométrique vis-à-vis de la précédente. La continuité de la donnée de l'observation élaborée hydrométrique est vraie lorsqu'elle est jugée continue dans le temps. Lorsque cette indication est absente la données est considérée comme continue. La continuité de la donnée de l'observation élaborée hydrométrique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°923. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:923::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété StObsElaborHydro
> *Description : Niveau de validité de l'observation élaborée hydrométrique. Le statut de l'observation élaborée hydrométrique prend l'une des valeurs possibles, administrées par le Sandre, selon la nomenclature n°510.    cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:510::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété SeriesObsElaborMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété SerieObsElaborMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdGrdSerieObsElaborMeteo
> *Description : Paramètre (exemple : température de l'air, pression atmosphérique...) qui fait l'objet de mesures ou observations météorologiques au cours du temps sur un site météorologique. La grandeur météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°523. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:523::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété TypSerieObsElaborMeteo
> *Description : Catégorie d'observation élaborée météorologique. Elle prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°876. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:876::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebSerieObsElaborMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la série d'observations élaborées météorologiques commence.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinSerieObsElaborMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la série d'observations élaborées météorologiques se termine.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtProdSerieObsElaborMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles la série d'observations élaborées météorologiques est produite.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DureeSerieObsElaborMeteo
> *Description : Durée du cumul en minute (zéro pour les données instantanées) des observations élaborées météorologiques d'une série.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété SerieObsElaborMeteoIpa
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété KSerieObsElaborMeteoIpa
> *Description : Coefficient k de la série d'observations élaborées météorologiques de type indice de précipitations antérieures (IPA) compris entre ]0 et 1[.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété PDTSerieObsElaborMeteoIpa
> *Description : Nombre de pas de temps (PDT) de la série d'observations élaborées météorologiques de type indice de précipitations antérieures (IPA). Par défaut, il est égal à la partie entière de 3 divisé par ln  du coefficient k de la série d'observations élaborées météorologiques de type IPA.*<br>
- Valeur optionnelle
- Type : nombre entier

</details>
</blockquote>

#### Propriété ObssElaborMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ObsElaborMeteo
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtObsElaborMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle l'observation élaborée météorologique est faite. Pour les valeurs de cumul, cette date est celle de la fin du cumul. Exemple: la lame d'eau horaire de 8h représente le cumul de pluie entre 7h et 8h.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété ResObsElaborMeteo
> *Description : Valeur de l'observation élaborée météorologique, exprimée dans l'unité de la grandeur.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété IndiceQualObsElaborMeteo
> *Description : Nombre de valeurs disponibles divisé par le nombre de valeurs nécessaire pour le calcul d'un résultat. Utilisé pour les résultats de type cumul uniquement. Exemple: 0,75 (18/24) pour une lame d'eau journalière obtenue à partir de données horaires et pour laquelle 6 valeurs sont manquantes*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété QualifObsElaborMeteo
> *Description : Etat de qualification du résultat de la mesure de l'observation élaborée météorologique. Par défaut, la valeur par défaut est non qualifiée. La qualification de la donnée de l'observation élaborée météorologique prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°508.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:508::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété MethObsElaborMeteo
> *Description : Manière de procéder permettent d'obtenir l'observation élaborée météorologique. La mesure correspond à une valeur effectivement mesurée. Le calcul permet d'indiquer que la valeur est le résultat d'un calcul (exemple : « recomposition » d'un cumul pluvio 24h à partir de cumuls pluvio 1h).   L'interpolation permet d'indiquer que les valeurs échangées sont issues d'une interpolation qui fait « apparaître » des données là où il n'y a pas de mesure réelle (à la charge des utilisateurs d'évaluer la pertinence de ces données interpolées).   La méthode d'obtention du résultat de l'observation élaborée météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°512.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:512::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété StObsElaborMeteo
> *Description : Niveau de validité de l'observation élaborée météorologique. Le statut de l'observation élaborée météorologique prend l'une des valeurs possibles, administrées par le Sandre, selon la nomenclature n°510.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:510::::::referentiel:3.1:html*<br>
- Valeur optionnelle

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

#### Propriété ValPondSiteMeteo
> *Description : Coefficient, exprimé sous la forme d'un pourcentage, de pluie du site météorologique affecté à un site hydrométrique.*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété GradsHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété GrdsGradHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété GrdGradHydro
> *Description : Grandeur mesurée. Cet attribut prend les valeurs possibles définies par le Sandre dans la nomenclature n°509. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:509::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété GradHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtProdGradHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure à partir desquelles le gradient hydrométrique est produit.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtObsGradHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure à partir desquelles le gradient hydrométrique est observé.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DureeGradHydro
> *Description : Intervalle de temps utilisé pour le calcul du gradient en question.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété ResGradHydro
> *Description : Valeur du gradient.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété StGradHydro
> *Description : Statut du gradient. Il prend le statut le plus faible des données ayant servies à le calculer. Cet attribut prend les valeurs possibles définies par le Sandre administrées dans la nomenclature n°510.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:510::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété QualifGradHydro
> *Description : Qualification du gradient. Un gradient hérite de la qualification la plus faible des données ayant servies à la calculer. Les valeurs possibles sont administrées par le Sandre dans la nomenclature n°515. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:515::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété MethQualifGradHydro
> *Description : Méthode d'obtention du gradient. Cet attribut prend les valeurs possibles définies par le Sandre dans la nomenclature n°512. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:512::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété CdCapteur
> *Description : Identifiant unique d'un capteur. Le code du capteur comporte 12 chiffres dont 10 sont relatifs au code station hydrométrique et les 2 autres numéros sont fournis par l'exploitant. La codification des capteurs est sous la responsabilité des producteurs de données.*<br>
- Valeur obligatoire

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ValidsAnneeHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ValidAnneeHydro
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AnneeValidAnneeHydro
> *Description : Période de 12 mois à laquelle la qualification des données hydrométriques est associée.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété QualifValidAnneeHydro
> *Description : Etat de qualification des données d'une année. La qualification prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°576. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:576::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DispoHValidAnneeHydro
> *Description : Indique si la chronique des hauteurs instantanées est complète sur l'année. Une année est complète si elle contient des observations sur toute son étendue et sans discontinuité. La disponibilité de la hauteur instantanée prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°518. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:518::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété DispoQValidAnneeHydro
> *Description : Indique si la chronique des débits mensuels est complète sur l'année. Une année complète est une année comportant 12 débits mensuels. La disponibilité prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°518.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:518::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ComValidAnneeHydro
> *Description : Texte libre visant à expliquer le résultat de la qualification des données hydrométriques de l'année. Le commentaire de la qualification de l'année hydrométrique ne repose sur aucune convention d'écriture particulière.*<br>
- Valeur optionnelle

#### Propriété DtMajValidAnneeHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle au moins une des  informations relatives à la qualification des données annuelles est mise à jour.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Simuls
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Simul
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtProdSimul
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle le calcul de la simulation est fait.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété GrdSimul
> *Description : Paramètre objet de la simulation. La grandeur de la simulation prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°509.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:509::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété CdSimul
> *Description : Référence de la simulation pour les experts métiers ; elle est indépendante de l'identifiant unique de la simulation.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété IndiceQualSimul
> *Description : Indication relative à la qualité de la simulation dans son ensemble. L'indice qualité de la simulation prend une valeur comprise entre 0 (simulation la plus mauvaise) et 100 (meilleure simulation possible).*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété DtFinValidSimul
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle la simulation n'est plus utilisable.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDebSimul
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la première prévision de la simulation.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtFinSimul
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la dernière prévision de la simulation.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtBaseSimul
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de référence des différentes échéances de prévision de la simulation, postérieure aux dates des dernières données disponibles de certaines entrées du modèle.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété DtDerObsSimul
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de  l'observation la plus récente disponible au point de sortie (site ou station) du modèle, au moment de son lancement.*<br>
- Valeur optionnelle
- Type : chaîne de caractères

#### Propriété ModeCalSimul
> *Description : Méthode de calcul employée pour produire les résultats de la simulation. Le mode de calcul de la simulation prend l'une des valeurs possibles de la nomenclature Sandre n°924.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:924::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété StSimul
> *Description : Niveau de validité de la simulation. Le statut de la simulation prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°516. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:516::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété TypPubliSimul
> *Description : Indication signifiant si une simulation est rendue publique ou non. Le type de publication de la simulation prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°874  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:874::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété SysAltiSimul
> *Description : Système d'altitude dans lequel s'exprime l'altitude de la référence altimétrique employée dans une simulation. Le système de référence altimétrique de la série d'observations hydrométriques prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°76.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:76::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété ContexteSimul
> *Description : Commentaire libre ; aucune convention d'écriture n'est imposée. Le contexte de la simulation permet par exemple de préciser si la simulation dépend d'autres simulations ou d'indiquer les post-traitements utilisés.*<br>
- Valeur optionnelle

#### Propriété ComSimul
> *Description : Texte libre décrivant une simulation. Aucune convention d'écriture n'est imposée.*<br>
- Valeur optionnelle

#### Propriété ComPrivSimul
> *Description : Texte libre décrivant une simulation. Aucune convention d'écriture n'est imposée. Information complémentaire et technique réservée à une communauté restreinte de personnes.*<br>
- Valeur optionnelle

#### Propriété ModeSimul
> *Description : Le mode de la simulation traduit la portée temporelle des points de prévision, par exemple en vue d’une représentation graphique (simulation continue, discrète...). Le mode de la simulation prend l'une des valeurs possibles de la nomenclature Sandre n°925. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:925::::::referentiel:3.1:html*<br>
- Valeur optionnelle

#### Propriété CdModelePrevision
> *Description : Identifiant unique du modèle numérique permettant la prévision des débits et hauteurs d'eau au niveau des sites et des stations hydrométriques. Le code du modèle de prévision est sous la responsabilité du service central d’hydrométéorologie et d’appui à la prévision des inondations (Schapi).*<br>
- Valeur obligatoire

#### Propriété DtDebutRefAlti
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date à laquelle une référence altimétrique d'une station hydrométrique est utilisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété CdCourbeTarage
> *Description : Identifiant unique et non signifiant d'une courbe de tarage permettant de la distinguer vis à vis des autres.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété PrevsTendance
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PrevTendance
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtPrevTendance
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la prévision de tendance.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété ResMoyPrevTendance
> *Description : Valeur moyenne ou médiane de la prévision de tendance.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ResMinPrevTendance
> *Description : Valeur minimum ou tendance basse de la prévision de tendance.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ResMaxPrevTendance
> *Description : Valeur maximum ou tendance haute de la prévision de tendance.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété IncertDtPrevTendance
> *Description : Incertitude temporelle du point de prévision exprimée en minutes entières.*<br>
- Valeur optionnelle
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PrevsDeterministe
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PrevDeterministe
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtPrevDeterministe
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la prévision déterministe.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété ResPrevDeterministe
> *Description : Valeur de la prévision déterministe.*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété IncertDtPrevDeterministe
> *Description : Incertitude temporelle du point de prévision exprimée en minutes entières.*<br>
- Valeur optionnelle
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PrevsProb
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PrevProb
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ProbsPrev
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ProbPrev
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété ResProbPrev
> *Description : Valeur de la prévision pour une probabilité donnée.*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété ScnSimul
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété LbScnSimul
> *Description : Nom concis, rédigé selon les règles d’usage (code scénario unique POM dans le contexte du réseau Vigicrues), identifiant sans ambiguïté le scénario de la simulation.*<br>
- Valeur obligatoire

#### Propriété DescScnSimul
> *Description : Texte libre décrivant un scénario de la simulation. Aucune convention d'écriture n'est imposée. Il permet de décrire plus précisément les données d'entrées utilisées pour produire la simulation.*<br>
- Valeur optionnelle

</details>
</blockquote>

#### Propriété PrevsEnsemble
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PrevEnsemble
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtPrevEnsembliste
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la prévision ensembliste.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété MembresPrevEnsemble
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété MembrePrevEnsemble
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété LbMembrePrevEnsemble
> *Description : Nom commun éventuellement nommé par un numéro du membre de la prévision ensembliste.*<br>
- Valeur obligatoire

#### Propriété PoidMembrePrevEnsemble
> *Description : Poids du membre sous forme d’un entier de 1 à n.*<br>
- Valeur optionnelle
- Type : nombre entier

#### Propriété ResMembrePrevEnsemble
> *Description : Valeur de la prévision pour un membre de la prévision ensembliste.*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

#### Propriété PrevsEvol
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété PrevEvol
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété TypPrevEvol
> *Description : Evolution à la hausse comme à la baisse de la prévision. Le type de prévision d'évolution prend l'une des valeurs possibles définies selon la nomenclature Sandre n°927.   cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:927::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété DtDebPrevEvol
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de début de la prévision d’évolution valable jusqu’à la date de la prévision suivante ou indéfiniment. .*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété IncertDtPrevEvol
> *Description : Incertitude temporelle du point de prévision exprimée en minutes entières.*<br>
- Valeur optionnelle
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

#### Propriété Alarms
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété Alarm
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété DtAlarm
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles l'alarme est déclenchée ou arrêtée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété TypAlarm
> *Description : Catégorie d'alarme. Le type de l'alarme prend l'une des valeurs possibles administrées par le Sandre dans la nomenclature n°517.  cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:517::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété MessAlarm
> *Description : Indication textuelle affichée par l'alarme.*<br>
- Valeur optionnelle

#### Propriété AlarmActivee
> *Description : Etat de l'alarme. L'alarme est activée par déclenchement ou désactivée par arrêt.*<br>
- Valeur optionnelle
- Type : booléen

#### Propriété AlarmsSeuil
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété AlarmSeuil
- Type : dictionnaire (clés-valeurs)

<blockquote>
<details>

<summary>Cet objet doit contenir les champs suivants :</summary>

#### Propriété CdSeuilHydro
> *Description : Identifiant non signifiant désignant de manière unique un seuil hydrométrique. Le code du seuil hydrométrique est sous la responsabilité du service central d’hydrométéorologie et d’appui à la prévision des inondations (Schapi).*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété CdSeuilMeteo
> *Description : Identifiant non signifiant désignant de manière unique un seuil météorologique. Le code du seuil météorologique est sous la responsabilité du service central d’hydrométéorologie et d’appui à la prévision des inondations (Schapi).*<br>
- Valeur obligatoire
- Type : nombre entier

#### Propriété CdCapteur
> *Description : Identifiant unique d'un capteur. Le code du capteur comporte 12 chiffres dont 10 sont relatifs au code station hydrométrique et les 2 autres numéros sont fournis par l'exploitant. La codification des capteurs est sous la responsabilité des producteurs de données.*<br>
- Valeur obligatoire

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété CdGrdMeteo
> *Description : Paramètre (exemple : température de l'air, pression atmosphérique...) qui fait l'objet de mesures ou d'observations météorologiques au cours du temps sur un site météorologique. La grandeur météorologique prend l'une des valeurs possibles administrées par le Sandre selon la nomenclature n°523. cf http://www.sandre.eaufrance.fr/?urn=urn:sandre:donnees:523::::::referentiel:3.1:html*<br>
- Valeur obligatoire

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété DtObsHydro
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles l'observation hydrométrique est réalisée.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtObsMeteo
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date et heure auxquelles  l'observation météorologique est réalisée. Pour les valeurs de cumul, cette date est celle de la fin du cumul. Exemple: la lame d'eau horaire de 8h représente le cumul de pluie entre 7h et 8h.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété DtPrevTendance
> *Description : Jour, mois, et année suivis de l'heure, minute et seconde, exprimée en temps universel (TU), date de la prévision de tendance.*<br>
- Valeur obligatoire
- Type : chaîne de caractères

#### Propriété PProbPrev
> *Description : Nombre compris entre 0 et 100 traduisant la probabilité de non dépassement de la valeur de la prévision (centile).*<br>
- Valeur obligatoire
- Type : nombre entier

</details>
</blockquote>

</details>
</blockquote>

#### Propriété CdSiteHydro
> *Description : Identifiant national unique d'un site hydrométrique. Le code d'un site hydrométrique est signifiant pour partie ; il est construit selon la règle suivante : [Code de la zone hydrographique sur 4 caractères sur laquelle est situé le site hydrométrique] + [Numéro incrémental sans signification particulière sur 4 caractères].  Par exemple, J4310010 pour un site localisé sur la zone hydrographique J431.   Afin de gérer l'historique des codes de la banque HYDRO, les règles suivantes sont retenues :  1.	Toute station banque HYDRO est « transformée » en un site hydro ET une station SAUF pour les stations situées sur un site déjà référencé (auquel cas un nouveau numéro est attribué) 2.	Toute station banque HYDRO conserve son code actuel qui devient le code du site hydro en respectant la règle générale retenue (anciennement Code hydro + numéro avec  signifiance).   Pour les stations actuelles d'HYDRO situées sur un même site, un travail préliminaire des producteurs de données sera nécessaire pour définir le code hydro à conserver.*<br>
- Valeur obligatoire

#### Propriété CdStationHydro
> *Description : Identifiant unique d'un site hydrométrique. L'identifiant complet de la station hydrométrique est le code du site hydrométrique + le code de la station hydrométrique sur 2 caractères. La codification des stations est sous la responsabilité des producteurs de données.  Par exemple, les trois stations suivantes appartenant à deux sites de mesures sont identifiées comme il suit (code site / code station) :  Station 1 du site : L0410610 : L0410610 (Hydro) / 01 Station 2 du site : L0410610 : L0410610 (Hydro) / 02 Station 1 du site L0321510 : L0321510 (Hydro) / 01  Afin de gérer l'historique des codes de la banque HYDRO, les codes hydro des anciennes « stations » seront conservés et affectés aux sites hydrométriques, dans la mesure où l’ancienne station en question n’est pas située sur un site comportant une autre station.*<br>
- Valeur obligatoire

#### Propriété CdSiteMeteo
> *Description : Identifiant unique du site météorologique. Il prend la forme soit d'un code Météo-France (METEOFRANCE), soit d'un code de l'Organisation mondiale de la météo (OMM).  1) Le code Météo-France est un identifiant numérique de 9 chiffres, attribué selon les règles ci-dessous. Sites fixes du territoire français (outre-mer inclus) +  Andorre et Monaco : plage 001.***.*** à 099.***.*** :   L’identifiant est alors construit sur la base du numéro de département, du code INSEE de la commune et du rang du site dans la commune. La notion de département est étendue aux territoires d’outre-mer et collectivités territoriales « Tom » ainsi qu’à l’Andorre et à Monaco. Le tableau suivant résume les modalités de construction de l’identifiant. Précisons que les colonnes « département » et « commune » correspondent par ailleurs aux valeurs que prennent respectivement les champs département et commune dans diverses tables de métadonnées.  	Métropole	Dom	Tom, Taaf et Collectivités territoriales	Andorre et  Monaco	 N°département	 2 chiffres : dd ex. 33 Gironde	3 chiffres : 97d ex. 972 Martinique       973 Guyane       974 Réunion      	3 chiffres : 98d ex. 988 N. Calédonie       985 Mayotte       984 Taaf 	2 chiffres : 99 	 N°commune	 3 chiffres : ccc ex. 281 Bordeaux	2 chiffres : cc ex. 04 Kourou	2 chiffres : cc ex.18 Nouméa      08 Mayotte	3 chiffres : ccc ex. 130 Andorre 138 Monaco	 N° d’ordre ou rang du site dans la commune(*)	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	3 chiffres : ooo ex.  001	 Identifiant	0ddcccooo	097dccooo	098dcc000	099cccooo	  (*)En fonction de la plage dans laquelle il se situe, le rang correspond à plusieurs sortes de sites : de 001 à 399 : postes climatologiques du réseau d’état, de 400 à 499 : postes à vocation nivo-météorologiques, de 500 à 599 : sites particuliers n’envoyant pas de données, de 600 à 699 : points servant à une prévision par adaptation statistique, de 700 à 799 : radars profileurs  de 800 à 899 : sites en double  de 900 à 999 : postes SNCF.  Site fictif  (site en test dans les locaux du service de maintenance) plage ddd.000.001 à ddd.000.999  (ddd : n° de département ou 000 pour Dclim)  Sites en mer et sites étrangers : plage 100.***.*** à 199.***.*** : sites en mer plage 200.***.*** à 899.***.*** : sites étrangers  Exemples :  200.***.*** R.F.A 201.***.*** Bénélux 202.***.*** Royaume Uni 203.***.*** Espagne 204.***.*** Italie 205.***.*** Suisse 300.***.*** Afrique 400.***.*** Asie 500.***.*** Amérique 600.***.*** Océanie  2) Le code OMM est un code numérique entier sur 5 chiffres. Les 2 premiers sont un code pays (07 pour la France), les 3 autres un numéro d'ordre.*<br>
- Valeur obligatoire

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

</details>
</blockquote>

