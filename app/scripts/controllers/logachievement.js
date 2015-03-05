angular.module('worldOfWorkCraftApp')
  .controller('LogAchievementCtrl', function($scope, $routeParams, $location, $http) {

    $scope.challengeName = $routeParams.challengeName;

    // TODO replace with real service endpoint
    $http.get('../achievements.json')
      .success(function(data) {
        $scope.achievements = data;
      })
      .error(function(data, status) {
        console.error('Failed to fetch achievement data');
      });

    // TODO replace with real service endpoint
    $http.get('../achievement-options.json')
      .success(function(data) {
        $scope.achievementOptions = data;
      })
      .error(function(data, status) {
        console.error('Failed to fetch achievement data');
      });

    $scope.logAchievement = function(achievementName, pointValue) {

      // TODO replace with real POST
      console.log('Would have posted to achievements');

      $scope.achievements.push({name: achievementName, points: pointValue});
    };

    $scope.goBack = function() {
      $location.path('/leaderboard/' + $scope.challengeName);
    }
  });
