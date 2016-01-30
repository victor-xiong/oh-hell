'use strict';

angular.module('ohHell.start', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/start', {
        templateUrl: 'views/start/start.html',
        controller: 'StartCtrl'
    });
}])

.controller('StartCtrl', ['$scope', function($scope) {

}]);