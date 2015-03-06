angular.module('worldOfWorkCraftApp')
  .controller('LogAchievementCtrl', function($scope, $routeParams, $location, $http, UserData) {

    $scope.challengeName = $routeParams.challengeName;

    // TODO replace with real service endpoint
    $http.get('http://localhost:8080/worldofworkcraft/learner/'+UserData.username+'/achievements')
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

    $scope.logAchievement = function(achievement, pointValue) {

      // TODO replace with real POST
      console.log('Would have posted to achievements with achievement ' + achievement + ' and pointValue ' + pointValue);

      $http.post('http://localhost:8080/worldofworkcraft/logger/log', {uniqname:UserData.username, achievementName:achievement, verb:'LEARN'});

      $scope.achievements.push({name: achievement, points: pointValue});
    };

    $scope.goBack = function() {
      $location.path('/leaderboard/' + $scope.challengeName);
    }
  });
