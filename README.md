#NSS Group Project:  Local Weather App
An NSS group project with contributions from @tannert44, @rob1nburt0n, and @taylormiley.  This web app takes a user's zip code and gives the current weather conditions.  The user can also get the 3 day and week long forecast.

###Technologies used:
1. RequireJS
2. Handlebars
3. Grunt
4. Firebase
5. jQuery
6. Bootstrap
7. q promises
  * Promises were key to send one ajax call with the entered zip to [zipcode api](http://www.zippopotam.us/), then the returned city for that zipcode was used for the ajax call to the [open weather api](http://openweathermap.org/api). 

###Requirements:
1. [Nodejs](https://nodejs.org/en/)
2. [Bower](http://bower.io/)

###Installation Instructions
1. ```git clone https://github.com/BrendonPierson/local-weather-app.git && cd local-weather-app/lib```
2. ```npm install``` May take a few minutes to download all dependencies, also runs bower install.
3. ```npm start``` This fires up the web server 

