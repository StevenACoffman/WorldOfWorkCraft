'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the worldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
