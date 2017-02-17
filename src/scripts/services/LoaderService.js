'use strict';

angular.module('aphrodite')
.factory('loader', function () {

    var factory = {
        activities: [],
        errors    : [],
    };

    factory.start = function (activity) {
        if (factory.activities.indexOf(activity) !== -1) {
            return;
        }

        factory.activities.push(activity);

        return true;
    };

    factory.stop = function (activity) {
        for (var i in factory.activities) {
            if (factory.activities[i] === activity) {
                factory.activities.splice(i, 1);
            }
        }
    };

    factory.error = function (error, errorObj) {
        factory.errors.push(error);
        if (errorObj) {
            console.error(errorObj);
        }
    };

    factory.clearError = function (error) {
        for (var i in factory.errors) {
            if (factory.errors[i] === error) {
                factory.errors.splice(i, 1);
            }
        }
    };

    return factory;
});
