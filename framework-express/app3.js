//write to logs

const express = require('express');
const fs = require('fs');
let app = express();
let port = 3000;



app.use((req, res, next) => {
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let data = hour + ':' + min + ':' + sec + " " + req.method + " " + req.url;
        next();
        fs.appendFile('server.log', data + '\n', () => {} );

    }
);


app.listen(port, () => {
    console.log('server start...');
});



