'use strict';
module.exports = function(sequelize, DataTypes) {
  var Brew = sequelize.define('Brew', {
    brew_name: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    founder: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Brew;
};