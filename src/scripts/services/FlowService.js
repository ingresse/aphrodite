'use strict';

angular.module('aphrodite-docs')
.factory('flow', function ($filter, $location, $route) {
    /**
     * Control the application flow
     */
    var factory = {
        lastPath: null
    };

    /**
     * Go to page
     *
     * @param {string} page   - Page to go
     * @param {string} origin - Origin of navigation
     */
    factory.goTo = function (page, origin) {
        var _page     = page || '/';
        var blackList = ['/404', '/login', '/register'];

        if (origin && blackList.indexOf(origin) === -1) {
            factory.lastPath = origin;
        }

        $location.path(_page);
    };

    /**
     * Go back
     */
    factory.goBack = function () {
        var lastPath = factory.lastPath || '/';

        $location.path(lastPath);
    };

    /**

    /**
     * Reload current flow
     */
    factory.reload = function () {
        $route.reload();
    };

    return factory;
});
