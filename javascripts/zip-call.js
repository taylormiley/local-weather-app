define(function(require){
  var $ = require("jquery"),
      Q = require("q");
  return function(zipCall) { 
      
      $.ajax({
            url: "http://api.zippopotam.us/us/" + zipCall,
            method: "GET"
          }).done(function(data) {
            deferred.resolve(data);
            console.log("data", data);
            return data.places["place name"];
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          });
          return deferred.promise;
  };
});




