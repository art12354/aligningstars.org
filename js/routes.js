// ROUTES
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
