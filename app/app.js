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

    ohHellService.numOfPlayers = 0;
    ohHellService.namesOfPlayers = [];

    ohHellService.getNumOfPlayers = function() {
        return this.numOfPlayers;
    };

    ohHellService.setNumOfPlayers = function(num) {
        this.numOfPlayers = num;
    };

    ohHellService.resetNumOfPlayers = function() {
        this.numOfPlayers = 0;
    };

    ohHellService.getNamesOfPlayers = function() {
        return this.namesOfPlayers;
    };

    ohHellService.setNamesOfPlayers = function(names) {
        this.namesOfPlayers = names;
    };

    ohHellService.resetNamesOfPlayers = function() {
        this.namesOfPlayers = [];
    };

    return ohHellService;
});