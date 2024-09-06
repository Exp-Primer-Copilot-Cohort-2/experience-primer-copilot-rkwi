// Create web server
// Create a web server that listens on port 3000. When you visit the home page, it should return "Hello World". When you visit the URL /comments, it should return the following JSON object: { comments: [] }.

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  if (path === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ comments: [] }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});