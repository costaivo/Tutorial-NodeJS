'use strict'
module.exports = function (app) {
  var userController = require('../controllers/userController')
  var taskController = require('../controllers/task.controller')
  app
    .route('/users')
    .get(userController.getUsers)
    .post(userController.createUser)

  app
    .route('/users/:userId')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUserById)

  app
    .route('/users/:userId/Tasks/:statusId?')
    .get(taskController.getTasksAssignedToUserWithStatus)
}
