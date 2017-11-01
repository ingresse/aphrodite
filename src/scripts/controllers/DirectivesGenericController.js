'use strict';

angular.module('aphrodite-docs')
.controller('DirectivesGenericController', function ($q, $http, $timeout, $scope) {

    /*
     * Selector Directive
     */

    // Basic
    $scope.newsletter       = true;

    // Custom Values
    $scope.status           = 'off';

    // Array
    $scope.selectedSessions = [ '83116', '90216' ];

    // Array options
    $scope.sessions = [
        {
            id     : '83116',
            weekDay: 'Wednesday',
            date   : '8/31/16',
            time   : '18:35',
        },
        {
            id     : '90116',
            weekDay: 'Thursday',
            date   : '9/1/16',
            time   : '9:00',
        },
        {
            id     : '90216',
            weekDay: 'Friday',
            date   : '9/2/16',
            time   : '9:00',
        },
        {
            id     : '90316',
            weekDay: 'Saturday',
            date   : '9/3/16',
            time   : '9:00',
        }
    ];

    // Select all sessions
    $scope.selectAllSessions = function () {
        $scope.sessions.map(function (session) {
            var hasSession =
                $scope.selectedSessions.indexOf(
                    session.id.toString()
                );

            if (hasSession < 0) {
                $scope.selectedSessions.push(
                    session.id.toString()
                );
            }
        });
    };


    /*
     * Custom Select Directive
     */

    $scope.selectedTicket = '';

    // Array options
    $scope.tickets = [
        {
            id   : 1,
            title: 'Ticket One',
            price: 15
        },
        {
            id   : 2,
            title: 'Ticket Two',
            price: 20
        },
        {
            id   : 3,
            title: 'Ticket Three',
            price: 25
        },
        {
            id   : 4,
            title: 'Ticket Four',
            price: 30
        },
        {
            id   : 5,
            title: 'Ticket Five',
            price: 35
        }
    ];


    /*
     * Icons Directive
     */
    $scope.icons = [
        'check-circle',
        'close-circle',
        'plus-circle',
        'minus-circle',
        'undo-circle',
        'arrow-up-circle',
        'arrow-right-circle',
        'arrow-down-circle',
        'arrow-left-circle',
        'info-circle',
        'question-circle',
        'warning',
    ];

    /*
     * Autocomplete Directive
     */
    $scope.repos     = [];

    $scope.findRepo = function (term) {
        var deferred = $q.defer();
        var url      = 'https://api.github.com/search/repositories?q=' + term;

        $http.get(url)
            .then(function (response) {
                $scope.repos = response.data.items;
                deferred.resolve($scope.repos);
            })
            .catch(function () {
                deferred.reject();
            });

        return deferred.promise;
    };

    $scope.selectRepo = function (repo) {
        console.log(repo);
    };
});
