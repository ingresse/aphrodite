'use strict';

angular.module('aphrodite')
.directive('iconDefs', function () {
    return {
        restrict   : 'E',
        replace    : true,
        templateUrl: 'directives/IconsDefsDirectiveTemplate.html',
    };
});
