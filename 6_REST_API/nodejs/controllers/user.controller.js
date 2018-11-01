'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User');

var getUsers = function(req, res) {
  var query = {};

  User.find(query, function(err, users) {
    if (err) res.status(500).send(err);
    else {
      res.status(200);
      res.json(users);
    }
  });
};

var getUserById = function(req, res) {
  console.log(`Request parameters :${req.params.id}`)


  var query = {_id:req.params.id};

  User.find(query, function(err, users) {
    if (err) res.status(500).send(err);
    else {
      res.status(201);
      res.json(users);
    }
  });

};

var deleteUserById =function(req,res){
  console.log(`Request parameters :${req.params.id}`)
  User.removeById(req.params.userId)
  .then((result)=>{
      res.status(204).send({});
  });
}

var createUser = function(req, res) {
  var user = new User(req.body);

  if (!req.body.email) {
    res.status(400);
    res.send('Email is empty');
  } else {
    user.save();
    res.status(201);
    res.send(user);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById
};
