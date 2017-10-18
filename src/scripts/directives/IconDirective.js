'use strict';

angular.module('aphrodite')
.directive('icon', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            title: '@',
            size : '@?',
        },
        link    : function (scope) {
            scope.iconId = '#' + scope.title;
        },
        template:
            '<svg viewBox="0 0 30 30" class="aph ic">' +
            '    <use data-ng-if="title && iconId" xlink:href="{{ iconId }}"></use>' +
            '</svg>',
    };
});
