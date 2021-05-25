import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';

class SpacePeople extends Component {
  constructor(){
    super();
    this.state = {
      names: [],
      craft: [],
    }

    this.fetchPeople = this.fetchPeople.bind(this);
    setTimeout(this.fetchPeople, 100);
  }

  fetchPeople() {
    axios.get("http://api.open-notify.org/astros.json").then((results) => {

      const people = results.data.people;

      const names = _.map(people, function(person){ return person.name } );
      const craft = _.map(people, function(person){ return person.craft} );

      this.setState({
        names: names,
        craft: craft
      })
    });
  }


  render() {

    return (
      <div>
      <h1>People currently in space: </h1>
        { this.state.names.map( (name) => <li key={name}>{name}</li>)}
      </div>
    );
  }
}


export default SpacePeople;
