'use strict';
const Product = require('../../models/product')();
const mongoose = require('mongoose');
const check = require('../helpers/check');
const expect = require('chai').expect;
const should = require('chai').should();
const dbURI = require('../../../configurations/envs')().dbURI; // env test
const dbCLEAR = require('mocha-mongoose')(dbURI);


describe('#PRODUCT MODEL', () => {
  beforeEach(done => {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });
  let dataMock = {
    'name': 'Harry Potter',
    'desc': 'Harry e a pedra filosofal',
    'value': 25.00
  };

  it('should save a document', done => {
    let saved = Product.create(dataMock);
    saved.then(result => {
      console.log(result);
      done();
    });
  });

});
