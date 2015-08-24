define(function(require){
    var $ = require("jquery"),
      userZip = require("userZip"),
      zipCall = require("zip-call"),
      currentWeather = require("weather-call"),
      templates = require("get-templates"),
      city;

  return {
    getCurrentWeather: function(){
      city = userZip();
      var zip = zipCall(city);
      zip.then(function(data){
        console.log("data", data);
        currentWeather("http://api.openweathermap.org/data/2.5/weather?q=", data).then(function(data){
          console.log("currentWeatherdata", data);
          $("#currentWeather").html(templates.template(data));
        });
      }).fail(function(data){
        console.log("data", data);
      }).done();
    },
    get3DayWeather: function(){
      var zip = zipCall(city);
      zip.then(function(data){
        console.log("data", data);
        currentWeather("http://api.openweathermap.org/data/2.5/forecast/daily?cnt=3&q=" ,data).then(function(data){
          console.log("currentWeatherdata", data);
          $("#forecast").html(templates.threeDayTemplate(data));
        });
      }).fail(function(data){
        console.log("data", data);
      }).done();
    },
    get7DayWeather: function(){
      var zip = zipCall(city);
      zip.then(function(data){
        console.log("data", data);
        currentWeather("http://api.openweathermap.org/data/2.5/forecast/daily?q=" ,data + "&cnt=7").then(function(data){
          console.log("currentWeatherdata", data);
          $("#forecast").html(templates.sevenDayTemplate(data));
        });
      }).fail(function(data){
        console.log("data", data);
      }).done();
    }
  };

});
