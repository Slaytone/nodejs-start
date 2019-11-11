const  url = require('url');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
        if (req.url == '/') {
            let file_path = path.join(__dirname, 'main/index.html');
            console.log(file_path);
            fs.readFile(file_path, (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data.toString());
                res.end();
            });
        } else if (req.url == '/request'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Hello!!!</h1>');
            console.log('Data Sent');
            res.end();
            return;
        }
}).listen(3030, () => {
    console.log('Server running on port 3030...');
});