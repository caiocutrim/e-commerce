'use strict';
const mongoose = require('mongoose');
module.exports = () => {
  let schema = mongoose.Schema({
    'name': String,
    'desc': String,
    'value': Number
  });

  return mongoose.model('Product', schema);
};
