var http = require('http');
var html;
html ="<h1>Hello World</h1>";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(html);
  res.end();
}).listen(3000, "127.0.0.1");
console.log('Server running on http://localhost:3000/');
