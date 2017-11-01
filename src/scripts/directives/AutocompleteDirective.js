'use strict';

angular.module('aphrodite')
.directive('aphAutocomplete', function ($timeout) {
    return {
        restrict   : 'E',
        replace    : true,
        scope      : {
            term           : '=?',
            change         : '=',
            callback       : '=',
            id             : '@',
            itemTitle      : '@',
            itemImage      : '@?',
            itemDescription: '@?',
            placeholder    : '@?',
            textLoading    : '@?',
            textNotFound   : '@?',
            textError      : '@?',
            required       : '=?',
            delay          : '=?',
        },
        templateUrl: 'directives/AutocompleteDirectiveTemplate.html',
        link: function (scope, element) {
            var radio;
            var selectedItem;
            var searching  = false;
            var input      = angular.element(element.find('input')[0]);
            var resultList = angular.element(element.find('div')[0]);

            /*
             * Get Item Path
             */
            scope.getItemPath = function (item, path) {
                if (!item || !path) {
                    return null;
                }

                path = path.split('.');

                for (var i = 0; i < path.length; i++) {
                    item = item[path[i]];
                }

                return item;
            };

            /*
             * Search items base on 'scope.term'
             */
            scope.search = function () {
                scope.error    = false;
                scope.notFound = false;
                scope.loading  = true;

                scope.change(scope.term)
                    .then(function (response) {
                        scope.list = response;
                    })
                    .catch(function () {
                        scope.error = true;
                        scope.list  = [];
                    })
                    .finally(function () {
                        scope.loading  = false;
                        scope.notFound = scope.list.length === 0;
                    });
            };

            /*
             * Select item
             */
            scope.selectItem = function (index) {
                selectedItem   = scope.list[index];
                scope.list     = [];
                input[0].value = scope.getItemPath(selectedItem, scope.itemTitle);

                scope.setFocus();
                scope.callback(selectedItem);

                scope.$digest();
            };

            /*
             * Set focus in principal input
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
                radio = element.find('input')[1];

                if (!radio) {
                    return;
                }

                if (evt.keyCode === 40 &&
                    scope.list.length > 0) {
                    radio.checked = true;
                    radio.focus();
                }
            });

            /*
             * To select item
             */
            resultList.on('keypress mousedown', function (evt) {
                if (evt.which === 13 || evt.type === 'mousedown') {
                    $timeout(function () {
                        var items = [];
                        angular.extend(items, resultList.find('input'));

                        items.some(function (input, index) {
                            if (input.checked) {
                                scope.selectItem(index);
                                return true;
                            }
                        });

                        scope.$digest();
                    }, 150);
                }
            });

            /*
             * Watch input term to search
             */
            scope.$watch('term', function (value) {
                if (searching || !value) {
                    scope.notFound = false;
                    $timeout.cancel(searching);
                }

                if (value && value.length >= 2) {
                    searching =
                        $timeout(function () {
                            scope.search();
                        }, scope.delay || 1000);

                } else {
                    scope.list = [];
                }
            });
        }
    };
});
