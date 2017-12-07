const request = require("request");
const api_key = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(lon, lat) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    }, function(error, response, body) {
      console.log(JSON.stringify(retrieveDateList(body).map(getDay)));
    }
  );
}

function weatherByZipcode(zipCode, country) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${country}&appid=${api_key}&units=metric`
    }, function(error, response, body) {
      console.log(JSON.stringify(retrieveDateList(body).map(getDay)));
    }
  );
}

function retrieveDateList(body) {
  return JSON.parse(body).list;
}

function getDay(day) {
  const dayObject = {date: new Date(day.dt*1000), temperature: day.main.temp, weathers: day.weather.map(getWeather)};
  return dayObject;
}

function getWeather(weather) {
  const weatherObject = {id: weather.id, main: weather.main, description: weather.description};
  return weatherObject;
}

weatherByZipcode("59155", "fr");
// weatherByLatitudeAndLongitude(50.6410357,3.1391193);

module.exports = {
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  weatherByZipcode: weatherByZipcode
};
