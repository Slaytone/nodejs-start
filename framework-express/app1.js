const express = require('express');
const path = require('path');

let app = express();
let port = 3000;

app.all('*', (req, res) => {
        console.log('Method:  ' + req.method);
        console.log('Query:  ' + req.query);
        console.log('Protocol:  ' + req.protocol);
        console.log('Secured:  ' + req.secure);
        console.log('Accepts:  ' + req.accepts(['text/html', 'application/json']));
        console.log('content type: ' + req.get('Content-Type'));
        res.end();
    }
);

app.listen(port, () => {
    console.log('server start...');
});



