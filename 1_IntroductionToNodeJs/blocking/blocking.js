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
