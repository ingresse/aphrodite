'use strict';

angular.module('aphrodite')
.directive('birthdateValidator', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.birthdate = function (model) {
                if (ctrl.$isEmpty(model)) {
                    return true;
                }

                var date = moment(model, 'DD/MM/YYYY');

                return (date.isValid()) ? true : false;
            };
        },
    };
});
