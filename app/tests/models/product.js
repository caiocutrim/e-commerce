'use strict';
const Product = require('../../models/product')();
const Photo = require('../../models/photo')();
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

  describe('#PHOTO', () => {

    it('should be able to save a document', done => {
      let photo = Photo.create({'name': 'Jeans Photo', 'path': '/images/jeans.jpg'});
      photo.then(result => {
        result.name.should.to.be.equal('Jeans Photo');
        result.path.should.to.be.equal('/images/jeans.jpg');
        console.log(result);
        done();
      });
    });

    it('should be able to save a document with subdocument linked', done => {
      let photo = Photo.create({'name': 'Jeans Photo', 'path': '/images/jeans.jpg'});
      photo.then(result => {
        let product = Product.create({
          'name': 'Harry Porter',
          'desc': 'O prisioneiro de Ascabam',
          'value': 25.00,
          '_photos': result._id
        });
        product.then(saved => {
          saved.name.should.to.be.equal('Harry Porter');
          saved.desc.should.to.be.equal('O prisioneiro de Ascabam');
          saved.value.should.to.be.equal(25.00);
          done();
        });
      });
    });
    it('should be able read a document with subdocument linked by ObjectID', done => {
      let photo = Photo.create({'name': 'Jeans Photo', 'path': '/images/jeans.jpg'});
      photo.then(result => {
        let product = Product.create({
          'name': 'Harry Porter',
          'desc': 'O prisioneiro de Ascabam',
          'value': 25.00,
          '_photos': result._id
        });
        product.then(saved => {
          let readed = Product.findOne({'_id': saved._id});
          readed.populate('_photos');
          readed.exec();
          readed.then(result => {
            saved.name.should.to.be.equal('Harry Porter');
            saved.desc.should.to.be.equal('O prisioneiro de Ascabam');
            saved.value.should.to.be.equal(25.00);
            saved._photos.should.to.be.an('array');
            done();
          });
        });
      });
    });
  });
});
