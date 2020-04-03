import React, { Component } from 'react';
import Article from './Article';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      spinner: <div className="spinner">Loading...</div>,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props;
    if (prevProps !== this.props && category) {
      this.fetchData(category);
    }
  }

  getArticles() {
    const { data } = this.state;
    return <div className="board">{data.map((article) => <Article article={article} key={article.url} />)}</div>
  }

  handleServerError() {
    this.setState({ spinner: <div className="error">No articles could be loaded at this moment. Please try again later.</div>})
  }

  fetchData(category) {
    let url = '/api/news';
    if (category) url += `/${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch(() => this.handleServerError());
  }

  render() {
    const { data, spinner } = this.state;
    return data ? this.getArticles() : spinner;
  }
}

export default Board;
