'use strict';

const mongoose = require('mongoose');

// pattern de factory
module.exports = () => {
  let schema = mongoose.Schema({
    'username':String,
    'email':String,
    'password':String
  });

  // workaround
  try {
    return mongoose.model('Client');
  }catch (err) {
    return mongoose.model('Client', schema);
  }
};
