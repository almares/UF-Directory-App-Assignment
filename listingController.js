angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    
    $scope.freshListing = {
        coordinates: {
          latitude: 0,
          longitutde: 0
        }
    };
      
    &scope.test = function(message) {
       console.log(message);
    };
    
    var clearForm = function() {
      $scope.freshListing.code = '';
      $scope.freshListing.name = '';
      $scope.freshlisting.coordinates.latitude = 0;
      $scope.freshListing.coordinates.longitude = 0;
      $scope.freshListing.address = '';
    };
    
    clearForm();

    $scope.addListing = function() {
      var newListingInsert = {
        name: $scope.freshListing.name,
        code: $scope.freshListing.code,
        address: $scope.freshListing.address,
        coordinates: {
          latitude: $scope.freshListing.coordinates.latitude,
          longitutde: $scope.freshListing.coordinates.longitude
        }
      }
      $scope.listings.push(newListingInsert);
      clearForm();
    };
    
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
      $scope.selectedIndex = -1;
      $scope.detailedInfo = {};
    };
    
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      $scope.selectedIndex = index;
    };
  }
]);
