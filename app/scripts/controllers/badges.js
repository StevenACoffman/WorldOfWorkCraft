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

        if (UserData.username) {
          getUserBadges($scope, $http, UserData);
        }

      })
      .error(function(data, status) {
        console.error('Failed to fetch data for all badges: ' + status);
      });

  }]);

function getUserBadges($scope, $http, UserData) {
  $http.get('http://localhost:8080/worldofworkcraft/learner/' + UserData.username + '/badges')
    .success(function(data) {
      $scope.myBadges = data;

      for (var i = 0; i < $scope.myBadges.length; i++) {
        for (var j = 0; j < $scope.allBadges.length; j++) {
          if ($scope.myBadges[i].id === $scope.allBadges[j].id) {
            $scope.allBadges[j].earned = true;
            $scope.allBadges[j].extraClass = 'panel-danger';
          }
        }
      }

    })
    .error(function(data, status) {
      console.error('Failed to fetch user badge data: ' + status);
    });

  $http.get('http://localhost:8080/worldofworkcraft/learner/' + UserData.username + '/achievements')
    .success(function(data) {
      $scope.myAchievements = data;

      for (var i = 0; i < $scope.myAchievements.length; i++) {
        for (var j = 0; j < $scope.allBadges.length; j++) {
          for (var k=0; k < $scope.allBadges[j].achievements.length; k++) {
            if ($scope.myAchievements[i].id === $scope.allBadges[j].achievements[k].id) {
              $scope.allBadges[j].achievements[k].earned = true;
              $scope.allBadges[j].achievements[k].extraClass = "danger";
            }
          }
        }
      }

    })
    .error(function(data, status) {
      console.error('Failed to fetch user achievement data: ' + status);
    });
}
