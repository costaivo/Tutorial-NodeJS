/* To use a external module in your current module you need to use require(<moduleFilePath>)*/
const myLogger = require('./logger');

myLogger.log('Hello World Revisted!!');

myLogger.log('Bye Bye World!');

console.log(myLogger.appName);

/* Inspecting the contents of myLogger*/
console.log(myLogger);
