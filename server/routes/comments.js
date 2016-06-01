import models from '../models';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const comments = (app) => {
  app.route('/api/comments/submit')
    .post(requireAuth, (req, res) => {
      return res.json(req.body);
    });
}

export default comments;
