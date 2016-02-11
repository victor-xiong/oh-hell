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
}]);