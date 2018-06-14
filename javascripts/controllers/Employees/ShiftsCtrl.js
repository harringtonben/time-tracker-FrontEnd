'use strict';

app.controller("ShiftsCtrl", function($timeout, $location, $routeParams, $scope, EmployeeService, ShiftService) {

    $scope.shift = {};

    $scope.selectOptions = [{title: 'Yes', value: false},
        {title: 'No', value: false}];

    $scope.shiftOptions = [{title: 'Full Day', value: 1},
        {title: 'Half Day', value: 2}];

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
            var shiftData = results.data;
            shiftData.date = ShiftService.formatDate(shiftData.shiftDate);
            $scope.shift = shiftData;
            console.log($scope.shift);
        }).catch((error) => {
            console.log(error);
        });
    };

    employeeData(120);

});