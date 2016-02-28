'use strict';

angular.module('ohHell.game-play', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/game-play', {
        templateUrl: 'components/game-play/game-play.html',
        controller: 'GamePlayController',
        controllerAs: 'GamePlayCtrl'
    });
}])

.controller('GamePlayController', ['ohHellService', function(ohHellService) {
    var vm = this;

    vm.names = ohHellService.getNamesOfPlayers();

    vm.numOfGameRounds = ohHellService.getNumOfGameRounds();

    vm.rounds = ohHellService.getRounds();

    vm.scores = ohHellService.getScores();

    vm.update = function() {
        var scores = vm.scores;

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