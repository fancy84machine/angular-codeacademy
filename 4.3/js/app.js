var app = angular.module('GalleryApp', ['ngRoute']);

//use Angular’s $routeProvider to define the application routes.
app.config(function ($routeProvider) { 
    /*
    used .when() to map the URL / to to the controller HomeController and the template home.html. The HomeController uses the service js/services/photos.js to fetch the array of all photos from https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json and stores it into $scope.photos. The home.html uses ng-repeat to loop through each item in the photos array and display each photo.
    
    Otherwise if a user accidentally visits a URL other than /, we just redirect to / using .otherwise()
    */
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'views/photo.html'
        })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}); 