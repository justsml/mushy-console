exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', (table) => {
      table.increments('id').primary();
      table.text('title');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('team')
};
