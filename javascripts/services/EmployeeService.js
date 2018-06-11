'use strict';

app.service("EmployeeService", function($http) {
    const getManagers = () => {
        return $http.get(`http://localhost:5000/api/managers`);
    };

    const addNewEmployee = (supporterJson) => {
        return $http.post(`http://localhost:5000/api/supporters`, JSON.stringify(supporterJson));
    };

    const createEmployeeJson = (supporter) => {
        return {
            "name": supporter.name,
            "title": supporter.title,
            "ManagerId": supporter.managerId
        };
    };


    return {addNewEmployee, getManagers, createEmployeeJson};
});