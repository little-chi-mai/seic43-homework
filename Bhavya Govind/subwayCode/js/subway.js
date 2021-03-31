// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
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
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
const train = {
  "lineN": [`Times Square`, `34th`, `28th`, `23rd`, `Union Square`,`8th`],
  "lineL": [`8th`, `6th`, `Union Square`, `3rd`,`1st`],
  "line6": [`Grand Central`, `33rd`, `28th`, `23rd`, `Union Square`, `Astor Place`],
  getPathWay:function(line,start,destination){
     let startIndex = train[line].indexOf(start);
     let destinationIndex = train[line].indexOf(destination);

     if(startIndex > destinationIndex){
       let path = train[line].slice(destinationIndex,startIndex);
         this.pathway = path.reverse()
     }else{

       this.pathway = train[line].slice(startIndex + 1,destinationIndex + 1);
     }

  },
  planTrip:function(line1,start,line2,destination){
    if (line1 === line2){
      this.getPathWay(line1,start,destination);
      console.log(`You must travel through the following stops on the ${line1} line: ${this.pathway.join(`, `)}.`);
      console.log(this.pathway.length + ` stops in total.`);
    }else{
      let junction = 'Union Square'
      let numberOfStops;
      if(start === junction){
        console.log( "Change at Union Square.");
        this.getPathWay(line2,junction,destination);
        numberOfStops =  this.pathway.length;
        console.log(`Your journey continues through the following stops: ${this.pathway.join(`, `)} .`);
        console.log(`${numberOfStops} stops in total.`);
      }else if(destination === junction){

        this.getPathWay(line1,start,junction);
        console.log(`You must travel through the following stops on the ${line1} line : ${this.pathway.join(`,`)} .`);
        console.log( "Change at Union Square.");
        numberOfStops = this.pathway.length;
        console.log(`${numberOfStops} stops in total.`);
      }else{
        this.getPathWay(line1,start,junction);
        console.log(`You must travel through the following stops on the ${line1} line: ${this.pathway.join(`,`)} .`);
        console.log( "Change at Union Square.");
        numberOfStops = this.pathway.length;
        this.getPathWay(line2,junction,destination);
        numberOfStops = numberOfStops + this.pathway.length;
        console.log(`Your journey continues through the following stops: ${this.pathway.join(`, `)} .`);
        console.log(`${numberOfStops - 1} stops in total.`);
      }


    }
  },
  pathway:[]
};
console.log(`trip--`);
train.planTrip(`lineN`,`34th`,`lineN`,`8th`);

console.log(`trip ++`);
train.planTrip(`lineN`,`34th`,`line6`,`Astor Place`);

console.log(`trip 1`);
train.planTrip("lineL", "3rd", "lineL", "6th");

console.log(`trip 2`);
train.planTrip("line6", "Astor Place", "line6", "Grand Central");

console.log(`trip 3`);
train.planTrip("line6", "Astor Place", "lineN", "Times Square");

console.log(`trip 4`);
train.planTrip("line6", "Union Square", "lineN", "Times Square");

console.log(`trip 5`);
train.planTrip("lineL", "1st", "line6", "Union Square");
