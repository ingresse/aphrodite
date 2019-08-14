'use strict';

angular.module('aphrodite')
.directive('creditcardValidator', function ($filter) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.creditcard = function (model) {
                if (ctrl.$isEmpty(model)) {
                    return true;
                }

                return ($filter('creditcardBrand')(model)) ? true : false;
            };
        },
    };
});
