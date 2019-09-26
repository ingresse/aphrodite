'use strict';

angular.module('aphrodite')
.directive('creditcardHolderValidator', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            /**
             * Local values
             */
            var holderRegEx = /[a-zA-Z]{1}\s[a-zA-Z]{1}/;

            /**
             * Validate the holder name
             *
             * @oaram {string} model
             */
            ctrl.$validators.holder = function (model) {
                if (ctrl.$isEmpty(model) || (model.length <= 1)) {
                    return true;
                }

                return holderRegEx.test(model);
            };
        },
    };
});
