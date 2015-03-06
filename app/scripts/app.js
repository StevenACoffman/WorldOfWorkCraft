'use strict';

/**
 * @ngdoc overview
 * @name worldOfWorkCraftApp
 * @description
 * # worldOfWorkCraftApp
 *
 * Main module of the application.
 */
angular
  .module('worldOfWorkCraftApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/badges', {
        templateUrl: 'views/badges.html',
        controller: 'BadgesCtrl'
      })
      .when('/leaderboard/:challengename', {
        templateUrl: 'views/leaderboard.html',
        controller: 'LeaderboardCtrl'
      })
      .when('/logachievement/:challengeName', {
        templateUrl: 'views/logachievement.html',
        controller: 'LogAchievementCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
