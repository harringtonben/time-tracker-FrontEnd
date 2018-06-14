'use strict';

app.controller("ShiftsCtrl", function($timeout, $location, $routeParams, $scope, EmployeeService, ShiftService) {

    $scope.shift = {};

    const employeeData = (timeframe) => {
        EmployeeService.getEmployeeData($routeParams.id, timeframe).then((results) => {
            $scope.employee = results.data;


            $scope.labels = ['Total Time Out', 'Total Unplanned Time Out', 'Total Days Worked From Home'];

            $scope.colors = [ '#1E91D6', '#F08700', '#8FC93A', '#E4CC37', '#F06543', '#F9F871'];

            $scope.data = [$scope.employee.totalCalledOut, $scope.employee.totalUnplannedOut, $scope.employee.totalWorkedFromHome];

        }).catch((error) => {
            console.log(error);
        });
    };

    $timeout(function () {
        $('select').material_select();
    });

    $scope.getShiftInfo = (date) => {

        let formattedDate = ShiftService.formatDate(date);
        ShiftService.getShiftInfo($routeParams.id, formattedDate).then((results) => {
            $scope.shift = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    employeeData(120);

});