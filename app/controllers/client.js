'use strict';
module.exports = (app) => {
  let Client = app.models.client();
  let controller = {};
  controller.addClient = (req, res) => {
    Client
    .save(req.body)
    .then(result => res.status(200).json(result));
  };

  controller.listClients = (req, res) => {
    Client
    .find({})
    .exec()
    .then(result => res.status(200).json(result));
  };

  return controller;
};
