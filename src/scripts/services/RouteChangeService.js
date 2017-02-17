'use strict';

angular.module('aphrodite-docs')
.factory('routeChange', function ($rootScope, $location, $timeout,
    flow, scroll, loader) {
    var factory = {};

    /**
     * On route change start
     *
     */
    factory.start = function () {
        loader.start();
    };

    /**
     * On route change success
     */
    factory.success = function () {
        scroll.toTop();

        $timeout(function () {
            Prism.highlightAll();

            loader.stop();
        }, 750);
    };


    /**
     * On route change error
     *
     */
    factory.error = function () {
        loader.error(
            '<strong>Sorry</strong>.<br />Somenthing\'s wrong.<br />' +
            'Please, try again.'
        );

        flow.goBack();
    };

    return factory;
});
