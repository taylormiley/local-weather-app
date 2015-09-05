<h2>Saved Forecasts</h2>
  {{#each forecast}}
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <div><a href="#"><span class="glyphicon glyphicon-floppy-disk" data-toggle="tooltip" data-placement="left" title="Save Forecast"></span></a><span class="date">{{date}}</span></div>
      <div class="main-temp">{{main_temp}}</div>
      <img src="http://openweathermap.org/img/w/{{icon}}.png">
      <h1 class="status">{{status}}</h1>
      <div class="status-description">{{status_description}}</div>
      <div>
        <span class="pressure">{{pressure}}</span>
        <span class="wind-speed">{{WindSpeed}}</span>
      </div>
    </div>
  </div>
  {{/each}}