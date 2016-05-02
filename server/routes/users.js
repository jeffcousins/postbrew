import models from '../models';
import passport from 'passport';
import { auth, passportUtil } from '../utils/utils';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

const users = (app) => {
  // app.route('/api/users')
  //   .get((req, res) => {
  //     Brew.find(function(error, items) {
  //       res.send(items);
  //     });
  //   })
  //   .post((req, res) => {
  //     console.log('Adding user:', user);
  //     const user = req.body;
  //     const brewItem = new User(user);
  //     brewItem.save(function(err, data) {
  //       res.status(300).send();
  //     });
  //   });

  app.route('/api/signup')
    .post(auth.signUp);

  app.route('/api/signin')
    .post(requireSignIn, auth.signIn);

  app.route('/api/test')
    .get(requireAuth, (req, res) => {
      res.json({ response: 'Authentication successful.' });
    });

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
