define(function(require){
  var $ = require("jquery");
  var firebase = require("firebase");
  
  var ref = new Firebase("https://local-weather.firebaseio.com/");
  
  $(document).on("click", ".glyphicon", function(){
    console.log("click fired");
    var $date = $(this).parent().next().text();
    var $mainTemp = $(this).parent().parent().next().text();
    var $status = $(this).parent().parent().next().next().next().text();
    var $statusDescription = $(this).parent().parent().next().next().next().next().text();
    var $pressure = $(this).parent().parent().next().next().next().next().next().children(".pressure").text();
    var $windSpeed = $(this).parent().parent().next().next().next().next().next().children(".wind-speed").text();
    
    
    var firebaseObj = {
      date: $date,
      main_temp: $mainTemp,
      status: $status,
      status_description: $statusDescription,
      pressure: $pressure,
      windSpeed: $windSpeed
    };
    
    ref.child("forecast").push(firebaseObj);
  });
  
});