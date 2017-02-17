'use strict';

angular.module('aphrodite-docs')
.controller('UpdatesController', function ($scope, $timeout, loader) {

    $scope.messages = {
        text: 'Example: Something\'s wrong. Please contact our support.',
        html: '<strong>Example</strong><br />Something\'s wrong.<br />Please contact our support.'
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
