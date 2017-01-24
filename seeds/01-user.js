var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex.raw('delete from "user"; alter sequence user_id_seq restart with 2')
    .then(function () {
      const users = [{
        id: 1,
        email: 'user@usser.com',
        password: bcrypt.hashSync('password', 1)
      },{
        id: 2,
        email: 'stuff@user.com',
        password: bcrypt.hashSync('alsopassword', 1)
      }]
      return knex('user').insert(users);
    });
};
