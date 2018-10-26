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
