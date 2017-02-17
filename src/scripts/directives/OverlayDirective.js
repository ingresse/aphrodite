'use strict';

angular.module('aphrodite')
.directive('overlay', function ($document, $timeout) {
    return {
        restrict   : 'E',
        transclude : true,
        scope      : {
            overlay: '=',
        },
        templateUrl: 'directives/OverlayDirectiveTemplate.html',
        link       : function (scope, element) {
            var body = $document.find('body');

            body.toggleClass('aph overlay-active');

            var destroyOverlay = function () {
                scope.overlay.visibility = false;

                body.toggleClass('aph overlay-active');

                $timeout(function () {
                    element.remove();
                    scope.overlay.visibility = true;
                }, 1000);
            };

            scope.cancelCallback = function () {
                scope.overlay.cancel();

                destroyOverlay();
            };

            scope.continueCallback = function () {
                scope.overlay.continue();

                destroyOverlay();
            };
        }
    };
});
