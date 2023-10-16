// You can run with node snippets.js

/*
In browsers, the top-level scope has traditionally been the global scope. This means that var 
something will define a new global variable, except within ECMAScript modules. In Node.js, this 
is different. The top-level scope is not the global scope; var something inside a Node.js module 
will be local to that module, regardless of whether it is a CommonJS module or an ECMAScript module.

Historically, accessing the global object has required different syntax in different JavaScript 
environments. On the web you can use window, self, or frames - but in Web Workers only self will 
work. In Node.js none of these work, and you must instead use global (or you once had to hehe).

The globalThis property provides a standard way of accessing the global this value (and hence the 
global object itself) across environments. Unlike similar properties such as window and self, it's 
guaranteed to work in window and non-window contexts. In this way, you can access the global object 
in a consistent manner without having to know which environment the code is being run in.

global is deprecated. Instead use globalThis.
*/

// [Fireship] Node.js Ultimate Beginner’s Guide in 7 Easy Steps:
// https://www.youtube.com/watch?v=ENrzD9HAZK4

console.log(globalThis.myVar);
// console.log(myVar);  // ReferenceError
globalThis.myVar = "I'm global";
console.log(myVar);

// process is a global variable in node.js
console.log(process.env.USER);

// Callback fn
process.on('exit', function() {
  console.log('Goodbye');
})

/******* Making my own callback *******/
// Can be done like this...
const { EventEmitter } = require('events');  // EventEmitter is just a fn. 'new' => treated as ctor 
// Or like this...
// const events = require('events');
// const EventEmitter = events.EventEmitter; 

const myEmitter = new EventEmitter();
myEmitter.on('lunch', () => {  // register a new listener
  console.log('yum 🌮🍩🌯');
});
myEmitter.emit('lunch');
myEmitter.emit('lunch');

/******* Using the filesystem *******/
const fs = require('fs');

// callback is called at the end regardless of success or failure
fs.readFile('snippet.txt', 'utf8', function(err, data) {
  if (err) {
    console.log('Error: ', err);
    return;
  } 
  console.log("async read done (probably after sync read despite being first in code)");
});

// sync == blocking
const txt = fs.readFileSync('snippet.txt', 'utf8');
console.log("sync read done: ", txt);


async function hello() {
  const file = await fs.promises.readFile('./snippet.txt', 'utf8');
  console.log("async/await read done: ", file);
}

