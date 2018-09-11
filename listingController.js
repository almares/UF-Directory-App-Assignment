angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.newListing = {
      entries : [
        {
          "code": "",
          "name": "",
          "coordinates": {
            "latitude": 0,
            "longitude": 0
          },
          "address": ""
        }
      ]
    }

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
      if ($scope.addlisting.$valid)
        $scope.listings.push($scope.newListing);
      $scope.newListing = {};
      $scope.addlisting.$setPristine();
    };

    $scope.deleteListing = function(entries) {
      var index = $scope.listings.indexOf(entries);
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(entries) {
      if (entries.coordinates === undefined) {
        entries.coordinates = "N/A";
      }
      else {
        var coordinates = "Latitude: " entries.coordinates.latitude + ", Longitude: " + entries.coordinates.longitude
        entries.coordinates = coordinates;
      }
      if (entries.address === undefined)
        entries.address = "N/A";
      $scope.detailedInfo = entries;
    };
  }
]);
