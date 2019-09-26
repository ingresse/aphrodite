'use strict';

angular.module('aphrodite', [
    'angular-click-outside',
    'duScroll',
    'ngAnimate',
    'ngDialog',
    'ui.mask',
])
.config([
    'momentProvider',
    'ngDialogProvider',
    function (momentProvider, ngDialogProvider) {
    // Set moment i18n
    momentProvider.locale('pt-br');

    // Set ngDialog options
    ngDialogProvider.setDefaults({
        className      : 'aph modal modal--limit',
        showClose      : false,
        plain          : false,
        trapFocus      : false,
        closeByDocument: false,
        closeByEscape  : true,
    });
}]);
