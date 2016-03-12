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
    vm.totalRound = ohHellService.getRounds();
    vm.currentRound = 1;
    vm.cards = 1;
    vm.gameInfo = {
        currentRound: vm.currentRound,
        cards: vm.cards,
        details: []
    };

    vm.names.forEach(function (name) {
        var playerInfo = {
            playerName: name.value,
            currentBids: 0,
            currentWins: 0,
            totalScore: 0
        };
        vm.gameInfo.details.push(playerInfo);
    });

    vm.update = function () {
        console.info(1);
        vm.gameInfo.currentRound++;
        vm.gameInfo.cards++;
        vm.gameInfo.details.forEach(function (detail) {
            detail.totalScore += (detail.currentBids === detail.currentWins) ? 10 : 0;
            detail.totalScore += detail.currentWins;
            detail.currentBids = 0;
            detail.currentWins = 0;
        });
    };

}]);