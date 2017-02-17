'use strict';

angular.module('aphrodite-docs')
.directive('codeShow', function ($compile, $templateCache) {
    return {
        restrict   : 'E',
        scope      : {
            file  : '@',
            render: '@'
        },
        replace    : true,
        templateUrl: 'docs/directives/CodeShowDirectiveTemplate.html',
        link       : function (scope, elt, attrs) {
            var element;
            var template = $templateCache.get(attrs.file);

            scope.codeAsText = template;

            if (attrs.render) {
                element = angular.element(scope.codeAsText);
                element = $compile(element)(scope.$parent);
                elt.prepend(element);
            }
        }
    };
});
