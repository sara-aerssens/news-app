const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

console.log(path.join(__dirname))
app.use(express.static(path.join(__dirname, 'build')));

function removeDuplicates(data) {
  return data.articles.filter((v, i, a) => !a.slice(i + 1).find((obj) => obj.url === v.url));
}

const testFile = 'test/data-EN.json';
app.get('/api/news', (req, res) => {
  fs.readFile(testFile, 'utf-8', (err, data) => {
    if (err) console.error(err);
    res.json(removeDuplicates(JSON.parse(data)));
  });
});

const testCatFile = 'test/data-health.json';
app.get('/api/news/:cat', (req, res) => {
  fs.readFile(testCatFile, 'utf-8', (err, data) => {
    if (err) console.error(err);
    const articles = removeDuplicates(JSON.parse(data));
    res.json(articles);
  });
});

app.listen(8080, () => {
  console.log('Listening on port:', 8080);
});