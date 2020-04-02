const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

const baseURL = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=24';
const apiKey = '&apiKey=92186ed1da2d49c480446c8d27d3248b';

app.use(express.static(path.join(__dirname, 'build')));

function removeDuplicates(data) {
  return data.articles.filter((v, i, a) => !a.slice(i + 1).find((obj) => obj.url === v.url));
}

app.get('/api/news', (req, res) => {
  const url = `${baseURL}${apiKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => removeDuplicates(data))
    .then((articles) => res.json(articles));
});

app.get('/api/news/:cat', (req, res) => {
  const category = req.params.cat;
  const url = `${baseURL}&category=${category}${apiKey}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => removeDuplicates(data))
    .then((articles) => res.json(articles));
});

app.listen(8080, () => {
  console.log('Listening on port:', 8080);
});