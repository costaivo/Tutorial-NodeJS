/* To use a system module in your current module you need to use require(<moduleName>)*/
var fs = require('fs');

const fileName = 'LearningNode.txt';

/* append to a existing file. If not found create one */
fs.appendFileSync(fileName, '\nNodeJs 2018: Tips & tricks');

fs.appendFileSync(fileName, '\n --Costa Ivo');

/* Async Method of reading file contents */
fs.readFile(fileName, 'utf8', function(err, contents) {
  if (err) {
    console.log('Error Occured!!!');
    console.log('Error Message', err);
  }

  console.log(contents);
});

/* Sync Method of reading file contents */
fs.readFileSync(fileName, 'utf8');
