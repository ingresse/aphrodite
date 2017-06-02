'use strict';

angular.module('aphrodite')
.directive('loader', function (loader) {
    return {
        restrict   : 'E',
        templateUrl: 'directives/LoaderDirectiveTemplate.html',
        scope      : {},
        link       : function (scope) {
            scope.activities = loader.activities;
            scope.infos      = loader.infos;
            scope.errors     = loader.errors;

            scope.clearInfo = function (info) {
                loader.clearInfo(info);
            };

            scope.clearError = function (error) {
                loader.clearError(error);
            };
        }
    };
});
