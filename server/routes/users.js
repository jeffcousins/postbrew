import models from '../models';
import passport from 'passport';
import { auth } from '../utils/utils';

// const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

const users = (app) => {
  app.route('/api/signup')
    .post(auth.signUp);

  app.route('/api/signin')
    .post(requireSignIn, auth.signIn);

  app.route('/api/u/:username')
    .get((req, res) => {
      models.User.findOne({
        where: {
          username: req.params.username
        }
      })
      .then((user) => {
        res.json(user);
      });
    });
};

export default users;
