'use strict';
module.exports = function(app) {
  var taskController = require('../controllers/task.controller');

  app
    .route('/tasks')
    .get(taskController.getTasks)
    .post(taskController.createTask);

    app
      .route('/tasks/:taskId')
      .get(taskController.getTaskById)
      .put(taskController.updateTask)
      .delete(taskController.deleteTaskById);
};