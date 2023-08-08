import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// process.stdin.resume(); // keep process alive if error

// Functions

const listener1 = () => {
    console.log('will remove later');
};

const listener2 = () => {
    console.log('once');
};

const listener3 = () => {
    console.log('keep going');
};

// Emitter

setInterval(() => {
    myEmitter.emit('event');
    myEmitter.emit('event2');
    myEmitter.emit('event3');
}, 200);

// Listener

myEmitter.on('event', listener1);
myEmitter.once('event2', listener2);
myEmitter.on('event3', listener3);
myEmitter.on('error', (err) => {
    console.log('got error:', err.message);
});

// Remove Listener

setTimeout(() => {
    myEmitter.removeListener('event', listener1);
}, 800);

// Error Emitter

setTimeout(() => {
    myEmitter.emit('error', new Error('oh oh'));
}, 1600);

// Abort

const ac = new AbortController();
const { signal } = ac;

setTimeout(() => {
    ac.abort();
}, 2000);

setInterval(() => {
    if (signal.aborted) {
        console.log('Abort signal received!');
        process.exit(1);
    }
    // ... rest of your code ...
}, 200);
