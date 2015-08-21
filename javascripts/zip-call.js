define(function(require){
  var $ = require("jquery"),
      Q = require("q");
  return function(zipCall) { 
      var deferred = Q.defer();
    
      $.ajax({
            url: "http://api.zippopotam.us/us/" + zipCall,
            method: "GET"
          }).done(function(data) {
            deferred.resolve(data.places[0]["place name"]);
            console.log("data", data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          });
          return deferred.promise;
  };
});




