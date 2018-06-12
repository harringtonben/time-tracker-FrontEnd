'use strict';

app.controller("NewManagerCtrl", function($timeout, $location, $scope, ManagerService) {

    $scope.addManager = (manager) => {
        const managerJson = ManagerService.createManagerJson(manager);

        ManagerService.addManager(managerJson).then((results) => {
            console.log(results);
        }).catch((error) => {
            console.log(error);
        });
    };

});