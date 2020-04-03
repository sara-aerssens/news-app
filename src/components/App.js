import React, { Component } from 'react';
import moment from 'moment';
import Board from './Board';

const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: null,
      date: moment().format('dddd MMMM D, YYYY'),
    };
  }

  updateCategory(category) {
    this.setState({ category });
    const el = document.querySelector('.active');
    if (el) el.classList.remove('active');
    document.querySelector(`.${category}`).classList.add('active');
  }

  loadCategories() {
    return categories.map((cat) => <button type="button" className={`category-btn ${cat}`} onClick={() => this.updateCategory(cat)} key={cat}>{cat}</button>);
  }

  render() {
    const { category, date } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title"><a href="/">Daily News</a></h1>
          <div className="categories">{this.loadCategories()}</div>
          <div className="date">{date}</div>
          <hr className="app-line" />
        </header>
        <Board category={category} />
      </div>
    );
  }
}

export default App;
