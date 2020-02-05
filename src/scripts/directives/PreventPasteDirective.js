'use strict';

angular.module('aphrodite')
.directive('preventPaste', function () {
    return {
        restrict: 'A',
        link    : function (scope, element) {
            /**
             * Remove paste option in a field
             */
            element.on('paste', function (e) {
                e.preventDefault();
            });
        },
    };
});
