'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Brews', [
      {
        brew_name: 'javascript',
        title: 'JavaScript',
        description: 'Everything you ever wanted to know about JavaScript.',
        url: '/r/javascript',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'react',
        title: 'React.js',
        description: 'Build stuff in React.',
        url: '/r/react',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'es6',
        title: 'ECMAScript 2015 (6th Edition)',
        description: 'The JavaScript of tomorrow.',
        url: '/r/es6',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'redux',
        title: 'Redux.js',
        description: 'Redux: A predictable state container for JavaScript applications.',
        url: '/r/redux',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'node',
        title: 'Node.js',
        description: 'Learn you some Node.js!',
        url: '/r/node',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'express',
        title: 'Express.js',
        description: 'A sweet application framework for Node.js.',
        url: '/r/express',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'postgres',
        title: 'PostgreSQL',
        description: 'Discuss the SQL elephant in the room.',
        url: '/r/postgres',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'sequelize',
        title: 'Sequelize',
        description: 'An object-relational mapper for SQL databases.',
        url: '/r/postgres',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'webpack',
        title: 'Webpack',
        description: 'Use Webpack to bundle and compile those modules!',
        url: '/r/webpack',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'mocha',
        title: 'Mocha',
        description: 'A flexible testing framework. Or a chocolatey latte.',
        url: '/r/mocha',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'babel',
        title: 'Babel',
        description: 'Complile and write the hippest JavaScript before it\'s mainstream.',
        url: '/r/babel',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'semanticui',
        title: 'Semantic UI',
        description: 'Style your front end with classes that make sense.',
        url: '/r/semanticui',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Brews', null, {});
  }
};
