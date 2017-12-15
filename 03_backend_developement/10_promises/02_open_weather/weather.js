const fetch = require("node-fetch");
const ow_api_key = process.env.OPENWEATHER_API_KEY;

//Recode the function weatherByCityName getting a city as input and return the temperature from Open Weather
function weatherByCity(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ow_api_key}&units=metric`)
    .then(response => response.json())
    .then(weather => `${weather.main.temp} C°`)
    .catch(error => error);
}

//Recode the function weatherByLatitudeAndLongitude that accept an input like 32.661343, 51.680374
function weatherByLatitudeAndLongitude(lon, lat) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ow_api_key}&units=metric`)
    .then(response => response.json())
    .then(response => {
      const weatherObject = {
        city: response.city.name,
        weathers : response.list
      };
      return weatherObject;
    })
    .then(result => {
      result.weathers = result.weathers.map(getDay);
      return result;
    })
    .then(result => {
      result.weathers.map(weather => {
        weather.weathers = weather.weathers.map(getWeather);
        return weather.weathers;
      });
      return result;
    })
    .catch(error => error);
}

function getDay(day) {
  const dayObject = {date: new Date(day.dt*1000), temperature: day.main.temp, weathers: day.weather};
  return dayObject;
}

function getWeather(weather) {
  const weatherObject = {id: weather.id, main: weather.main, description: weather.description};
  return weatherObject;
}


// weatherByLatitudeAndLongitude(32.661343, 51.680374).then(result => {
//   console.log(JSON.stringify(result));
// });


module.exports = {
  weatherByCity: weatherByCity,
  weatherByLatitudeAndLongitude: weatherByLatitudeAndLongitude,
  getDay: getDay,
  getWeather: getWeather
};
