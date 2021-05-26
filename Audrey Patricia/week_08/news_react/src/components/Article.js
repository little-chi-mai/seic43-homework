import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import TopStories from './TopStories';

class Article extends Component {
  constructor () {
    super();
    this.state = {
      category: '',
      articles: []
    }
    this.fetchStories = this.fetchStories.bind(this);
  }

  fetchStories (q) {
    const URL = "https://api.nytimes.com/svc/topstories/v2/" + q + ".json?api-key=tnKdCvdxXs0gGwewNss4EAREZfFABWnm";
    axios.get(URL).then((result) => {
      const articles = result.data.results;
      this.setState({category: q, articles: articles});
    }, () => {
      this.setState({category: '', articles: null});
    });

  }

  render () {
    return (
      <div>
        <SearchForm onSubmit={this.fetchStories}/>
        <TopStories articles={this.state.articles} category={this.state.category}/>
      </div>
    );
  }
}

export default Article;
