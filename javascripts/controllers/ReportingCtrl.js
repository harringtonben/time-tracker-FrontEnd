'use strict';

app.controller("ReportingCtrl", function($timeout, $location, $scope, EmployeeService, ManagerService, ReportingService) {

    const getAllSupporters = () => {
        EmployeeService.getEmployees().then((results) => {
            console.log(results.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const getManagers = () => {
        ManagerService.getManagers().then((results) => {
            $scope.managers = results.data;
            console.log($scope.managers);
        }).catch((error) => {
            console.log(error);
        });
    };

    getAllSupporters();
    getManagers();

    $timeout(function () {
        $('select').material_select();
    });
});