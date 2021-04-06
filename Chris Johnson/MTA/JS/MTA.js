console.log("Welcome to the MTA trip planner.")

//attempt 3
const n =["Times Square", "34th", "28th", "23rd", "Union Square", "8th", "9th"];
const l = ["1st", "3rd", "Union Square", "6th", "8th", "55th"]
const six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

let planTrip = function (entryLine, entryStop, exitLine, exitStop){

// const entryLineConcat = entryLine;
// const entryStopConcat = entryStop;
// const exitLineConcat = exitLine;
// const exitStopConcat = exitStop;

let numberOfStops = 0;
let numberOfStopsAfterExchange = 0;
//console.log("The number of stops after the exchange is " + numberOfStopsAfterExchange);
//console.log(exitStop);

let tripStopsBeforeExchange = "";
let tripStopsAfterExchange = "";
let unionSquarePos = exitLine.indexOf("Union Square");

  if (entryLine !== exitLine){

    numberOfStopsAfterExchange = (exitLine.indexOf("Union Square") - exitLine.indexOf(exitStop));
    if (numberOfStopsAfterExchange < 0){numberOfStopsAfterExchange = numberOfStopsAfterExchange * -1};

    if (exitLine.indexOf(exitStop) > exitLine.indexOf("Union Square") ){
        for (let i = unionSquarePos+1; i < numberOfStopsAfterExchange + unionSquarePos; i++){
        tripStopsAfterExchange = tripStopsAfterExchange + exitLine[i] + ", ";
//console.log("Ran 'if' here");
        }
    }

    else if (exitLine.indexOf(exitStop) < exitLine.indexOf("Union Square") ){
      for (let j = numberOfStopsAfterExchange-1; j >= 0; j--){
      tripStopsAfterExchange = tripStopsAfterExchange + exitLine[j] + ", ";
//      }
    }

//     else {console.log("Error, ran 'if' that shouldn't be run here.")}
//
// console.log(tripStopsAfterExchange);

  exitStop = entryLine.indexOf("Union Square");

// console.log("exitStop is " + exitStop);
}
}

 //if (entryLine === exitLine) {exitStop = entryLine.indexOf(exitStop)};

//determine # stops before exchange
numberOfStopsBeforeExchange = (entryLine.indexOf(entryStop) - exitStop );
if (numberOfStopsBeforeExchange < 0) {numberOfStopsBeforeExchange = numberOfStopsBeforeExchange * -1};

// console.log ("entryLine.indexOf(entryStop)" + " is " + entryLine.indexOf(entryStop) + "exitStop is " + exitStop)
// console.log(numberOfStopsBeforeExchange);

//
// console.log(entryLine.indexOf(entryStop));
// console.log("exitStop is " + entryLine.indexOf(exitStop));


if ( entryLine.indexOf(entryStop) > entryLine.indexOf(exitStop) ){
  for (let l = entryLine.indexOf(entryStop)-1; l >= entryLine.indexOf(entryStop)-1; l--){
    tripStopsBeforeExchange = tripStopsBeforeExchange + entryLine[l] + ", ";
    console.log("Ran 'if' here.");
  }
}


else if  (entryLine.indexOf(entryStop) < entryLine.indexOf(exitStop)){
  for (let k = entryLine.indexOf(entryStop)+1; k < numberOfStopsBeforeExchange + entryLine.indexOf(entryStop); k++){
    tripStopsBeforeExchange = tripStopsBeforeExchange + entryLine[k] + ", ";
  }
console.log("Ran 'else if' here.")
}

console.log("tripStopsAfterExchange is " + tripStopsAfterExchange)  ;
console.log("tripStopsBeforeExchange is " + tripStopsBeforeExchange);
//
// if (entryLine !== exitLine){
console.log ( `Get on the ${entryLine}-line and travel the following  ${numberOfStopsBeforeExchange} stops - ${tripStopsBeforeExchange} until you reach Union Square. Then take the ${exitLine} through the following ${numberOfStopsAfterExchange} stops - ${tripStopsAfterExchange} until you reach your destination of ${exitStop}`);
}



//console.log(tripStopsBeforeExchange)




planTrip(n, "9th", l, "55th");

