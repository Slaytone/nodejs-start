let url = require('url');

let myUrl = 'http://user:pass@host.com:8080/p/a/t?query=string&r=1#hash';

let myUrlObj = url.parse(myUrl,1==1);

console.log(myUrlObj);

let formattedUrl = url.format(myUrlObj);

console.log(formattedUrl);

