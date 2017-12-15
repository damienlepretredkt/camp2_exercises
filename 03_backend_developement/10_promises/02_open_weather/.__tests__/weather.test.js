const weather = require("../weather")
const sepia = require("sepia")

sepia.filter({
  url: /data\/2\.5\/weather/,
  urlFilter: function(url) {
    return url.replace(/appid=[a-z0-9]&+/, '');
  }
});

sepia.configure(
  {
    includeHeaderNames: false
  }
)


test("weatherByCity: should return 4.74 C°", () => {
  expect.assertions(1)

  return weather.weatherByCity("Paris").then(weather => {
    expect(weather).toBe("4.74 C°")
  });
})

test("getWeather: should reformat weather object", () => {
  expect.assertions(1);

  const weatherTest = {
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10n"
  }
  const weatherTestResult = {
    id: 500,
    main: "Rain",
    description: "light rain"
  }

  expect(weather.getWeather(weatherTest)).toEqual(weatherTestResult);
})

test("getDay: should reformat day object", () => {
  expect.assertions(1);

  const dayFrom = {
    dt: 1513350000,
    main: {
      temp: 2.71,
      temp_min: 2.71,
      temp_max: 2.71,
      pressure: 1006.54,
      sea_level: 1023.33,
      grnd_level: 1006.54,
      humidity: 95,
      temp_kf: 0
    },
    weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10n"
    }
    ],
    clouds: {
      all: 92
    },
    wind: {},
    rain: {},
    snow: {},
    sys: {},
    dt_txt: "2017-12-15 15:00:00"
  }

  const dayResult = {
    date: new Date("2017-12-15T15:00:00.000Z"),
    temperature:2.71,
    weathers:[
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10n"
    }
  ]
  }
  expect(weather.getDay(dayFrom)).toEqual(dayResult);
})

test("weatherByLatitudeAndLongitude: should return Sosnytsya weather informations", () => {
  expect.assertions(3)

  return weather.weatherByLatitudeAndLongitude(32.661343, 51.680374).then(weatherCity => {
    expect(weatherCity.city).toBe("Sosnytsya")
    expect(weatherCity.weathers.length).toEqual(40);
    expect(weatherCity.weathers[0].temperature).toEqual(3.2);
  });
})
