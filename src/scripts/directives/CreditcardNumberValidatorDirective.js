'use strict';

angular.module('aphrodite')
.directive('creditcardNumberValidator', function ($filter) {
    return {
        require: 'ngModel',
        link   : function (scope, elm, attrs, ctrl) {
            /**
             * Validate the card number
             *
             * @oaram {string} model
             */
            ctrl.$validators.creditcard = function (model) {
                if (ctrl.$isEmpty(model)) {
                    return true;
                }

                return ($filter('creditcardBrand')(model)) ? true : false;
            };
        },
    };
});
