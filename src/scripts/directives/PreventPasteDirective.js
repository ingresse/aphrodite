'use strict';

angular.module('aphrodite')
.directive('preventPaste', function () {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, element) {
            /**
             * Remove paste option in a field
             */
            element.on('paste', function (e) {
                e.preventDefault();
            });
        },
    };
});
