'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    // TODO replace with "my challenges" endpoint URL
    $http.get('../challenges.json')
      .success(function(data) {
        $scope.myChallenges = [data];
      })
      .error(function(data, status) {
        console.error('Failed to fetch user challenge data: ' + status);
      });
  }]);
