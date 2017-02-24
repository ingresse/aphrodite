'use strict';

/**
 * Scroll body to top with smooth
 */
angular.module('aphrodite')
.factory('scroll', function ($document) {
    var factory = {};

    /**
     * Scroll to the top
     *
     * @param {integer} [offset=0]  - Offset to the top of the page
     * @param {integer} [speed=800] - Time in milliseconds to animate scroll
     */
    factory.toTop = function (offset, speed) {
        var offsetTop = offset || 0;
        var speedAnim = speed  || 800;
        var body      = $document.find('body');

        body.scrollTop(offsetTop, speedAnim)
        .then(function () {
            window.scrollTo(0, offsetTop);
        });
    };

    return factory;
});
