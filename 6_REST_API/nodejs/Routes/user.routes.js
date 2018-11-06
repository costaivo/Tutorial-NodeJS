'use strict';
module.exports = function(app) {
  var userController = require('../controllers/user.controller');

  app
    .route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);



    app
      .route('/users/:id')
      .get(userController.getUserById)
     // .put(userController.updateUser)
      .delete(userController.deleteUserById);
};


/*
POST (create a resource or generally provide data)
GET (retrieve an index of resources or an individual resource)
PUT (create or replace a resource)
PATCH (update/modify a resource)
DELETE (remove a resource)
*/