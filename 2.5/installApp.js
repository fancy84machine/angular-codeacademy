app.directive('installApp', function() {
    return {
      restrict: 'E',

      scope: {},
      templateUrl: 'js/directives/installApp.html',

      /*
      scope refers to the directive’s scope. Any new properties attached to $scope will become available to use in the directive’s template.
      element refers to the directive’s HTML element.
      attrs contains the element’s attributes.
      */
      link: function(scope, element, attrs) {
        scope.buttonText = "Install",
        scope.installed = false,
  
        /*
        The download() function uses the scope.installed property to check if an app is installed. When an app is installed, download() does three things:

        toggles the .btn-active class
        changes the button text to “Uninstall”
        changes scope.installed to true
        */
        scope.download = function() {
          element.toggleClass('btn-active')
          if(scope.installed) {
            scope.buttonText = "Install";
            scope.installed = false;
          } else {
            scope.buttonText = "Uninstall";
            scope.installed = true;
          }
        }
      }
    };
  });