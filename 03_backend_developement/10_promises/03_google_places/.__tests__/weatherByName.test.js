const weather = require("../weatherByName")
const sepia = require("sepia")

sepia.filter({
  url: /maps\/api\/geocode\/json/,
  urlFilter: function(url) {
    return url.replace(/key=[a-z0-9]+/, '');
  }
});

sepia.configure(
  {
    includeHeaderNames: false
  }
)

test("getCoordinates: should return coordinates", () => {
  expect.assertions(1);
  const expectedCoordinates = { lat: 50.645741, lng: 3.142559 };

  return weather.getCoordinates("Decathlon Campus").then(coordinates =>
    expect(coordinates).toEqual(expectedCoordinates)
  );

})
