'use strict';

const Client = require('../models/client')();
const mongoose = require('mongoose');
const expect = require('chai').expect;
const dbURI = 'mongodb://localhost/e-commerce-test';
const dbCLEAR = require('mocha-mongoose')(dbURI);

describe('#CLIENT', () => {
  beforeEach((done) => {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });
  it('should be saved', (done) => {
    Client({'username':'John Doe'})
    .save(done)
    .then((result) => {
      expect(result.username).should.be.equal('John Doe');
    });
  });
  it('should be listed', (done) => {
    Client({'username': 'John Doe'}).save();
    Client.find({})
     .exec(done)
     .then((result) => {
       expect(result.username).should.be.equal('John Doe');
     });
  });
  it('should be updated', (done) => {
    Client({'username': 'John Doe'}).save();
    Client.update({'username': 'John Doe'}, {'username': 'Jack Sparrow'})
      .exec(done)
      .then((result) => {
        expect(result.ok).should.to.be.equal(1); // true
      });
  });

  it('should be removed', (done) => {
    Client({'username': 'John Doe'}).save();
    Client.remove({'username': 'John Doe'})
    .exec(done)
    .then((result) => {
      expect(result.ok).should.to.be.equal(1); // true
    });
  });
});
