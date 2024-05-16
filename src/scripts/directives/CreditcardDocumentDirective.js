'use strict';

angular.module('aphrodite')
.directive('creditcardDocument', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            id          : '@?',
            card        : '=?',
            label       : '@?',
            errorMessage: '@?',
            isBrazilian : '=?',
        },
        templateUrl: 'directives/CreditCardDocumentDirectiveTemplate.html',
    };
});
