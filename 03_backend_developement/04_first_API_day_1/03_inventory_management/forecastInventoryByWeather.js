const request = require("request");
const weather = require("./weather");

const google_api_key = process.env.GOOGLE_PLACES_API_KEY;
const ow_api_key = process.env.OPENWEATHER_API_KEY;

const stores = [
  "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux",
  "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];

const weather_messages = {
  "500": "You need to buy some Umbrellas for the store in",
  "501": "You need to buy some Umbrellas for the store in",
  "801" : "You need to buy some parkas for the store in",
  "802" : "You need to buy some parkas for the store in"
};

function forecastInventoryByWeather() {
  stores.map((element) => fetchCoordinates(element, weatherByLatitudeAndLongitude));
}

function fetchCoordinates(address, callback) {
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${google_api_key}`
    },
    function (error, response, body) {
      const json = JSON.parse(body);
      const location = getLocation(json);
      const city = getCityNameFromAddress(json);
      callback(location.lng, location.lat, city, displayMessages);
    }
  );
}

function getLocation(address) {
  return address.results[0].geometry.location;
}

function getCityNameFromAddress(address) {
  return address.results[0].address_components.filter(getCityName);
}

function displayMessages(coordinates, cityName) {
  console.log( `${weather_messages[coordinates[0].weathers[0].id]} ${cityName[0].long_name} \n`);
}

function getCityName(address_component) {
  const locality = address_component.types.map(isLocality).reduce((accumulator, element) => accumulator + element);
  return locality > 0;
}

function isLocality(type) {
  return type === "locality";
}

function weatherByLatitudeAndLongitude(lon, lat, cityName, callback) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ow_api_key}&units=metric`
    }, function(error, response, body) {
      callback(weather.retrieveDateList(body).map(weather.getDay), cityName);
    }
  );
}


forecastInventoryByWeather();


module.exports = {
  isLocality: isLocality,
  getCityName: getCityName,
  getLocation: getLocation,
  getCityNameFromAddress: getCityNameFromAddress
};
