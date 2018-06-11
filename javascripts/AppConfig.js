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
        .otherwise("/home");
});

