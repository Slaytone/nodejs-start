//use global vars

//console.log('Directory name:', __dirname);
//console.log('File name:', __filename);

let path = require('path');

console.log(path.basename(__filename));

console.log(path.resolve('./test'));

console.log(path.extname(__filename));

console.log(path.isAbsolute('./test'));
console.log(path.isAbsolute(__filename));

let file = '09_file.js';
console.log("Generation path : ",path.join(__dirname, file));

let filePath = path.join(__dirname, file);

//parsing path to object
console.log(path.parse(filePath));

console.log(path.sep);


