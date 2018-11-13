'use strict'
module.exports = function (app) {
  var taskController = require('../controllers/task.controller')

  app
    .route('/tasks')
    .get(taskController.getTasks)
    .post(taskController.createTask)

  app
    .route('/tasks/:taskId')
    .get(taskController.getTaskById)
    .put(taskController.updateTask)
    .delete(taskController.deleteTaskById)

  // app
  // .route('/tasks/user/:userId')
  // .get(taskController.getTasksAssignedToUser);

  app
    .route('/tasks/user/:userId/:statusId?')
    .get(taskController.getTasksAssignedToUserWithStatus)
}
