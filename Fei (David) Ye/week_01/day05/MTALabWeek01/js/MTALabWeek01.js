// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
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

const planTrip = (getOnLine, getOnStop, getOffLine, getOffStop) => {
  // Lines and stops info

  const lines = {
    N: {
      stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    },
    L: { stops: ["8th", "6th", "Union Square", "3rd", "1st"] },
    6: {
      stops: [
        "Grand Central",
        "33rd",
        "28th",
        "23rd",
        "Union Square",
        "Astor Place",
      ],
    },
  };

  // logic

  const showStopNumberToGoThroughOnOneLine = (
    LineName,
    getOnStopName,
    getOffStopName
  ) => {
    const stopsOfTheLine = lines[LineName]["stops"];
    const getOnIndex = stopsOfTheLine.indexOf(getOnStopName);
    const getOffIndex = stopsOfTheLine.indexOf(getOffStopName);
    const indexDifference = getOffIndex - getOnIndex;

    const stopNumberToGoThroughOnOneLine = Math.abs(indexDifference);
    return stopNumberToGoThroughOnOneLine;
  };

  const showStopsToGoThroughOnOneLine = (
    LineName,
    getOnStopName,
    getOffStopName
  ) => {
    const stopsOfTheLine = lines[LineName]["stops"];
    const getOnIndex = stopsOfTheLine.indexOf(getOnStopName);
    const getOffIndex = stopsOfTheLine.indexOf(getOffStopName);
    const indexDifference = getOffIndex - getOnIndex;

    // Is it better to DRY or Low-coupling when they conflict with each other?

    let stopsToGoThroughOnOneLine = "";

    if (indexDifference > 0) {
      for (let i = 0; i < indexDifference; i++) {
        stopsToGoThroughOnOneLine += stopsOfTheLine[getOnIndex + i + 1] + ", ";
      }
    } else {
      for (let i = 0; i < indexDifference * -1; i++) {
        stopsToGoThroughOnOneLine += stopsOfTheLine[getOnIndex - i - 1] + ", ";
      }
    }
    stopsToGoThroughOnOneLine =
      stopsToGoThroughOnOneLine.substr(
        0,
        stopsToGoThroughOnOneLine.length - 2
      ) + ".";
    return stopsToGoThroughOnOneLine;
  };

  //output

  if (getOnLine === getOffLine || getOffStop === "Union Square") {
    console.log(
      `You must travel through the following stops on the ${getOnLine} line: ${showStopsToGoThroughOnOneLine(
        getOnLine,
        getOnStop,
        getOffStop
      )}`
    );

    console.log(
      `${showStopNumberToGoThroughOnOneLine(
        getOnLine,
        getOnStop,
        getOffStop
      )} stops in total.`
    );
  } else {
    if (getOnStop === "Union Square") {
      console.log(
        `You must travel through the following stops on the ${getOffLine} line: ${showStopsToGoThroughOnOneLine(
          getOffLine,
          "Union Square",
          getOffStop
        )}`
      );

      console.log(
        `${showStopNumberToGoThroughOnOneLine(
          getOffLine,
          "Union Square",
          getOffStop
        )} stops in total.`
      );
    } else {
      console.log(
        `You must travel through the following stops on the ${getOnLine} line: ${showStopsToGoThroughOnOneLine(
          getOnLine,
          getOnStop,
          "Union Square"
        )}`
      );

      console.log(`Change to ${getOffLine} Line at Union Square`);

      console.log(
        `Your journey continues through the following stops: ${showStopsToGoThroughOnOneLine(
          getOffLine,
          "Union Square",
          getOffStop
        )}`
      );

      console.log(
        `${
          showStopNumberToGoThroughOnOneLine(
            getOnLine,
            getOnStop,
            "Union Square"
          ) +
          showStopNumberToGoThroughOnOneLine(
            getOffLine,
            "Union Square",
            getOffStop
          )
        } stops in total.`
      );
    }
  }
};


// test

planTrip("N", "Times Square", "N", "8th");
planTrip("L", "6th", "L", "3rd");
planTrip("L", "3rd", "L", "6th");
planTrip("6", "Astor Place", "6", "Grand Central");

planTrip("6", "Astor Place", "N", "Times Square");
// should return: overall stops 5, "Union Square", "change to N Line, "23rd", "28th", "34th", "Times Square"


planTrip("6", "Union Square", "N", "Times Square");

planTrip("L", "1st", "6", "Union Square");

