'use strict';

angular.module('aphrodite-docs')
.directive('pageHeader', function () {
    return {
        restrict   : 'E',
        scope      : {
            properties: '='
        },
        templateUrl: 'docs/directives/PageHeaderDirectiveTemplate.html',
        link       : function (scope, element) {
            var bgClass;
            bgClass = scope.properties.bg ?
                        ('bg-' + scope.properties.bg) : 'bg-white-smoke';

            element.addClass('docs-header ' + bgClass);

            element.addClass(scope.properties.class);
        }
    };
});
