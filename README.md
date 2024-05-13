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

### Local debug
You can debug `Aphrodite` locally in your project, for example, if you are running a project like `embedstore`, you can make adjustments to `Aphrodite` locally and see how it will behave in your `embedstore` project. To do this, you'll need to follow these steps:

1. Have the project you are developing cloned, for example, the previously mentioned `embedstore` and `Aphrodite`.
2. Run the `npm i` and `bower install` commands in the `Aphrodite` project directory.
3. Make the desired changes to `Aphrodite`.
4. Run npm `run build` in `Aphrodite`.
5. In the project where you need to check the changes to `Aphrodite`, which in our example is `embedstore`, there is a directory with the installed components from `bower` called `bower_components`, and `Aphrodite` is one of them. Access the directory of `Aphrodite`.
6. Replace the `dist` directory inside the `Aphrodite` directory within `bower_components` in your project (which in our example is `embedstore`) with the `dist` generated in the `build` of `Aphrodite`.

> Following these steps, the changes made to `Aphrodite` locally will be reflected in the project that is using `Aphrodite`. Remember that these changes will *not persist* because the `bower_components` folder is ignored by git; *this is only for local development environment*.

## AngularJS dependencies included in 'aphrodite-vendors'
- 3.x [animate.css](https://github.com/daneden/animate.css/)
- 1.6.4 [angular-animate](https://github.com/angular/bower-angular-animate)
- 2.10.1 [angular-click-outside](https://github.com/IamAdamJowett/angular-click-outside)
- 1.0 [angular-scroll](https://github.com/oblador/angular-scroll)
- 0.x [angular-ui-utils](https://github.com/angular-ui/ui-utils)
- 1.4.0 [ngDialog](https://github.com/likeastore/ngDialog)

_

## [Documentation](http://ingresse.github.io/aphrodite)

We try, but isn't the most complete and readeable documentation (yet).

CSS, Components and Services usage examples in our GitHub Page:

**[http://ingresse.github.io/aphrodite](http://ingresse.github.io/aphrodite)**


_


## License

The code is available under the [MIT license](license.txt).
