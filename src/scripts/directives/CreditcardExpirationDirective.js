'use strict';

angular.module('aphrodite')
.directive('creditcardExpiration', function (moment) {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            card: '=?',
        },
        templateUrl: 'directives/CreditCardExpirationDirectiveTemplate.html',
        link: function (scope) {
            scope.expiration = (scope.card ? angular.copy(scope.card.expiration) : '');
            scope.isExpired  = false;
            scope.isInvalid  = false;

            /**
             * Validate Expiration
             */
            scope.validateExpiration = function () {
                if (!scope.expiration) {
                    scope.isExpired  = false;
                    scope.isInvalid  = false;
                    scope.card.month = '';
                    scope.card.year  = '';

                    return;
                }

                var now            = moment();
                var nowString      = now.format('MMYY');
                var expirationDate = moment(scope.expiration, 'MMYY');
                scope.isExpired    = ((expirationDate.isBefore(now) && (scope.expiration !== nowString)) ? true : false);
                scope.isInvalid    = !expirationDate.isValid();
                scope.card.month   = expirationDate.format('MM');
                scope.card.year    = expirationDate.format('YY');
            };
        },
    };
});
