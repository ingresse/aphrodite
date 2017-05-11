'use strict';

angular.module('aphrodite-docs')
.controller('ServicesGenericController', function ($scope, $timeout, loader) {

    /*
     * Loader
     */

    $scope.error = {
        message: {
            text: 'Example: Something\'s wrong. Please contact our support.',
            html: '<div class="aph loader__content__error__title">Example</div>Something\'s wrong.<br />Please contact our support.',
        },
    };

    $scope.loaderTest = function (activity) {
        loader.start(activity);

        $timeout(function () {
            loader.stop(activity);
        }, 5000);
    };

    $scope.loaderErrorTest = function (activity) {
        loader.error(activity);
    };

});
