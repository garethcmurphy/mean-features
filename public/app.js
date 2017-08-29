var jetbrains = angular.module("jetbrains", [])

jetbrains.controller("AppCtrl", function ($http) {
    $http.get("http://localhost:3000".success())

}