'use strict';

app.controller("NewEmployeeCtrl", function($timeout, $location, $scope, EmployeeService) {

    $scope.newEmployee = {};

    const getManagers = () => {
        EmployeeService.getManagers().then((results) => {
            $scope.managers = results.data;
            console.log($scope.managers);
            $timeout(function () {
                $('select').material_select();
            });
        }).catch((error) => {
            console.log(error);
        });
    };


    $scope.addSupporter = (supporter) => {
        const employeeJson = EmployeeService.createEmployeeJson(supporter);

        EmployeeService.addNewEmployee(employeeJson).then((results) => {
            $location.path("/home");
        }).catch((error) => {
            console.log(error);
        });
    };


    getManagers();

});