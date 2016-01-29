var angularApp = angular.module('angularApp', []);

angularApp.controller('MainController', ['$scope','$http', function($scope, $http){
  $http.get('cards.json').success(function(data) {
    $scope.cards = data;
  });
}]);