console.log("Wow it's Wednesday!");

// # Beach Planner

// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of day you can go to the beach.

// ## example:

// with the following forecast:

// ```javascript
// monday: the temperature is 20 and there is 12mm of rain
// tuesday: the temperature is 25 and there is 6mm of rain
// wednesday: the temperature is 27 and there is 24mm of rain
// thursday: the temperature is 32 and there is 65mm of rain
// friday: the temperature is 18 and there is 2mm of rain
// saturday: the temperature is 26 and there is 0mm of rain
// sunday: the temperature is 27 and there is 14mm of rain
// ```

// If i'm ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program
// should be : Tuesday and Saturday

// ### Hint:

// - Wisely choose a way to store you data (array, object,...)

const forecast = [
    {
        day: 'monday',
        temp: 20,
        rain: 12
    },
    {
        day: 'tuesday',
        temp: 25,
        rain: 6
    },
    {
        day: 'wednesday',
        temp: 27,
        rain: 24
    },
    {
        day: 'thursday',
        temp: 32,
        rain: 65
    },
    {
        day: 'friday',
        temp: 18,
        rain: 2
    },
    {
        day: 'saturday',
        temp: 26,
        rain: 0
    },
    {
        day: 'sunday',
        temp: 27,
        rain: 14
    },
];

const beachPlanner = function (preferTemp, preferRain, weatherForecast) {
    let beachDays = [];

    weatherForecast.forEach(dayObj => {
        if (preferTemp <= dayObj.temp && preferRain >= dayObj.rain) {
            beachDays.push(dayObj.day);
        }
    })

    return beachDays.join(', ');
}

console.log(beachPlanner(24, 8, forecast));
console.log(beachPlanner(27, 15, forecast));
