'use strict';

angular.module('aphrodite', [
    'ngAnimate',
    'ngDialog',
    'duScroll',
    'angular-click-outside',
])
.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className      : 'aph modal modal--limit',
        showClose      : false,
        plain          : false,
        trapFocus      : false,
        closeByDocument: false,
        closeByEscape  : true,
    });
}]);
