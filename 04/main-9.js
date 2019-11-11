

let evt = require('events').EventEmitter;
let emt = new evt();



emt.on('click', function(){
    console.log('Listener 1');
});

emt.on('click', function(){
    console.log('Listener 2');
});


let listeners = emt.listeners('click');

for (let i = 0; i < listeners.length; i++){
    listeners[i]();
    console.log(listeners[i].toString());
}

emt.emit('click');



