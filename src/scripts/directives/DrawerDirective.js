'use strict';

angular.module('aphrodite')
.directive('drawer', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var drawerNav =
                angular.element(
                    document.querySelector('#' + attrs.drawer)
                );

            if (!attrs.drawer) {
                console.error(
                    'VENUS DRAWER DIRECTIVE:\n' +
                    'Need to declare "drawer" ' +
                    'attribute with id of content element.'
                );

                return;
            }

            if (drawerNav.length === 0) {
                console.error(
                    'VENUS DRAWER DIRECTIVE:\n' +
                    'Can\'t find "#' + attrs.drawer + '" ' +
                    'content element.'
                );

                return;
            }

            // Close Drawer Nav/Menu
            scope.closeDrawer = function () {
                drawerNav.removeClass('active');
            };

            // Bind click evento to open Nav/Menu
            element.on('click', function () {
                if (element[0].checked) {
                    drawerNav.removeClass('active');

                } else {
                    drawerNav.addClass('active');
                }
            });

            // First Run
            scope.closeDrawer();
        },
    };
});
