var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3001;

var userRouter = require('./Routes/user.routes');

console.log('test');

var User = require('./models/user.model');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/leaveApp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('test 3cl');

//Register Routes
userRouter(app);

console.log('test 2');
app.get('/', function(req, res) {
  res.send('welcome to my API!');
});

app.listen(port, function() {
  console.log('Application started on PORT: ' + port);
});

console.log('test 1');
