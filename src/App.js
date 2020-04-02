import React, { Component } from 'react';
import Board from './Board';
import moment from 'moment';

const date = moment().format("dddd MMMM D, YYYY");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null
    }

    this.loadCategories = this.loadCategories.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  updateCategory(category) {
    this.setState({ category });
    const el = document.querySelector(`.active`);
    if (el) {
      el.classList.remove('active');
    }
    document.querySelector(`.${category}`).classList.add('active');
  }

  loadCategories() {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    return categories.map((cat, i) => {
      return (
        <button type="button" className={'category-btn ' + cat} onClick={() => this.updateCategory(cat)} key={i}>
          {cat}
        </button>
        );
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title"><a href="/">Daily News</a></h1>
          <div className="categories">{this.loadCategories()}</div>
          <div className="date">{date}</div>
          <hr className="app-line"/>
        </header>
        <Board data={null} category={this.state.category} />
      </div>
    );
  }
}

export default App;
