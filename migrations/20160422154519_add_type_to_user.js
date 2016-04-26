exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
  	t.string('userType').notNull().defaultTo('Admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
