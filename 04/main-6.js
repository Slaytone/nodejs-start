let evt = require('events').EventEmitter;
let emt = new evt();


emt.on('click', function(a, b){
    console.log('a = ' +  a + '; b = ' + b);
});


emt.on('click', function(){
    console.log(arguments);
});


emt.emit('click', 23, 22);

emt.emit('click', {a:23, d:22}, 3);

//console.log(emt.listenerCount('click'));
emt.setMaxListeners( 105);
for (let i = 0; i < 100; i++){
    emt.on('click', function(){
        console.log('Listener # ' + i);
    });
}
console.log(emt.listenerCount('click'));
emt.emit('click', 23, 22);
