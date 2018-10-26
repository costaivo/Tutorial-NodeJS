var fs = require('fs')

function getBook(id, callback) {
  fs.readFile(__dirname+'/'+id+'.txt','utf8',function(err,contents){

    for(var i=0;i<5000000000;i++){
      var x=10+i;
    }
      callback(contents);
    
  })
}

module.exports = getBook;
