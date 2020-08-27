const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

// SERVER
const home = fs.readFileSync(
  `${__dirname}/templates/home.html`,
  'utf-8'
);

const card = fs.readFileSync(
  `${__dirname}/templates/card.html`,
  'utf-8'
);

const movie = fs.readFileSync(
  `${__dirname}/templates/movie.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Home page
  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });

    const cardsHtml = dataObj.map(el => replaceTemplate(card, el)).join('');
    const output = home.replace('{%MOVIE_CARDS%}', cardsHtml);
    res.end(output);

    // Movie page
  } else if (pathname === '/movie') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    });
    const qId = dataObj[query.id];
    const output = replaceTemplate(movie, qId);
    res.end(output);

  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(1234, () => {
  console.log('Server start on port 1234');
});

