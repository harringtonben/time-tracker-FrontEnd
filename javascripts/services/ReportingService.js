'use strict';

app.service("ReportingService", function($http) {
    const getReport = (report, timeframe) => {
        return $http.get(`http://localhost:5000/api/supporters/reporting/${report}?timeframe=${timeframe}`);
    };

    const getReportByEmployee = (report, employeeId, timeframe) => {
        return $http.get(`http://localhost:5000/api/supporters/reporting/${report}?timeframe=${timeframe}&employeeid=${employeeId}`);
    };

    const getReportByManager = (report, managerId, timeframe) => {
        return $http.get(`http://localhost:5000/api/supporters/reporting/${report}?timeframe=${timeframe}&managerid=${managerId}`);
    };

    return {getReport, getReportByEmployee, getReportByManager};
});