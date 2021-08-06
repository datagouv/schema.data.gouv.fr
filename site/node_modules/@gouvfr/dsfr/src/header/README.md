# header

L’en-tête permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

## Dépendances
```shell
header
└─ buttons
└─ core
└─ inputs
└─ links
└─ logo
└─ modal
└─ navigation
└─ search
```

## Utilisation
Afin d’utiliser le composant `header`, il est nécessaire d’ajouter les fichiers de styles et de scripts présents dans le dossier dist dans l'ordre suivant :
```html
<html>
  <head>
    <link href="css/core/core.min.css" rel="stylesheet">
    <link href="css/links/links.min.css" rel="stylesheet">
    <link href="css/logo/logo.min.css" rel="stylesheet">
    <link href="css/buttons/buttons.min.css" rel="stylesheet">
    <link href="css/inputs/inputs.min.css" rel="stylesheet">
    <link href="css/modal/modal.min.css" rel="stylesheet">
    <link href="css/navigation/navigation.min.css" rel="stylesheet">
    <link href="css/search/search.min.css" rel="stylesheet">
    <link href="css/header/header.min.css" rel="stylesheet">
  </head>
  <body>
    <script type="module" href="js/core/core.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/core/core.nomodule.min.js" ></script>
    <script type="module" href="js/modal/modal.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/modal/modal.nomodule.min.js" ></script>
    <script type="module" href="js/navigation/navigation.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/navigation/navigation.nomodule.min.js" ></script>
    <script type="module" href="js/header/header.module.min.js" ></script>
    <script type="text/javascript" nomodule href="js/header/header.nomodule.min.js" ></script>
  </body>
</html>
```

## Documentation

Consulter [la documentation](https://gouvfr.atlassian.net/wiki/spaces/DB/pages/222789846/En-t+te+-+Header) sur le module En-tête