'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('MainCtrl', ['$scope', '$http', 'UserData', function ($scope, $http, UserData) {
    $scope.UserData = UserData;
    if (UserData.username) {
      $http.get('http://localhost:8080/worldofworkcraft-0.0.1-SNAPSHOT/challenges/' + UserData.username)
        .success(function(data) {
          $scope.myChallenges = data;
        })
        .error(function(data, status) {
          console.error('Failed to fetch user challenge data: ' + status);
        });
    }
  }]);
