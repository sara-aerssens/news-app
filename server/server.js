const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const app = express();

const baseURL = 'https://newsapi.org/v2/';
const headlinesURL = 'top-headlines?';
const apiKey = '&apiKey=92186ed1da2d49c480446c8d27d3248b';

app.use(express.static(path.join(__dirname, 'build')));

// US headlines
// app.get('/api/news', (req, res) => {
//   const url = `${baseURL}${headlinesURL}country=us${apiKey}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => res.json(data.articles));
// });

const testFile = 'server/test/data-US.json';
app.get('/api/news', (req, res) => {
  fs.readFile(testFile, 'utf-8', (err, data) => {
    if (err) console.error(err);
    res.json(JSON.parse(data).articles);
  });
})

const testCatFile = 'server/test/data-health.json';
app.get('/api/news/:cat', (req, res) => {
  const category = req.params.cat;
  console.log(category);
  fs.readFile(testCatFile, 'utf-8', (err, data) => {
    if (err) console.error(err);
    res.json(JSON.parse(data).articles);
  });
});

app.listen(8080, () => {
  console.log('Listening on port:', 8080);
});