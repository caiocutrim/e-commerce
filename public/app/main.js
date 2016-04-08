'use strict';
const app = require('angular');
const route = require('angular-route');
const resource = require('angular-resource');

app.module('e-commerce', [route, resource]);

app.module('e-commerce')
.controller('indexCtrl', function() {
  this.welcome = "Hello, world!, criado com o angular";
});
