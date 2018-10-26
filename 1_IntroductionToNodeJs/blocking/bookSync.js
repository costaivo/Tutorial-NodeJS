var fs = require('fs')

function getBook(id) {
 const contents = fs.readFileSync(__dirname+'/'+id+'.txt','utf8')
  for(var i=0;i<5000000000;i++){
    var x=10+i;
  }
 return contents;
}

module.exports = getBook;
