'use strict';

// Declare  app level module which depends on components and views
angular.module('ohHell', [
    'ngRoute',
    'ohHell.start',
    'ohHell.number-of-players',
    'ohHell.names-of-players',
    'ohHell.game-play',
    'ohHell.game-result',
    'ohHell.history'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/start'});
}])

.factory('ohHellService', function() {
    var ohHellService = {};

    // Variables created by number-of-players page.
    ohHellService.numOfPlayers = 0;
    ohHellService.rounds = [];

    // Variables created by names-of-players page.
    ohHellService.namesOfPlayers = [];
    ohHellService.scores = [];

    /**
     * Getter for numOfPlayers.
     * @returns {number}
     */
    ohHellService.getNumOfPlayers = function() {
        return this.numOfPlayers;
    };

    /**
     * Whenever numOfPlayers is set, rounds data structure should be initialized.
     * @param num
     */
    ohHellService.setNumOfPlayers = function(num) {
        this.numOfPlayers = num;
        this._generateRounds(num);
    };

    /**
     * Initialize data structure for rounds.
     *  E.g. num = 10 players
     *       topRound = 5 cards
     *       numOfGameRounds = 5 * 2 - 1 = 9 rounds
     *       rounds = [
     *          {name: "ROUND 1", cards: 1},
     *          {name: "ROUND 2", cards: 2},
     *          {name: "ROUND 3", cards: 3},
     *          {name: "ROUND 4", cards: 4},
     *          {name: "ROUND 5", cards: 5},
     *          {name: "ROUND 6", cards: 4},
     *          {name: "ROUND 7", cards: 3},
     *          {name: "ROUND 8", cards: 2},
     *          {name: "ROUND 9", cards: 1}
     *       ]
     * @param num
     * @private
     */
    ohHellService._generateRounds = function(num) {
        var topRound = (52 - 52 % num) / num;
        this.numOfGameRounds = topRound * 2 - 1;

        for (var i = 1; i <= this.numOfGameRounds; i++) {
            var cardNum = 0;
            if (i > topRound) {
                cardNum = topRound - (i - topRound);
            } else {
                cardNum = i;
            }

            this.rounds.push({name: "ROUND " + i, cards: cardNum});
        }
    };

    /**
     * Getter for rounds.
     * @returns {Array}
     */
    ohHellService.getRounds = function() {
        return (52 - 52 % this.numOfPlayers) / this.numOfPlayers;
    };

    ohHellService.resetNumOfPlayers = function() {
        this.numOfPlayers = 0;
    };

    ohHellService.getNamesOfPlayers = function() {
        return this.namesOfPlayers;
    };

    ohHellService.setNamesOfPlayers = function(names) {
        this.namesOfPlayers = names;
    };

    ohHellService.resetNamesOfPlayers = function() {
        this.namesOfPlayers = [];
    };

    ohHellService.setScores = function(scores) {
        this.scores = scores;
    };

    ohHellService.getScores = function() {
        return this.scores;
    };

    return ohHellService;
});