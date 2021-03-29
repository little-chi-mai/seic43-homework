
const metroPlanner = function (startLineName, startStation, endLineName, endStation){
  const startLineArray = linePicker(startLineName);
  const endLineArray = linePicker (endLineName);

  const listOfLineStops = nameLineStops(startLineArray, startStation, endStation);

  return `You must travel through the following stops on the ${startLineName} Line: ${listOfLineStops.join(', ')}. ${listOfLineStops.length} stops in total.`;
}

const nameLineStops = function(lineArray, startStation, endStation){
  const lineStops = [];
  let reachedMyStop = false;

  const stopsToName = [];

  if (lineArray.indexOf(startStation) < lineArray.indexOf(endStation)) {
    for (let i = lineArray.indexOf(startStation); i < lineArray.length && reachedMyStop === false; i++){ //name all in order until your stop.
      stopsToName.push(lineArray[i]);
      if (lineArray[i] === endStation){
        reachedMyStop = true;
      }
    }
  } else {
    for (let i = lineArray.indexOf(startStation); i > 0 && reachedMyStop === false; i--){  //do it again backwards
      stopsToName.push(lineArray[i]);
      if (lineArray[i] === endStation){
        reachedMyStop = true;
      }
    }
  }
  return stopsToName;
}

const linePicker = function (chosenLine){

    const allLines = {

        "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

        "L": ["8th", "6th", "Union Square", "3rd", "1st"],

        "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    };

    return allLines[chosenLine];

}


console.log(metroPlanner('N', '8th', 'N', '28th'));
