'use strict';

app.controller("ManagersCtrl", function($timeout, $location, $scope, ManagerService) {

    const getManagers = () => {
        ManagerService.getManagers().then((results) => {
            $scope.managers = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    getManagers();

});