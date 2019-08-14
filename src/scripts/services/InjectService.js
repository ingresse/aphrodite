'use strict';

angular.module('aphrodite')
.factory('inject', function ($window) {
    var factory = {};

    /**
     * Insert Element in document
     *
     * @param {string} name   - external resource name, example: 'facebook', 'accountkit'
     * @param {string} target - element selector (OPTIONAL)
     * @param {string} src    - external library path (OPTIONAL)
     * @param {string} optTag - tag (OPTIONAL)
     */
    factory.element = function (name, target, src, optTag) {
        var newEl;
        var tag      = (optTag || 'script');
        var id       = (name + '-jssdk');
        var doc      = $window.document;
        var head     = doc.getElementsByTagName(target ? target : 'head')[0];
        var loadedEl = doc.getElementById(id);

        if (loadedEl) {
            if (loadedEl.readyState === 'loaded' ||
                loadedEl.readyState === 'complete') {
                return;
            }

            loadedEl.parentNode.removeChild(loadedEl);
        }

        newEl    = doc.createElement(tag);
        newEl.id = id;

        switch (name) {
            case 'facebook':
                newEl.src = '//connect.facebook.net/pt_BR/sdk.js';
                break;

            case 'paypal':
                newEl.src = '//www.paypalobjects.com/api/checkout.js';
                break;

            case 'font':
                newEl.rel  = 'stylesheet';
                newEl.type = 'text/css';
                newEl.href = src;
                break;

            default:
                newEl.src = src ? src : 'none';
        }

        head.appendChild(newEl);
    };

    return factory;

});
