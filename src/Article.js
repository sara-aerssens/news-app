import React from 'react';

function cleanContent(content) {
  if (content) return content.replace(/(\[\+.+\])/, '');
}

function handleImgError(e) {
  e.target.style.display = "none";
}

function Article(props) {
  return (
    <div className="article-box">
      <h3 className="article-title">{props.article.title}</h3>
      {props.article.urlToImage &&
      <img className="article-img" src={props.article.urlToImage} onError={handleImgError} alt="article" />}
      <p className="article-desc">{props.article.description}</p>
      <p className="article-text">{cleanContent(props.article.content)}</p>
      <div className="article-footer">
        <p className="article-src">Source: <strong>{props.article.source.name}</strong></p>
        <a className="read-more" href={props.article.url} target="_blank" rel="noopener noreferrer">
          read full article
        </a>
      </div>
      <hr/>
    </div>
  );
}

export default Article;
