import models from '../models';

const brews = (app) => {
  app.route('/api/brews/create')
    .post((req, res) => {
      models.Brew.create(req.body)
        .then((brew) => {
          res.status(300).json(brew);
        });
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
