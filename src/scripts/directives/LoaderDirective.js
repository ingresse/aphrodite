'use strict';

angular.module('aphrodite')
.directive('loader', function (loader) {
    return {
        restrict   : 'E',
        templateUrl: 'directives/LoaderDirectiveTemplate.html',
        scope      : {},
        controller : function ($scope) {
            $scope.activities = loader.activities;
            $scope.errors     = loader.errors;

            $scope.clearError = function (error) {
                loader.clearError(error);
            };
        }
    };
});
