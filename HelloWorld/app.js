/*

    What is going on in the code??

    In this code, we will be going over angular.module, controllers, and $scope.

        angular.module is a colleciton of angular services, directives, controllers, filters, and configuration information.
        angular.module takes two arguments, the module name (in which case we used "app") and an array of dependencies.
        (for this application we do not require any depdencies, but still require to put in an empty array; if not you will get Uncaught Errors.)

        ng-controller is an angular directive which acts on the whole MVC components.

 */


var app = angular.module("app", []);
app.controller("mainCtrl", function($scope){
    $scope.message = "Hello World!";
    $scope.congrats = "You just built your first Angular Project!! Congrats!";
});