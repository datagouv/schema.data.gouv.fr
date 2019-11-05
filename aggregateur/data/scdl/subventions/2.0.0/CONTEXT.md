Dans le but de renforcer la transparence financière des aides octroyées par les personnes publiques, les collectivités locales, de plus de 3500 habitants et plus de 50 agents, qui attribuent des subventions dont le montant annuel est supérieur à 23 000€ ont l’obligation, à compter du 1er août 2017, de rendre accessibles, sous forme électronique, dans un standard ouvert aisément réutilisable et exploitable par un système de traitement automatisé, les données essentielles de leurs conventions de subvention. La nature et les modalités de diffusion de ces données essentielles ont été fixées par voie réglementaire.

De fait, la spécification SCDL du modèle de données relatif aux subventions attribuées par une collectivité locale a été élaborée à partir des sources suivantes :

- Documents de cadrage juridique
    - [​Décret n° 2017-779 du 5 mai 2017 relatif à l'accès sous forme électronique aux données essentielles des conventions de subvention​](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000034600552)
    - [​Arrêté du 17 novembre 2017 relatif aux conditions de mises à disposition des données essentielles des conventions de subvention​](https://www.legifrance.gouv.fr/jo_pdf.do?id=JORFTEXT000036040528)
- Document de cadrage technique
    - [​Format réglementaire pour la publication des données essentielles des conventions de subventions sur le dépôt Github de la mission Etalab​](https://github.com/etalab/format-subventions)

Si nécessaire, elle sera mise à jour, adaptée et consolidée à partir des mêmes sources.

#### `Avertissement !`

L'utilisation de cette spécification requiert de prêter une attention toute particulière aux points suivants :

* Dans l'attente d'une [éventuelle modification](https://github.com/etalab/format-subventions/issues/2) mais contrairement à ce qui est pour le moment prévu dans le format réglementaire, cette spécification énonce que, pour **datesPeriodeVersement**,  le séparateur de dates pour une période est une barre oblique et pas un tiret du bas afin de respecter la norme internationale ISO 8601.
* Pour s'y conformer, elle nécessite de créer une ligne par bénéficiaire et non une ligne par subvention. Dans le cas d'une subvention attribuée à plusieurs bénéficiaires, toutes les données de la subvention doivent être répétées à l'identique sur autant de lignes qu'il y a de bénéficiaires, à l'exception des champs suivants dont les valeurs varient : **nomBeneficiaire**, **idBeneficiaire**, et **pourcentageSubvention**. Dans certains cas, les champs **conditionsVersement** et **datesPeriodeVersement** peuvent également varier d'un bénéficiaire à un autre, pour une même subvention.