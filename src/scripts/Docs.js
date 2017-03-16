'use strict';

angular.module('aphrodite-docs', [
    'ngRoute',
    'aphrodite'
])
.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'docs/main-template.html',
            controller : 'MainController',
        })
        .when('/css/:featureId', {
            templateUrl: function (urlattr) {
                return 'docs/docs-css/' + urlattr.featureId + '-template.html';
            },
            controller : 'CSSGenericController'
        })
        .when('/directives/:directiveId', {
            templateUrl: function (urlattr) {
                return 'docs/docs-directives/' + urlattr.directiveId + '-template.html';
            },
            controller : 'DirectivesGenericController'
        })
        .when('/services/:serviceId', {
            templateUrl: function (urlattr) {
                return 'docs/docs-services/' + urlattr.serviceId + '-template.html';
            },
            controller: 'ServicesGenericController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
