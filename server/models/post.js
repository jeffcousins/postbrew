'use strict';
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    author_id: DataTypes.INTEGER,
    brew_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    url: DataTypes.STRING,
    kudos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      },
      underscored: true
    }
  });
  return Post;
};
