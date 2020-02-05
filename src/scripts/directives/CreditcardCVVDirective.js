'use strict';

angular.module('aphrodite')
.directive('creditcardCvv', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            card       : '=?',
            label      : '@?',
            minLength  : '@?',
            maxLength  : '@?',
            placeholder: '@?',
        },
        templateUrl: 'directives/CreditCardCVVDirectiveTemplate.html',
    };
});
