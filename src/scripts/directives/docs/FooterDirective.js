'use strict';

angular.module('aphrodite-docs')
.directive('docsFooter', function () {
    return {
        restrict   : 'E',
        templateUrl: 'docs/directives/FooterDirectiveTemplate.html'
    };
});
