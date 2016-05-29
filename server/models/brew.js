'use strict';
module.exports = function (sequelize, DataTypes) {
  var Brew = sequelize.define('Brew', {
    brew_name: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
    // UserId: INTEGER (foreign key)
  }, {
    classMethods: {
      associate: function (models) {
        Brew.hasMany(models.Posts);
        Brew.belongsTo(models.User);
      },
      underscored: true
    }
  });
  return Brew;
};
