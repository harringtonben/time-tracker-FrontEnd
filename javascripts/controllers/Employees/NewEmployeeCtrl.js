'use strict';

app.controller("NewEmployeeCtrl", function($location, $scope, EmployeeService) {

    $scope.newEmployee = {};
    
    const getManagers = () => {
        EmployeeService.getManagers().then((results) => {
            $scope.items = results.data;
            console.log($scope.items);
        }).catch((error) => {
            console.log(error);
        });
    };

    $(document).ready(function(){
        $('.dropdown-button').dropdown({
            belowOrigin: true,
            alignment: 'left',
            inDuration: 200,
            outDuration: 150,
            constrain_width: true,
            hover: false,
            gutter: 1
        });
    });

    getManagers();
});