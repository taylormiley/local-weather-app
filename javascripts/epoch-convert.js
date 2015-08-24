define(function(require) {
  var $ = require('jquery'),
      _ = require("lodash");

  
  return function(data) {
    var dataArray = data.list;
    console.log("dataArray", dataArray);
    for (var i = 0; i < dataArray.length; i++) {
      dataArray[i].dt = new Date(dataArray[i].dt * 1000);
      dataArray[i].dt = dataArray[i].dt.toDateString();
      console.log("dataArray", dataArray);
    }
  };
});