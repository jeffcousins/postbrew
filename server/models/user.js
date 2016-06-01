'use strict';
import bcrypt from 'bcrypt-nodejs';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    kudos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        User.hasMany(models.Post);
        User.hasMany(models.Brew);
        User.hasMany(models.Comment);
      }
    },
    instanceMethods: {
      comparePassword (candidatePassword, callback) {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
          if (err) {
            return callback(err);
          }

          callback(null, isMatch);
        });
      }
    }
  });

  User.beforeCreate((user, options, fn) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log('Error while generating bcrypt salt.');
        console.log(err);
        fn(err, null);
        return;
      }

      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          console.log('Error while generating bcrypt hash.');
          console.log(err);
          fn(err, null);
          return;
        }

        user.password = hash;
        fn(null, user);
        return user;
      });
    });
  });

  return User;
};
