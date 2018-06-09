'use strict';

app.controller("HomeCtrl", function($location, $scope, HomeService) {
   const getHomeMetrics = (timeframe) => {
      HomeService.getHomeMetrics(timeframe).then((results) => {
         $scope.teamMetrics = results.data;
          const employeeNames = $scope.teamMetrics.map(team => team.name);
          const totalOutTime = $scope.teamMetrics.map(team => team.totalCalledOut);
          const totalUnplannedTimeOut = $scope.teamMetrics.map(team => team.totalUnplannedOut);
          const totalWorkFromHome = $scope.teamMetrics.map(team => team.totalWorkedFromHome);
         console.log($scope.teamMetrics);
         console.log(employeeNames);
         console.log(totalOutTime);
         console.log(totalUnplannedTimeOut);
          $scope.labels = employeeNames;
          $scope.series = ['Total Time Out', 'Total Unplanned Time Out', 'Total Days Worked From Home'];

          $scope.data = [
              totalOutTime,
              totalUnplannedTimeOut,
              totalWorkFromHome
          ];

          $scope.colors = [ '#1E91D6', '#F08700', '#8FC93A', '#E4CC37', '#F06543', '#F9F871'];
      }).catch((error) => {
         console.log(error);
      });
   };

    $(document).ready(function(){
        $('.collapsible').collapsible();
    });


   getHomeMetrics(120);
});