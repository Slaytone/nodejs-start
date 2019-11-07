//files rutins
let fs =  require('fs');

let str = 'Hello!!!';

fs.readFile('text1.txt', {encoding:'utf-8'}, function(err, dataformfile){
    if(err){
        console.log(err.message);
        return;
    }
   console.log(dataformfile)
});