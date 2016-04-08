'use strict';

/* GET users listing. */

module.exports = (app) => {
  let controller = app.controllers.client;
  app
    .route('/api/clients')
    .get(controller.listClients)
    .post(controller.addClient);

  app
    .route('/api/clients/:id')
    .put(controller.changeClientData)
    .get(controller.showDataClient)
    .delete(controller.deleteClientData);
};
