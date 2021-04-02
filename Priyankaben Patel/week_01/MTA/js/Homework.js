/* MTA LAB
/* Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:
Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
*/


const subwayLines =[
  {
    id: 'N',
    stops: ['Times Square', '34th', 'n28th', 'n23rd', 'Union Square', 'n8th'],
    //junction: 'Union Square'
  },
  {
    id: 'L',
    stops: ['l8th', '6th', 'Union Square', '3rd', '1st'],
    //junction: 'Union Square'
  },
  {
    id:'six',
    stops: ['Grand Central', '33rd', 'six28th', 'six23rd', 'Union Square', 'Astor Place'],
    //junction: 'Union Square'
  }
];


  const planTrip = function (getInLine, getInStop, getOutLine, getOutStop) {
    firstMetroLineStops = [];
    secondMetroLineStops = [];
  //  let idFound = false;
    let getInID;
    let firstTrip = [];
    let firstTripLineId;
    let junction = "";
    let changeLineID;
    let secondTripLineId;
    let secondTrip  = [];
    for (let i = 0; i < subwayLines.length; i++) {

// check for getIn ID match in array of subwayLines
    if (getInLine === subwayLines[i].id){
      getInID = i;
      firstTripLineId = subwayLines[i].id
      firstTrip = subwayLines[i].stops;
      junction = 'Union Square'
      //idFound = true;

    };
// Check for newLine ID and stops
    if (getOutLine === subwayLines[i].id){
      changeLineID = i;
      secondTripLineId = subwayLines[i].id
      secondTrip = subwayLines[i].stops;
      //idFound = true;

    }
  };
// looping to get the firsttrip before reaching junction in both direction
    if (firstTrip.indexOf(getInStop) <= firstTrip.indexOf('Union Square')) {
      for (let index = firstTrip.indexOf(getInStop) + 1; index <=firstTrip.indexOf('Union Square'); index ++) {
        firstMetroLineStops.push(firstTrip[index]);
      }
    }

    else if (firstTrip.indexOf(getInStop) >= firstTrip.indexOf('Union Square')) {
      for (let b = firstTrip.indexOf(getInStop) - 1; b >=firstTrip.indexOf('Union Square'); b --) {
        firstMetroLineStops.push(firstTrip[b]);
      }
    };
    console.log('You must travel through the following stops on the ' + firstTripLineId + 'line: ' + firstMetroLineStops + '.')
    console.log('Changed at ' + junction);

// check for change to ID match in array of subwayLines and going backward
    if (secondTrip.indexOf(getOutStop) <= secondTrip.indexOf('Union Square')) {

      for (let k = secondTrip.indexOf('Union Square') - 1; k >= secondTrip.indexOf(getOutStop); k --) {
        secondMetroLineStops.push(secondTrip[k]);
      }
    }

    else if (secondTrip.indexOf(getOutStop) >= secondTrip.indexOf('Union Square')){
// check for change to ID match in array of subwayLines and going forward
      for (let a = secondTrip.indexOf('Union Square') + 1; a <= secondTrip.indexOf(getOutStop); a ++) {
        secondMetroLineStops.push(secondTrip[a]);
      }
    };
    console.log('Your journey continues through the following stops on ' + secondTripLineId + 'line: ' + secondMetroLineStops );
    console.log(firstMetroLineStops.length + secondMetroLineStops.length + ' total stops');
    return firstMetroLineStops;
};

planTrip('L', 'l8th', 'six', '33rd')
//planTrip('N', 'Times Square', 'L', '1st')
//planTrip('N', '34th', 'L', 'l8th')
//planTrip('L', '6th', 'six', 'Astor Place')
//planTrip("six", "Union Square", "N", "Times Square");
//planTrip("L", "1st", "six", "Union Square");
