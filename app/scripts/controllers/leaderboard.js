'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:LeaderboardCtrl
 * @description
 * # LeaderboardCtrl
 * Controller of the worldOfWorkCraftApp
 */

angular.module('worldOfWorkCraftApp')
  .controller('LeaderboardCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/worldofworkcraft/leaderboard').success(function(data) {
      $scope.leaderboard = data;
      $scope.challengename = $routeParams.challengename;
    });
  }]);
