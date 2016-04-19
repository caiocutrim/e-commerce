'use strict';

const passport = require('passport');
const Client = require('../app/models/client')();
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(Client.createStrategy());

passport.use(new FacebookStrategy({
    clientID: '1365515723474282',
    clientSecret: '9ffefa2ac7a804a67654920147f82dea',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(tokens, profile, done) {
    // Create or update user, call done() when complete...
    console.log(profile);
    done(null, profile, tokens);
  }
));
