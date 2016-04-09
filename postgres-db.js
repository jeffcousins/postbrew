import Sequelize, { STRING } from 'sequelize';
import faker from 'faker';
import _ from 'lodash';

const sequelize = new Sequelize(
  'postbrew',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const Brew = sequelize.define('brew', {
  brewId: {
    type: STRING,
    allowNull: false
  },
  title: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING,
    allowNull: false
  },
  url: {
    type: STRING,
    allowNull: false
  },
  owner: {
    type: STRING
  }
});

const User = sequelize.define('user', {
  username: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

const Post = sequelize.define('post', {
  author: {
    type: STRING,
    allowNull: false
  },
  brew: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: STRING,
    allowNull: false
  }
});

// DB Relationships
// Not accurate right now--just testing out these two models
Brew.hasMany(User);
User.belongsTo(Brew);

sequelize.sync({force: true}).then(() => {
  Brew.create({
    brewId: 'javascript',
    title: 'JavaScript',
    description: 'Everything you want to know about JavaScript',
    url: '/b/javascript'
  });

  Brew.create({
    brewId: 'react',
    title: 'React.js',
    description: 'Build stuff in React.',
    url: '/b/react'
  });

  // Random data for now.
  _.times(10, () => {
    return User.create({
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
  })
});

export default sequelize;
