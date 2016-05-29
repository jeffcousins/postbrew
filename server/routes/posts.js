import models from '../models';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const posts = (app) => {
  app.route('/api/posts/submit')
    .post(requireAuth, (req, res) => {
      let { title, url, content, brewName, userId } = req.body;
      url = url || null;
      content = content || null;

      if (!title || !brewName || !userId) {
        return res.status(422).json({
          errorMessage: 'Missing required fields and must be signed in.'
        });
      }

      return res.json({ title, url, content, brewName, userId });

      models.Brew.findOne({
        where: {
          brew_name: brewName
        }
      }).then((existingBrew) => {
        if (!existingBrew) {
          return res.status(422).send({
            errorMessage: brewName + ' does not exist.'
          });
        }

        models.User.findOne({
          where: {
            id: userId
          }
        }).then(submitPost);
      });

      function submitPost (user) {
        if (!user) {
          return res.status(404).send({
            errorMessage: 'Could not find user.'
          });
        }

        models.Post.create({
          brew_name: brewName.toLowerCase(), // TODO: refactor to BrewId
          user_id: userId,
          title: title,
          url: url,
          content: content
        }).then((post) => {
          res.json({
            post: post
          });
        });
      }
    });
}

export default posts;
