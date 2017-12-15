const fetch = require("node-fetch");
const weather = require("../02_open_weather/weather");

const google_api_key = process.env.GOOGLE_PLACES_API_KEY;

function getCoordinates(location) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${google_api_key}`)
    .then(response => response.json())
    .then(result => getLocation(result))
    .catch(error => error);
}

function getLocation(address) {
  return address.results[0].geometry.location;
}

function getWeather() {
  getCoordinates("Decathlon Campus")
    .then(coordinates => weather.weatherByLatitudeAndLongitude(coordinates.lng, coordinates.lat))
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// getWeather();


module.exports = {
  getCoordinates: getCoordinates,
  getWeather: getWeather
};
