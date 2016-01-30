var angularApp = angular.module('angularApp', []);

angularApp.controller('MainController', ['$scope','$http', function($scope, $http){
  $http.get('data/weather.json').success(function(data) {
    $scope.weather = data;
  });
}]);