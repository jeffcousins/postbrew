'use strict';
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    author_id: DataTypes.INTEGER,
    brew_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    kudos: DataTypes.INTEGER,
    url: DataTypes.STRING
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
