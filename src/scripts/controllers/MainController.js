'use strict';

angular.module('aphrodite-docs')
.controller('MainController', function ($scope) {

    $scope.steps = [
        {
            text: 'Step 1',
            url: '/'
        },
        {
            text: 'Step 2',
            url: '/2'
        },
        {
            text: 'Step 3',
            url: '/3'
        },
    ];

  });
