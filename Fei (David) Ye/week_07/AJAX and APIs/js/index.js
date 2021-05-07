const fetchWeather = () => {
  $.ajax(
    "http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=87f3530b034ce83f07479771285f8bdf"
  ).done(function (data) {
    $("h1").text(`${data.name} Weather`);
    $("#current-temp").text(
      `Current temperature: ${
        Math.round((data.main.temp - 0 - 273.15) * 100) / 100
      }°C`
    );
    $("#highest-temp").text(
      `Highest temperature: ${
        Math.round((data.main.temp_max - 0 - 273.15) * 100) / 100
      }°C`
    );
    $("#lowest-temp").text(
      `Lowest temperature: ${((data.main.temp_min - 0 - 273.15) * 100) / 100}°C`
    );
    $("#weather").text(
      `Current weather: ${data.weather[0].main}`
    );
  });
};

$(document).ready(function () {
  fetchWeather();
});
