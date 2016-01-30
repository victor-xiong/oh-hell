'use strict';

angular.module('ohHell.game-result', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/game-result', {
        templateUrl: 'views/game-result/game-result.html',
        controller: 'GameResultCtrl'
    });
}])

.controller('GameResultCtrl', ['$scope', function($scope) {

}]);