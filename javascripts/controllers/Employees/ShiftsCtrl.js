'use strict';

app.controller("ShiftsCtrl", function($timeout, $location, $route, $routeParams, $scope, EmployeeService, ShiftService) {

    $scope.selectOptions = [{title: 'Yes', value: true},
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


    const populateDropdowns = () => {
        $timeout(function () {
            $('select').material_select();
        });
    };


    $scope.getShiftInfo = (date) => {

        let formattedDate = ShiftService.formatDate(date);
        ShiftService.getShiftInfo($routeParams.id, formattedDate).then((results) => {
            var shiftData = results.data;
            $scope.shift = shiftData;
            populateDropdowns();
        }).catch((error) => {
            console.log(error);
        });
    };

    $scope.logShift = (shift, date) => {
        let formattedDate = ShiftService.formatDate(date);
        if (shift.shiftId != null)
        {
            let shiftJson = ShiftService.createNewShiftJson(shift, formattedDate, $scope.employee.employeeId, $scope.employee.managerId);
            ShiftService.editOldShift(shiftJson, $scope.shift.shiftId).then((results) => {
                $route.reload();
            }).catch((error) => {
                console.log(error);
            });
        }
        else
        {
            console.log(shift.shiftId);
            let shiftJson = ShiftService.createNewShiftJson(shift, formattedDate, $scope.employee.employeeId, $scope.employee.managerId);
            ShiftService.logNewShift(shiftJson).then((results) => {
                console.log(results);
                $route.reload();
            }).catch((error) => {
                console.log(error);
            });
        }

    };

    employeeData(120);
    populateDropdowns();

});