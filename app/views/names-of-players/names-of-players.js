'use strict';

angular.module('ohHell.names-of-players', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/names-of-players', {
        templateUrl: 'views/names-of-players/names-of-players.html',
        controller: 'NamesOfPlayersCtrl'
    });
}])

.controller('NamesOfPlayersCtrl', ['$scope', function($scope) {

}]);