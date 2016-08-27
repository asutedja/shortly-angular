angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(data) {
    $scope.link['data'] = Links.addOne(data);
  };

  $scope.moveToLinks = function() {
    
  };
});
