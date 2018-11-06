'use strict';
module.exports = function(app) {
  var userController = require('../controllers/userController');

  app
    .route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);



    app
      .route('/users/:userId')
      .get(userController.getUserById)
      .put(userController.updateUser)
      .delete(userController.deleteUserById);


  
};
































//  var taskController = require('../controllers/task.controller');
// app
// .route('/users/:userId/Tasks/:statusId?')
// .get(taskController.getTasksAssignedToUserWithStatus);