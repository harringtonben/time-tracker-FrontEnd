'use strict';

app.service("EmployeeService", function($http) {
    const getManagers = () => {
        return $http.get(`http://localhost:5000/api/managers`);
    };

    return {getManagers};
});