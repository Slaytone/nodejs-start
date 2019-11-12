const express = require('express');
const path = require('path');

let catalog = 'public';
let app = express();

app.use( (req, res, next) =>{
    console.log('use');

    next();
});

app.use('/', express.static(path.join(__dirname, catalog)));


app.listen(3000, () => {
    console.log('server start...');
});

// app.get('/', (req, res) => {
//     res.send('Help!!!');
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname + "/about.html" ));
// });
//
// app.get('/product', (req, res) => {
//     res.status(287).send('Page not found');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , catalog, "index.html" ));
});


