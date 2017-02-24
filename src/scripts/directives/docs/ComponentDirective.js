'use strict';

angular.module('aphrodite-docs')
.directive('component', function (scroll) {
    return {
        restrict   : 'E',
        scope      : {
            properties: '='
        },
        transclude : true,
        templateUrl: 'docs/directives/ComponentDirectiveTemplate.html',
        controller : function ($rootScope, $scope, $element) {
            $element.addClass('docs-component');

            $scope.visibility = function () {
                $scope.properties.visible = !$scope.properties.visible;

                if ($scope.properties.visible) {
                    scroll.toTop($element[0].offsetTop - 60);
                }
            };

            $scope.overlay = $rootScope.overlay;
        }
    };
});
