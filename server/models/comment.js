'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    kudos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Brew);
        Comment.belongsTo(models.User);
        Comment.belongsTo(models.Post);
        Comment.belongsTo(models.Comment);
        Comment.hasMany(models.Comment);
      }
    }
  });
  return Comment;
};