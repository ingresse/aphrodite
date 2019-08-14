'use strict';

angular.module('aphrodite')
.directive('creditcardBirthdate', function (moment) {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            card: '=?',
        },
        templateUrl: 'directives/CreditCardBirthdateDirectiveTemplate.html',
        link: function (scope) {
            /**
             * Local values
             */
            scope.birthdate = (scope.card.birthdate || '');

            /**
             * On birthdate change update the scope.card.birthdate
             */
            scope.handleChange = function () {
                scope.card.birthdate =
                    !scope.birthdate ?
                        '' : moment(scope.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD')
                ;
            };
        },
    };
});
