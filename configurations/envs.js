'use strict';
module.exports = () => {
  return require(`./environments/${process.env.NODE_ENV}.js`);
}
