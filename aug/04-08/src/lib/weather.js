const OpenWeatherClient = require("./weather-client");
const myKey = require("../../config");

const API_KEY = myKey.apiKey;

function formatData(data) {
  const result = `It is now ${data.main.temp}\u0000C in ${data.name}, ${
    data.sys.country
  }
    Today's weather ${data.weather
      .map((condition) => condition.description)
      .join(", ")}
    `;
  console.log(currentData);
  return result;
}

module.exports = async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
  const currentData = await client.getWeather(city, country);

  return formatData(currentData);
};
