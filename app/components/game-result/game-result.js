'use strict';

angular.module('ohHell.game-result', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/game-result', {
        templateUrl: 'components/game-result/game-result.html',
        controller: 'GameResultController',
        controllerAs: 'GameResultCtrl'
    });
}])

.controller('GameResultController', [function() {

}]);