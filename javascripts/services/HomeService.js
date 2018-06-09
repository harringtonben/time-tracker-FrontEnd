'use strict';

app.service("HomeService", function($http) {
   const getHomeMetrics = (timeframe) => {
       return $http.get(`http://localhost:5000/api/supporters/teammetrics?timeframe=${timeframe}`);
   };

   return {getHomeMetrics};
});