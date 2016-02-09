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

    var numOfPlayers = null;
    var namesOfPlayers = null;

    ohHellService.getNumOfPlayers = function() {
        return numOfPlayers;
    };

    ohHellService.setNumOfPlayers = function(num) {
        numOfPlayers = num;
    };

    ohHellService.getNamesOfPlayers = function() {
        return namesOfPlayers;
    };

    ohHellService.setNamesOfPlayers = function(names) {
        namesOfPlayers = names;
    };

    ohHellService.clearNamesOfPlayers = function() {
        namesOfPlayers = null;
    };

    return ohHellService;
});