'use strict';

angular.module('aphrodite-docs')
.run(function ($rootScope, $location, routeChange) {
    /**
     * When some route failed to resolve
     */
    $rootScope.$on('$routeChangeError', routeChange.error);

    // On route change start
    $rootScope.$on('$routeChangeStart', routeChange.start);

    // On location change success
    $rootScope.$on('$routeChangeSuccess', routeChange.success);
});
