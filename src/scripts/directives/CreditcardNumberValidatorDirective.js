'use strict';

angular.module('aphrodite')
.directive('creditcardNumberValidator', function ($filter) {
    return {
        require: 'ngModel',
        link   : function (scope, elm, attrs, ctrl) {
            /**
             * Optional bins
             */
            var authorizedBins = (
                (!scope.bins) ? null : new RegExp(scope.bins)
            );

            /**
             * Validate the card number
             *
             * @oaram {string} model
             */
            ctrl.$validators.creditcard = function (model) {
                if (ctrl.$isEmpty(model)) {
                    return true;
                }

                var validBin = (!authorizedBins ? true : authorizedBins.test(model));

                return (validBin && $filter('creditcardBrand')(model, scope.brands)) ? true : false;
            };
        },
    };
});
