'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:BadgesCtrl
 * @description
 * # BadgesCtrl
 * Badges Controller of the worldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('BadgesCtrl', ['$scope', '$http', 'UserData', function ($scope, $http, UserData) {
    $scope.UserData = UserData;

    $http.get('http://localhost:8080/worldofworkcraft/badges')
      .success(function(data) {
        $scope.allBadges = data;
      })
      .error(function(data, status) {
        console.error('Failed to fetch data for all badges: ' + status);
      });

    if (UserData.username) {
      $http.get('http://localhost:8080/worldofworkcraft/learner/' + UserData.username + '/badges')
        .success(function(data) {
          $scope.myBadges = data;
        })
        .error(function(data, status) {
          console.error('Failed to fetch user badge data: ' + status);
        });

      $http.get('http://localhost:8080/worldofworkcraft/learner/' + UserData.username + '/achievements')
        .success(function(data) {
          $scope.myAchievements = data;
        })
        .error(function(data, status) {
          console.error('Failed to fetch user achievement data: ' + status);
        });
    }
  }]);
