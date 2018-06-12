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
            console.log(results);
        }).catch((error) => {
            console.log(error);
        });
    };

    getEmployeeInfo();

});