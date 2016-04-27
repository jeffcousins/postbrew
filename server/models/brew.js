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
        // `brew_id` will be added on Post model
        Brew.hasMany(models.Post);
      },
      underscored: true
    }
  });
  return Brew;
};