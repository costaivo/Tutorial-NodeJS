// get dependencies
var app = require("express")();
 require("dotenv").config();
 //var Sequelize = require('sequelize');


//  const sequelize = new Sequelize('mysql://localhost:3306/todoapp', 'root', 'sa1234', {
//     dialect: 'mysql',
//     insecureAuth:true
//   })

  var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sa1234',
  database : 'todoapp'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

// handle request and response
app.get("/", function(req, res) {
    res.send({name:"Hello Wolrd"});
});
 
// // Quick example
// sequelize.query("SELECT * FROM myTable").then(myTableRows => {
//     console.log(myTableRows)
//   })

// initializing a port
app.listen( process.env.PORT,()=>{
    console.log(`Application Started Successfully on port ${process.env.PORT}`);
});