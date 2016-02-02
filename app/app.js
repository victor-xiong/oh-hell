'use strict';

// Declare  app level module which depends on components and views
angular.module('ohHell', [
    'ngRoute',
    'ohHell.start',
    'ohHell.number-of-players',
    'ohHell.names-of-players',
    'ohHell.game-play',
    'ohHell.game-result',
    'ohHell.history'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/start'});
}])

.factory('ohHellService', function() {
    var ohHellService = {};

    var numOfPlayers;

    ohHellService.getNumOfPlayers = function() {
        return numOfPlayers;
    };

    ohHellService.setNumOfPlayers = function(num) {
        numOfPlayers = num;
    };

    return ohHellService;
});