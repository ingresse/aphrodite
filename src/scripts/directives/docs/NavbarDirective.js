'use strict';

angular.module('aphrodite-docs')
.directive('docsNav', function (flow, routes) {
    return {
        restrict   : 'E',
        templateUrl: 'docs/directives/NavbarDirectiveTemplate.html',
        scope      : {},
        controller : function ($scope) {
            $scope.menu = routes;

            $scope.goTo = function (page) {
                flow.goTo(page);
            };
        }
    };
});
