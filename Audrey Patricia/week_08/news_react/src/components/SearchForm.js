import React, { Component } from 'react';

class SearchForm extends Component {
  constructor () {
    super();
    this.state = {
      query: '',
      value: ''
    }
    // this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // _handleInput(event){
  //   this.setState({query: event.target.value});
  // }

  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange(e){
     this.setState({value: e.target.value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>

          <select value={this.state.value} onChange={this.handleChange} >
            <option value="">--Please choose an option--</option>
            <option value="arts">arts</option>
            <option value="automobiles">automobiles</option>
            <option value="books">books</option>
            <option value="business">business</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="books">Books</option>
            <option value="health">health</option>
            <option value="home">home</option>
            <option value="insider">insider</option>
            <option value="magazine">magazine</option>
            <option value="movies">movies</option>
            <option value="opinion">opinion</option>
            <option value="politics">politics</option>
            <option value="realestate">realestate</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
            <option value="theater">theater</option>
            <option value="travel">travel</option>
            <option value="us">us</option>
            <option value="world">world</option>
          </select>
          <input type="submit" value="Get Top Stories" />
        </form>

      </div>
    );
  }
}

export default SearchForm;

// <input type="search" onInput={this._handleInput} required placeholder="technology" />
