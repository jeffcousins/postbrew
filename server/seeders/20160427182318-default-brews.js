'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Brews', [
      {
        brew_name: 'javascript',
        title: 'JavaScript',
        description: 'Everything you ever wanted to know about JavaScript.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'react',
        title: 'React.js',
        description: 'Build stuff in React.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'es6',
        title: 'ECMAScript 2015 (6th Edition)',
        description: 'The JavaScript of tomorrow.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'redux',
        title: 'Redux.js',
        description: 'Redux: A predictable state container for JavaScript applications.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'node',
        title: 'Node.js',
        description: 'Learn you some Node.js!',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'express',
        title: 'Express.js',
        description: 'A sweet application framework for Node.js.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'postgresql',
        title: 'PostgreSQL',
        description: 'Discuss the SQL elephant in the room.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'sequelize',
        title: 'Sequelize',
        description: 'An object-relational mapper for SQL databases.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'webpack',
        title: 'Webpack',
        description: 'Use Webpack to bundle and compile those modules!',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'mocha',
        title: 'Mocha',
        description: 'A flexible testing framework. Or a chocolatey latte.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'babel',
        title: 'Babel',
        description: 'Complile and write the hippest JavaScript before it\'s mainstream.',
        founder: 'jeffcousins',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brew_name: 'semanticui',
        title: 'Semantic UI',
        description: 'Style your front end with classes that make sense.',
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
