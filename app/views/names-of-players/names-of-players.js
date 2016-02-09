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

    // When navigate from numOfPlayers page, reset names to empty object.
    if (ohHellService.getNamesOfPlayers() === null) {
        $scope.names = [];
        for (var i = 1; i <= $scope.num; i++) {
            $scope.names.push({label: "Player " + i, value: ""});
        }

    } else {
        // When navigate back from game play page, restore names.
        $scope.names = ohHellService.getNamesOfPlayers();
    }

    $scope.updateNamesOfPlayers = function() {
        ohHellService.setNamesOfPlayers($scope.names);
    };

}]);