'use strict';

angular.module('aphrodite')
.directive('creditcardDocument', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            card: '=?',
        },
        templateUrl: 'directives/CreditCardDocumentDirectiveTemplate.html',
    };
});
