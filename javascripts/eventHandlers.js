define(function(require){
  var $ = require("jquery"),
      userZip = require("userZip"),
      zipCall = require("zip-call"),
      currentWeather = require("weather-call");
  
  

  // get user zip input
  $("#zipSubmit").click(function(){
    var zip = zipCall(userZip());
    zip.then(function(data){
      console.log("data", data);
      currentWeather(data);
    }).fail(function(data){
      console.log("data", data);
    }).done();
  });
  $("#userZip").keydown(function(e) {
    if(e.which === 13) {
      userZip();
    }
  });
  
  

});