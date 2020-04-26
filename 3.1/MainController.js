/*
added forecast into MainController as a dependency so that it’s available to use. 
Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay
*/
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function(data) {
      $scope.fiveDay = data;
    });
  }]);
  