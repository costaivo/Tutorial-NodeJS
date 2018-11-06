'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Task');

var getTasks = function(req, res) {
  var query = {};

  Task.find(query, function(err, tasks) {
    if (err) res.status(500).send(err);
    else {
      res.status(200);
      res.json(tasks);
    }
  }).populate({path:'assignedTo',select:'email'});
};

var updateTask =function(req,res){
  if(!req.params.id)
  {
    res.status(500).send('Please specify task Id to modify');
  }

  Task.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,task)=>{
    if(err){
      res.status(500).send(err);
    }
    else{
      res.status(201).send(task);
    }
  });
};

var getTaskById = function(req, res) {
  console.log(`Request parameters :${req.params.taskId}`)


  var query = {_id:req.params.taskId};

  Task.find(query, function(err, tasks) {
    if (err) res.status(500).send(err);
    else {
      res.status(201);
      res.json(tasks);
    }
  });

};

var deleteTaskById =function(req,res){
  console.log(`Request parameters :${req.params.taskId}`)
  Task.removeById(req.params.taskId)
  .then((result)=>{
      res.status(204).send({});
  });
}

var createTask = function(req, res) {
  var task = new Task(req.body);

  if (!req.body.title) {
    res.status(400);
    res.send('title is empty');
  } else {
    task.save();
    res.status(201);
    res.send(task);
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTaskById
};
