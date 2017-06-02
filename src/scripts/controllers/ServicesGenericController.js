'use strict';

angular.module('aphrodite-docs')
.controller('ServicesGenericController', function ($scope, $timeout, loader) {

    /*
     * Loader
     */

    $scope.info = {
        message: {
            text: 'Example: You need to fill your email address.',
            html: '<div class="aph loader__title">Example</div>You need to fill your email address.',
        },
    };

    $scope.error = {
        message: {
            text: 'Example: Something\'s wrong. Please contact our support.',
            html: '<div class="aph loader__title">Example</div>Something\'s wrong.<br />Please contact our support.',
        },
    };

    $scope.loaderTest = function (activity) {
        loader.start(activity);

        $timeout(function () {
            loader.stop(activity);
        }, 5000);
    };

    $scope.loaderInfoTest = function (infoMsg) {
        loader.info(infoMsg);
    };

    $scope.loaderErrorTest = function (errorMsg) {
        loader.error(errorMsg);
    };

});
