
function HelloWorld()
{
  myname = "Matt";
  alert(myname);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.firstName="Matthew";

  $scope.Wolfram = function() {
    alert("Wolfram Function");
    url = 'http://api.wolframalpha.com/v2/query?input=pi&appid=UKVQX8-68VAQJWH5P'
    $http.get(url)
      .then(function(response) {
      console.log(response);
    });
  }

  $http.get('http://api.wolframalpha.com/v2/query?input=pi&appid=UKVQX8-68VAQJWH5P').success(function(data) {
    console.debug(data);
  })


});
