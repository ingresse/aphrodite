'use strict';

angular.module('aphrodite')
.directive('aphAutocomplete', function () {
    return {
        restrict   : 'E',
        replace    : true,
        scope      : {
            model          : '=',
            list           : '=',
            change         : '=',
            required       : '=?',
            callback       : '=?',
            itemTitle      : '@',
            itemImage      : '@?',
            itemDescription: '@?',
        },
        templateUrl: 'directives/AutocompleteDirectiveTemplate.html',
        link: function (scope, element) {
            var radio, input  = angular.element(element.find('input')[0]);
            scope.displayList = true;

            /*
             * Get Item Image Path
             */
            scope.getItemImage = function (item) {
                if (!scope.itemImage) {
                    return null;
                }

                var imagePath     = scope.itemImage.split('.');
                var imageFullPath = '';

                switch (imagePath.length) {
                    case 2: {
                        imageFullPath = item[imagePath[0]][imagePath[1]];
                        break;
                    }
                    case 3: {
                        imageFullPath = item[imagePath[0]][imagePath[1]][imagePath[2]];
                        break;
                    }
                    case 4: {
                        imageFullPath = item[imagePath[0]][imagePath[1]][imagePath[2]][imagePath[3]];
                        break;
                    }
                    default: {
                        imageFullPath = item[scope.itemImage];
                    }
                }

                return imageFullPath;
            };

            /*
             * Select item
             */
            scope.selectItem = function (item) {
                console.log(item);

                if (!scope.callback) {
                    return;
                }

                scope.callback(item);
            };

            /*
             *
             */
            scope.setFocus = function (value) {
                if (value) {
                    scope.focused = true;
                    return;
                }

                scope.focused = false;
            };

            /*
             *
             */
            input.on('keyup', function (evt) {
                if (evt.code === 'ArrowDown' &&
                    scope.list.length > 0) {

                    radio = element.find('input')[1];
                    radio.focus();

                    return;
                }
            });
        }
    };
});
