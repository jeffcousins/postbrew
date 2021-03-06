import models from '../models';
import jwt from 'jwt-simple';

const auth = {};
let authConfig;

try {
  authConfig = require('./config');
} catch (e) {
  authConfig = {};
}

const SECRET = process.env.PROD_SECRET || authConfig.secret;

const createToken = (user) => {
  const payload = {
    sub: user.id,
    iat: new Date().getTime()
  };

  return jwt.encode(payload, SECRET);
};

auth.signUp = (req, res, next) => {
  const { username, password, firstName, lastName, email } = req.body;

  if (!username || !password || !firstName || !lastName || !email) {
    return res.status(422).json({
      errorMessage: 'Sign-up unsuccessful. Missing required fields.'
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
        errorMessage: 'Username is already in use. Please create a unique username.'
      });
    }

    models.User.create({
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
      kudos: 0
    }).then((user) => {
      res.json({
        token: createToken(user),
        userId: user.dataValues.id
      });
    }).catch((err) => {
      res.json(err);
    });
  }).catch((err) => {
    res.json(err);
  });
};

auth.signIn = (req, res, next) => {
  res.json({
    token: createToken(req.user),
    userId: req.user.dataValues.id
  });
};

export default auth;
