'use strict';

angular.module('ohHell.names-of-players', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/names-of-players', {
        templateUrl: 'components/names-of-players/names-of-players.html',
        controller: 'NamesOfPlayersController',
        controllerAs: 'NamesOfPlayersCtrl'
    });
}])

.controller('NamesOfPlayersController', ['ohHellService', function(ohHellService) {
    var vm = this;

    vm.num = ohHellService.getNumOfPlayers();
    vm.names = ohHellService.getNamesOfPlayers();
    vm.showNextButton = false;

    vm.goNextToGamePlayPage = function() {
        ohHellService.setNamesOfPlayers(vm.names);
        vm._generateScores();
    };

    vm._generateScores = function() {
        var numOfGameRounds = ohHellService.getNumOfGameRounds();
        var numOfPlayers = ohHellService.getNumOfPlayers();
        var namesOfPlayers = ohHellService.getNamesOfPlayers();
        var scores = [];
        var topRound = (52 - 52 % numOfPlayers) / numOfPlayers;

        // TODO: Adjust roundBids/roundWins from string to int.
        // [{}, {}, ..., {}] there're numOfGameRounds objects.
        // Game round object's structure:
        //  [
        //      {
        //          roundName: "ROUND 1",
        //          cards: 1,
        //          details: [
        //              {playerName: "Chen", roundBids: "1", roundWins: "1", roundScore: 11, totalScore: 11},
        //              {playerName: "Victor", roundBids: "0", roundWins: "0", roundScore: 10, totalScore: 10},
        //              {playerName: "Jeremy", roundBids: "0", roundWins: "0", roundScore: 10, totalScore: 10},
        //              {playerName: "Na", roundBids: "0", roundWins: "0", roundScore: 10, totalScore: 10},
        //              {playerName: "Yaping", roundBids: "1", roundWins: "0", roundScore: 0, totalScore: 0}
        //          ]
        //      },
        //      {
        //          roundName: "ROUND 2",
        //          cards: 2,
        //          details: [
        //              {playerName: "Chen", roundBids: "1", roundWins: "1", roundScore: 11, totalScore: 22},
        //              {playerName: "Victor", roundBids: "0", roundWins: "0", roundScore: 10, totalScore: 20},
        //              {playerName: "Jeremy", roundBids: "0", roundWins: "0", roundScore: 10, totalScore: 20},
        //              {playerName: "Na", roundBids: "1", roundWins: "1", roundScore: 11, totalScore: 21},
        //              {playerName: "Yaping", roundBids: "1", roundWins: "0", roundScore: 0, totalScore: 0}
        //          ]
        //      },
        //      ... ...
        //  ]
        for (var j = 1; j <= numOfGameRounds; j++) {
            var roundScores = [];
            for (var k = 0; k < numOfPlayers; k++) {
                roundScores[k] = {playerName: namesOfPlayers[k].value, roundBids: "", roundWins: "", roundScore: "", totalScore: ""};
            }

            var scoreObj = {};
            scoreObj.roundName = "ROUND " + j;
            scoreObj.details = roundScores;

            var cardNum = 0;
            if (j > topRound) {
                cardNum = topRound - (j - topRound);
            } else {
                cardNum = j;
            }
            scoreObj.cards = cardNum;

            scores[j - 1] = scoreObj;
        }

        //console.log(scores);
        ohHellService.setScores(scores);
    };

    vm.goBackToPlayerNumberPage = function() {
        ohHellService.setNumOfPlayers(vm.num);
    };

    vm.updateNextButton = function() {
        var nameNotExists = false;
        for (var i = 0; i < vm.names.length; i++) {
            if (vm.names[i].value === "") {
                nameNotExists = true;
                break;
            }
        }

        vm.showNextButton = !nameNotExists;
    };

}]);