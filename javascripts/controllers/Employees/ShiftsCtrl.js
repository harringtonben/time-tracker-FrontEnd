'use strict';

app.controller("ShiftsCtrl", function($timeout, $location, $routeParams, $scope, EmployeeService) {

    const employeeData = (timeframe) => {
        EmployeeService.getEmployeeData($routeParams.id, timeframe).then((results) => {
            console.log(results.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    employeeData(120);
});