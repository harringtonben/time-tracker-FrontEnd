'use strict';

app.service("ShiftService", function($http, moment) {

    const createNewShiftJson = (shift, shiftDate, employeeId, managerId) => {
        return {
            "date": shiftDate,
            "employeeId": employeeId,
            "managerId": managerId,
            "workFromHome": shift.workFromHome,
            "callout": shift.callout,
            "planned": shift.planned,
            "shiftLengthId": shift.shiftLengthId,
            "email": shift.email,
            "phone": shift.phone,
            "integrations": shift.integrations,
            "nonCoverage": shift.nonCoverage
        };
    };

    const getShiftInfo = (id, date) => {
        return $http.get(`http://localhost:5000/api/shifts/${id}?date=${date}`);
    };

    const formatDate = (date) => {
        return moment(date).format('YYYY-MM-DD');
    };

    const logNewShift = (shift) => {
        return $http.post("http://localhost:5000/api/shifts", JSON.stringify(shift));
    };

    const editOldShift = (shift, shiftId) => {
        return $http.put(`http://localhost:5000/api/shifts/${shiftId}`, JSON.stringify(shift));
    };

    return { createNewShiftJson, editOldShift, formatDate, getShiftInfo, logNewShift};
});