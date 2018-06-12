'use strict';

app.controller("DeleteEmployeeCtrl", function($timeout, $location, $routeParams, $scope, ManagerService, EmployeeService) {

    const getEmployeeInfo = () => {
        EmployeeService.getEmployeeById($routeParams.id).then((results) => {
            $scope.employee = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    $scope.goHome = () => {
        $location.path("/home");
    };

    $scope.delete = () => {
        EmployeeService.deleteEmployee($routeParams.id).then((results) => {
            $location.path("/home");
        }).catch((error) => {
            console.log(error);
        });
    };

    getEmployeeInfo();

});