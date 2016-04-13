'use strict';

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// hash e salt e autenticação
// pattern de factory
module.exports = () => {
  let schema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    unique: true,
    type: String,
    required: true,
    validate: {
      validator:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      message: "Please insert a valid email"
    }
  },
  password: String,
  created_at: {
    type: Date,
    default: Date.now
  }
  });
  schema.plugin(passportLocalMongoose);

  // wrapper, avoid compilation error doc
  try {
    return mongoose.model('Client');
  }catch(err) {
    return mongoose.model('Client', schema);
  }
};
