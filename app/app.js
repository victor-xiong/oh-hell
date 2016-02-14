'use strict';

// Declare  app level module which depends on components and views
angular.module('ohHell', [
    'ngRoute',
    'ohHell.home',
    'ohHell.numOfPlayers',
    'ohHell.namesOfPlayers',
    'ohHell.gamePlay',
    'ohHell.gameResult',
    'ohHell.history'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])

.factory('ohHellService', function() {
    var ohHellService = {};

    var numOfPlayers;

    ohHellService.getNumOfPlayers = function() {
        return numOfPlayers;
    }

    ohHellService.setNumOfPlayers = function(num) {
        numOfPlayers = num;
    }

    return ohHellService;
});