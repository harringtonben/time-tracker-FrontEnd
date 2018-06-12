'use strict';

app.controller("HomeCtrl", function($timeout, $location, $scope, HomeService) {
   const getHomeMetrics = (timeframe) => {
      HomeService.getHomeMetrics(timeframe).then((results) => {
         $scope.teamMetrics = results.data;
          const employeeNames = $scope.teamMetrics.map(team => team.name);

          const totalOutTime = $scope.teamMetrics.map((team) => {
              if (team.totalCalledOut == null)
              {
                  return 0;
              }
              else
              {
                  return team.totalCalledOut;
              }

          });

          const totalUnplannedTimeOut = $scope.teamMetrics.map((team) => {
              if (team.totalUnplannedOut == null)
              {
                  return 0;
              }
              else
              {
                  return team.totalUnplannedOut;
              }
          });

          const totalWorkFromHome = $scope.teamMetrics.map((team) => {
             if (team.totalWorkedFromHome == null)
             {
                 return 0;
             }
             else
             {
                 return team.totalWorkedFromHome;
             }
          });

          $scope.labels = employeeNames;
          $scope.series = ['Total Time Out', 'Total Unplanned Time Out', 'Total Days Worked From Home'];

          $scope.data = [
              totalOutTime,
              totalUnplannedTimeOut,
              totalWorkFromHome
          ];

          $scope.colors = [ '#1E91D6', '#F08700', '#8FC93A', '#E4CC37', '#F06543', '#F9F871'];
          $timeout(function () {
              $('select').material_select();
          });
      }).catch((error) => {
         console.log(error);
      });
   };

    $scope.items = [
        {text: "1 Week", value: 7},
        {text: "2 Weeks", value: 14},
        {text: "3 Weeks", value: 21},
        {text: "4 Weeks", value: 28},
        {text: "6 Weeks", value: 42},
        {text: "12 Weeks", value: 84},
        {text: "18 Weeks", value: 126},
        {text: "6 Months", value: 182},
        {text: "1 Year", value: 365}
    ];

    $(document).ready(function(){
        $('.collapsible').collapsible();
        $('.modal').modal();
    });

    $scope.resetMetrics = () => {
        if ($scope.newTime == null)
        {
            $scope.newTime = 120;
            getHomeMetrics($scope.newTime);
        }
        else
        {
            getHomeMetrics($scope.newTime);
        }
    };

    $scope.addSupporter = () => {
        $location.path('/addnewemployee');
    };

    $scope.editSupporter = (id) => {
        $location.path(`/editemployee/${id}`);
    };

    $scope.editSupporter = (id) => {
        $location.path(`/deleteemployee/${id}`);
    };

   getHomeMetrics(120);
});