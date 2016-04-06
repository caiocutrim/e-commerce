'use strict';
module.exports = (app) => {

  let Client = app.models.client;
  let controller = {};

  controller.addClient = (req, res) => {
   Client
    .create(req.body)
    .then(result => res.status(200).json(result), err => res.status(500).send(err));
  };

  controller.listClients = (req, res) => {
   Client
    .find()
    .exec()
    .then(result => res.status(200).json(result), err => res.status(500).send(err));
  };

  controller.changeClientData = (req, res) => {
    Client.findByIdAndUpdate(req.body._id, req.body)
      .exec()
      .then(result => res.status(200).json(result));
  };

  controller.deleteClientData = (req, res) => {
    Client.remove({'_id': req.params._id})
    .then(result => res.status(200).json(result),
      err => res.status(err).json(err));
  }

  return controller;
};
