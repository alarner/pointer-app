exports.up = function(knex, Promise) {
	return knex.schema.createTable('pages', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('image').notNull();
		t.text('body').notNull();
		t.integer('storyId')
			.notNull()
			.references('id')
			.inTable('stories');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pages');
};