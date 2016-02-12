'use strict';

angular.module('ohHell.game-play', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/game-play', {
        templateUrl: 'views/game-play/game-play.html',
        controller: 'GamePlayCtrl'
    });
}])

.controller('GamePlayCtrl', ['$scope', 'ohHellService', function($scope, ohHellService) {
    $scope.names = ohHellService.getNamesOfPlayers();

    $scope.numOfGameRounds = ohHellService.getNumOfGameRounds();

    $scope.rounds = ohHellService.getRounds();

    $scope.scores = ohHellService.getScores();

    $scope.update = function() {
        var scores = $scope.scores;

        // Update the current round scores and calculate total score by each round.
        for (var i = 0; i < scores.length; i++) {
            var details = scores[i].details;

            for (var j = 0; j < details.length; j++) {
                var detail = details[j];

                if (parseInt(detail.roundBids) >= 0 && parseInt(detail.roundWins) >= 0) {

                    if (detail.roundBids == detail.roundWins) {
                        detail.roundScore = 10 + parseInt(detail.roundWins);
                    } else {
                        detail.roundScore = detail.roundWins;
                    }

                    if (i === 0) {
                        detail.totalScore = detail.roundScore;
                    } else {
                        if (parseInt(scores[i - 1].details[j].totalScore) >= 0) {
                            detail.totalScore = parseInt(detail.roundScore) + parseInt(scores[i - 1].details[j].totalScore);
                        }
                    }
                }
            }
        }

    };

}]);