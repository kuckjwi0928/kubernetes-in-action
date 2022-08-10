const http = require('http');
const os = require('os');

const port = 9999;

console.log('kubia server starting...');

const handler = function(req, res) {
    console.log('Received request from ' + req.connection.remoteAddress);
    res.writeHead(200);
    res.end('you have hit ' + os.hostname() + '\n');
}

const www = http.createServer(handler);
www.listen(port);
