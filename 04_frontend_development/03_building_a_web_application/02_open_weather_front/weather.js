const fetch = require("node-fetch");
const ow_api_key = process.env.OPENWEATHER_API_KEY;


function weatherByCity(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},fr&appid=${ow_api_key}&units=metric&lang=fr`)
    .then(response => response.json())
    .catch(error => error);
}

function getWeatherDetails(weathers) {
    return weathers.map(weather =>
      `
         <div class="col-12">
           <img src="http://openweathermap.org/img/w/${weather.icon}.png">
           <p class="card-text">${weather.description}</p>
         </div>
     `
    ).join("");

}


module.exports = {
  weatherByCity: weatherByCity,
  getWeatherDetails: getWeatherDetails
};
