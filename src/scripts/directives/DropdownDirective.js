'use strict';

angular.module('aphrodite')
.directive('dropdown', function () {
    return {
        restrict: 'A',
        link    : function (scope, element) {
            element.on('click', function () {
                element.toggleClass('active');
            });

            scope.closeDropdown = function () {
                element.removeClass('active');
            };
        }
    };
});

