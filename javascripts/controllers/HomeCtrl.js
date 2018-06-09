'use strict';

app.controller("HomeCtrl", function($location, $scope, HomeService) {
   const getHomeMetrics = (timeframe) => {
      HomeService.getHomeMetrics(timeframe).then((results) => {
         $scope.teamMetrics = results.data;
         console.log($scope.teamMetrics);
      }).catch((error) => {
         console.log(error);
      });
   };

   getHomeMetrics(120);
});