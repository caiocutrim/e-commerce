'use strict';
const request = require('supertest-as-promised');
const mongoose = require('mongoose');
const expect = require('chai').expect;
const Client = require('../../models/client')();
const env = require('../../../configurations/envs')();
const dbCLEAR = require('mocha-mongoose')(env.dbURI);
describe("#ROUTES client", () => {
  let app = request('http://localhost:3000'); // http://localhost:3000
  beforeEach(done => {
    if (mongoose.connection.db) return done();
    mongoose.connect(env.dbURI, done);
  });
  after(done => {
    Client.remove({}, done); // mongooooo
  });

  it('expect 200 status to be received when a client is saved', done => {
    app
    .get('/api/client')
    .expect(200)
    .then(result => {
      expect(result.body).to.be.a('array');
      expect(result.body[0]).to.have.property('username');
      done();
    });
  });

  it('expect 200 status when a client is removed', done => {
    app
    .get('/api/client')
    .expect(200)
    .then(result => {
      app
      .del(`/api/client/${result.body[0]._id}`)
      .expect(200, done);
    });
  });
});
