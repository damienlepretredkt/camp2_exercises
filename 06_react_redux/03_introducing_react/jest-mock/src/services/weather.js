

function loadWeather(fetch) {

  const weatherURL = "http://localhost:3003";
  return fetch(`${weatherURL}/tomorrow-weather/59155`)
    .then(response => response.json())
}


export default loadWeather
