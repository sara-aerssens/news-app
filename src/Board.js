import React, { Component } from 'react';
import Article from './Article';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category,
      data: props.data,
      spinner: <div className="spinner">Loading...</div>
    }
    // this.fetchData = this.fetchData.bind(this);
  }

  fetchData(category) {
    let url = '/api/news';
    if (category) {
      url += `/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ 
        data,
        category: this.props.category }));
  }

  componentDidMount() {
    this.fetchData(this.state.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.category) {
      this.fetchData(this.props.category);
    }
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
