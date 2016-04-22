exports.up = function(knex, Promise) {
	return knex.schema.createTable('stories', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('title').notNull();
		t.string('author').nullable();
		t.string('coverImage').nullable();
		t.enu('category', ['fable']).nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('stories');
};
