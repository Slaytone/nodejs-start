//files rutins
let fs =  require('fs');

let str = 'Hello!!!';

fs.writeFile('text.txt', str, function(err){
    if(err){
        console.log(err);
        return;
    }
   console.log('file has been written')
});