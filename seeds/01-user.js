
exports.seed = function(knex, Promise) {
  return knex.raw('delete from "user"; alter sequence user_id_seq restart with 2')
    .then(function () {
      const users = [{
        id: 1,
        email: 'user@usser.com',
        password: 'password'
      },{
        id: 2,
        email: 'stuff@user.com',
        password: 'alsopassword'
      }]
      return knex('user').insert(users);
    });
};
