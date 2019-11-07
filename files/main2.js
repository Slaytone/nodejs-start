//files rutins
let fs =  require('fs');


fs.readdir('03', function(err, filesStruc){
    if(err){
        console.log(err);
        return;
    }
   console.log(filesStruc)
});