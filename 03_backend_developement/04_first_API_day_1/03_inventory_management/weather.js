
function retrieveDateList(body) {
  return JSON.parse(body).list;
}

function getDay(day) {
  const dayObject = {date: new Date(day.dt*1000), temperature: day.main.temp, weathers: day.weather.map(getWeather)};
  return dayObject;
}

function getWeather(weather) {
  const weatherObject = {id: weather.id, main: weather.main, description: weather.description};
  return weatherObject;
}

module.exports = {
  retrieveDateList: retrieveDateList,
  getDay: getDay
};
