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

                var card = $filter('creditcardBrand')(model);

                return (card) ? true : false;
            };
        },
    };
});
