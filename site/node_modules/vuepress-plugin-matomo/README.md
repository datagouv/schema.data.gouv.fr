# Matomo Vuepress Plugin

Allows Matomo access tracking on vuepress >= 1.0. Does not work on
Vuepress 0.x, requires 1.x alpha branch with plugin support.

## Installation

```
npm install vuepress-plugin-matomo
```

or 

```
yarn add vuepress-plugin-matomo
```

## Vuepress Setup

Add the following block to the plugins array of your *config.js* file.

```js
// ...
  plugins: [
    [
      // ...
      "vuepress-plugin-matomo",
      {
        'siteId': 1,
        'trackerUrl': "https://my.matomo.url.here/"
      },
      // ...
    ]
// ...
```

## Plugin Options

* trackerUrl (string, **Required**)
    * URL where the piwik.php/piwik.js files can be found
* siteID (number, **Required**)
    * Matomo numeric site ID of the site you want to track
* trackerJsFile (string, defaults to "piwik.js", Optional)
    * Name of the js file to call on the matomo server
* trackerPhpFile (string, defaults to "piwik.php", Optional)
    * Name of the php file to call on the matomo server
* enableLinkTracking (boolean, defaults to true, Optional)
    * Enable/disable link click tracking
    
## License

MIT License, see [LICENSE.txt](LICENSE.txt) for more info.
