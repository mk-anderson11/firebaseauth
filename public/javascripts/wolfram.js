
function HelloWorld()
{
  myname = "Matt";
  alert(myname);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  // $scope.firstName="Matthew";
  $scope.Output="";

  $scope.Wolfram = function() {
    $scope.Output = $scope.firstName;
    alert("Wolfram Function");
    url = 'http://api.wolframalpha.com/v2/query?input=pi&appid=UKVQX8-68VAQJWH5P'
    $http.get(url)
      .then(function(response) {
      console.log(response);
    });
  }



});
