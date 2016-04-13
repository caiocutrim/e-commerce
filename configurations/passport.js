'use strict';
const Client = require('../app/models/client')();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
// const GooglePlusStrategy = require('passport-google-plus').Strategy;


passport.use(Client.createStrategy());

// passport.use(new GooglePlusStrategy({
//     clientId: 'YOUR_CLIENT_ID',
//     clientSecret: 'YOUR_CLIENT_SECRET',
//     callbackURL: 'http://localhost:3000/auth/googleplus/callback'
//   },
//   function(tokens, profile, done) {
//     // Create or update user, call done() when complete...
//     done(null, profile, tokens);
//   }
// ));

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
