'use strict';

app.controller("ReportingCtrl", function($timeout, $location, $scope, moment, EmployeeService, ManagerService, ReportingService) {

    const getAllSupporters = () => {
        EmployeeService.getEmployees().then((results) => {
            $scope.employees = results.data;
            let allEmployees = {name: "All Employees", employeeId: "null"};
            $scope.employees.unshift(allEmployees);
        }).catch((error) => {
            console.log(error);
        });
    };

    const getManagers = () => {
        ManagerService.getManagers().then((results) => {
            $scope.managers = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    getAllSupporters();
    getManagers();

    $timeout(function () {
        $('select').material_select();
    });

    $scope.refreshDropdown = () => {
        $timeout(function () {
            $('select').material_select();
        });
    };

    $scope.items = [
        {text: "1 Week", value: 7},
        {text: "2 Weeks", value: 14},
        {text: "3 Weeks", value: 21},
        {text: "4 Weeks", value: 28},
        {text: "6 Weeks", value: 42},
        {text: "12 Weeks", value: 84},
        {text: "18 Weeks", value: 126},
        {text: "6 Months", value: 182},
        {text: "1 Year", value: 365}
    ];

    $scope.runSelectedReport = (report, employeeId, timeFrame) => {

        if (employeeId == null)
        {
            ReportingService.getReport(report, timeFrame).then((results) => {
                $scope.reportingData = results.data;
                $scope.reportingData = formatDates();
            }).catch((error) => {
                console.log(error);
            });
        }
        else
        {
            ReportingService.getReportByEmployee(report, employeeId, timeFrame).then((results) => {
                $scope.reportingData = results.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    $scope.runManagerReport = (report, managerId, timeFrame) => {
        ReportingService.getReportByManager(report, managerId, timeFrame).then((results) => {
            $scope.reportingData = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    const formatDates = () => {
        $scope.reportingData.map((item) => {
           item.date = moment(item.date).format('MM-DD-YYYY');
           return item;
        });
    };
});