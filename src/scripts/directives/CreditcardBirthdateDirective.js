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
            scope.isInvalid = false;
            scope.birthdate = (scope.card.birthdate || '');

            /**
             * On birthdate change update the scope.card.birthdate
             */
            scope.handleChange = function () {
                var birthdateMoment  = (!scope.birthdate ? '' : moment(scope.birthdate, 'DD/MM/YYYY'));
                scope.card.birthdate = (birthdateMoment ? birthdateMoment.format('YYYY-MM-DD') : '');
                scope.isInvalid      = (!birthdateMoment ? false : !birthdateMoment.isValid());
            };
        },
    };
});
