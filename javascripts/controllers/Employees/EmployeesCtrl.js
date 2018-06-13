'use strict';

app.controller("EmployeesCtrl", function($timeout, $location, $scope, HomeService, ManagerService) {

    const getEmployees = (timeframe) => {
        HomeService.getHomeMetrics(timeframe).then((results) => {

            $scope.employees = results.data;

            createChartData();

            $scope.labels = ['Total Time Out', 'Total Unplanned Time Out', 'Total Days Worked From Home', 'Total Phone Days', 'Total Email Days', 'Total Integrations Days', 'Total Non Coverage Days'];

            $scope.colors = [ '#1E91D6', '#F08700', '#8FC93A', '#E4CC37', '#F06543', '#F9F871'];

            $timeout(function () {
                $('select').material_select();
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    const createChartData = () => {
        $scope.data = [];
        $scope.employees.forEach((employee) => {
            employee.chartData = [employee.totalCalledOut, employee.totalUnplannedOut, employee.totalWorkedFromHome, employee.phoneDays, employee.emailDays, employee.integrationsDays, employee.nonCoverageDays];
        });
    };


    getEmployees(120);
});