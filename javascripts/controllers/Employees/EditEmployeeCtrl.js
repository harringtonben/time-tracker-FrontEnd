'use strict';

app.controller("EditEmployeeCtrl", function($timeout, $location, $routeParams, $scope, ManagerService, EmployeeService) {

    const getManagers = () => {
        ManagerService.getManagers().then((results) => {
            $scope.managers = results.data;
            $timeout(function () {
                $('select').material_select();
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    const getEmployeeInfo = () => {
        EmployeeService.getEmployeeById($routeParams.id).then((results) => {
            $scope.employee = results.data;
            getManagers();
        }).catch((error) => {
            console.log(error);
        });
    };

    $scope.updateSupporter = (employee) => {
        console.log(employee);
        const employeeJson = EmployeeService.createEmployeeJson(employee);
        EmployeeService.updateEmployee(employeeJson, employee.employeeId).then((results) => {
            console.log(results);
        }).catch((error) => {
            console.log(error);
        });
    };

    getEmployeeInfo();

});