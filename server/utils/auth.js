import models from '../models';
const auth = {};

auth.signUp = (req, res, next) => {
  const { username, password } = req.body;
  models.User.findOne({
    where: {
      username: username
    }
  })
  .then((user) => {
    res.send(user);
  });
}

export default auth;
