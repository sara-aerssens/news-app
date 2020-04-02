const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const app = express();

const baseURL = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=24';
const apiKey = '&apiKey=92186ed1da2d49c480446c8d27d3248b';

const testData = 
  [
    {
      source: { id: 'buzzfeed', name: 'Buzzfeed' },
      author: 'Emma McAnaw',
      title: "31 Essentials To Keep On Hand If You're Working Remotely",
      description: "Because we never thought we'd be working full-time from our childhood bedroom.",
      url: 'https://www.buzzfeed.com/emmamcanaw/essentials-on-hand-working-remotely',
      urlToImage: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-03/31/21/enhanced/7594a85e4dc2/original-398-1585691105-3.jpg?crop=1200:630;0,0',
      publishedAt: '2020-04-02T10:08:09.6625605Z',
      content: null
    }
  ];

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/api/news', (req, res) => {
//   const url = `${baseURL}${apiKey}`;
//   console.log('SERVER > URL:', url);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => res.json(data.articles));
//   // res.send(testData);
// });

const testFile = 'server/test/data-EN.json';
app.get('/api/news', (req, res) => {
  fs.readFile(testFile, 'utf-8', (err, data) => {
    if (err) console.error(err);
    res.json(JSON.parse(data).articles);
  });
})

// app.get('/api/news/:cat', (req, res) => {
//   const category = req.params.cat;
//   const url = `${baseURL}&category=${category}${apiKey}`;
//   console.log('SERVER > URL:', url);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => res.json(data.articles));
//   // res.send(testData);
// });

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