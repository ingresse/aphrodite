'use strict';

angular.module('aphrodite-docs', [
    'ngRoute',
    'duScroll',
    'aphrodite'
])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'docs/main-template.html',
            controller : 'MainController',
        })
        .when('/updates', {
            templateUrl: 'docs/updates-template.html',
            controller : 'UpdatesController'
        })
        .when('/css', {
            templateUrl: 'docs/css-template.html',
        })
        .when('/css/:featureId', {
            templateUrl: function (urlattr) {
                return 'docs/css/' + urlattr.featureId + '-template.html';
            },
            controller : 'CSSGenericController'
        })
        .when('/components', {
            templateUrl: 'docs/components-template.html',
        })
        .when('/components/:componentId', {
            templateUrl: function (urlattr) {
                return 'docs/components/' + urlattr.componentId + '-template.html';
            },
            controller : 'ComponentsGenericController'
        })
        .when('/services', {
            templateUrl: 'docs/services-template.html',
        })
        .when('/services/:serviceId', {
            templateUrl: function (urlattr) {
                return 'docs/services/' + urlattr.serviceId + '-template.html';
            },
            controller: 'ServicesGenericController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
