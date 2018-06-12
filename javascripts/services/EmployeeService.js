'use strict';

app.service("EmployeeService", function($http) {

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

    const getEmployeeById = (id) => {
        return $http.get(`http://localhost:5000/api/supporters/${id}/employeeinfo`);
    };

    const updateEmployee = (employee, employeeId) => {
        return $http.put(`http://localhost:5000/api/supporters/${employeeId}`, JSON.stringify(employee));
    };

    const deleteEmployee = (id) => {
        return $http.delete(`http://localhost:5000/api/supporters/${id}`);
    };

    return {addNewEmployee, createEmployeeJson, deleteEmployee, updateEmployee, getEmployeeById};
});