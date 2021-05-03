
const metroPlanner = function (startLineName, startStation, endLineName, endStation){ // takes start and end station as well as start and end line and returns a string noting your journey.

  const startLineArray = linePicker(startLineName); // use linePicker to grab array using line name argument
  const endLineArray = linePicker (endLineName); // use linePicker to grab array using line name argument

  const listStartLineStops = nameLineStops(startLineArray, startStation, 'Union Square'); // returns an array of stops on start line - will always end start line at union square
  const listEndLineStops = nameLineStops(endLineArray, 'Union Square', endStation).slice(1);      // returns an array of stops on end line - will always start end line at union square. the slice removes the union square from the array so that you aren't adding or naming it twice.
  const numberOfStops = listStartLineStops.length + listEndLineStops.length; // number of stops is the length of both start and end line.

return `You must travel through the following stops on the ${startLineName} Line: ${listStartLineStops.join(', ')}. Change at Union Square. Your journey continues through the following stops on the ${endLineName} Line: ${listEndLineStops.join(', ')}. ${numberOfStops} stops in total.`;
}

const nameLineStops = function(lineArray, startStation, endStation){ // function takes an array which is a single line as well as the chosen start and end station. Returns array of stops from start to end station on one line.

  let reachedMyStop = false;    //set variable for for loop below which will stop the loop once all stops between start and end station are named.

  const stopsToName = [];  // new array to put relevant stops into

  if (lineArray.indexOf(startStation) < lineArray.indexOf(endStation)) {
    for (let i = lineArray.indexOf(startStation); i < lineArray.length && reachedMyStop === false; i++){ //if the index of the start station is before the index of the last station, loop forward and push each one into new array until final stop is reached.
      stopsToName.push(lineArray[i]);
      if (lineArray[i] === endStation){ //
        reachedMyStop = true;
      }
    }
  } else {
    for (let i = lineArray.indexOf(startStation); i >= 0 && reachedMyStop === false; i--){  //if the index of the start station is after the index of the end station, loop through the array backwards and push eache one into new array until final stop is reached.
      stopsToName.push(lineArray[i]);
      if (lineArray[i] === endStation){
        reachedMyStop = true;
      }
    }
  }
  return stopsToName;``
}

const linePicker = function (chosenLine){ // function takes a string which is the name of a line and returns the array of stops associated with that name.

    const allLines = {    //create an object of all available lines

        "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

        "L": ["8th", "6th", "Union Square", "3rd", "1st"],

        "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    };

    return allLines[chosenLine]; // return the requested array using the argument chosenLine as a key

}

setTimeout(function () {          // time delay so that html loads before prompt and you can see lines
  startStation = prompt ("What station are you travelling from?") // prompt questions
  startLine = prompt ("What line is your start station on?")
  endStation = prompt ("What station are you travelling to?")
  endLine = prompt ("What line is your end station on?")

  const displayJourney = document.createElement('h4'); // adds output as an element at the end of the page
  displayJourney.innerText = metroPlanner(startLine, startStation, endLine, endStation);
  const mainText = document.querySelector('#maintext');
  mainText.appendChild(displayJourney);
  //console.log(metroPlanner(startLine, startStation, endLine, endStation));
}, 200)
