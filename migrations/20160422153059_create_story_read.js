exports.up = function(knex, Promise) {
	return knex.schema.createTable('stories_read', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.dateTime('finishedAt').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('stories_read');
};

