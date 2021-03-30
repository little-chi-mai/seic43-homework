// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


let lines = { //3 subway lines
    "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"], //N line with stops
    "L": ["8th", "6th", "Union Square", "3rd", "1st"], //L line with stops
    "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"] //6 line with stops
}

console.table(lines);

let stops = 0; //starts at 0

const getStops = function(line, start, end){
    let lineArray = lines[line]; //get an array of stops for each line
    let stopsString = ""; //

    let startStation = lineArray.indexOf(start); //starting point indexOf is used to get position of each stop
    let stopStation = lineArray.indexOf(end); //endingp point

    if(startStation < stopStation) { //Keep on Going
        for (let i = startStation + 1; i <= stopStation; i++) {
            stop += lineArray[i] + ", ";
            stops++;
            console.log(stops);
        }
    } else { // Go backward
        for (let i = startStation - 1; i >= stopStation; i--) {
          stopsString += lineArray[i] + ", ";
          stops++;
        }
      }
      return stopsString;
}


//console.log(lines); //test

const planTrip = function(sL, sS, eL, eS){ //start line, start stop, end line, end stop.

    console.log("You're travelling from: " + sL + " line " + sS + " stop.");
    console.log("Your destination is: " + eL + " line " + eS  + " stop.");

    if (sL === eL) { //if same line or no need to intercept
        let returnedStopsString = getStops(sL, sS, eS);
        console.log("You must travel through the following stops on the " + sL + " line: " + returnedStopsString + ".")
      } else { //need to intercept
        // Trip 1 - startStop to Union Square
        let returnedStopsStringTrip1 = getStops(sL, sS, "Union Square");
        console.log("You must travel through the following stops on the " + sL + " line: " + returnedStopsStringTrip1 + ".")
    
        // Change at US
        console.log("Change at Union Square.");
    
        // Trip 2 - Union Square to endStop
        let returnedStopsStringTrip2 = getStops(eL, "Union Square", eS);
        console.log("Your journey continues through the following stops on the " + eL + ": " + returnedStopsStringTrip2 + ".")
      }
    
      console.log(stops + " stops in total.")
    }
    
console.log(planTrip('6', 'Grand Central', 'N', '28th'));

