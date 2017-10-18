'use strict';

angular.module('aphrodite')
.directive('imageBlur', function () {
    return {
        restrict: 'E',
        scope   : {
            backgroundImage: '=',
        },
        link    : function (scope, element) {
            element.addClass('aph image-blur');

            scope.$watch('backgroundImage', function () {
                element.css('background-image', 'url("' + scope.backgroundImage + '")');
            });
        }
    };
});
