'use strict';
const mongoose = require('mongoose');


module.exports =  () => {
  let schema = mongoose.Schema({
    "saled": Boolean,
    "time": {
      type: Date,
      default: Date.now()
    },
    "_products": [{
      type: mongoose.Schema.ObjectId, // id - Product
      ref: 'Product'
    }] // 1 to n
  });
  return mongoose.model('Sale', schema);
};

