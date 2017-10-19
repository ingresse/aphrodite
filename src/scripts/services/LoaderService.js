'use strict';

angular.module('aphrodite')
.factory('loader', function ($timeout) {

    var factory = {
        activities: [],
        infos     : [],
        errors    : [],
    };

    factory.start = function (activity) {
        var _act        = null;
        var newActivity = {
            id     : factory.activities.length,
            dismiss: false,
        };

        if (!angular.isObject(activity)) {
            newActivity.title = activity;

        } else {
            angular.forEach(activity, function (value, key) {
                newActivity[key] = activity[key];
            });
        }

        for (var i = 0; i < factory.activities.length; i++) {
            _act = factory.activities[i];

            if (newActivity.title === _act.title) {
                return false;
            }
        }

        $timeout(function () {
            newActivity.dismiss = true;
        }, 10000);

        factory.activities.push(newActivity);

        return newActivity;
    };

    factory.stop = function (activity) {
        var _act        = null;
        var _identifier =
            angular.isObject(activity) ?
                activity.title : activity;

        for (var i = 0; i < factory.activities.length; i++) {
            _act = factory.activities[i];

            if (!_identifier && !_act.title || _identifier === _act.title) {
                factory.activities.splice(i, 1);

                return;
            }
        }
    };

    factory.info = function (info) {
        factory.infos.push(info);
    };

    factory.error = function (error, errorObj) {
        factory.errors.push(error);
        if (errorObj) {
            console.error(errorObj);
        }
    };

    factory.clearInfo = function (info) {
        for (var i in factory.infos) {
            if (factory.infos[i] === info) {
                factory.infos.splice(i, 1);
            }
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
