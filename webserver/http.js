const http = require('http');
const utils = require('util');

http.createServer((req, res) => {
    let requestInfo = utils.format("HTTPVersion: %s \n Method: %s \n Status Code: %s \n URL: %s"
    , req.httpVersion, req.method, res.statusCode, req.url);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello!!!');
    res.write(requestInfo);

    for (let key in req.headers) {
        console.log(key, ":" , req.headers[key]);
        res.write(key + ":" + req.headers[key] + '\n')
    }

    res.end();
}).listen(3000);