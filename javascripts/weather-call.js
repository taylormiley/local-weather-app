define(function(require){
  var $ = require('jquery');
  
  return function(cityName) {
    var deferred = Q.defer();
    $.ajax({
            url: "api.openweathermap.org/data/2.5/weather?q=" + cityName,
            method: "GET"
          }).done(function(data){
            deffered.resolve(data);
            console.log("data", data);
          }).fail(function(xhr, status, error) {
            deferred.reject(error);
          }); 

    return deferred.promise;
  };
  

});