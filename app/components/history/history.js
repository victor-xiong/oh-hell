'use strict';

angular.module('ohHell.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/history', {
        templateUrl: 'components/history/history.html',
        controller: 'HistoryCtrl'
    });
}])

.controller('HistoryCtrl', ['$scope', function($scope) {

}]);