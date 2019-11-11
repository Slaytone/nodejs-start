const fs = require('fs');
const  url = require('url');
const http = require('http');

http.createServer((req, res) => {
    let path = url.parse(req.url).pathname;
    path = 'main/' + path.substr(1);

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.end('Not found!');
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data.toString());
            console.log('Data as sent');
            res.end();
            return;
        }
    })
}).listen(3030);