//
//
//
// /*
// //planTrip('N', 'Times Square', '6', '33rd');
//
// // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
//
//
// //attempt 2
// const n =["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// const l = ["1st", "3rd", "Union Square", "6th", "8th"]
// const six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
//
//
//
// let planTrip = function (entryLine, entryStop, exitLine, exitStop){
//
//
// let tripStops = "";
// let tripStopsAfterExchange = "";
//
// var exitStopStorage = null;
// let numberOfStopsAfterExchange = null;
//
// //screw you "6" line
// if (entryLine === 6){
//     entryLine = "six"
//   }
// if (exitLine === 6){
//     exitLine = "six"
//   }
//
// // # of stops pre exchange
// let numberOfStops = ( (exitLine.indexOf(exitStop) ) - (entryLine.indexOf(entryStop) ) );
// // incase going backwards
// if (numberOfStops < 0) {numberOfStops = (numberOfStops * -1)};
// //console.log(numberOfStops);
//
//
//
// //First Half
// let travelStart = function (entryLine, entryStop, exitLine, exitStop){
//
// if (entryLine !== exitLine){
// //exitStopStorage = exitLine.indexOf(exitStop);
// exitStop = entryLine.indexOf("Union Square")
// ;}
//
//
// if ( entryLine.indexOf(entryStop) < entryLine.indexOf(exitStop) ) {
//   for (let i = 1; i <= numberOfStops-1; i++){
//     tripStops = tripStops + entryLine[i] + ", "
//   }
// }
// else if ( entryLine.indexOf(entryStop) > entryLine.indexOf(exitStop) ){
//   for (let j = numberOfStops; j >= numberOfStops-1; j--){
//     tripStops = tripStops + entryLine[j] + ", ";
//   }
// }
// console.log(tripStops);
// }
// // travelStart (entryLine, entryStop, exitLine, exitStop)
// travelStart(l, "8th", n, "Times Square");
//
// //work out "numberOfStopsAfterExchange"
// if (entryLine !== exitLine){
//   // # of stops
//
//   numberOfStopsAfterExchange = ( (exitLine.indexOf(exitStop) ) - (exitLine.indexOf("Union Square") ) );
//   // incase going backwards
//   if (numberOfStopsAfterExchange < 0) {numberOfStops = (numberOfStops * -1)};
//
// }}
//
// //console.log(numberOfStopsAfterExchange);
//
// //Second half
// //function definition
// let travelFinish = function (entryLine, entryStop, exitLine, exitStop){
//
// //entryStop = "Union Square";
//
//  //console.log(exitStopStorage);
//  console.log(exitStop);
//
// if ( exitLine.indexOf("Union Square") > exitLine.indexOf(exitStopStorage) ) {
//   //console.log(numberOfStopsAfterExchange-1);
//   for (let i = 0; i <= numberOfStopsAfterExchange-1; i++){
//     tripStopsAfterExchange = tripStopsAfterExchange + exitLine[i] + ", ";
//     //console.log("test");
//   }
// }
//
// else if ( exitLine.indexOf("Union Square") < exitLine.indexOf(exitStopStorage) ){
//   for (let i = numberOfStopsAfterExchange; i > 0; i--){
//     tripStopsAfterExchange = tripStopsAfterExchange + exitLine[i-1] + ", ";
//   //  console.log("test2");
//   }
// }
// console.log(tripStopsAfterExchange)
//
// }
// // if lines don't match run this + second half travel function call
// travelFinish();
//
//
//
//
//
//
//
// planTrip(l, "8th", n, "Times Square");
//
//
//
//
//
//
//
//
//
// //attempt 1
// //
// // let n =["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// // let l = ["1st", "3rd", "Union Square", "6th", "8th"]
// // let six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
// //
// // const lines = {
// //   nNorth : ["Union Square", "23rd", "28th", "34th", "Times Square"],
// //   nSouth: ["Union Square", "8th"],
// //   lNorth: ["Union Square", "3rd", "1st"],
// //   lSouth: ["Union Square", "6th", "8th"],
// //   sixNorth: ["Union Square", "23rd", "28th", "33rd", "Grand Central"],
// //   sixSouth: ["Union Square", "Astor Place"],
// //   };
// //
// //
// //
// //
// // let planTrip = function(entryLine, entryStop, exitLine, exitStop){
// //
// // //northSouthQuery
// // let northSouth = null
// // if (entryLine.indexOf(entryStop) > entryLine.indexOf("Union Square") ) {
// //   northSouth = "South"}
// //   else {northSouth = "North"};
// //
// //
// //
// // }
// //
// //
// //
// // planTrip(l, "1st", l, "8th");
// */
