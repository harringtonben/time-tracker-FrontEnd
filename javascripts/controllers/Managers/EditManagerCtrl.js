'use strict';

app.controller("EditManagerCtrl", function($timeout, $location, $routeParams, $scope, ManagerService) {

    const getManagerData = () => {
        ManagerService.getManager($routeParams.id).then((results) => {
            $scope.manager = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    $scope.updateManager = (manager) => {
        const managerJson = ManagerService.createManagerJson(manager);

        ManagerService.editManager(managerJson, $routeParams.id).then((results) => {
            $location.path("/managers");
        }).catch((error) => {
            console.log(error);
        });
    };

    getManagerData();
});