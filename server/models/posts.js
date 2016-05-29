'use strict';
module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    content: DataTypes.TEXT,
    kudos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Posts.belongsTo(models.Brew);
        Posts.belongsTo(models.User);
      }
    }
  });
  return Posts;
};