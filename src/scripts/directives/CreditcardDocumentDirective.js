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
        },
        templateUrl: 'directives/CreditCardDocumentDirectiveTemplate.html',
    };
});
