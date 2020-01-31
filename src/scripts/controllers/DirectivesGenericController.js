'use strict';

angular.module('aphrodite-docs')
.controller('DirectivesGenericController', function ($q, $http, $timeout, $filter, $scope, states) {

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
        'calendar',
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

    /**
     * Credit Card Directives
     */
    $scope.card          = {};
    $scope.cardBins      = {};
    $scope.cardBinsRegEx = /^(41111|41112)/;
    $scope.exampleCards  = [
        {
            brand     : 'visa',
            default   : false,
            expiration: '2022-06-01',
            firstSix  : '444111',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '3344',
            id      : 'example-creditcard-id-visa'
        },
        {
            brand     : 'master',
            default   : false,
            expiration: '2021-07-01',
            firstSix  : '523234',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '1122',
            id      : 'example-creditcard-id-master'
        },
        {
            brand     : 'elo',
            default   : false,
            expiration: '2024-08-01',
            firstSix  : '517123',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '8811',
            id      : 'example-creditcard-id-elo'
        },
        {
            brand     : 'diners',
            default   : true,
            expiration: '2023-09-01',
            firstSix  : '300000',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '0004',
            id      : 'example-creditcard-id-diners'
        },
        {
            brand     : 'discover',
            default   : false,
            expiration: '2027-10-01',
            firstSix  : '601111',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '0004',
            id      : 'example-creditcard-id-discover'
        },
        {
            brand     : 'hipercard',
            default   : false,
            expiration: '2025-11-01',
            firstSix  : '601111',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '7023',
            id      : 'example-creditcard-id-hipercard'
        },
        {
            brand     : 'jcb',
            default   : false,
            expiration: '2022-12-01',
            firstSix  : '601111',
            holder    : {
                document: '35577372844',
                name    : 'Joe Doe'
            },
            lastFour: '4141',
            id      : 'example-creditcard-id-jcb'
        },
    ];

    $scope.addCard = function () {
        $scope.exampleCards.push($filter('creditcardModel')($scope.card));
        $scope.card = {};
    };

    /*
     * Autocomplete Directive
     */
    $scope.states         = states.BRA;
    $scope.selectedStates = [];
    $scope.repos          = [];
    $scope.selectedRepos  = [];

    $scope.selectState = function (state) {
        console.log(state);
        $scope.selectedStates.push(state);
    };

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
        $scope.selectedRepos.push(repo);
    };

    $scope.repoInit = function () {
        console.log('autocomplete init');
    };

    $scope.repoFocus = function () {
        console.log('autocomplete focus');
    };

    $scope.repoBlur = function () {
        console.log('autocomplete blur');
    };
});
