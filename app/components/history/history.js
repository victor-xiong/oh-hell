'use strict';

angular.module('ohHell.history', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/history', {
        templateUrl: 'components/history/history.html',
        controller: 'HistoryController',
        controllerAs: 'HistoryCtrl'
    });
}])

.controller('HistoryController', [function() {

}]);