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

    ohHellService.numOfPlayers = 0;
    ohHellService.numOfGameRounds = 0;
    ohHellService.rounds = [];
    ohHellService.namesOfPlayers = [];
    ohHellService.scores = [];

    ohHellService.getNumOfPlayers = function() {
        return this.numOfPlayers;
    };

    ohHellService.setNumOfPlayers = function(num) {
        this.numOfPlayers = num;

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

    ohHellService.getNumOfGameRounds = function() {
        return this.numOfGameRounds;
    };

    ohHellService.getRounds = function() {
        return this.rounds;
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