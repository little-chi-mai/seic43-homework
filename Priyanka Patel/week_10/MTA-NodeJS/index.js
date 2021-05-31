const express = require('express');
const ejs =require('ejs');
const server = express();
const $ = require('jquery')
server.use(express.static('public'))
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  res.render('form.ejs')
});

server.get('/search', (req, res) => {
  let junction = 'Union Square';
  let line1 = '';
  let line2 = '';
  let firstLine = req.query.line1.toLowerCase();
  let firstStop = req.query.station1;
  let line1Stops =[];
  let totalStationOnFirstLine = [];
  let secondLine = req.query.line2.toLowerCase();
  let lastStop = req.query.station2
  let line2Stops =[];
  let totalStationOnSecondLine = [];
  let totalStops = 0;

  const subwayLines =[
    {
      id: 'N',
      stops: ['Times Square', '34th', 'n28th', 'n23rd', 'Union Square', 'n8th'],
    },
    {
      id: 'L',
      stops: ['l8th', '6th', 'Union Square', '3rd', '1st'],
    },
    {
      id:'six',
      stops: ['Grand Central', '33rd', 'six28th', 'six23rd', 'Union Square', 'Astor Place'],
    }
  ];

  for( i =0; i < subwayLines.length; i++) {
    subwayLines[i].id = subwayLines[i].id.toLowerCase();

    if(firstLine === subwayLines[i].id) {
      line1 =  subwayLines[i].id;
      line1Stops = subwayLines[i].stops;
      console.log("line1Stops:"+line1Stops)
      junction = 'Union Square'
    };

    if(secondLine === subwayLines[i].id) {
      line2 =  subwayLines[i].id;
      line2Stops = subwayLines[i].stops;
      junction = 'Union Square'
    };
  }

  if (line1Stops.indexOf(firstStop ) <= line1Stops.indexOf('Union Square')) {
    console.log(firstStop);
    console.log(line1Stops.indexOf(firstStop))
    console.log(line1Stops.indexOf('Union Square'))
    for (let a = line1Stops.indexOf(firstStop) + 1; a <=line1Stops.indexOf('Union Square'); a++) {
       totalStationOnFirstLine.push(line1Stops[a]);
       //console.log(totalStationOnFirstLine);
    }
  }
  else if (line1Stops.indexOf(firstStop) >= line1Stops.indexOf('Union Square')) {
    for (let b = line1Stops.indexOf(firstStop) - 1; b >=line1Stops.indexOf('Union Square'); b --) {
       totalStationOnFirstLine.push(line1Stops[b]);
       console.log(totalStationOnFirstLine);
    }
  };

  if (line2Stops.indexOf(lastStop ) <= line2Stops.indexOf('Union Square')) {
    for (let a = line2Stops.indexOf('Union Square') - 1; a >=line2Stops.indexOf(lastStop); a-- ) {
       totalStationOnSecondLine.push(line2Stops[a]);
       //console.log(totalStationOnSecondLine);
    }
  }
  else if (line2Stops.indexOf(lastStop) >= line2Stops.indexOf('Union Square')) {
    for (let b = line2Stops.indexOf('Union Square') + 1  ; b <=line2Stops.indexOf(lastStop) ; b++ ) {
       totalStationOnSecondLine.push(line2Stops[b]);
       //console.log(totalStationOnSecondLine);
    }
  };

  totalStops = totalStationOnFirstLine.length +  totalStationOnSecondLine.length
  console.log(totalStops);
  res.render('tripPlanner.ejs', {
    line1: firstLine.toUpperCase(),
    totalStationOnFirstLine: totalStationOnFirstLine,
    junction: junction,
    line2: secondLine.toUpperCase(),
    totalStationOnSecondLine: totalStationOnSecondLine,
    totalStops: totalStops
  })
});

function addLineNOption(){
    var line1Station = document.getElementById("N");
    var timeSqaure = document.createElement("option");
    timeSqaure.text = "Time Square";
    line1Station.add(timeSqaure);
}

server.listen(PORT, () => console.log(`Now serving on http://localhost: ${ PORT }/`))
