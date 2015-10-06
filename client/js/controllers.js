app.controller("beerController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

  $scope.messageSection = false;
  $scope.edit = false;
  $scope.message = "";
  $scope.beer = {};

  var beerUrl = "";
  var beersUrl = "/api/v1/beers"

  getBeers = function(url){
    httpFactory.get(url)
    .then(function(response){
      $scope.beers = response.data;
    });
  };

  function showMessage(messageString) {
    getBeers(beersUrl);
    $scope.messageSection = true;
    $scope.message = messageString;
    $timeout(function() {
      $scope.messageSection = false;
    }, 5000);
  }

  getBeers(beersUrl);

  $scope.postBeer = function(){
    var payload = $scope.beer;
    httpFactory.post(beersUrl, payload);
    $scope.beer = {};
    showMessage("Beer Successfully Added!");
  };

  $scope.editBeer = function(id){
    beerUrl = "/api/v1/beer/" + id;
    httpFactory.get(beerUrl).then(function(response) {
      $scope.beer = response.data;
    });
    $scope.edit = true;
  };

  $scope.updateBeer = function() {
    var payload = $scope.beer;
    httpFactory.put(beerUrl, payload);
    $scope.edit = false;
    $scope.beer = {};
    showMessage("Beer Successfully Updated!");
  }

  $scope.deleteBeer = function(id) {
    beerUrl = "/api/v1/beer/" + id;
    httpFactory.delete(beerUrl);
    showMessage("Beer Successfully Deleted!");
  }

}]);
