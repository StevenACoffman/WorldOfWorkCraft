angular.module('worldOfWorkCraftApp')
    .controller('LogAchievementCtrl', function ($scope, $routeParams, $location, $http, UserData) {

        $scope.challengeName = $routeParams.challengeName;

        $http.get('http://localhost:8080/worldofworkcraft/learner/' + UserData.username + '/achievements')
            .success(function (data) {
                $scope.achievements = data;
            })
            .error(function (data, status) {
                console.error('Failed to fetch achievement data');
            });

        $http.get('http://localhost:8080/worldofworkcraft/achievements')
            .success(function (data) {
                $scope.availableAchievements = data._embedded.achievements;
            })
            .error(function (data, status) {
                console.error('Failed to fetch data about available achievements.');
            });

        // TODO replace with real service endpoint
        $http.get('../achievement-options.json')
            .success(function (data) {
                $scope.achievementOptions = data;
            })
            .error(function (data, status) {
                console.error('Failed to fetch achievement data');
            });

        $scope.logAchievement = function (achievement, pointValue) {
            var jAchievement = JSON.parse(achievement);
            console.log('Would have posted to achievements with achievement ' + jAchievement.name + ' and pointValue ' + jAchievement.points);

            $http.post('http://localhost:8080/worldofworkcraft/logger/log', {uniqname: UserData.username, achievementName: jAchievement.name, verb: 'LEARN'});

            $scope.achievements.push({name: jAchievement.name, points: jAchievement.points});
        };

        $scope.currentPoints = function () {
            var totalPoints = 0;
            for (var i = 0; i < $scope.achievements.length; i++) {
                totalPoints += $scope.achievements[i].points;
            }
            return totalPoints;
        };

        $scope.goBack = function () {
            $location.path('/leaderboard/');
        }
    });
