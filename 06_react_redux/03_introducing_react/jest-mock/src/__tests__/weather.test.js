import loadWeather from "../services/weather";
import fakeWeatherData from '../__mocks__/data';

const fakeFetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: function() {
      return Promise.resolve(fakeWeatherData);
    }
  })
);


test("loadWeather: it gives us a list of 8 slice of one day weather", () => {

  const expectedResult = fakeWeatherData
  return loadWeather(fakeFetch, "59000")
    .then(weathers => {
      expect(weathers).toEqual(expectedResult);
    })
});
