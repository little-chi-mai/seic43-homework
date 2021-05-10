const convertTime = function(unixTime){
  const miliseconds = unixTime * 1000;
  const dateObject = new Date(miliseconds);
  const humanDate = dateObject.toLocaleString();
  const date = humanDate.split(', ');
  return date[1].substring(0,5);
}

const convertDate = function(unixTime){
  const miliseconds = unixTime * 1000;
  const dateObject = new Date(miliseconds);
  const humanDate = dateObject.toLocaleString();
  const date = humanDate.split(', ');
  return date[0].substring(0,5);
}

$(document).ready(function(){
  // weather API key = 51130466b01c2761baec81ae933e4257
  $.ajax('http://api.openweathermap.org/data/2.5/weather?q=Sydney&&units=metric&appid=51130466b01c2761baec81ae933e4257').done(function(data){
    const temperature = $('#temp');
    temperature.html(`${Math.round(data.main.temp)}°C`);
    $('#feels_like').append(`<span><em>${data.main.feels_like}</em></span>`);
    $('#condition').html(`Condition: ${data.weather[0].main}, ${data.weather[0].description}`);
    $('.weather_icon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    $('#sunrise').append(`<span>${convertTime(data.sys.sunrise)} AM</span>`);
    $('#sunset').append(`<span>${convertTime(data.sys.sunset)} PM</span>`);

    let desc = data.weather[0].description.toLowerCase();
    if(desc.includes("rain")){
      alert("Don't forget to bring your umbrella");
    }else if(desc.includes("sunny")){
      alert("Bring some shades and a cap and bask in the sun");
    }else if(desc.includes("wind")){
      alert("Bring jacket, prepare for the flu, better yet, stay at home!");
    }

    const forecast = $('.weekly_forecast');
    $.ajax('https://api.openweathermap.org/data/2.5/onecall?lat=-33.92&lon=151.26&exclude=hourly,minutely&units=metric&appid=51130466b01c2761baec81ae933e4257').done(function(forecast){
      dailyTemp = [];
      dailyIcon = [];
      (forecast.daily).forEach(function(i){
        dailyTemp.push(i.temp.day); // gets the average temperature for the day
        dailyIcon.push(i.weather[0].icon);
      });

      for(let i = 0; i < dailyTemp.length; i++){
        $('.weekly_forecast').append(`<div id='daily${i}' class='col-md-1'></div>`);
        $(`#daily${i}`).append(`<img src="http://openweathermap.org/img/w/${dailyIcon[i]}.png">`);
        $(`#daily${i}`).append(`<p>${Math.round(dailyTemp[i])}°C</p>`);
        $(`#daily${i}`).append(`<p>${convertDate(forecast.daily[i].dt)}</p>`);
      }

    });
  });

  $.ajax('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pnVwnrGmC4EKqxGqccNxlLB9OmfAnn2G').done(function(data){
    const newsWidget = $('.news_widget');

    for(let i = 0; i< 7; i++){
      article = data.results[i];
      $(newsWidget).append(`<a href="${article.url}" target="_blank"><div id="article${i}" class="row article_div"></div></a>`);
      $(`#article${i}`).append(`<img src="${article.multimedia[0].url}" class="col-md-5 article_image" >`);
      $(`#article${i}`).append(`<a href="${article.url}" target="_blank" class="col-md-6"><div id="article_item${i}"></div></a>`)
      $(`#article_item${i}`).append(`<h3 class="article_title">${article.title}</h3>`);
      date = article.created_date;
      $(`#article_item${i}`).append(`<p class="article_date">${date.substring(0, 10)}  ${date.substring(11, 16)}</p>`);
      $(`#article_item${i}`).append(`<p class="article_abstract">${article.abstract}</p>`);
    }
  });

  $.ajax('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pnVwnrGmC4EKqxGqccNxlLB9OmfAnn2G').done(function(data){
    const booksWidget = $('.books_widget');

    for(let i = 0; i < 5; i++ ){
      book = data.results.books[i];
      $(booksWidget).append(`<div id="book${i}" class="col-md-2 offset-md-1 book_item"></div>`);
      $(`#book${i}`).append(`<img src="${book.book_image}" class="book_image">`);
        $(booksWidget).append(`<div id="book_info${i}" class="col-md-8 book_item"></div>`);
      $(`#book_info${i}`).append(`<p class="book_week">${book.weeks_on_list} week(s) on this list</p>`);
      $(`#book_info${i}`).append(`<h3 class="book_title">${book.title}</h3>`);
      $(`#book_info${i}`).append(`<p class="book_author">${book.author}</p>`);
      $(`#book_info${i}`).append(`<p class="book_desc">${book.description}</p>`);
      $(`#book_info${i}`).append(`<a href="${book.buy_links[0].url}" target="_blank" class="buy_button">Buy!</a>`);

    }
  });

  const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "baa92a2642msh7d0f8cbdf9c79a3p19bab9jsn0eca1bacd09b",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	 }
  };

  $.ajax(settings).done(function (response) {
    recipe = response.recipes[0];
	  const recipeWidget = $('.recipe_widget');
    $(recipeWidget).append(`<h2 class="recipe_header">Daily Inspired Recipe:</h2>`)
    $(recipeWidget).append(`<a href="${recipe.spoonacularSourceUrl}" target="_blank"><img src="${recipe.image}" class="recipe_image"></a>`);
    $(recipeWidget).append(`<h3 class="recipe_title">${recipe.title}</h3>`);
    $(recipeWidget).append(`<p class="ready_in_minutes">Ready in: ${recipe.readyInMinutes} minutes</p>`);
    $(recipeWidget).append(`<p class="serving_size">Serving size: ${recipe.servings} servings</p>`);

  });


});
