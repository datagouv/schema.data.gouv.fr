<MenuSchema />

# Schéma de l'offre d'insertion

Ce dépôt contient le schéma de l'offre d'insertion. Il est issu de la collaboration d'acteurs de l'insertion.

## Le schéma

Le format actuellement supporté est le JSON schema. Le format Table schema sera supporté prochainement.

Le schéma comprend actuellement les structures de l'insertion et devraient à terme inclure les services proposés par ces structures.

La documentation du schéma est disponible [ici](https://app.gitbook.com/o/-LumF4j8whrJ3iKwLJ6f/s/8F5IpX18jjDR1Iawzsnj/schemas-de-donnees-de-loffre/schema-des-structures-dinsertion).

### Exemple de données au format du schéma de l'offre d'insertion.

```json
[
    {
        "id": "c3d15659-8de9-4fd6-b283-04d50f6ace57",
        "siret": "60487647500499",
        "rna": "W123456789",
        "nom": "MOBILETTE",
        "commune": "Robinboeuf CEDEX",
        "code_postal": "09891",
        "code_insee": "09890",
        "adresse": "RUE DE LECLERCQ",
        "date_maj": "2022-04-28T16:53:11Z",
        "complement_adresse": "HOTEL DE VILLE",
        "longitude": 7.848133,
        "latitude": 48.7703,
        "typologie": "ASSO",
        "telephone": "0102030405",
        "courriel": "julie@example.net",
        "site_web": "https://www.asso-gonzalez.net/",
        "presentation_resume": "L’association Mobilette propose des solutions de déplacement aux personnes pour qui la non mobilité est un frein à l’insertion professionnelle : - connaissance de l'offre de transport du territoire - accès à un véhicule 2 ou 4 roues - transport solidaire - accès au permis",
        "presentation_detail": "",
        "source": "solidagregateur",
        "structure_parente": "7713e292-abd1-42fc-b1f0-071b7e7a2f61",
        "lien_source": "https://solidagregateur.fr/structures/c3d15659-8de9-4fd6-b283-04d50f6ace57",
        "horaires_ouverture": "Mo-Fr 10:00-20:00 \"sur rendez-vous\"; PH off"
    }
]
```

## Contribuer

Créer un [nouveau ticket](https://github.com/betagouv/data-inclusion-schema/issues/new) ici.

Participer aux [ateliers](https://app.gitbook.com/o/-LumF4j8whrJ3iKwLJ6f/s/8F5IpX18jjDR1Iawzsnj/schemas-de-donnees-de-loffre/les-schemas-and-ateliers).

## Changements

### Version 0.1.0 - 2022-06-06

Version initiale.