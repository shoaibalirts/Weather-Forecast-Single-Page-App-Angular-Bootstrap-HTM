// MODULE
var weatherApp = angular.module("weatherApp", ["ngRoute", "ngResource"]);

// ROUTES
weatherApp.config(function ($routeProvider) {
  $routeProvider

    .when("/home", {
      templateUrl: "pages/home.html",
      controller: "homeController",
    })

    .when("/forecast", {
      templateUrl: "pages/forecast.html",
      controller: "forecastController",
    });
});

// CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "cityNameService",
  function ($scope, cityNameService) {
    $scope.cityName = cityNameService.cityName;
  },
]);

weatherApp.controller("forecastController", [
  "$scope","cityNameService",
  function ($scope, cityNameService) {
    $scope.cityName1 = cityNameService.cityName;
  },
]);

// CUSTOM SERVICE
weatherApp.service("cityNameService", function () {
  this.cityName = "London";
});
