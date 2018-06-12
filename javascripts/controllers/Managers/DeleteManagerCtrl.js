'use strict';

app.controller("DeleteManagerCtrl", function($timeout, $location, $routeParams, $scope, ManagerService) {

    const getManagerData = () => {
        ManagerService.getManager($routeParams.id).then((results) => {
            $scope.manager = results.data;
        }).catch((error) => {
            console.log(error);
        });
    };

    $scope.goHome = () => {
        $location.path("/managers");
    };

    $scope.delete = () => {
        ManagerService.deletManager($routeParams.id).then((results) => {
            $location.path("/managers");
        }).catch((error) => {
            console.log(error);
        });
    };

    getManagerData();
});