'use strict';

angular.module('aphrodite')
.directive('creditcardBirthdate', function (moment) {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            card        : '=?',
            label       : '@?',
            errorMessage: '@?',
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
                var now              = moment();
                var birthdateMoment  = (!scope.birthdate ? '' : moment(scope.birthdate, 'DD/MM/YYYY'));
                scope.card.birthdate = (birthdateMoment ? birthdateMoment.format('YYYY-MM-DD') : '');
                scope.isInvalid      = (!birthdateMoment ? false : (
                    birthdateMoment.isValid() && now.isSameOrBefore(birthdateMoment)
                ));
            };

            /**
             * Watch for changes
             */
            scope.$watch('card', function () {
                scope.birthdate = (!scope.card ? '' : angular.copy(scope.card.birthdate || ''));

                scope.handleChange();
            });
        },
    };
});
