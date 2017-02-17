'use strict';

angular.module('aphrodite')
.directive('formNumericInput', function () {
    return {
        restrict: 'A',
        require : 'ngModel',
        link    : function (scope, element) {
            element.on('keypress', function (event) {
                var charCode = (event.which) ? event.which : event.keyCode;

                if (charCode >= 48 && charCode <= 57 ||
                    charCode === 13 || charCode === 8) {
                    return false;
                }

                return event.preventDefault();
            });
        }
    };
});
