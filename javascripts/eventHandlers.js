define(function(require){
  var $ = require("jquery"),
      apiCalls = require("api-promise-chain");

  $("#zipSubmit").click(function(){
    apiCalls.getCurrentWeather();
  });

  $("#userZip").keydown(function(e) {
    if(e.which === 13) {
      apiCalls.getCurrentWeather();
    }
  });

  $("body").on("click", "#3DayButton", function(){
    apiCalls.get3DayWeather();
  });
  
  $("body").on("click", "#7DayButton", function(){
    apiCalls.get7DayWeather();
  });
  

});