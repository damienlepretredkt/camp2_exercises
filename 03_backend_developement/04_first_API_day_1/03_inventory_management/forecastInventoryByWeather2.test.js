const forecastInventoryByWeather = require("./forecastInventoryByWeather");
const address = require("./address");

test("should return true if address_component is a city", () => {

  const address_component = {
    long_name : "Bordeaux",
    short_name : "Bordeaux",
    types : [ "locality", "political" ]
  };

  expect(forecastInventoryByWeather.getCityName(address_component)).toEqual(true);
});


test("should return true if address_component is a city", () => {

  const address_component_department = {
    long_name : "Gironde",
    short_name : "Gironde",
    types : [ "administrative_area_level_2", "political" ]
  };

  expect(forecastInventoryByWeather.getCityName(address_component_department)).toEqual(false);
});


test("should return a location", () => {
  const json = JSON.parse(address);
  expect(forecastInventoryByWeather.getLocation(json)).toEqual(
    {
      lat : 44.8370232,
      lng : -0.5735796
    }
  );
});


test("should return a location", () => {
  const json = JSON.parse(address);
  expect(forecastInventoryByWeather.getCityNameFromAddress(json)).toEqual(
    [{
      long_name : "Bordeaux",
      short_name : "Bordeaux",
      types : [ "locality", "political" ]
    }]
  );
});
