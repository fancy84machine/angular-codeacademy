
/*
In app.js, we mapped a URL to PhotoController and photo.html. We added a variable part named id to the URL, like this: /photos/:id.
we used Angular’s $routeParams to retrieve id from the URL by using $routeParams.id. Notice that we injected both $routeParams and the photos service into the PhotoController dependency array to make them available to use inside the controller.
*/
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    /*
    Then to fetch an individual photo, we first used the photos service to fetch the array of photos from the server, and then used $routeParams.id to access the specific photo by its index.
    */
    photos.success(function(data) {
      $scope.detail = data[$routeParams.id];
    });
  }]);