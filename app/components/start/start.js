'use strict';

angular.module('ohHell.start', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'components/start/start.html',
        controller: 'StartCtrl'
    });
}])

.controller('StartCtrl', ['$scope', 'ohHellService', function($scope, ohHellService) {

    $scope.goNextToPlayerNumberPage = function() {
        ohHellService.resetNumOfPlayers();
        ohHellService.resetNamesOfPlayers();
    };

}]);