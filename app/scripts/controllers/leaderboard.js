'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:LeaderboardCtrl
 * @description
 * # LeaderboardCtrl
 * Controller of the worldOfWorkCraftApp
 */

angular.module('worldOfWorkCraftApp')
  .controller('LeaderboardCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('../leaderboard.json').success(function(data) {
      $scope.leaderboard = data;
    });
  }]);
