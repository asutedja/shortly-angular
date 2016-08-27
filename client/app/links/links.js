angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
// Your code here
  $scope.data = {};

  var init = function() {
    Links.getAll().then(function(data) {
      console.log('getting data', data);
      data.sort(function(a, b) {
        return b.visits - a.visits;
      });
      $scope.data['links'] = data;  //[{url:'testing'},{url: 'test'}];
    });
  };
  init();

  $scope.checkIfMatches = function(filterInput, title) {
  };



});
