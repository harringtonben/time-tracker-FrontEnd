'use strict';

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when("/addnewemployee", {
            templateUrl: 'partials/Employees/newemployee.html',
            controller: 'NewEmployeeCtrl'
        })
        .when("/editemployee/:id", {
            templateUrl: 'partials/Employees/editemployee.html',
            controller: 'EditEmployeeCtrl'
        })
        .when("/deleteemployee/:id", {
            templateUrl: 'partials/Employees/deleteemployee.html',
            controller: 'DeleteEmployeeCtrl'
        })
        .otherwise("/home");
});

