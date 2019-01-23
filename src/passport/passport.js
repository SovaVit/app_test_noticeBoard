const passport = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const { User } = require('../models/user');
const { localAuth } = require('./local');

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, localAuth(User)));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = { passport };
