define(function(require){
  var $ = require("jquery"),
      userZip = require("userZip"),
      zipCall = require("zip-call"),
      currentWeather = require("weather-call"),
      templates = require("get-templates");

  
  

  // get user zip input
  $("#zipSubmit").click(function(){
    var zip = zipCall(userZip());
    zip.then(function(data){
      console.log("data", data);
      currentWeather(data).then(function(data){
        console.log("currentWeatherdata", data);
        $("#currentWeather").html(templates.template(data));
      });
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