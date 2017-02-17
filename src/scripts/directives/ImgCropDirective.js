'use strict';

angular.module('aphrodite')
.directive('imgCrop', function () {
    return {
        restrict: 'E',
        scope   : {
            cropId    : '@?',
            cropName  : '@?',
            cropWidth : '@?',
            cropHeight: '@?',
            cropImage : '@?',
        },
        link    : function (scope, element) {
            var options = {
                url     : scope.cropImage,
                viewport: {
                    width : parseInt(scope.cropWidth)  || 180,
                    height: parseInt(scope.cropHeight) || 180,
                    type  : 'circle',
                },
            };

            var imageContainer = new Croppie(element[0], options);

            console.log(imageContainer);

            element.addClass('aph image-crop');
        },
    };
});
