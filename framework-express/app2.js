const express = require('express');

let app = express();
let port = 3000;

app.use('/nbu', (req, res) => {
    res.redirect('http://bank.gov.ua');
});

app.use('/t?t', (req, res) => {
    res.redirect('http://ukr.net');
});

app.use('/g*h', (req, res) => {
    res.redirect('http://github.com');
});


app.get('/shop/:id/:auth', (req, res) => {
    res.send('ProdId :' + req.params['id'] + '/n Author: ' + req.params['auth']) ;
});


app.listen(port, () => {
    console.log('server start...');
});



