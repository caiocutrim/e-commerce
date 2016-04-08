'use strict';
// factory
module.exports = (app) => {
  let Product = app.models.product;
  let ctrl = {};
  ctrl.saveProductData = (req, res) => {};
  ctrl.listProductData = (req, res) => {};
  return ctrl;
};
