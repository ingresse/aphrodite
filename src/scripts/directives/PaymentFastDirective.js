'use strict';

angular.module('aphrodite')
.directive('paymentFast', function (inject) {
    return {
        restrict   : 'E',
        replace    : true,
        transclude : true,
        templateUrl: 'directives/PaymentFastDirectiveTemplate.html',
        scope      : {
            card  : '=',
            layout: '@?',
        },
        link       : function (scope) {
            /**
             * Local Values
             */
            scope.enabled = false;
            scope.center  = ((scope.layout && (scope.layout === 'center')) ? true : false);

            /**
             * Load Font
             */
            inject.element(
                'font',
                '',
                'https://fonts.googleapis.com/css?family=Fugaz+One&display=swap',
                'link'
            );

            /**
             * Handle with Fast Payment toggle changes
             */
            scope.handleChange = function () {
                if (typeof scope.card !== 'object') {
                    return;
                }

                scope.card.save = angular.copy(scope.enabled);
            };
        },
    };
});
