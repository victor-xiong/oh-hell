'use strict';

angular.module('ohHell.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController'
    });
}])

.controller('HomeController', ['$scope', 'ohHellService', function($scope, ohHellService) {

    $scope.goNextToPlayerNumberPage = function() {
        ohHellService.resetNumOfPlayers();
        ohHellService.resetNamesOfPlayers();
    };

}]);