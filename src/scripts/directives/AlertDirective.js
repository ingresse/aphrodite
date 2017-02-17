'use strict';

angular.module('aphrodite')
.directive('alert', function () {
    return {
        restrict   : 'E',
        scope      : {
            alertVisibility: '=',
            alertOptions   : '=?'
        },
        templateUrl: 'directives/AlertDirectiveTemplate.html',
        transclude : true,
        link       : function (scope, element) {
            element.addClass('aph alert-container');

            scope.dismiss = function () {
                scope.alertVisibility = !scope.alertVisibility;
            };
        }
    };
});
