'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the worldOfWorkCraftApp
 */

angular.module('worldOfWorkCraftApp')
  .controller('DashboardCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('../leaderboard.json').success(function(data) {
      $scope.dashboard = data;
    });
  }]);
