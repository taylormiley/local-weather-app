requirejs.config({
  baseUrl: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "q": "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"], //makes sure jquery is loaded before bootstrap
    "firebase": {
      exports: "Firebase"
    }
  }
});

//dependencies are global dependencies
requirejs(["dependencies", "authentication"], 
  function(dependencies, auth) {
    
    /////// user authentication
    //detect if user is already logged in
    var ref = new Firebase("https://local-weather.firebaseio.com");
    var authData = ref.getAuth();
    console.log("authData: ", authData);
    //if no login, authenticate with Github OAuth
    if(authData === null) {
      ref.authWithOAuthPopup("github", function(error, authData) { //1.firebase sends request for request token to github with client id and secret id
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          auth.setUid(authData.uid);
          require(["eventHandlers"], function() {});
        }
      });
    } else {
      auth.setUid(authData.uid);
      require(["eventHandlers"], function() {});
    }



    
  } //end require function
);//end require 