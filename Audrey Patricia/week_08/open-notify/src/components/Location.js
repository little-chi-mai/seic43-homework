import React, { Component } from 'react';
import axios from 'axios';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      longitude: 0,
      latitude: 0
    }
    this.fetchLocation = this.fetchLocation.bind(this);
    setInterval(this.fetchLocation, 3000);


  }


  fetchLocation() {
    axios.get("http://api.open-notify.org/iss-now.json").then((results) => {
      const location = results.data.iss_position;
      console.log(location);
      const longitude = location.longitude;
      const latitude = location.latitude;
      this.setState({
        latitude: latitude,
        longitude: longitude 
      });
    });
  };


  render () {
    return(
      <div>
        <h1>Where is the ISS currently located?</h1>
        <p>Longitude: {this.state.longitude}</p>
        <p>Latitude: {this.state.latitude}</p>
      </div>
    );
  }

}

export default Location;
