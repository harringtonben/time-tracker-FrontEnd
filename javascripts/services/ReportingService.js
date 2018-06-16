'use strict';

app.service("ReportingService", function($http, $window) {
    const getReport = (report, timeframe) => {
        return $http.get(`http://localhost:5000/api/supporters/reporting/${report}?timeframe=${timeframe}`);
    };

    const getReportByEmployee = (report, employeeId, timeframe) => {
        return $http.get(`http://localhost:5000/api/supporters/reporting/${report}?timeframe=${timeframe}&employeeid=${employeeId}`);
    };

    const getReportByManager = (report, managerId, timeframe) => {
        return $http.get(`http://localhost:5000/api/supporters/reporting/${report}?timeframe=${timeframe}&managerid=${managerId}`);
    };

    const exportReport = (report, timeframe) => {
        $window.open(`http://localhost:5000/api/supporters/exports/${report}?timeframe=${timeframe}`, '_blank');
    };

    const exportReportByEmployee = (report, employeeId, timeframe) => {
        $window.open(`http://localhost:5000/api/supporters/exports/${report}?timeframe=${timeframe}&employeeid=${employeeId}`, '_blank');
    };

    const exportReportByManager = (report, managerId, timeframe) => {
        $window.open(`http://localhost:5000/api/supporters/exports/${report}?timeframe=${timeframe}&managerid=${managerId}`, '_blank');
    };


    return {exportReport, exportReportByEmployee, exportReportByManager, getReport, getReportByEmployee, getReportByManager};
});