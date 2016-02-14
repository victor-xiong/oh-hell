'use strict';

angular.module('ohHell.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/history', {
        templateUrl: 'app/components/history/historyView.html',
        controller: 'HistoryCtrl'
    });
}])

.controller('HistoryCtrl', ['$scope', function($scope) {

}]);