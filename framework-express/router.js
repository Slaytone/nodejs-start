const express = require('express');

let app = express();
let port = 3000;

let router = express.Router();


app.use('/about', router);

router.route('/').get((req, res) => {
   res.send('Get Method')
});

router.route('/').post((req, res) => {
    res.send('POST Method')
});



app.get('/', (req, res) => {
    res.send('Main Page') ;
});


app.listen(port, () => {
    console.log('server start...');
});



