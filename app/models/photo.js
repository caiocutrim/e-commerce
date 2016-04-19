'use strict';
const mongoose = require('mongoose');
module.exports = () => {
  let schema = mongoose.Schema({
    'name': {
      type: String
    },
    'path': {
      type: String,
      required: true
    }
  });

  return mongoose.model('Photo', schema); // compilation model
  // 2 x, compilation error
};
