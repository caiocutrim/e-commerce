'use strict';

const Client = require('../../models/client')();
const mongoose = require('mongoose');
const expect = require('chai').expect;
const dbURI = require('../../../configurations/envs')().dbURI; // env test
const dbCLEAR = require('mocha-mongoose')(dbURI);

describe('#CLIENT', () => {
  beforeEach((done) => {
    if (mongoose.connection.db) return done();
    mongoose.connect(dbURI, done);
  });

  it('should be saved', (done) => {
    Client({'username':'John Doe', 'email':'johndoe@example.com', 'password': '13453ea4'})
    .save(done)
    .then((result) => {
      expect(result.name).should.be.equal('John Doe');
    });
  });

  it('should be listed', (done) => {
    Client({'name': 'John Doe'}).save();
    Client.find({})
     .exec(done)
     .then((result) => {
       expect(result.name).should.be.equal('John Doe');
     });
  });

  it('should be updated', (done) => {
    Client({'name': 'John Doe'}).save();
    Client.update({'name': 'John Doe'}, {'name': 'Jack Sparrow'})
      .exec(done)
      .then((result) => {
        expect(result.ok).should.to.be.equal(1); // true
      });
  });

  it('should be removed', (done) => {
    Client({'name': 'John Doe'}).save();
    Client.remove({'name': 'John Doe'})
    .exec(done)
    .then((result) => {
      expect(result.ok).should.to.be.equal(1); // true
    });
  });
});
