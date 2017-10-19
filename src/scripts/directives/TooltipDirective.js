'use strict';

angular.module('aphrodite')
.directive('tooltip', function ($document, $compile, $filter) {
    return {
        restrict: 'A',
        scope   : true,
        link    : function (scope, element, attrs) {
            scope.text = $filter('unsafe')(attrs.tooltip);

            var tip =
                $compile(
                    '<span class="aph tooltip__content" data-ng-bind-html="text"></span>'
                )(scope);

            element.addClass('aph tooltip');

            if (attrs.tooltipClass) {
                tip.addClass(attrs.tooltipClass);
            }

            element.append(tip);
        },
    };
});
