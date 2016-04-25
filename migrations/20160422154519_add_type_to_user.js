exports.up = function(knex, Promise) {
  knex.schema.table('users', function(t) {
  	t.string('userType', ['teacher', 'admin']).notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
