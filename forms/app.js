//run index.html

const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let port = 3000;

app.use('/regestry', bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html" );
});

app.post('/regestry', (req, res) => {
    console.log(req.body);
    res.send(req.body.userName + "   " + req.body.userAge);
});

app.listen(port, () => {
    console.log('server start...');
});




