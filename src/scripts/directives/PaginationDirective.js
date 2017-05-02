'use strict';

angular.module('aphrodite')
.directive('pagination', function () {
    return {
        restrict   : 'E',
        scope      : {
            current : '=',
            last    : '=',
            selector: '=',
            visible : '@?',
        },
        templateUrl: 'directives/PaginationDirectiveTemplate.html',
        link       : function (scope, element) {
            scope.visibleHalf = parseInt(scope.visible / 2);

            scope.getPages = function () {
                if (!scope.last) {
                    return [];
                }

                var i;
                var pages = [];
                var start = 1;

                if (scope.last > scope.visible) {
                    if (scope.current > scope.visibleHalf) {
                        start = scope.current - scope.visibleHalf;
                    }

                    for (i = 0; i <= scope.visible && start + i <= scope.last; i++) {
                        pages.push(start + i);
                    }

                    return pages;
                }

                for (i = 0; i < scope.last; i++) {
                    pages.push(start + i);
                }

                return pages;
            };

            scope.goTo = function (page) {
                if (page === scope.current) {
                    return;
                }

                scope.selector(page);
            };

            scope.next = function () {
                scope.selector(parseInt(scope.current) + 1);
            };

            scope.previous = function () {
                scope.selector(parseInt(scope.current) - 1);
            };

            element.addClass('aph pag-container');
        },
    };
});
