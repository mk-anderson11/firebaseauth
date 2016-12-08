
function HelloWorld()
{
  myname = "Matt";
  alert(myname);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstName="Matthew";
});
