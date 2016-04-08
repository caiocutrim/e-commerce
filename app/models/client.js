'use strict';

const mongoose = require('mongoose');

// pattern de factory
module.exports = () => {
  let schema = mongoose.Schema({
    'name':String,
    'email':String,
    'password':String
  });
  return mongoose.model('Client', schema);
};
