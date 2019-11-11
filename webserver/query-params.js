const  url = require('url');
const http = require('http');

http.createServer((req, res) => {
    let query = url.parse(req.url, true);
    //res.end('GET params: ' + query.toString());
    res.end('GET params: ' + JSON.stringify(query.query));
}).listen(3030, () => {
    console.log('Server running on port 3030...');
});