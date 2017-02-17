'use strict';

angular.module('aphrodite')
.filter('unsafe', function ($sce) {
    return function (content) {
        return $sce.trustAsHtml(content);
    };
});
