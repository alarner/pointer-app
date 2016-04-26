exports.up = function(knex, Promise) {
	return knex.schema.createTable('stories_read', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.dateTime('finishedAt').notNull();
		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
		t.integer('studentId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('students')
			.onDelete('CASCADE');
		t.integer('storyId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('stories')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('stories_read');
};
