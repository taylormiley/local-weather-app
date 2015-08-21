define(function(require){
  var $ = require("jquery"),
      userZip = require("userZip"),
      zipCall = require("zip-call"),
      currentWeather = require("weather-call"),
      templates = require("get-templates"),
      city;

  
  

  // get user zip input
  $("#zipSubmit").click(function(){
    city = userZip();
    var zip = zipCall(city);
    zip.then(function(data){
      console.log("data", data);
      currentWeather("http://api.openweathermap.org/data/2.5/weather?q=", data + "&units=imperial").then(function(data){
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

  $("body").on("click", "#3DayButton", function(){
    var zip = zipCall(city);
    zip.then(function(data){
      console.log("data", data);
      currentWeather("http://api.openweathermap.org/data/2.5/forecast/daily?q=" ,data + "&cnt=3&units=imperial").then(function(data){
        console.log("currentWeatherdata", data);
        $("#currentWeather").html(templates.template(data));
      });
    }).fail(function(data){
      console.log("data", data);
    }).done();
  });
  
  
  

});