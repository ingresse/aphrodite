'use strict';

angular.module('aphrodite-docs')
.controller('ServicesGenericController', function ($scope, $timeout, loader, Overlay) {

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


    /*
     * Overlay
     */
    var test;

    $scope.createOverlay = function () {
        test = new Overlay.create({
            title: 'Overlay Dialog Test #1',
            text : 'Venus, Ingresse, Backstage, Brazil, Amazonas, Manaus, São Paulo.',

            cancelText: 'Oh, wait. I won\'t do this',
            cancel    : function () {
                console.log('Cancelled by user.');
            },

            continueText: 'Yep! Go ahead',
            continue    : function () {
                console.log('Authorized by user.');
            }
        });
    };

});
