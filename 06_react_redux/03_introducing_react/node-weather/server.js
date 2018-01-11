const express = require("express");
const fetch = require("node-fetch");
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3003;
const ow_apikey = process.env.OPENWEATHER_API_KEY;

app.use(cors())

app.get("/", function (request, result) {
  result.send("Hello World!");
});


app.get("/tomorrow-weather/:zipcode", function (request, result) {

  const countryCode="fr";
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?zip=${request.params.zipcode},${countryCode}&APPID=${ow_apikey}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((response) => {
      filteredMap = response.list.filter(elm => new Date(elm.dt * 1000).getDate() === new Date().getDate() + 1);
      return {city: response.city.name, weather: filteredMap}
      }
    )
    .then((weather) => {
      result.json(weather);
    })
    .catch((error) => {
      result.json(error);
    })
})


app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
