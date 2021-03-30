//object trains --> with each key as the different lines, and the values containing the stops

const trains = {
  N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: [ '8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central',  '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}


const planTrip = function(startLine, startStop, endLine, endStop){

  let indexStart;
  let indexEnd;
  let indexChange1; //index change for the first starting line
  let indexChange2; //index change for the second starting line
  let totalStops;
  let stopsNames = []; //will track the stops the person needs to pass through

  if(startLine === endLine){ //if there is no switching train lines
  // getting the indexes of the starting stop and ending stop on the specific train line
    indexStart = trains[startLine].indexOf(startStop);
    indexEnd = trains[startLine].indexOf(endStop);

  // absolute the value of subtracting both indexes to always get a positive number of stops
    totalStops = Math.abs(indexEnd - indexStart);


  // This is to print the stops
    if(indexStart < indexEnd){ // if the person is going in the positive direction e.g. index 0 --> 3

      for(let i = indexStart + 1; i <= indexEnd; i++){ // inexStart + 1 because we dont want the first stop
        stopsNames.push(trains[startLine][i]);
      }

    } else { // if person is going the negative way e.g. index 3 --> 0

      for(let i =indexStart - 1; i >= indexEnd; i--){ //indexStart - 1 because we dont want the first stop
        stopsNames.push(trains[startLine][i]);
      }
    }

    console.log(`Here are the stops you need to pass through: ${stopsNames.join(', ')} `);
    console.log("stops in total: " + totalStops);

    return totalStops;

  } else { //if we need to switch lines

//This finds the first part of the trip - the starting line
    indexStart = trains[startLine].indexOf(startStop);
    indexChange1 = trains[startLine].indexOf('Union Square');
    totalStops = Math.abs(indexChange1 - indexStart);

// This is to print the stop names we need to go through in our journey
    if(indexStart < indexChange1){ // if starting index is smaller than Union Square index (going positive)

      for(let i = indexStart + 1; i <= indexChange1; i++){ // indexStart + 1 because we dont want the first stop
        stopsNames.push(trains[startLine][i]);
      }
    } else { // if starting index is bigger than Union Square (going down) positive

      for(let i = indexStart - 1; i >= indexChange1; i--){ // indexStart - 1 because we dont want the first stop
        stopsNames.push(trains[startLine][i]);

      }
    }

    console.log(`You must travel through the following stops on the ${startLine} line: ${stopsNames.join(', ')} ` );

    stopsNames = []; // cleans out the stop name array so that we can put the
    console.log("Change at Union Square.")

// this finds the second half of the trip on the ending line
    indexChange2 = trains[endLine].indexOf('Union Square');
    indexEnd = trains[endLine].indexOf(endStop);
    totalStops += Math.abs(indexEnd - indexChange2);

//This is to print the stop names in our journey
    if(indexEnd < indexChange2){ //if endStop index is smaller than Union Square index - negative (going up)

      for(let i = indexChange2 - 1; i >= indexEnd; i--){
        stopsNames.push(trains[endLine][i]);
      }

    } else { // if endStop is larger than Union Square (positive)

      for(let i = indexChange2 + 1; i <= indexEnd; i++){
        stopsNames.push(trains[endLine][i]);
      }
    }

      console.log(`Your journey continues on the ${endLine} line through the following stops: ${stopsNames.join(', ')}  `);


    console.log(`${totalStops} stops in total.`);
    return totalStops;
  }

}

//Test cases
console.log("First trip: line6- Astor Place to line6 - Grand Central")
planTrip('6', 'Astor Place', '6', 'Grand Central');
console.log(" "); // space to see results on the console better, easier on the eyes ^_^

console.log("Second trip: lineN- Time Square to line6 - 33rd")
planTrip('N', 'Time Square', '6', '33rd');
console.log(" ");

console.log("Third trip: lineL- 1st to lineN - 8th")
planTrip('L', '1st', 'N', '8th');
console.log(" ");

console.log("Fourth trip: lineL- 1st to lineL - 8th")
planTrip('L', '1st', 'L', '8th');
