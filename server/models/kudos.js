'use strict';
module.exports = function (sequelize, DataTypes) {
  var Kudos = sequelize.define('Kudos', {
    value: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });

  return Kudos;
};
