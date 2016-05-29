import models from '../models';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });

const brews = (app) => {
  app.route('/api/brews/create')
    .post(requireAuth, (req, res) => {
      const { brewName, title, description, userId } = req.body;

      if (!brewName || !title || !description || !userId) {
        return res.status(422).json({
          errorMessage: 'Missing required fields and must be signed in.'
        });
      }

      models.Brew.findOne({
        where: {
          brew_name: brewName
        }
      }).then((existingBrew) => {
        if (existingBrew) {
          return res.status(422).send({
            errorMessage: brewName + ' is already in use. ' +
              'Please create a unique brew name.'
          });
        }

        models.User.findOne({
          where: {
            id: userId
          }
        }).then(createBrew);
      });

      function createBrew (user) {
        if (!user) {
          return res.status(404).send({
            errorMessage: 'Could not find user.'
          });
        }

        models.Brew.create({
          brew_name: brewName.toLowerCase(),
          title: title,
          description: description,
          UserId: userId
        }).then((brew) => {
          res.json({
            brew: brew
          });
        });
      }
    });

  app.route('/api/b/:brewId')
    .get((req, res) => {
      models.Brew.findOne({
        where: {
          brew_name: req.params.brewId
        }
      }).then((brew) => {
        res.json(brew);
      });
    });
};

export default brews;
