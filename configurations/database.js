'use strict';
const mongoose = require('mongoose');


module.exports = (uri) => {
  let db = mongoose.connect(uri);
  db.connection.on('connected', () => {
    console.log("Data base connected");
  });

  db.connection.on('disconnected', () => {
    console.log("Data base disconnected");
  });

  process.on('SINGINT', () => {
    db.connection.close('disconnected', () => {
      console.log("Data base closed by ended of the application");
    });
  });
}
