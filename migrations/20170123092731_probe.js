exports.up = function(knex, Promise) {
  return knex.schema.createTable('probe', (table) =>{
    table.increments();
    table.text('type').notNullable();
    table.text('placement').notNullable();
    table.text('lights').notNullable();
    table.integer('user_id').unsigned().references('user.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('probe')
};
