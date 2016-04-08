'use strict';
module.exports = (model, checked, done) => {
  model.findOne(checked._id).exec()
  .then(result => {
    if (result === null) {
      console.log(`this document not found or removed ${result}`);
      done();
    } else {
      console.log(result);
      done();
    }
  });
};
