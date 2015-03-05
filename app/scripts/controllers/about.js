'use strict';

/**
 * @ngdoc function
 * @name worldOfWorkCraftApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the worldOfWorkCraftApp
 */
angular.module('worldOfWorkCraftApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
