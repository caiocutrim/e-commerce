'use strict';

/* GET users listing. */

module.exports = (app) => {
  let controller = app.controllers.client;
  app
    .route('/api/client')
    .get(controller.listClients)
    .post(controller.addClient);

  app
    .route('/api/client/:id')
    .put(controller.changeClientData)
    .delete(controller.deleteClientData);
};
