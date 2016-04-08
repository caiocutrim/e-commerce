'use strict';
module.exports = (app) => {
  let ctrl = app.controllers.product;
  app.route('/api/products')
    .get(ctrl.listProductData)
    .post(ctrl.saveProductData);
};
