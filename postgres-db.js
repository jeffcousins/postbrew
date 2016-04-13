import Sequelize, { STRING, INTEGER, TEXT } from 'sequelize';
import slug from 'slug';

const sequelize = new Sequelize(
  'postbrew',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

// -- Model schemas -- //
const Brew = sequelize.define('brew', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  brew_name: {
    type: STRING,
    allowNull: false,
    unique: true
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
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: ['^[a-z]+$', 'i']
    }
  },
  password: {
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
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author_id: {
    type: INTEGER,
    allowNull: false
  },
  brew_id: {
    type: INTEGER,
    allowNull: false
  },
  title: {
    type: STRING,
    allowNull: false
  },
  slug: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: TEXT,
    allowNull: false
  }
}, {
  hooks: {
    beforeValidate (post) {
      post.slug = slug(post.title);
    }
  }
});

const Comment = sequelize.define('comment', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author_id: {
    type: INTEGER,
    allowNull: false
  },
  // parent should be a Post or another Comment
  parent_id: {
    type: INTEGER,
    allowNull: false
  },
  content: {
    type: TEXT,
    allowNull: false
  }
});

sequelize
  .sync({
    force: true,
    logging: console.log
  })
  .then(() => {
    Brew.create({
      brew_name: 'javascript',
      title: 'JavaScript',
      description: 'Everything you want to know about JavaScript',
      url: '/b/javascript',
      owner: 'jeffcousins'
    })
    .catch(err => {
      console.log(err);
    });

    Brew.create({
      brew_name: 'react',
      title: 'React.js',
      description: 'Build stuff in React.',
      url: '/b/react',
      owner: 'jeffcousins'
    })
    .catch(err => {
      console.log(err);
    });

    User.create({
      username: 'jeffcousins',
      password: 'notencrypted',
      email: 'jeffcousins@me.com'
    });

    Post.create({
      author_id: 1,
      brew_id: 2,
      title: 'ayyy lmao slugify my title plz',
      content: 'This message will self-destruct in the near future.'
    })
    .catch(err => {
      console.log(err);
    });
  })
  .catch(err => {
    console.log(err);
  });

export default sequelize;
