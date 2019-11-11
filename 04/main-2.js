let evt = require('events');

let count = 0;

let print = () => {
    count++;
    console.log('print - ', count);
}

let emitter = new evt.EventEmitter();

 emitter.on('click', print);
 emitter.addListener('click', print);
emitter.once('click', print);


emitter.emit('click');
emitter.emit('click');

