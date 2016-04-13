'use strict';
const request = require('supertest-as-promised');
const mongoose = require('mongoose');
const expect = require('chai').expect;
const Client = require('../../models/client')();
const check = require('../helpers/check');
const env = require('../../../configurations/envs')();
const dbCLEAR = require('mocha-mongoose')(env.dbURI);
describe("#ROUTES client", () => {
  let app = request('http://localhost:3000'); // http://localhost:3000
  beforeEach(done => {
    if (mongoose.connection.db) return done();
    mongoose.connect(env.dbURI, done);
  });
  let dataMock = {'username': 'John doe', 'email': 'john@example.com', 'password': '12345'};
  let dataMockUp = {'username': 'Jack doe', 'email': 'jack@example.com', 'password': '1234798'};
  it('expect 200 status to be received when a client is saved', done => {
    app
    .post('/api/clients')
    .type('json')
    .send(dataMock)
    .expect(200)
    .then(result => {
      console.log(result.body.hash);
      expect(result.body.username).to.be.equal(dataMock.username);
      expect(result.body.email).to.be.equal(dataMock.email);
      done();
    });
  });

  it('expect 200 status when a client is removed', done => {
    app
    .post('/api/clients')
    .type('json')
    .send(dataMock)
    .then(result => {
      app
      .del(`/api/clients/${result.body._id}`)
      .expect(200)
      .then(response => {
        // return reponse body the mongodb status operation
        expect(response.body.ok).to.be.equal(1);// mongo message report
        expect(response.status).to.be.equal(200);// response
        done();
      });
    });
  });

  it('expect 200 when a client is updated', done => {
    app
    .post('/api/clients')
    .type('json')
    .send(dataMock)
    .then(result => {
      app
      .put(`/api/clients/${result.body._id}`)// updated a resource
      .send(dataMockUp)
      .expect(200)
      .then(response => {
        expect(response.status).to.be.equal(200); // response.status
        done();
      });
    });
  });
  it('expect 200 when a client is authenticate', done => {
    app
    .post('/api/clients/login')
    .type('json')
    .expect(401)
    .send(dataMock)
    .then(result => {
      console.log(result.text);
      done();
    })
    .catch(err => {
      console.log(err.text);
      done();
    });
  });
});
