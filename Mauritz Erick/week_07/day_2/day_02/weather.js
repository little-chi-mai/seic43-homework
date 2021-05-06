

const getWeather = () => {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
    } else {
        //navigator returns a success and error call backs which are defined below. The success implicitly returns the coordianates requested that are passed into the
        //ajax request to the weather API
        navigator.geolocation.getCurrentPosition(success, error);

        function success(pos) {
            const lat = pos.coords.latitude;
            const long = pos.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.weather_key}&units=metric`

            $.ajax(url)
                .done(function (data) {
                    outputWeather(data);
                }).fail(function (err) {
                    console.error(err);
                });
        }

        function error(err) {
            console.error(`ERROR(${err.code}): ${err. message}`);
        }
    }
}


const outputWeather = (current) => {

    const city = current.name;
    const prediction = current.weather[0].main.toLowerCase();
    const condition = current.weather[0].description;
    const temp = Math.floor(current.main.temp);
    const maxTemp = Math.floor(current.main.temp_max);
    const minTemp = Math.floor(current.main.temp_min);
    const feelsLike = Math.floor(current.main.feels_like);
    const humidity = Math.floor(current.main.humidity);

    $('#output').html(`
       <span class="header"><h2>${city} / ${temp}&#8451;</h2></span>
         <h5>The weather is currently ${condition}, with a prediction of further ${prediction}.</h5>
        <ul>
        <li><span>Current temp: ${temp} &#8451;</span></li>
        <li><span>Humidity: ${humidity} &#37;</span></li>
        <li><span>Feels like: ${feelsLike} &#8451;</span></li>
        <li><span> Max/Min: ${maxTemp} &#8451; / ${minTemp} &#8451;</span></li>
        </ul>
    `);

    // // Generate random background image from Unsplash API
    // backgroundImage(condition)

}

$(document).ready(function () {
    $('#weather').on('click', function () {
        getWeather();
    });
});





//Set body to unpslash background image
// const backgroundImage = (query) => {
//     const url = `https://api.unsplash.com/photos/random?client_id=${config.unsplash_key}&page=2&query=${query}}`

//     $.ajax(url)
//         .done(function (res) {
//             const img = res.urls.regular;
//             document.body.style.backgroundImage = `url('${img}')`;
//             $("#output").addClass(".text-white");
            
//         }).fail(function (err) {
//             console.error(err);
//         });
// }