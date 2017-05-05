'use strict';

angular.module('aphrodite')
.directive('tooltip', function () {
    return {
        restrict   : 'A',
        templateUrl: 'directives/TooltipDirectiveTemplate.html',
        scope      : {
            tooltipOptions: '='
        },
        link       : {
            pre: function (scope, element, attrs) {
                scope.content = attrs.tooltip;
                scope.options = scope.tooltipOptions;

                scope.tooltipColor = (scope.options && scope.options.color) ?
                    'tooltip__content--' + scope.options.color : '';
                scope.tooltipPosition = (scope.options && scope.options.position) ?
                    'tooltip__content--' + scope.options.position : '';
                scope.tooltipSize = (scope.options && scope.options.size) ?
                    'tooltip__content--' + scope.options.size : '';

                element.addClass('aph tooltip');
            }
        }
    };
});
