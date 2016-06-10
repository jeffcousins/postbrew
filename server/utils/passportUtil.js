import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import models from '../models';

let authConfig;

try {
  authConfig = require('./config');
} catch (e) {
  authConfig = {};
}

const SECRET = process.env.PROD_SECRET || authConfig.secret;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: SECRET
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  models.User.findById(payload.sub)
    .then((user) => {
      done(null, user);
    }, (err) => {
      return done(err);
    });
});

const localLogin = new LocalStrategy((username, password, done) => {
  models.User.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    if (!user) {
      return done(null, false);
    }

    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  }, (err) => {
    return done(err);
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
