'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'jeffcousins',
        password: 'password',
        first_name: 'Jeff',
        last_name: 'Cousins',
        email: 'jeffcousins@me.com',
        kudos: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'SteveHolt',
        password: 'password',
        first_name: 'Steve',
        last_name: 'Holt',
        email: 'steveholt@steveholt.com',
        kudos: 135,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'honestABE',
        password: 'password',
        first_name: 'Abraham',
        last_name: 'Lincoln',
        email: 'honestabe@whitehouse.gov',
        kudos: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'therealmattdamon',
        password: 'password',
        first_name: 'Matt',
        last_name: 'Damon',
        email: 'mattdamon@gmail.com',
        kudos: -147,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'dwigt',
        password: 'password',
        first_name: 'Dwight',
        last_name: 'Schrute',
        email: 'dwight@beetfarm.net',
        kudos: 2301,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'MICHAELSCOTT',
        password: 'password',
        first_name: 'Michael',
        last_name: 'Scott',
        email: 'michaelscott@dundermifflin.com',
        kudos: -8092,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'getify',
        password: 'password',
        first_name: 'Kyle',
        last_name: 'Simpson',
        email: 'getify@makersquare.com',
        kudos: 99997,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'billgates',
        password: 'password',
        first_name: 'Bill',
        last_name: 'Gates',
        email: 'billgates@me.com',
        kudos: 7716,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'TobiasFunke',
        password: 'password',
        first_name: 'Tobias',
        last_name: 'Funke',
        email: 'tobias@funke.com',
        kudos: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
