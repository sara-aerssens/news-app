import React, { Component } from 'react';
import Article from './Article';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ['bitch']
    }
  }

  componentDidMount() {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="board">
        {/* // add articles to board here */}
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}

export default Board;
