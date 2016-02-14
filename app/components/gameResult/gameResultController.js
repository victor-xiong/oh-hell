'use strict';

angular.module('ohHell.gameResult', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/gameResult', {
        templateUrl: 'app/components/gameResult/gameResultView.html',
        controller: 'GameResultCtrl'
    });
}])

.controller('GameResultCtrl', ['$scope', function($scope) {

}]);