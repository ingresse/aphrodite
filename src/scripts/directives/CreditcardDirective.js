'use strict';

angular.module('aphrodite')
.directive('creditcard', function ($window) {
    return {
        restrict   : 'E',
        replace    : true,
        templateUrl: 'directives/CreditCardDirectiveTemplate.html',
        scope      : {
            animated: '=?',
            card    : '=?',
            onRemove: '=?',
        },
        link       : function (scope, element) {
            /**
             * Local values
             */
            scope.animationInClass = 'creditcard-wrapper--animation-in';

            /**
             * Remove element animation
             */
            scope._removeAnimation = function () {
                element.removeClass(scope.animationInClass);
            };

            /**
             * Initialize directive
             */
            scope._init = function () {
                if (!scope.animated) {
                    return;
                }

                if (!$window.requestAnimationFrame) {
                    scope._removeAnimation();
                    return;
                }

                $window.requestAnimationFrame(scope._removeAnimation);
            };

            /**
             * First run
             */
            scope._init();
        },
    };
});
