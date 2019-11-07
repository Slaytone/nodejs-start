process.argv;

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log("nodePath: " + nodePath );
console.log("appPath: " + appPath );
console.log("name: " + name);
console.log("age: " + age );

console.log(process.cwd());

console.log("Text wait %d and %s", 2, "dsds");



const user = require('./cache');

user.sayHello();

require('./sample');

user.sayHello();
