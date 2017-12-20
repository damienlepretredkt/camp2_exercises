const express = require("express");
const weather = require("./weather");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('css'));

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.get("/weather", function (request, result) {
  weather.weatherByCity(request.query.city).then((weatherResult) => {
    result.send(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title></title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          <nav class="navbar navbar-dark bg-primary">
            <div class="col d-flex align-items-center">
              <a class="navbar-brand" href="#">Weather App</a>
              <i class="fa fa-sun-o" aria-hidden="true"></i>
            </div>
          </nav>
        <div class="container">

        <div class="row mt-5 mb-5">
          <div class="col-6 offset-3">
            <div class="input-group">
              <input id="searchInput" type="text" class="form-control" placeholder="Search weather for..." aria-label="Search for...">
            </div>
          </div>
        <div>

        <div class="row ml-1">
          <h1>${weatherResult.name}</h1>
        </div>

        <div class="row">
          <div class="card col mr-1 ml-1" style="width: 20rem;">
            <div class="card-body">
              <h4 class="card-title">Weather</h4>
              <p class="card-text">${weather.getWeatherDetails(weatherResult.weather)}</p>
            </div>
          </div>

          <div class="card col mr-1 ml-1" style="width: 20rem;">
            <div class="card-body">
              <h4 class="card-title">Temperature</h4>
              <ul>
                <li>Temperature : ${weatherResult.main.temp} °C</li>
                <li>Minimum: ${weatherResult.main.temp_min}</li>
                <li>Maximum: ${weatherResult.main.temp_max}</li>
              </ul>
            </div>
          </div>

          <div class="card col mr-1 ml-1" style="width: 20rem;">
            <div class="card-body">
              <h4 class="card-title">Visibility</h4>
              <p class="card-text">${weatherResult.visibility} meters</p>
            </div>
          </div>

          <div class="card col mr-1 ml-1" style="width: 20rem;">
            <div class="card-body">
              <h4 class="card-title">Wind</h4>
              <ul>
                <li>Speed : ${weatherResult.wind.speed}</li>
                <li>Degree : ${weatherResult.wind.deg}</li>
              </ul>
            </div>
          </div>

        <div>
        </div>


        <script>
          const searchInput = document.getElementById("searchInput")
          searchInput.addEventListener("keypress", function(event) {
            if(event.charCode == 13)
              {
                  window.location.href = 'http://localhost:3000/weather?city=' + searchInput.value
              }
          })
          ;
        </script>
        </body>
      </html>`
    );
  }
  )
  .catch(error => console.log(error));
})

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
