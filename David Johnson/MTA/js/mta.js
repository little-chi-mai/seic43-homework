const n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
const l = ["8th", "6th", "Union Square", "3rd", "1st"];


const tripPlanner = function (originStop, originLine, destinationStop, destinationLine) {

  const outputData = {
    numberOfStops: 0,
    singleLineLog: "",
    originToUnionLog: "",
    unionToDestLog: ""
  }
  let originLineAbbreviation = "";
  let desinationLineAbbreviation = "";

  //function to map input to line arrays:
  const originLineAssigner = function (originLine) {
    originLine = originLine.toUpperCase();

    if (originLine === "N") {
      originLine = n;
      originLineAbbreviation = "N";
    }
    if (originLine === "6") {
      originLine = six;
      originLineAbbreviation = "6";
    }
    if (originLine === "L") {
      originLine = l;
      originLineAbbreviation = "L";
    }
    return originLine;
  }
  originLine = originLineAssigner(originLine);

  const destLineAssigner = function (destinationLine) {
    destinationLine = destinationLine.toUpperCase();

    if (destinationLine === "N") {
      destinationLine = n;
      destinationLineAbbreviation = "N";
    }
    if (destinationLine === "6") {
      destinationLine = six;
      destinationLineAbbreviation = "6";
    }
    if (destinationLine === "L") {
      destinationLine = l;
      destinationLineAbbreviation = "L";
    }
    return destinationLine;
  }
  destinationLine = destLineAssigner(destinationLine);

  //outputData.numberOfTrips = 1;

  const tripLogger = function () {
    //logs a single line trip
    if (originLine === destinationLine) {
      for (let i = originLine.indexOf(originStop); i < originLine.indexOf(destinationStop); i++) {
        numberOfStops = numberOfStops + 1;
        outputData.numberOfStops = numberOfStops;
        tripLog = tripLog + originLine[i] + ", ";
        outputData.singleLineLog = tripLog;
      }
    }
    //logs the origin station to union leg of a multi line trip
    if (originLine !== destinationLine) {
      if (originLine.indexOf(originStop) < originLine.indexOf("Union Square")) {
        for (let i = originLine.indexOf(originStop); i < originLine.indexOf("Union Square"); i++) {
          outputData.numberOfStops = outputData.numberOfStops + 1;
          outputData.originToUnionLog = outputData.originToUnionLog + originLine[i] + ", ";
        }
      } else {
        for (let i = originLine.indexOf(originStop); i > originLine.indexOf("Union Square"); i--) {
          outputData.numberOfStops = outputData.numberOfStops + 1;
          outputData.originToUnionLog = outputData.originToUnionLog + originLine[i] + ", ";
        }
      }
    }
    //logs the union square to destination leg of a multi line trip
    if (destinationLine.indexOf("Union Square") < destinationLine.indexOf(destinationStop)) {
      for (let j = destinationLine.indexOf("Union Square"); j < destinationLine.indexOf(destinationStop); j++) {
        outputData.numberOfStops = outputData.numberOfStops + 1;
        outputData.unionToDestLog = outputData.unionToDestLog + destinationLine[j] + ", ";
      }
    } else {
      for (let j = destinationLine.indexOf("Union Square"); j > destinationLine.indexOf(destinationStop); j--) {
        outputData.numberOfStops = outputData.numberOfStops + 1;
        outputData.unionToDestLog = outputData.unionToDestLog + destinationLine[j] + ", ";
      }
    }
  }
  tripLogger();

  let readOut = "";

  const readOutMaker = function () {
    if (originLine === destinationLine) {
      readOut = `To get from ${originStop} on the ${originLineAbbreviation} to ${destinationStop} on the ${destinationLineAbbreviation}, you have to travel through ${outputData.singleLineLog}${destinationStop}. ${outputData.numberOfStops} stops total.`
    } else {
      readOut = `To get from ${originStop} on the ${originLineAbbreviation} to ${destinationStop} on the ${destinationLineAbbreviation}, you have to travel through ${outputData.originToUnionLog}Union Square. Change at Union Square to the ${destinationLineAbbreviation} and travel through ${outputData.unionToDestLog}${destinationStop}. ${outputData.numberOfStops} stops total.`
    }
    return readOut;
  }
  readOut = readOutMaker();
  console.log(readOut);
}

tripPlanner("Times Square", "n", "Astor Place", "6");
