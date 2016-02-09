'use strict';

angular.module('ohHell.number-of-players', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/number-of-players', {
        templateUrl: 'views/number-of-players/number-of-players.html',
        controller: 'NumOfPlayersCtrl'
    });
}])

.controller('NumOfPlayersCtrl', ['$scope', 'ohHellService', function($scope, ohHellService) {
    // https://docs.angularjs.org/api/ng/directive/select
    $scope.numOfPlayers = ohHellService.getNumOfPlayers();

    $scope.playerNumbers = {
        availableOptions: [
            {id: '2', name: '2 Players'},
            {id: '3', name: '3 Players'},
            {id: '4', name: '4 Players'},
            {id: '5', name: '5 Players'},
            {id: '6', name: '6 Players'},
            {id: '7', name: '7 Players'},
            {id: '8', name: '8 Players'},
            {id: '9', name: '9 Players'},
            {id: '10', name: '10 Players'}
        ],
        selectedOption: {id: '5', name: '5 Players'}
    };

    // Restore selection if there's already one.
    if ($scope.numOfPlayers) {
        $scope.playerNumbers.selectedOption.id = $scope.numOfPlayers;
    }

    // Clicking Next from number of players page should update numOfPlayers and clear namesOfPlayers.
    $scope.updateNumOfPlayers = function() {
        ohHellService.setNumOfPlayers($scope.playerNumbers.selectedOption.id);
        ohHellService.clearNamesOfPlayers();
    };

}]);