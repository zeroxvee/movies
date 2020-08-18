import dotenv from 'dotenv';
import http from 'http';
import querystring from 'querystring';

import got from 'got';

dotenv.config();

const server = http.createServer(async (req, res) => {
  const queryParams = querystring.parse(req.url.slice(req.url.indexOf('?') + 1));

  // The api already sends back JSON - DO NOT STRINGIFY!
  const { body } = await got(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${queryParams.query}&page=1&include_adult=false`,
  );
  res.setHeader('Content-Type', 'text/json');
  res.setHeader('Access-Control-Allow-Origin', 'localhost');
  res.end(body);
});

server.listen(5000);







// import http from 'http';
// import { promises as fs } from 'fs';
// import got from 'got';

// async function serveFile(url) {
//   const file = await fs.readFile(`.${url}`, 'utf8');
//   return file;
// }

// async function serveJSON(url) {
//   const { body } = await got('https:/jsonplaceholder.typicode.com/todos');
//   return body;
// }

// const server = http.createServer(async ({ url }, response) => {
//   // 'statusCode' and 'setHeader' are not compulsory for 'basic' implementation
//   response.statusCode = 200;
//   response.setHeader('content-type', 'text/html');

//   if (url.endsWith('json')) {
//     response.end(await serveJSON(url));
//   }
//   if (url.endsWith('html')) {
//     response.end(await serveFile(url));
//   }
// });

// server.listen(5000, () => {
//   console.log('server is running');
// });

`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`)
