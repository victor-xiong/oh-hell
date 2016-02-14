'use strict';

angular.module('ohHell.namesOfPlayers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/namesOfPlayers', {
        templateUrl: 'app/components/namesOfPlayers/namesOfPlayersView.html',
        controller: 'NamesOfPlayersCtrl'
    });
}])

.controller('NamesOfPlayersCtrl', ['$scope', 'ohHellService', function($scope, ohHellService) {
    $scope.num = ohHellService.getNumOfPlayers();
}]);