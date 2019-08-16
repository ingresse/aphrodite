'use strict';

angular.module('aphrodite')
.directive('creditcardNumber', function ($filter) {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            card          : '=?',
            creditcardForm: '=?',
        },
        templateUrl: 'directives/CreditCardNumberDirectiveTemplate.html',
        link       : function (scope) {
            /**
             * On creditcard change update the flag value
             */
            scope.handleChange = function () {
                var flag        = $filter('creditcardBrand')(scope.card.number);
                scope.card.flag = (flag || null);
            };
        },
    };
});
