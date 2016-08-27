angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.message = 'NOT A VALID URL';
  $scope.link = {data: []};
  $scope.addLink = function(data) {
    $scope.link['data'] = Links.addOne(data);
  };

  $scope.createShortLink = function(data) {
    console.log('adding links', data);
    var d = {
      url: data
    };
    Links.addOne(d)
      .then(function(link) {
        $scope.link['data'].push(link);
      });
  };

  $scope.error = function(input) {

    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (!input.match(rValidUrl)) {
      $scope.message = 'NOT A VALID URL';
    } else {
      $scope.message = '';
    }
  };
});
