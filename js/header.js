// HEADER
app.controller("HeaderController", function($scope, $window) {
  $scope.nav = false;
  $scope.showNav = function() {
    if ($window.innerWidth < 992) {
      $scope.nav = !$scope.nav;
      if ($scope.nav == true) {
        document.getElementById("button").classList.remove("fa-bars");
        document.getElementById("button").classList.add("fa-times");
      }
      else {
        document.getElementById("button").classList.remove("fa-times");
        document.getElementById("button").classList.add("fa-bars");
      }
    }
  };
  $scope.activeLink = function() {
    // TODO when we have all the pages, have onclick actions that call this function to remap who has the active class
  };
  if ($window.innerWidth > 992) {
    $scope.nav = true;
    $scope.button = false;
  }
})
