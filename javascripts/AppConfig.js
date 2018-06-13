'use strict';

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when("/employees", {
            templateUrl: 'partials/Employees/employees.html',
            controller: 'EmployeesCtrl'
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
        .when("/addnewmanager", {
            templateUrl: 'partials/Managers/newmanager.html',
            controller: 'NewManagerCtrl'
        })
        .when("/managers", {
            templateUrl: 'partials/Managers/managers.html',
            controller: 'ManagersCtrl'
        })
        .when("/editmanager/:id", {
            templateUrl: 'partials/Managers/editmanager.html',
            controller: 'EditManagerCtrl'
        })
        .when("/deletemanager/:id", {
            templateUrl: 'partials/Managers/deletemanager.html',
            controller: 'DeleteManagerCtrl'
        })
        .otherwise("/home");
});

