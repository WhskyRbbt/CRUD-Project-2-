const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Char = require('../models/character');


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Char.findOne({ 'googleId': profile.id }, function(err, char) {
      if (err) return cb(err);
      if (char) {
        if (!char.avatar) {
          char.avatar = profile.photos[0].value;
          char.save(function(err) {
            return cb(null, char);
          });
        } else {
          return cb(null, char);
        }
      } else {
        var newChar = new Char({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newChar.save(function(err) {
          if (err) return cb(err);
          return cb(null, newChar);
        });
      }
    });
  }
));

passport.serializeChar(function(char, done) {
    done(null, char.id);
  });
  
  passport.deserializeChar(function(id, done) {
    Char.findById(id, function(err, char) {
      done(err, char);
    });
  });
  
  
  