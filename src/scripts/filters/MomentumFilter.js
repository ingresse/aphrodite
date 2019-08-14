'use strict';

angular.module('aphrodite')
.filter('momentum', function (moment) {
    return function (input, format, inputFormat) {
        var momentDate = moment(input, (inputFormat || 'YYYY-MM-DD HH:mm:ss'));
        var _format    = format || 'DD/MM/YYYY';

        return momentDate.format(_format);
    };
});
