define(function(require){
  var $ = require("jquery"),
      userZip = require("userZip");

  // get user zip input
  $("#zipSubmit").click(function(){
    userZip();
  });
  $("#userZip").keydown(function(e) {
    if(e.which === 13) {
      userZip();
    }
  });

});