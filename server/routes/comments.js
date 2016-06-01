import models from '../models';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const comments = (app) => {
  app.route('/api/comments/submit')
    .post(requireAuth, (req, res) => {
      const { UserId, BrewId, PostId, parentId, content } = req.body;

      if (!UserId || !BrewId || !PostId || !content) {
        return res.status(422).json({
          errorMessage: 'Missing required fields or must be signed in.'
        });
      }

      models.Comment.create({
        UserId,
        BrewId,
        PostId,
        CommentId: parentId,
        content,
        kudos: 0
      }).then((comment) => {
        return res.json({
          comment
        });
      });
    });
};

export default comments;
