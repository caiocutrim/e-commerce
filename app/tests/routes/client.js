'use strict';

const Client = require('../../models/client');
const expect = require('chai').expect;
const request = require('supertest');


describe("#ROUTES client", () => {
  it('shoulbe return 200 ok status', (done) => {
    request('http://localhost:3000')
    .get('/api/client')
    .expect({"hello":"world!"})
    .expect(200, done)
  });

  it('shoulbe return 200 ok status when save a client', (done) => {
    request('http://localhost:3000')
    .post('/api/client')
    .send({'username':'jack doe'})
    .set({'Content-type':'application/json'})
    .expect({"salvo": "com sucesso!"})
    .expect(200, done)
  });
});
