const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

const baseURL = 'https://newsapi.org/v2/';
const headlinesURL = 'top-headlines?';
// const everythingURL = 'everything?';
const apiKey = '&apiKey=92186ed1da2d49c480446c8d27d3248b';

const testData = {
  status: 'ok',
  totalResults: 1,
  articles: [
    {
      source: { id: null, name: 'Dpgmedia.net' },
      author: null,
      title: 'LIVE | Nederlanders cruiseschip Zaandam zo snel mogelijk naar huis - AD.nl',
      description: null,
      url: 'https://myprivacy.dpgmedia.net/?siteKey=V9f6VUvlHxq9wKIN&callbackUrl=https:%2f%2fwww.ad.nl%2fprivacy-gate%2faccept%3fredirectUri%3d%252fbinnenland%252flive-nederlanders-cruiseschip-zaandam-zo-snel-mogelijk-naar-huis%257ea258e829%252f',
      urlToImage: null,
      publishedAt: '2020-04-02T08:14:24Z',
      content: "AD en Krant.nl maken onderdeel uit van DPG Media. Onze sites gebruiken cookies en vergelijkbare technologieën ('cookies') onder andere om je een optimale gebruikerservaring te bieden. Ook kunnen we hierdoor het gedrag van bezoekers vastleggen en analyseren en… [+1334 chars]"
    }    
  ]
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/news', function (req, res) {
  // fetch data from API here
  // const url = `${baseURL}${headlinesURL}country=nl${apiKey}`;
  const url = 'https://newsapi.org/v2/top-headlines?apiKey=92186ed1da2d49c480446c8d27d3248b&q=corona&country=nl';
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.send(data.articles));
  // res.json(testData);
});

app.listen(8080, () => {
  console.log('Listening on port:', 8080);
});