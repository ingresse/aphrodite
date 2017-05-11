'use strict';

angular.module('aphrodite')
.directive('icon', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            title: '@',
            state: '@?',
            color: '@?',
            size : '@?',
        },
        template:
            '<svg viewBox="0 0 30 30"' +
            '     class="aph ic ic--{{ size }} ic--{{ color }} ic--{{ state }}">' +
            '    <use xlink:href="{{ \'#\' + title }}"></use>' +
            '</svg>',
    };
});
