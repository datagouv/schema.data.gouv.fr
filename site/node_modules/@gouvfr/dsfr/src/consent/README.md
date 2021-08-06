# consent

Le gestionnaire de consentement permet à l'utilisateur de définir ses préférences sur l'utilisation de ses données personnelles.

## Dépendances
```shell
consent
└─ buttons
└─ core
└─ forms
└─ links
└─ modal
└─ radios
```

## Utilisation
Afin d’utiliser le composant `consent`, il est nécessaire d’ajouter les fichiers de styles et de scripts présents dans le dossier dist dans l'ordre suivant :
```html
<html>
  <head>
    <link href="css/core/core.min.css" rel="stylesheet">
    <link href="css/forms/forms.min.css" rel="stylesheet">
    <link href="css/links/links.min.css" rel="stylesheet">
    <link href="css/buttons/buttons.min.css" rel="stylesheet">
    <link href="css/radios/radios.min.css" rel="stylesheet">
    <link href="css/modal/modal.min.css" rel="stylesheet">
    <link href="css/consent/consent.min.css" rel="stylesheet">
  </head>
  <body>
    <script type="module" href="js/core/core.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/core/core.nomodule.min.js" ></script>
    <script type="module" href="js/modal/modal.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/modal/modal.nomodule.min.js" ></script>
  </body>
</html>
```

## Documentation

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/609189956/) sur le module Gestionnaire de consentement