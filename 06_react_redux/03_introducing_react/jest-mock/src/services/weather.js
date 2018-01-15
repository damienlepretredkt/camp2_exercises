

function loadWeather(fetch, zipcode) {

  const weatherURL = "http://localhost:3003";
  return fetch(`${weatherURL}/tomorrow-weather/${zipcode}`)
    .then(response => response.json())
}


export default loadWeather
