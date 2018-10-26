/* To use a system module in your current module you need to use require(<moduleName>)*/
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
