console.log("hello world");

/* Activity
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
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated) */

const N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const L = ["8th", "6th", "Union Square", "3rd", "1st"];
const '6' = [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor Place",
];

// const indexUS = {
//   LN: lineN.indexOf("Union Square"),
//   LL: lineL.indexOf("Union Square"),
//   L6: line6.indexOf("Union Square"),
// };

const originLine = function (l, s) {
  if (l.indexOf(s) < l.indexOf("Union Square")) {
    arrOrigion = l.slice(l.indexOf(s) + 1, l.indexOf("Union Square") + 1);
  } else if (l.indexOf(s) > l.indexOf("Union Square")) {
    arrOrigion = l.slice(l.indexOf("Union Square"), l.indexOf(s)).reverse();
  }
  return arrOrigion;
};
// console.log(originLine(lineN, "34th"));
// console.log(originLine(lineN, "8th"));
// console.log(originLine(lineL, "6th"));
// console.log(originLine(lineL, "1st"));
// console.log(originLine(line6, "33rd"));
// console.log(originLine(line6, "Astor Place"));

const transLine = function (L, S) {
  if (L.indexOf(S) < L.indexOf("Union Square")) {
    arrTrans = L.slice(L.indexOf(S), L.indexOf("Union Square")).reverse();
  } else if (L.indexOf(S) > L.indexOf("Union Square")) {
    arrTrans = L.slice(L.indexOf("Union Square") + 1, L.indexOf(S) + 1);
  }
  return arrTrans;
};

// console.log(transLine(lineN, "34th"));
// console.log(transLine(lineN, "8th"));
// console.log(transLine(lineL, "6th"));
// console.log(transLine(lineL, "1st"));
// console.log(transLine(line6, "33rd"));
// console.log(transLine(line6, "Astor Place"));

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

const planTrip = function (l, s, L, S) {
  if (s === "Union Square") {
    return transLine(L, S);
  } else {
    return originLine(l, s).concat(transLine(L, S));
  }
};

console.log(planTrip(lineN, "Times Square", line6, "33rd"));

("You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.");
("Change at Union Square.");
("Your journey continues through the following stops: 23rd, 28th, 33rd.");
("7 stops in total.");
