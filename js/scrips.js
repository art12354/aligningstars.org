// angularjs
var app = angular.module("body", ["ngRoute", "ngAnimate"]);
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
    if ($scope.nav == true) {
      document.getElementById("button").classList.remove("fa-bars");
      document.getElementById("button").classList.add("fa-times");
    }
    else {
      document.getElementById("button").classList.remove("fa-times");
      document.getElementById("button").classList.add("fa-bars");
    }
  };
  $scope.activeLink = function() {
    // TODO when we have all the pages, have onclick actions that call this function to remap who has the active class
  };
})
console.log("hello world!");
