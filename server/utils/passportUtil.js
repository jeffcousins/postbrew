import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import models from '../models';
import { secret } from '../../config';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  models.User.findById(payload.sub)
    .then((user) => {
      done(null, user);
    });
});

passport.use(jwtLogin);
