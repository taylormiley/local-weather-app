define(function(require){
  var $ = require('jquery'),
      Q = require('q');
  
  return function(url, cityName) {
    var deferred = Q.defer();
    $.ajax({
            url: url + cityName + ",us&units=imperial",
            method: "GET"
          }).done(function(data){
            deferred.resolve(data);
            console.log("data", data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          }); 

    return deferred.promise;
  };
  

});