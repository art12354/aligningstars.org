// angularjs
var app = angular.module("body", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/red", {
      templateUrl: "html/views/red.html"
    })
    .when("/green", {
      templateUrl: "html/views/green.html"
    })
    .when("/blue", {
      templateUrl: "html/views/blue.html"
    })
    .otherwise({
      templateUrl: "html/views/home.html"
    });
});
app.controller("HeaderController", function($scope) {
  $scope.nav = false;
  $scope.showNav = function() {
    $scope.nav = !$scope.nav;
  };
})
console.log("hello world!");
