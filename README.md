# Aphrodite
### UI framework from ingresse.com

A front-end framework with Ingresse styles, using AngularJS 1.5.

(If you want, can use just the CSS)

_

## Install
There's two simple ways to use it.

_

#### Downloading files
Just [download](https://github.com/ingresse/aphrodite/archive/master.zip), extract the package and move files from `dist` to your app folder.


After, include files in your page.

```html
...
<head>
    ...
    <link rel="stylesheet" type="text/css"
          href="/assets/aphrodite.css" />

    <!-- OPTIONALS -->
    <link rel="stylesheet" type="text/css"
          href="/assets/aphrodite-font-family.css" />
    <link rel="stylesheet" type="text/css"
          href="/assets/aphrodite-icons.css" />
</head>
<body>
    ...
    <!-- OPTIONAL: AngularJS -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js">
    </script>
    ...
    <!-- OPTIONALS: Components and Services AngularJS based -->
    <script type="text/javascript" src="/scripts/aphrodite-vendors.js">
    </script>
    <script type="text/javascript" src="/scripts/aphrodite.js">
    </script>
</body>
...
```

_

### Installing with Bower
You can install with Bower in your App Project, but using GitHub repository as source:
```
bower install --save-dev https://github.com/ingresse/aphrodite.git
```

Include files in your App `index` file.


```html
...
<head>
    ...
    <link rel="stylesheet" type="text/css"
          href="/bower_components/aphrodite/dist/assets/aphrodite.css" />

    <!-- OPTIONALS -->
    <link rel="stylesheet" type="text/css"
          href="/bower_components/aphrodite/dist/assets/aphrodite-font-family.css" />
    <link rel="stylesheet" type="text/css"
          href="/bower_components/aphrodite/dist/assets/aphrodite-icons.css" />
</head>
<body>
    ...
    <!-- OPTIONAL: AngularJS -->
    <script type="text/javascript" src="/bower_components/angular/angular.js">
    </script>

    <!-- OPTIONALS: Components and Services AngularJS based -->
    <script type="text/javascript" src="/bower_components/aphrodite/dist/scripts/aphrodite-vendors.js">
    </script>
    <script type="text/javascript" src="/bower_components/aphrodite/dist/scripts/aphrodite.js">
    </script>
</body>
...
```
_

## AngularJS dependencies included in 'aphrodite-vendors'
- 3.x [animate.css](https://github.com/daneden/animate.css/)
- 1.6.4 [angular-animate](https://github.com/angular/bower-angular-animate)
- 2.10.1 [angular-click-outside](https://github.com/IamAdamJowett/angular-click-outside)
- 1.0 [angular-scroll](https://github.com/oblador/angular-scroll)
- 0.x [angular-ui-utils](https://github.com/angular-ui/ui-utils)

_

## [Documentation](http://ingresse.github.io/aphrodite)

We try, but isn't the most complete and readeable documentation (yet).

CSS, Components and Services usage examples in our GitHub Page:

**[http://ingresse.github.io/aphrodite](http://ingresse.github.io/aphrodite)**


_


## License

The code is available under the [MIT license](license.txt).
