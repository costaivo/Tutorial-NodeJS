# Introduction to NodeJS	

## What is NodeJS

* Is it a Programming Language?
* Is it a Framework?
* Is it a Runtime Enviornment?


## Node Architecture

### How Browsers understand the JS Code

JS CODE ==> [JavaScript Engine] ==> Machine Code

### Browsers and the JavaScript Engine
* IE => Chakra
* Firefox => spidermonkey
* chrome => v8

### NodeJS allowed running JS code outside of the browser.
**Ryan Dahl** came up with the idea of running JS code outside the  browser. He took the v8 Javascript engine and embedded it in a program written in C++. This program was named as NodeJS. 


![NodeJs Arch](https://snag.gy/Y1yUj6.jpg)

**Node is a program that has  embedded v8 engine with added features not available on the browser.**


## How Node Works

### Synchronous Operation 
* When the server recives a requests from the client a thread is allocated the request. The allocated thread processes the request. While processing if the thread has to do any I/O operations, then the Thread waits until the operation is completed. The processed results are send back to the client and the Thread is now available to accept the next client request. 

>>Example:
>> Restaurant
 
### Asynchronous Operation 
* Node uses a single thread to handle all requests. If a I/O operations have to be performed. The thread puts a message on the *event Queue* the Thread then  processes the next request received from the client. Node continously checks the contents of the *event Queue* once the I/O operations are completed, the data is returned. 
  

[Article explaining NodJS working](https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop)

## Installing Node

[Download Lastest Stable Version of NodeJS](https://nodejs.org/en/download/)

[Installing NodeJs on Windows Machine](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)

[Installing NodeJs on Mac Machine](https://blog.teamtreehouse.com/install-node-js-npm-mac)


## Hello World NodeJS
``` javascript
console.log('Hello World!');
```

## Blocking & Non Blocking Code Example

Blocking Code
```javascript
const bookSync = require('./bookSync');


console.log('Reading Book:',456);
const book2 = bookSync(456);
console.log(book2);

console.log('Reading Book:',756);
const book3 = bookSync(756);
console.log(book3);

console.log('Reading Book:',123);
const book1 = bookSync(123);
console.log(book1);


const x = 10;
const y = 20;

const sum = x + y;
console.log(`Sum of x+y is ${sum}`);
```

Non-Blocking Code
```javascript
const book = require('./book');



console.log('Reading Book:',456);
book(456, function(book) {
  console.log(book);
});

console.log('Reading Book:',123);
book(123, function(book) {
  console.log(book);
});

console.log('Reading Book:',756);
book(756, function(book) {
  console.log(book);
});


const x = 10;
const y = 20;

const sum = x + y;
console.log(`Sum of x+y is ${sum}`);

```