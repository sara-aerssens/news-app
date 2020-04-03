import React from 'react';

function cleanContent(content) {
  if (content) return content.replace(/(\[\+.+\])/, '');
  return content;
}

function handleImgError(e) {
  e.target.style.display = 'none';
}

function Article(props) {
  const { article } = props;
  return (
    <div className="article-box">
      <h3 className="article-title">{article.title}</h3>
      {article.urlToImage
      && <img className="article-img" src={article.urlToImage} onError={handleImgError} alt="article" />}
      <p className="article-desc">{article.description}</p>
      <p className="article-text">{cleanContent(article.content)}</p>
      <div className="article-footer">
        <p className="article-src">
          Source:
          <strong>{article.source.name}</strong>
        </p>
        <a className="read-more" href={article.url} target="_blank" rel="noopener noreferrer">read full article</a>
      </div>
      <hr />
    </div>
  );
}

export default Article;
