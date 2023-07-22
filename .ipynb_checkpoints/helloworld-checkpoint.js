var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('------------------------' + "\n");
  res.write('node.js test!' + "\n");
  res.write('------------------------' + "\n");
  res.end();
}).listen(7777);