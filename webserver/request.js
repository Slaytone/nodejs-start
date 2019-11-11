const http = require('http');
const request = require('request');

http.get('http://bank.gov.ua', (res) =>{
    console.log(res);
}).on('error', (err) =>{
    console.log(err);
})

request('http://ukr.net', (err, res, body) => {
   if (err) {
       console.log(err);
   } else {
       console.log(body);
   }
});


