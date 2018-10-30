var http = require('http');

//create a server object:
// http.createServer(function (req, res) {
//     //write a response to the client:
//     res.write('NodeJS Tutorails'); 
//     //end the response
//     res.end(); 
//   }).listen(8080); //the server object listens on port 8080


  /* ES6 Syntax */
  // http.createServer((req, res) =>{
  //   //write a response to the client:
  //   res.write('NodeJS Tutorails'); 
  //   //end the response
  //   res.end(); 
  // }).listen(8080);



  /* Serve Multiple routes */
//   const courseContents =
//   [
//   {name:"Introduction to NodeJS",id:1},
//   {name:"Node Modules",id:2},
//   {name:"Node Package Manger",id:3}
// ];
//   http.createServer((req,res)=>{
//     if(req.url ==='/'){
//       res.write('NodeJs 2018 Tutorial');
//       res.end();
//     }
//     else if (req.url ==='/contents')
//     {
//       res.write(JSON.stringify(courseContents));
//       res.end();
//     }
//     else{
//       res.write('Hello World');
//       res.end();
//     }
//   }).listen(8080);

/* Add a HTTP Header */
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);


/* Read the Query String */
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);