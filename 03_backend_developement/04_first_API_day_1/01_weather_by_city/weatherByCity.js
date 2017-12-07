const request = require("request");
const ow_api_key = process.env.OPENWEATHER_API_KEY;

// const readline = require("readline");
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function weatherByCityNameWithTerminal(city, fn) {
//   request(
//     {
//       url: "http://api.openweathermap.org/data/2.5/weather",
//       qs: {q:city+",fr", APPID: ow_api_key, units: "metric"}
//     },
//     function(error, response, body) {
//       fn(JSON.parse(body).main.temp+" °C");
//     }
//   ) ;
// }
//
// function displayTemperature(temperature) {
//   console.log(temperature);
// }
//
// function start() {
//   reader.question(
//     "Please enter a city name : \n",
//     (input) => {
//       weatherByCityNameWithTerminal(input, displayTemperature);
//       reader.close();
//     }
//   );
// }
//
// start();

function weatherByCity(city) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ow_api_key}&units=metric`,
      // qs: {q:city, APPID: ow_api_key, units: "metric"}
    },
    function(error, response, body) {
      return `${JSON.parse(body).main.temp} °C`;
    }
  ) ;
}

module.exports = weatherByCity;
