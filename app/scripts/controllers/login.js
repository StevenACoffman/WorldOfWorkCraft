'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wrldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('LoginCtrl', function ($scope, $rootScope, UserData) {

    $scope.login = function (uniqname) {

      $rootScope.UserData = UserData;
      $rootScope.logout = function (userData) {
        userData.username = '';
      };

      UserData.username = uniqname;
      console.log(UserData.username + ' clicked the login button.');
    };
  });