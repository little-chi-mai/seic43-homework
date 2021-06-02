import React, { Component } from 'react';

class SearchForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      line1: "",
      firstStop: "",
      line2: "",
      lastStop: "",
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleLine1 = this._handleLine1.bind(this);
    this._hanldeFirstStop = this._hanldeFirstStop.bind(this);
    this._handleLine2 = this._handleLine2.bind(this);
    this._handleLastStop = this._handleLastStop.bind(this);
  }

  _handleLine1(event) {
    this.setState({line1: event.target.value})
  };

  _hanldeFirstStop(event) {
    console.log("First Stop:"+event.target.value);
    this.setState({firstStop: event.target.value})
  };

  _handleLine2(event) {
    this.setState({line2: event.target.value})
  };

  _handleLastStop(event) {
    this.setState({lastStop: event.target.value})
  };

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.line1, this.state.firstStop, this.state.line2, this.state.lastStop)

    this.setState ({
      line1: "",
      firstStop: "",
      line2: "",
      lastStop: ""
    });
  };

    render() {

        const lLine = ['l8th', '6th', 'Union Square', '3rd', '1st']
        const nLine = ['Times Square', '34th', 'n28th', 'n23rd', 'Union Square', 'n8th']
        const sixLine = ['Grand Central', '33rd', 'six28th', 'six23rd', 'Union Square', 'Astor Place']

        /** Type variable to store different array for different dropdown */
        let typeLine1 = null;
        let typeLine2 = null;

        /** This will be used to create set of options that user will see */
        let optionsLine1= null;
        let optionsLine2= null;

        if (this.state.line1 === "L") {
        	typeLine1 = lLine;
        } else if (this.state.line1=== "N") {
        	typeLine1 = nLine;
        } else if (this.state.line1=== "six") {
        	typeLine1 = sixLine;
        }

        if (this.state.line2 === "L") {
        	typeLine2 = lLine;
        } else if (this.state.line2=== "N") {
         typeLine2 = nLine;
        } else if (this.state.line2=== "six") {
        	typeLine2 = sixLine;
        }

        if (typeLine1) {
        	optionsLine1 = typeLine1.map((el) => <option key={el}>{el}</option>);
        }

        if (typeLine2) {
        	optionsLine2 = typeLine2.map((el) => <option key={el}>{el}</option>);
        }

      return (
        <form onSubmit={ this._handleSubmit } >
          <label>Line From:</label>
          <select id="line" value={this.state.line1} onInput={this._handleLine1} placeholder="N"  required>
            <option value="" >Select Line</option>
            <option value="N">N Line</option>
            <option value="L">L Line</option>
            <option value="six">6 Line</option>
          </select>
          <label>Line1 Station:</label>
          <select id="station" value={ this.state.firstStop } onInput={this._hanldeFirstStop}  placeholder="n28th" required>
            <option value="" >Select Station</option>
            {
            /** This is where we have used our optionsLine1 variable */
            optionsLine1
            }
           </select>

          <label>Line To:</label>
          <select id="line" value={this.state.line2} onInput={this._handleLine2} placeholder="L"  required>
            <option value="" >Select Line</option>
            <option value="N">N Line</option>
            <option value="L">L Line</option>
            <option value="six">6 Line</option>
          </select>

          <label>Line2 Station</label>
          <select id="station" value={ this.state.lastStop } onInput={this._handleLastStop} placeholder="l8th" required >
            <option value="" >Select Station</option>
            {
            /** This is where we have used our optionsLine2 variable */
          	optionsLine2
            }
           </select>

          <input id="search" type="submit" value="Search" />
        </form>
      )
    }
}

export default SearchForm;
