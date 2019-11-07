let arr =  [];

console.time('one');

for (let i=0; i<10000000; i++ ) {
    arr[i] = (i+2)*i/4+i;
}

console.timeEnd('one');