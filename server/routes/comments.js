import models from '../models';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const comments = (app) => {
  app.route('/api/comments/submit')
    .post(requireAuth, (req, res) => {
      const { userId, brewId, postId, content } = req.body;
      let { parentId } = req.body;

      if (!userId || !brewId || !postId || !parentId || !content) {
        return res.status(422).json({
          errorMessage: 'Missing required fields or must be signed in.'
        });
      }

      if (parentId === -1) {
        parentId = null;
      }

      models.Comment.create({
        UserId: userId,
        BrewId: brewId,
        PostId: postId,
        CommentId: parentId,
        content: content,
        kudos: 0
      }).then((comment) => {
        return res.json({
          comment
        });
      });
    });
}

export default comments;
