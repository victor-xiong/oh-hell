'use strict';

angular.module('ohHell.names-of-players', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/names-of-players', {
        templateUrl: 'views/names-of-players/names-of-players.html',
        controller: 'NamesOfPlayersCtrl'
    });
}])

.controller('NamesOfPlayersCtrl', ['$scope', 'ohHellService', function($scope, ohHellService) {
    $scope.num = ohHellService.getNumOfPlayers();
    $scope.names = ohHellService.getNamesOfPlayers();

    $scope.goNextToGamePlayPage = function() {
        ohHellService.setNamesOfPlayers($scope.names);

        var numOfGameRounds = ohHellService.getNumOfGameRounds();
        var numOfPlayers = ohHellService.getNumOfPlayers();
        var namesOfPlayers = ohHellService.getNamesOfPlayers();
        var scores = [];
        var topRound = (52 - 52 % numOfPlayers) / numOfPlayers;

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

    $scope.goBackToPlayerNumberPage = function() {
        ohHellService.setNumOfPlayers($scope.num);
    };

}]);