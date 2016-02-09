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

    $scope.names = [];
    for (var i = 1; i <= $scope.num; i++) {
        $scope.names.push({label: "Player " + i, value: ""});
    }

}]);