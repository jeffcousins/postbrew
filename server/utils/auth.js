import models from '../models';
const auth = {};

auth.signUp = (req, res, next) => {
  const { username, password, firstName, lastName, email } = req.body;

  if (!username || !password || !firstName || !lastName || !email) {
    return res.status(422).send({
      error: 'Sign-up unsuccessful. Missing required fields.'
    });
  }

  models.User.findOne({
    where: {
      username: username
    }
  })
  .then((existingUser) => {
    if (existingUser) {
      return res.status(422).send({
        error: 'Username is already in use. Please create a unique username.'
      });
    }

    const newUser = models.User.create({
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
      kudos: 0
    }).then((user) => {
      res.send(user);
    });
  });
};

export default auth;
