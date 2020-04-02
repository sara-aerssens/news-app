import React, { Component } from 'react';
import Board from './Board';
import moment from 'moment';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const date = moment().format("dddd MMMM D, YYYY");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null
    }

    this.loadCategories = this.loadCategories.bind(this);
  }

  loadCategories() {
    return categories.map((cat, i) => <button type="button" className="category-btn" key={i}>{cat}</button>);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Daily News</h1>
          {/* <Filter /> */}
          <div className="categories">{this.loadCategories()}</div>
          <div className="date">{date}</div>
          <hr className="app-line"/>
        </header>
        <Board category={this.state.category} />
      </div>
    );
  }
}

export default App;
