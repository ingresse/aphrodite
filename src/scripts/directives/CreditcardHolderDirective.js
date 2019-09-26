'use strict';

angular.module('aphrodite')
.directive('creditcardHolder', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            label         : '@?',
            card          : '=?',
            creditcardForm: '=?',
        },
        templateUrl: 'directives/CreditCardHolderDirectiveTemplate.html',
        link       : function (scope) {
            /**
             * Handle with holder name change
             */
            scope.handleChange = function () {
                scope.card.name = (scope.card.name || '').toUpperCase();
            };
        },
    };
});
