const n =["Times Square", "34th", "28th", "23rd", "Union Square", "8th", "9th"];
const l = ["1st", "3rd", "Union Square", "6th", "8th", "55th"]
const six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

let planTrip = function (entryLine, entryStation, exitLine, exitStation){
  let numberOfStops = 0;
  let numberOfStopsAfterExchange = 0;
  let tripStopsBeforeExchange = "";
  let tripStopsAfterExchange = "";
  let unionSquarePos = exitLine.indexOf("Union Square");

// If need exchange this runs & outputs stops to string & update stop total
if (entryLine !== exitLine){

  numberOfStopsAfterExchange = (exitLine.indexOf("Union Square") - exitLine.indexOf(exitStation));

  if (numberOfStopsAfterExchange < 0){numberOfStopsAfterExchange = numberOfStopsAfterExchange * -1};

  if (exitLine.indexOf(exitStation) > exitLine.indexOf("Union Square") ){
      for (let i = unionSquarePos+1; i < numberOfStopsAfterExchange + unionSquarePos; i++){
      tripStopsAfterExchange = tripStopsAfterExchange + exitLine[i] + ", ";
      }
  }
  else if (exitLine.indexOf(exitStation) < exitLine.indexOf("Union Square") ){
      for (let j = numberOfStopsAfterExchange-1; j >= 0; j--){
      tripStopsAfterExchange = tripStopsAfterExchange + exitLine[j] + ", ";
    }
  }

exitStation = "Union Square";
}
// This is all for first half before exchange
let entryIndex = entryLine.indexOf(entryStation);
let startExitIndex = entryLine.indexOf(exitStation);

numberOfStopsBeforeExchange = (entryIndex - startExitIndex );
if (numberOfStopsBeforeExchange < 0) {numberOfStopsBeforeExchange = numberOfStopsBeforeExchange * -1};

if ( entryIndex > startExitIndex ){
  for (let l = entryIndex-1; l >= entryIndex-1; l--){
    tripStopsBeforeExchange = tripStopsBeforeExchange + entryLine[l] + ", ";
  }
}
  else if  (entryIndex < startExitIndex){
    for (let k = entryIndex+1; k < numberOfStopsBeforeExchange + entryIndex; k++){
    tripStopsBeforeExchange = tripStopsBeforeExchange + entryLine[k] + ", ";
  }
}
console.log(tripStopsBeforeExchange);
console.log(tripStopsAfterExchange);
}
planTrip(l, "1st", n, "Times Square");
