import models from '../models';
import { auth } from '../utils/utils';

const brews = (app) => {
  app.route('/api/brews')
    .get((req, res) => {
      // Brew.find(function(error, items) {
      //   res.send(items);
      // });
    })
    .post((req, res) => {
      // console.log('Adding brew:', brew);
      // const brew = req.body;
      // const brewItem = new Brew(brew);
      // brewItem.save(function(err, data) {
      //   res.status(300).send();
      // });
    });

  app.route('/api/b/:brewId')
    .get((req, res) => {
      models.Brew.findOne({
        where: {
          brew_name: req.params.brewId
        }
      })
      .then((brew) => {
        res.send(brew);
      });
    });

  app.route('/signup')
    .post(auth.signUp);
};

export default brews;
