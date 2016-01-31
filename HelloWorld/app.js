var app = angular.module("app", []);
app.controller("mainCtrl", function($scope){
    $scope.message = "Hello World!";
    $scope.congrats = "You just built your first Angular Project!! Congrats!";
});