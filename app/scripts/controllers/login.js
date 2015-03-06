'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the wrldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, UserData) {

    $scope.login = function (uniqname) {

      $rootScope.UserData = UserData;
      $rootScope.logout = function (userData) {
        userData.username = '';
      };

      UserData.username = uniqname;
      console.log(UserData.username + ' clicked the login button.');

      $location.path('/');
    }


  })
  .directive('focus', function($timeout) {
    return {
      scope : {
        trigger : '@focus'
      }, link : function(scope, element) {
        scope.$watch('trigger', function(value) {
          if (value === "true") {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
      }
    };
  });

