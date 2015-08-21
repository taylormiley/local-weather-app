define(function(){
  return {
   queryZip: function(zipCall) { 
      
      $.ajax({
            url: "http://api.zippopotam.us/us/" + zipCall
          }).done(function(data) {
            console.log(data);
            return data.places["place name"];
            
      });
          
     }
  };
});