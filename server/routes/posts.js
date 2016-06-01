import models from '../models';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const posts = (app) => {
  app.route('/api/posts/submit')
    .post(requireAuth, (req, res) => {
      let { title, url, content, brewName, brewId, userId } = req.body;
      url = url || null;
      content = content || null;

      if (!title || !brewName || !brewId || !userId) {
        return res.status(422).json({
          errorMessage: 'Missing required fields and must be signed in.'
        });
      }

      models.Brew.findOne({
        where: {
          brew_name: brewName
        }
      }).then((existingBrew) => {
        if (!existingBrew) {
          return res.status(404).send({
            errorMessage: `/b/${brewName} does not exist.`
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
          title: title,
          url: url,
          content: content,
          brew_name: brewName.toLowerCase(),
          BrewId: brewId,
          UserId: userId,
          kudos: 0
        }).then((post) => {
          res.json({
            postId: post.dataValues.id
          });
        });
      }
    });

  app.route('/api/:brewId/comments/:postId')
    .get((req, res) => {
      models.Post.findOne({
        where: {
          id: req.params.postId
        },
        include: [
          { model: models.User }
        ]
      }).then((post) => {
        if (!post) {
          return res.status(404).json({post: null, comments: []});
        }

        post.dataValues.username = post.dataValues.User.dataValues.username;
        delete post.dataValues.User;

        return res.json({ post });
      });
    });
};

export default posts;
