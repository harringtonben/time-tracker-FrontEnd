'use strict';

app.controller("NewManagerCtrl", function($timeout, $location, $scope, ManagerService) {

    $scope.addManager = (manager) => {
        const managerJson = ManagerService.createManagerJson(manager);

        ManagerService.addManager(managerJson).then((results) => {
            $location.path("/home");
        }).catch((error) => {
            console.log(error);
        });
    };

});