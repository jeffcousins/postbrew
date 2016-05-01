import models from '../models';

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

  app.route('/api/u/:username')
    .get((req, res) => {
      models.User.findOne({
        where: {
          username: req.params.username
        }
      })
      .then((user) => {
        res.send(user);
      });
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
};

export default users;
