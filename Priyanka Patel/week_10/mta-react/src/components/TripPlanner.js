import React, {useState, Component} from 'react';
import SearchForm from './SearchForm';

import _ from 'underscore';

class TripPlanner extends Component {

  constructor() {
    super();
    this.state = {
      firstLine: '',
      firstLineStops: [],
      secondLine: '',
      secondLineStops: [],
      junction: '',
      totalStops: 0,
    };
    this.tripInfo = this.tripInfo.bind(this);
  };

  tripInfo(line1, firstStop, line2, lastStop) {
    console.log(line1);
    console.log(firstStop);
    let line1Stops = [];
    let line2Stops  = [];
    let junction = "Union Square";
    let totalStationOnFirstLine = [];
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

  for(let i =0; i < subwayLines.length; i++) {

    if(line1 === subwayLines[i].id) {

      line1Stops = subwayLines[i].stops;
      junction = 'Union Square'
    };

    if(line2 === subwayLines[i].id) {

      line2Stops = subwayLines[i].stops;
      junction = 'Union Square'
    };
  }
  console.log(line1Stops.indexOf(firstStop));
  if (line1Stops.indexOf(firstStop ) <= line1Stops.indexOf('Union Square')) {

    for (let a = line1Stops.indexOf(firstStop) + 1; a <=line1Stops.indexOf('Union Square'); a++) {
       totalStationOnFirstLine.push(line1Stops[a]);
       // console.log(totalStationOnFirstLine);
    }
  }
  else if (line1Stops.indexOf(firstStop) >= line1Stops.indexOf('Union Square')) {
    for (let b = line1Stops.indexOf(firstStop) - 1; b >=line1Stops.indexOf('Union Square'); b --) {
       totalStationOnFirstLine.push(line1Stops[b]);
        // console.log(totalStationOnFirstLine);
    }
  };

  if (line2Stops.indexOf(lastStop ) <= line2Stops.indexOf('Union Square')) {
    for (let a = line2Stops.indexOf('Union Square') - 1; a >=line2Stops.indexOf(lastStop); a-- ) {
       totalStationOnSecondLine.push(line2Stops[a]);
       // console.log(totalStationOnSecondLine);
    }
  }
  else if (line2Stops.indexOf(lastStop) >= line2Stops.indexOf('Union Square')) {
    for (let b = line2Stops.indexOf('Union Square') + 1  ; b <=line2Stops.indexOf(lastStop) ; b++ ) {
       totalStationOnSecondLine.push(line2Stops[b]);
       // console.log(totalStationOnSecondLine);
    }
  };

  totalStops = totalStationOnFirstLine.length +  totalStationOnSecondLine.length;
  line1 = `Your Journey started from ${line1} line.`
  totalStationOnFirstLine = `Total number of stops on ${line1} are: ${totalStationOnFirstLine}.`
  junction = `You changed at ${junction}.`
  line2 = `Your journey continue through line ${line2}`
  totalStationOnSecondLine = `Stops on line ${line2} are: ${totalStationOnSecondLine}`
  totalStops = `Total number of stops are ${totalStops}`

  this.setState({ firstLine: line1 });
  this.setState({ firstLineStops: totalStationOnFirstLine});
  this.setState({ secondLine: line2 });
  this.setState({ junction: junction });
  this.setState({ secondLineStops: totalStationOnSecondLine });
  this.setState({ totalStops: totalStops });
  };

  cancelCourse = () => {
    document.getElementById("reset").reset();
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.tripInfo}/>
        <h2> { this.state.firstLine}</h2>
        <h2> { this.state. firstLineStops}</h2>
        <h2> { this.state.secondLine}</h2>
        <h2> { this.state.secondLineStops}</h2>
        <h2> { this.state.totalStops != 0 ? this.state.totalStops : ""}</h2>
      </div>
    );
  }
}

export default TripPlanner;
