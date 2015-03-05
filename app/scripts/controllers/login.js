'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wrldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('LoginCtrl', function ($scope) {

    $scope.login = function(uniqname) {
      console.log(uniqname + ' clicked the login button.');
      $scope
    }
  });
