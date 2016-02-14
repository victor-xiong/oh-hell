'use strict';

angular.module('ohHell.gamePlay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/gamePlay', {
        templateUrl: 'app/components/gamePlay/gamePlayView.html',
        controller: 'GamePlayCtrl'
    });
}])

.controller('GamePlayCtrl', ['$scope', function($scope) {

}]);