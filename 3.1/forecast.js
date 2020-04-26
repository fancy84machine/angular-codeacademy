
/*
The forecast service needs to use AngularJS’s built-in $http to fetch JSON from the server. Therefore, we add $http to the forecast service as a dependency
Now $http is available to use inside forecast.
*/
app.factory('forecast', ['$http', function($http) { 

    /*
    use $http to construct an HTTP GET request for the weather data. If the request succeeds, the weather data is returned; otherwise the error info is returned.
    */
    return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
              .success(function(data) { 
                return data; 
              }) 
              .error(function(err) { 
                return err; 
              }); 
  }]);
  