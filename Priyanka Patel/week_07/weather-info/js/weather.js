const fetchweatherInfo = function (event) {
  event.preventDefault();
  //Don't leave this page
  const location = $('#location').val();
  //establish api connection using ajax
   $.ajax(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=87f3530b034ce83f07479771285f8bdf`).done(function(info) {
    //get the city name
    const cityName = info.city.name
      $('<h2>').text(cityName).appendTo('body');

    //get the surise time and convert number to AU Date-time-formate
    const sunriseTime = new Date(info.city.sunrise * 1000);
    const sunrise = `Sunrise at ${sunriseTime.toLocaleString('en-AU')}`;
      $('<p>').text(sunrise).appendTo('body');

    //get the sunset time and convert number to AU Date-time-formate
    const sunsetTime = new Date(info.city.sunset * 1000);
    const sunset = `Sunset at ${sunsetTime.toLocaleString('eu-AU')}`;
      $('<p>').text(sunset).appendTo('body');

     //get the weather forcast every three hours for week
     let list = info.list
     for (let i = 0; i <= list.length; i++) {
       let date = list[i].dt_txt
       let weather = list[i].weather[0].description
       let dateTimeWeather = `${cityName} weather at ${date} is ${weather}`
        $('<li>').text(dateTimeWeather).appendTo('body')
     };
  });
};

  $(document).ready(function () {
    $('#search-form').on('submit', fetchweatherInfo);
});
