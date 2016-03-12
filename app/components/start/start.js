'use strict';

angular.module('ohHell.start', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'components/start/start.html',
        controller: 'StartController',
        controllerAs: 'StartCtrl'
    });
}])

.controller('StartController', ['ohHellService', function(ohHellService) {
    var vm = this;

    vm.goNextToPlayerNumberPage = function() {
        ohHellService.resetNumOfPlayers();
        ohHellService.resetNamesOfPlayers();
    };

}]);