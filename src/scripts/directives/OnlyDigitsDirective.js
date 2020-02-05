'use strict';

angular.module('aphrodite')
.directive('onlyDigits', function () {
    return {
        restrict: 'A',
        require : 'ngModel',
        link    : function (scope, element, attr, ctrl) {
            /**
             * Local values
             */
            var digitsRegEx = new RegExp(/[^0-9]/g);
            var minLength   = parseInt((attr.onlyDigitsMinLength || 0), 10);
            var maxLength   = parseInt((attr.onlyDigitsMaxLength || 0), 10);

            /**
             * Validate Minimum and Maximum model length
             *
             * @param {string} model
             *
             * @return {boolean}
             */
            ctrl.$validators.validateMinMax = function (model) {
                if (ctrl.$isEmpty(model)) {
                    return true;
                }

                var validMin = (!minLength ? true : (model.length >= minLength));
                var validMax = (!maxLength ? true : (model.length <= maxLength));

                return (validMin && validMax ? true : false);
            };

            /**
             * Digits Parser
             * Maintain only digits to ngModel
             *
             * @param {string|undefined} model
             *
             * @return {string|undefined}
             */
            function parserDigits(model) {
                if (model) {
                    var filtered = model.replace(digitsRegEx, '');

                    if (filtered) {
                        filtered = filtered.slice(0, (maxLength ? maxLength : filtered.length));
                    }

                    if ((filtered !== model)) {
                        ctrl.$setViewValue(filtered);
                        ctrl.$render();
                    }

                    return filtered;
                }

                return undefined;
            }

            /**
             * Parsers
             */
            ctrl.$parsers.push(parserDigits);
        },
    };
});
