define(function(require){
  var $ = require("jquery");
      
  return function(){
    var userZip = $("#userZip").val();
    console.log("userZip", userZip);

    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(userZip);

    if(isValidZip) {
    $("#userZip").val('');
    return userZip;
    } else {
      alert(userZip + " is not valid. Please resubmit your zipcode.");
    }
      
  };
});