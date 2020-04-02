import React, { Component } from 'react';
import Article from './Article';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      spinner: 'Loading...' // make animation
    }
  }

  componentDidMount() {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  getArticles() {
    return this.state.data.map((article, index) => <Article article={article} key={index} />);
  }

  render() {
    const articles = this.state.data ? this.getArticles() : this.state.spinner;
    return (
      <div className="board">
        {articles}
      </div>
    );
  }
}

export default Board;
