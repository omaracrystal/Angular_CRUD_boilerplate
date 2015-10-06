app.factory('httpFactory', ['$http', function($http){

  var obj = {};

  obj.get = function(url){
    return $http.get(url);
  };

  obj.post = function(url, payload){
    return $http.post(url, payload);
  };

  obj.put = function(url, payload){
    return $http.put(url, payload);
  };

  obj.delete = function(url){
    return $http.delete(url);
  };

  return obj;

}]);
