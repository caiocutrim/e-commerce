'use strict';
const mongoose = require('mongoose');
module.exports = () => {
  let schema = mongoose.Schema({
    'name': {
      type: String,
      required: true
    },
    'desc': {
      type: String,
      required: true
    },
    'value': {
      type: Number,
      required: true
    },
    'time': {
      type: Date,
      default: Date.now()
    },
    '_photos': [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Photo'
    }] // 1/n
  });

  return mongoose.model('Product', schema);
};
