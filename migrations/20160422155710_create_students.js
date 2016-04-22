exports.up = function(knex, Promise) {
	return knex.schema.createTable('students', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('firstName').notNull();
		t.string('lastName').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('students');
};
