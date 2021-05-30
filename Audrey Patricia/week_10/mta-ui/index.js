const express = require('express');
const ejs = require('ejs');

const trains = {
  N: ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: [ '8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central',  '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

const server = express();
const PORT = 1337;

server.get('/', (req, res) => {
  res.render('plan.ejs', { trains: trains });
});

server.get('/show', (req, res) => {
  let startLine = req.query.startLine;
  let startStop = req.query.startStop;
  let endLine = req.query.endLine;
  let endStop = req.query.endStop;

  let trip = planTrip(startLine, startStop, endLine, endStop);

  res.render('show.ejs', { trip: trip, startLine: startLine, startStop: startStop, endLine: endLine, endStop: endStop });

});


server.listen(PORT, () => console.log(`Listening on http://localhost/${PORT}/`));

  const planTrip = function(startLine, startStop, endLine, endStop){

    let indexStart;
    let indexEnd;
    let indexChange1;
    let indexChange2;
    let totalStops;
    let stopsNames = [];

    const trip = {
      stopsNames1: [],
      stopsNames2: [],
      totalStops: 0,
    }

    if(startLine === endLine){
      indexStart = trains[startLine].indexOf(startStop);
      indexEnd = trains[startLine].indexOf(endStop);

      totalStops = Math.abs(indexEnd - indexStart);

      if(indexStart < indexEnd){

        for(let i = indexStart + 1; i <= indexEnd; i++){
          stopsNames.push(trains[startLine][i]);
        }

      } else {

        for(let i =indexStart - 1; i >= indexEnd; i--){
          stopsNames.push(trains[startLine][i]);
        }
      }


      console.log(`Here are the stops you need to pass through: ${stopsNames.join(', ')} `);
      console.log("stops in total: " + totalStops);

      trip.stopsNames1 = stopsNames;
      trip.totalStops = totalStops;
      return trip;

    } else {

      indexStart = trains[startLine].indexOf(startStop);
      indexChange1 = trains[startLine].indexOf('Union Square');
      totalStops = Math.abs(indexChange1 - indexStart);

      if(indexStart < indexChange1){

        for(let i = indexStart + 1; i <= indexChange1; i++){
          stopsNames.push(trains[startLine][i]);
        }
      } else {

        for(let i = indexStart - 1; i >= indexChange1; i--){
          stopsNames.push(trains[startLine][i]);

        }
      }

      console.log(`You must travel through the following stops on the ${startLine} line: ${stopsNames.join(', ')} ` );
      trip.stopsNames1 = stopsNames;

      stopsNames = [];

      console.log("Change at Union Square.")


      indexChange2 = trains[endLine].indexOf('Union Square');
      indexEnd = trains[endLine].indexOf(endStop);
      totalStops += Math.abs(indexEnd - indexChange2);

      if(indexEnd < indexChange2){

        for(let i = indexChange2 - 1; i >= indexEnd; i--){
          stopsNames.push(trains[endLine][i]);
        }

      } else {

        for(let i = indexChange2 + 1; i <= indexEnd; i++){
          stopsNames.push(trains[endLine][i]);
        }
      }

        console.log(`Your journey continues on the ${endLine} line through the following stops: ${stopsNames.join(', ')}  `);
        trip.stopsNames2 = stopsNames;

      console.log(`${totalStops} stops in total.`);
      trip.totalStops = totalStops;

      return trip;
    }

  }
