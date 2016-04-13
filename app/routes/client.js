'use strict'; /* GET users listing. */
const passport = require('passport');
module.exports = (app) => {
  let controller = app.controllers.client;
  app
    .route('/api/clients')
    .get(controller.listClients)
    .post(controller.addClient);

  app
    .route('/api/clients/login')
    .post(passport.authenticate('local'), controller.loginClient);
  app
    .route('/auth/facebook')
    .post(passport.authenticate('facebook'), controller.loginClient);

  app
    .route('/api/clients/:id')
    .put(controller.changeClientData)
    .get(controller.showDataClient)
    .delete(controller.deleteClientData);
};
