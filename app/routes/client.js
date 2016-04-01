'use strict';

/* GET users listing. */

module.exports = (app) => {
  let controller = app.controllers.client;
  app.get('/api/client', controller.listClients);
  app.post('/api/client', controller.addClient);
};
