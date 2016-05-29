'use strict';
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    content: DataTypes.TEXT,
    brew_name: DataTypes.STRING,
    kudos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Post.belongsTo(models.Brew);
        Post.belongsTo(models.User);
      }
    }
  });

  return Post;
};
