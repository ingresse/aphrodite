'use strict';

angular.module('aphrodite')
.factory('Overlay', function ($rootScope, $document, $compile) {

    /*
     * Create a new instance of Overlay Alert Dialog
     */
    var create = function (properties) {
        var scope = $rootScope.$new();
        var body  = $document.find('body');
        var element;

        this.defaultProperties = {
            visibility: true,

            title: 'Warning!',
            text : 'This is an important update.',

            cancel    : angular.noop,
            cancelText: 'Undo',

            continue    : angular.noop,
            continueText: 'Understood, continue please'
        };

        scope.properties = angular.extend(this.defaultProperties, properties);

        element = angular.element('<overlay data-overlay="properties"></overlay>');
        element = $compile(element)(scope);

        body.append(element);

        return this;
    };

    return {
        create: create
    };
});
