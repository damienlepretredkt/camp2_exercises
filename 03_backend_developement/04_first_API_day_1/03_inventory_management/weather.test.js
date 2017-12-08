const weather = require("./weather");


test("should extract one prevision", () => {
  const day = {
    dt: 1512680400,
    main:{
      temp: 3.59,
      temp_min: 3.59,
      temp_max: 5.23,
      pressure: 1017.16,
      sea_level: 1024.53,
      grnd_level: 1017.16,
      humidity: 93,
      temp_kf: -1.64
    },
    weather:[
      {id:500,main:"Rain",description:"light rain",icon:"10n"}]
  };

  expect(weather.getDay(day)).toEqual(
    {
      date: new Date("2017-12-07T21:00:00.000Z"),
      temperature: 3.59,
      weathers: [
        {
          id: 500,
          main: "Rain",
          description:"light rain"
        }]
    }
  );
});
