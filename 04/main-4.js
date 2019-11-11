let evt = require('events').EventEmitter;

let emitter = new evt();

emitter.on('click', function(){
    console.log("Listener 1");
});

emitter.on('click', function(){
    console.log("Listener 2");
});

emitter.on('click', function(){
    console.log("Listener 3");
});

emitter.prependListener('click', function () {
    console.log("Listener 4");
})

emitter.prependOnceListener('click', function () {
    console.log("Listener once 4");
})

emitter.emit('click');

console.log("click 1");


emitter.emit('click');

console.log("click 2");
