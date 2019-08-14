'use strict';

angular.module('aphrodite', [
    'angular-click-outside',
    'duScroll',
    'ngAnimate',
    'ngDialog',
    'ui.mask',
])
.config(['momentProvider', function (momentProvider) {
    // Set moment i18n
    momentProvider.locale('pt-br');
}])
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
