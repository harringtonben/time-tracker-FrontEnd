'use strict';

app.service("ShiftService", function($http, moment) {

    const getShiftInfo = (id, date) => {
        return $http.get(`http://localhost:5000/api/shifts/${id}?date=${date}`);
    };

    const formatDate = (date) => {
        return moment(date).format('YYYY-MM-DD');
    };

    return {formatDate, getShiftInfo};
});