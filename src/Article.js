import React from 'react';

function Article(props) {
  return (
    <div className="article-box">
      <h3 className="article-title">{props.article.title}</h3>
      <hr/>
      {props.article.urlToImage &&
      <img className="article-img" src={props.article.urlToImage} alt="article" />}
      <p className="article-desc">{props.article.description}</p>
      <p className="article-text">{props.article.content}</p>
      <p>Read more on: <a href={props.article.url}>{props.article.source.name}</a></p>
    </div>
  );
}

export default Article;
