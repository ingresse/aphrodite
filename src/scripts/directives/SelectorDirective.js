'use strict';

angular.module('aphrodite')
.directive('selector', function () {
    return {
        restrict: 'E',
        scope   : {
            title       : '@',
            value       : '=?',
            prefix      : '@?',
            name        : '@?',
            array       : '=?',
            ngModel     : '=?',
            ngTrueValue : '=?',
            ngFalseValue: '=?',
            ngRequired  : '=?',
            ngDisabled  : '=?',
        },
        templateUrl: 'directives/SelectorDirectiveTemplate.html',
        link: function (scope, element) {
            scope.randomId = Math.random();

            element.addClass('aph selector');

            if (scope.array) {
                var index;

                scope.checkArray = function () {
                    index = scope.array.indexOf(scope.value);

                    if (index > -1) {
                        scope.array.splice(index, 1);

                    } else {
                        scope.array.push(scope.value);
                    }
                };

                scope.itemChecked = function () {
                    index = scope.array.indexOf(scope.value);

                    if (index > -1) {
                        scope.isChecked = true;

                        return;
                    }

                    scope.isChecked = false;
                };

                scope.$watch('array', function () {
                    scope.itemChecked();
                }, true);
            }
        },
    };
});
