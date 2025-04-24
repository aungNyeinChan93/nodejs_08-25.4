import { EventEmitter } from 'events'

const TestEmitter = new EventEmitter();

let result = "";
TestEmitter.on('event_one', (payload) => {
    result = `event one: ${payload}`;
    console.log('end..');

});

TestEmitter.emit('event_one', 'koko');
console.log(result);


