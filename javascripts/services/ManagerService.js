'use strict';

app.service("ManagerService", function($http) {
    const getManagers = () => {
        return $http.get(`http://localhost:5000/api/managers`);
    };

    const createManagerJson = (manager) => {
        return {
            name: manager.name,
            title: manager.title
        };
    };

    const addManager = (manager) => {
        return $http.post(`http://localhost:5000/api/managers`, JSON.stringify(manager));
    };

    return {addManager, createManagerJson, getManagers};
});