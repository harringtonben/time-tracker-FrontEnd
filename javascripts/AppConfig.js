'use strict';

app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise("/home");
});