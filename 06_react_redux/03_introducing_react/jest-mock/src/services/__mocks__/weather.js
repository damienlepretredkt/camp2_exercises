import fakeWeatherData from '../../__mocks__/data'

const fakeloadWeather = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: function() {
      return Promise.resolve(fakeWeatherData);
    }
  })
);

export default fakeloadWeather
