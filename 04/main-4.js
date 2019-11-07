let evt = require('events');

let emitter = new evt.EventEmitter();

function test(){
    console.log('Listener test')
}

 emitter.on('click', function(){
     // asinchhrone running
    setImmediate(() => {
        console.log("Listener 1");
    })
});

emitter.on('click', function(){
    console.log("Listener 2")
});

emitter.on('click', test);

emitter.emit('click');

console.log("click 1");

emitter.removeListener('click', test); //delete listener test from 'click'

emitter.emit('click');

console.log("click 2");

emitter.removeAllListeners('click');  //delete all listeners from 'click'

emitter.emit('click');

console.log("click 3");

emitter.emit('click');

console.log("click 4");
