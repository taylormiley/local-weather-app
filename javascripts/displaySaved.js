define(function(require){
  var firebase = require('firebase');
  var $ = require("jquery");

  var ref = new Firebase("https://local-weather.firebaseio.com/forecast");
  return function(){
    ref.on('value', function(snapshot){
      var forecasts = snapshot.val();
      $("#forecast").html(savedForecastTpl(forecasts));
    });
  };
});